import { useState } from 'react';
import { TextArea } from '../TextArea/TextArea';
import { Buttton } from '../button/Button';
import myPic from './../../../assets/images/avatars/image-juliusomo.png';
import classes from './text-box.module.scss';
export function TextBox(props: any) {
  const onBtnClick = (): void => {
    console.log('btn clicked');
  };
  const [newComment, setNewComment] = useState('');
  const handleNewComment = (cmnt: string) => {
    setNewComment(cmnt);
  };

  return (
    <div
      className={`
      ${classes.textBoxStyle} ${props.level ? classes.v_line : null}`}
      style={{
        marginLeft: `${props.level ? props.level * 8 + 'rem' : null}`,
      }}
    >
      <img className={classes.avatarStyle} src={myPic} alt="my avatar" />

      <TextArea
        placeHolderText="Add a comment ..."
        onTextInput={handleNewComment}
      />
      <Buttton classname='mob_cmnt_btn' onBtnClick={onBtnClick} btnType={props.btnType} />
    </div>
  );
}
