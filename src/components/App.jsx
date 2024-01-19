import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { getPhotos, IMG_PER_PAGE } from "../services/pixabayAPI";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal";

export class App extends Component {
  state = {
    photos: [],
    photosPerPage: IMG_PER_PAGE,
    page: 1,
    isLoading: false,
    isModalVisible: false,
    errorMessage: "",
    querySearch: "",
  };

  handleSearch = async querySearch => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
        errorMessage: "",
        page: 1,
        querySearch,
      });

      const photos = await getPhotos(
        querySearch,
        this.state.page,
        this.state.photosPerPage
      );

      console.log(photos);

      this.setState({
        photos,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleLoadMore = async () => {
    try {
      this.setState(
        prevState => ({
          isLoading: true,
          errorMessage: "",
          page: prevState.page + 1,
        }),

        async () => {
          const morePhotos = await getPhotos(
            this.state.querySearch,
            this.state.page
          );

          this.setState(prevState => ({
            photos: [...prevState.photos, ...morePhotos],
            isLoading: false,
          }));
        }
      );
    } catch (error) {
      this.setState({ errorMessage: error.message, isLoading: false });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  toggleIsModalVisible = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.isLoading && <Loader />}
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {!this.state.errorMessage && (
          <ImageGallery
            data={this.state.photos}
            toggleIsModalVisible={this.toggleIsModalVisible}
          />
        )}
        {this.state.photos.length !== 0 && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {this.state.isModalVisible && (
          <Modal
            largeImageURL={this.state.photos[0]?.largeImageURL}
            tags={this.state.photos[0]?.tags}
            toggleIsModalVisible={this.toggleIsModalVisible}
          />
        )}
      </>
    );
  }
}
