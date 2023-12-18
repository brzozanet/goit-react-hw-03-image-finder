import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import PropTypes from "prop-types";
// import css from "./ImageGallery.module.css";

// export const ImageGallery = () => {
//   return (
//     <ul className={css.gallery}>
//       <li>{JSON.stringify(this.props.data)}</li>
//     </ul>
//   );
// };

export class ImageGallery extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(photo => (
          <ImageGalleryItem key={photo.id} imgSrc={photo.webformatURL} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};