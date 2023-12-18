import css from "./Button.module.css";

export const Button = ({ loadMorePhotos }) => {
  return (
    <div className={css.ButtonContainer}>
      <div className={css.Button} onClick={loadMorePhotos}>
        Load more...
      </div>
    </div>
  );
};
