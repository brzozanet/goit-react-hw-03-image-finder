import css from "./Button.module.css";

export const Button = ({ handleLoadMore }) => {
  return (
    <div className={css.ButtonContainer}>
      <div className={css.Button} onClick={handleLoadMore}>
        Load more...
      </div>
    </div>
  );
};
