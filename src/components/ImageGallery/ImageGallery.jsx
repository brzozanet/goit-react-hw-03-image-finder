import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

export class ImageGallery extends Component {
  render() {
    const imageContent = (
      <ul className={css.ImageGallery}>
        {this.props.data.map(photo => (
          <ImageGalleryItem
            key={photo.id}
            imgSrc={photo.webformatURL}
            tags={photo.tags}
          />
        ))}
      </ul>
    );
    return (
      <>
        {this.props.data.length === 0 ? <h3>No images found</h3> : imageContent}
      </>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
