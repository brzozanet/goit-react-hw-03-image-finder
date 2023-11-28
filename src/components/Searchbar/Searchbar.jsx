import css from "./Searchbar.module.css";
import PropTypes from "prop-types";

export const Searchbar = ({ handleSearch }) => {
  return (
    <header className={css.searchbar}>
      <input
        className={css.input}
        type="text"
        placeholder="Search images and photos"
        onKeyUp={event => {
          if (event.code === "Enter") {
            handleSearch(event.target.value);
          }
        }}
      />
    </header>
  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
