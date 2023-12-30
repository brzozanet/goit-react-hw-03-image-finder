import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { getPhotos } from "../services/pixabayAPI";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    photos: [],
    photosPerPage: 3,
    page: 1,
    isLoading: false,
    errorMessage: "",
    querySearch: "", // Dodajemy pole do przechowywania aktualnego zapytania
  };

  handleSearch = async querySearch => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
        errorMessage: "",
        page: 1,
        querySearch, // Aktualizujemy zapytanie w stanie
      });

      const photos = await getPhotos(
        querySearch,
        this.state.page,
        this.state.photosPerPage
      );

      this.setState({
        photos,
      });

      console.log(querySearch);
      console.log(photos);
      console.log(photos.length);
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
        }),
        async () => {
          const { page, photosPerPage, querySearch } = this.state;
          const nextPage = page + 1;

          const morePhotos = await getPhotos(
            querySearch,
            nextPage,
            photosPerPage
          );

          this.setState(prevState => ({
            photos: [...prevState.photos, ...morePhotos],
            page: nextPage,
            isLoading: false,
          }));

          console.log(morePhotos);
          console.log(morePhotos.length);
        }
      );
    } catch (error) {
      this.setState({ errorMessage: error.message, isLoading: false });
    }
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.isLoading && <Loader />}
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {!this.state.errorMessage && <ImageGallery data={this.state.photos} />}
        {this.state.photos.length !== 0 && (
          <Button
            handleLoadMore={() => this.handleLoadMore(this.state.querySearch)}
          />
        )}
      </>
    );
  }
}
