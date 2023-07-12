import classes from './Button.module.scss';
export const Buttton = (props: {
  btnType: string;
  cusomStyle?: any;
  onBtnClick: () => void;
}) => {
  function handleClick() {
    props.onBtnClick();
  }
  return (
    <button
      onClick={handleClick}
      style={props.cusomStyle}
      className={classes.btnStyle}
    >
      {props.btnType.toUpperCase()}
    </button>
  );
};
