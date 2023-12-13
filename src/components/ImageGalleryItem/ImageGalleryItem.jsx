import { Component } from "react";
import PropTypes from "prop-types";
// import css from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imgSrc} alt="" />
      </li>
    );
  }
}

// ImageGalleryItem.defaultProps ={
//   imgSrc: "";
// }

ImageGalleryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
