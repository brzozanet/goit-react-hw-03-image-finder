import { Component } from "react";
// import PropTypes from "prop-types";
import css from "./Modal.module.css";

export class Modal extends Component {
  render() {
    return (
      <div className={css.overlay} onClick={this.props.toggleIsModalVisible}>
        <div className={css.modal}>
          modal test
          <img
            src={this.props.largeImageURL}
            title={this.props.tags}
            alt={this.props.tags}
          />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
