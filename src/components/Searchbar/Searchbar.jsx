import css from "./Searchbar.module.css";

export const Searchbar = () => {
  return (
    <header className={css.searchbar}>
      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <span className={css["button-label"]}>Search</span>
        </button>
      </form>
    </header>
  );
};
