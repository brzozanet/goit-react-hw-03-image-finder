// import css from "./App.module.css";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  handleSearch = query => {
    console.log(query);
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
