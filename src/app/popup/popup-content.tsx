import classes from './popup.module.scss';
export const PopupContent = (props: { onClose: () => void }) => {
  return (
    <div className={classes.popup}>
      <h1>Delete comment</h1>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div className={classes.btn_block}>
        <button onClick={props.onClose} className={classes.btn_cancel}>
          No,cancel
        </button>
        <button onClick={props.onClose} className={classes.btn_del}>
          yes,delete
        </button>
      </div>
    </div>
  );
};
