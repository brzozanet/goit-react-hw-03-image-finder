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
    errorMessage: "",
  };

  // constructor(props) {
  //   super(props);
  //   this.handleSearch = this.handleSearch.bind(this);
  // }

  // componentDidMount() {
  //   this.handleSearch("random");
  // }

  handleSearch = async query => {
    try {
      this.setState({
        isLoading: true,
        photos: [],
        errorMessage: "",
      });
      const photos = await getPhotos(query);
      this.setState({
        photos,
      });
      console.log(query);
      console.log(photos);
    } catch (error) {
      this.setState({ errorMessage: error.message });
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
      </>
    );
  }
}
