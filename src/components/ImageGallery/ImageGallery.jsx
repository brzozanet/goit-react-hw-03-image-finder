// import css from "./ImageGallery.module.css";
import { Component } from "react";
import PropTypes from "prop-types";

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
      <div>
        {this.props.data.map(photo => (
          <div>{photo.webformatURL}</div>
        ))}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.string.isRequired,
};
