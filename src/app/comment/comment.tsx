import { useState } from 'react';

import { CommentObj, User } from './../app';
import { UserStrip } from './User-strip';
import classes from './comment.module.scss';
import { EditComment } from './edit-comment/EditComment';
import { TextBox } from './text-box/Text-box';
import { Vote } from './vote/vote';
interface propType {
  comment: CommentObj;
  myData: User;
  level: number;
  onClickDelete: () => void;
}
export const Comment = (props: propType) => {
  const { content, createdAt, score, replies, replyingTo } =
    props?.comment || {};

  const [showReplyBox, setshowReplyBox] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const onClickReplyBtn = () => {
    setshowReplyBox(!showReplyBox);
  };
  const onClickEditBtn = () => {
    setShowEditBox(!showEditBox);
  };
  const onClickDelete = () => {
    props.onClickDelete();
  };

  return (
    <>
      <div
        className={`${classes.comment_block} ${
          props.level ? classes.v_line : null
        }`}
        style={{
          marginLeft: `${
            props.level
              ? props.level * (window.outerWidth > 600 ? 8 : 3.2) + 'rem'
              : null
          }`,
        }}
      >
        <Vote score={score} />
        <div className={classes.main_block}>
          <UserStrip
            username={props.comment?.user?.username}
            png={props.comment?.user?.image?.png}
            createdAt={createdAt}
            myData={props.myData}
            onClickEditBtn={onClickEditBtn}
            onClickReplyBtn={onClickReplyBtn}
            onClickDelete={onClickDelete}
          />
          {!showEditBox ? (
            <p className={classes.comment_text}>
              {replyingTo && <span>{'@' + replyingTo + ' '}</span>}

              {content}
            </p>
          ) : (
            <EditComment
              text={replyingTo ? '@' + replyingTo + ' ' + content : content}
            />
          )}
        </div>
      </div>
      {showReplyBox && <TextBox level={props.level} btnType="reply" />}
      {replies?.map((reply: CommentObj) => (
        <Comment
          myData={props.myData}
          key={reply.id}
          comment={reply}
          level={props.level + 1}
          onClickDelete={onClickDelete}
        />
      ))}
    </>
  );
};
