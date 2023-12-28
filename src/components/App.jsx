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
    imagePerPage: 15,
  };

  // constructor(props) {
  //   super(props);
  //   this.handleSearch = this.handleSearch.bind(this);
  // }

  handleSearch = async query => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
        errorMessage: "",
      });
      const photos = await getPhotos(query, this.state.imagePerPage);
      this.setState({
        photos,
      });
      console.log(query);
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

  loadMorePhotos = async query => {
    try {
      const photos = await getPhotos(query, this.state.imagePerPage);
      this.setState({
        photos,
      });
      return this.setState({ imagePerPage: this.state.imagePerPage + 15 });
    } finally {
      this.setState({
        isLoading: false,
      });
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
          <Button loadMorePhotos={this.loadMorePhotos} />
        )}
      </>
    );
  }
}
