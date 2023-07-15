import classes from './Button.module.scss';
export const Buttton = (props: {
  btnType: string;
  cusomStyle?: any;
  classname?: string;
  onBtnClick: () => void;
}) => {
  function handleClick() {
    props.onBtnClick();
  }
  return (
    <button
      onClick={handleClick}
      style={props.cusomStyle}
      className={`${classes.btnStyle} ${
        props.classname === 'mob_cmnt_btn' ? classes.mob_cmnt_btn : ''
      }`}
    >
      {props.btnType.toUpperCase()}
    </button>
  );
};
