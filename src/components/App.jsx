// import css from "./App.module.css";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

import { getPhotos } from "../services/pixabayAPI";

export class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleSearch = this.handleSearch.bind(this);
  // }

  handleSearch = async query => {
    const photos = await getPhotos(query);
    console.log(query);
    console.log(photos);
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery />
      </>
    );
  }
}
