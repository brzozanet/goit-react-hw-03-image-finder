import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { getPhotos } from "../services/pixabayAPI";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    errorMessage: "",
    // imagesPerPage: 15,
  };

  handleSearch = async querySearch => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
        errorMessage: "",
      });
      const photos = await getPhotos(querySearch);
      this.setState({
        photos,
      });
      // WARN: console.log
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

  // loadMorePhotos = async query => {
  //   const photos = await getPhotos(query, this.state.imagesPerPage);
  //   this.setState({
  //     photos,
  //   });
  //   return this.setState({ imagesPerPage: this.state.imagesPerPage + 15 });
  // };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.isLoading && <Loader />}
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {!this.state.errorMessage && <ImageGallery data={this.state.photos} />}
        {this.state.photos.length !== 0 && (
          <Button loadMorePhotos={this.loadMorePhotos} />
        )}
      </>
    );
  }
}
