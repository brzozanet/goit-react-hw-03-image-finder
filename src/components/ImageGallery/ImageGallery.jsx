// import css from "./ImageGallery.module.css";
import { Component } from "react";

// export const ImageGallery = () => {
//   return (
//     <ul className={css.gallery}>
//       <li>{JSON.stringify(this.props.data)}</li>
//     </ul>
//   );
// };

export class ImageGallery extends Component {
  render() {
    return <div>{this.props.data}</div>;
  }
}
