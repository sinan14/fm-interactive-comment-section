import { User } from '../app';
import replyIcon from './../../assets/images/icon-reply.svg';
import deleteIcon from './../../assets/images/icon-delete.svg';
import editIcon from './../../assets/images/icon-edit.svg';
import classes from './user.module.scss';
import amyrobson from '../../assets/images/avatars/image-amyrobson.png';
import juliusomo from '../../assets/images/avatars/image-juliusomo.png';
import maxblagun from '../../assets/images/avatars/image-maxblagun.png';
import ramsesmiron from '../../assets/images/avatars/image-ramsesmiron.png';
import { useEffect, useState } from 'react';

export const UserStrip = (props: propsType) => {
  const [userImg, setUserImg] = useState('');
  useEffect(() => {
    const png = props.png;
    if (png.indexOf('amy')) {
      setUserImg(amyrobson);
    } else if (png.indexOf('jul')) {
      setUserImg(juliusomo);
    } else if (png.indexOf('max')) {
      setUserImg(maxblagun);
    } else {
      setUserImg(ramsesmiron);
    }
  }, []);

  return (
    <div className={classes.user_block}>
      <img className={classes.user_img} src={userImg} alt={props.username} />
      <span className={classes.user_name}>{props.username}</span>
      {props.myData.username === props.username && (
        <span className={classes.my_name}>you</span>
      )}
      <span className={classes.reply_time}>{props.createdAt}</span>
      {props.myData.username !== props.username ? (
        <span
          className={classes.reply_icon_box}
          onClick={props.onClickReplyBtn}
        >
          <img src={replyIcon} alt="reply icon" />
          <span>Reply</span>
        </span>
      ) : (
        <span
          className={classes.reply_icon_box + ' ' + classes['del__edit-box']}
        >
          <span onClick={props.onClickDelete}>
            <img src={deleteIcon} alt="delete icon" />
            <span>Delete</span>
          </span>
          <span onClick={props.onClickEditBtn}>
            <img src={editIcon} alt="edit icon" />
            <span>Edit</span>
          </span>
        </span>
      )}
    </div>
  );
};
interface propsType {
  username: string;
  png: string;
  myData: User;
  createdAt: string;
  onClickEditBtn: () => void;
  onClickReplyBtn: () => void;
  onClickDelete: () => void;
}
