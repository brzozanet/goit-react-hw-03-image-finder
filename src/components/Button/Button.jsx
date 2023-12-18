import css from "./Button.module.css";

export const Button = () => {
  return (
    <div className={css.ButtonContainer}>
      <div className={css.Button}>Load more...</div>
    </div>
  );
};
