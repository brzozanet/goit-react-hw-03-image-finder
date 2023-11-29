// import css from "./App.module.css";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

import { getPhotos } from "../services/pixabayAPI";

export class App extends Component {
  state = {
    photos: [],
  };
  // constructor(props) {
  //   super(props);
  //   this.handleSearch = this.handleSearch.bind(this);
  // }

  handleSearch = async query => {
    try {
      const photos = await getPhotos(query);
      this.setState({
        photos,
      });
      console.log(query);
      console.log(photos);
    } catch (error) {
      console.error(`Wystąpił błąd: ${error}`);
    }
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery data={this.state.photos} />
      </>
    );
  }
}
