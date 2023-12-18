import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { getPhotos } from "../services/pixabayAPI";
import { Loader } from "./Loader/Loader";
// import css from "./App.module.css";

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleSearch = this.handleSearch.bind(this);
  //
  // }

  handleSearch = async query => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
      });
      const photos = await getPhotos(query);
      this.setState({
        photos,
      });
      console.log(query);
      console.log(photos);
    } catch (error) {
      console.error(`Wystąpił błąd: ${error}`);
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
        <ImageGallery data={this.state.photos} />
      </>
    );
  }
}
