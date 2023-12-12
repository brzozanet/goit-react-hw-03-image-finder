import { Component } from "react";
import css from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {
  render() {
    return (
      <div>
        <p>Photo tags: {this.props.tags}</p>
      </div>
    );
  }
}
