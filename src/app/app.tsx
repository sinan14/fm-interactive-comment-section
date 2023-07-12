// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import classes from './app.module.scss';
import dataJson from './../assets/data.json';
import { Comment } from './comment/comment';
import { TextBox } from './comment/text-box/Text-box';
import { Modal } from './modal/modal';
import { PopupContent } from './popup/popup-content';
export function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<jsonObj>();
  const [myData, setMyData] = useState<User>({
    username: '',
    image: { png: '', webp: '' },
  });
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(dataJson));
    setData(data);
    setMyData(data.currentUser);
  }, []);
  const onClickDelete = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <PopupContent onClose={onCloseModal} />
        </Modal>
      )}
      <div className={classes.container}>
        <div className="comment_list">
          {data?.comments?.map((comment: CommentObj) => (
            <Comment
              myData={myData}
              key={comment.id}
              comment={comment}
              level={0}
              onClickDelete={onClickDelete}
            />
          ))}
        </div>
        <TextBox btnType="send" />
      </div>
    </>
  );
}
export interface imgObj {
  png: string;
  webp: string;
}
export interface User {
  username: string;
  image: imgObj;
}
export interface CommentObj {
  content: string;
  score: number;
  user: User;
  createdAt: string;
  id: number;
  replyingTo?: string;
  replies: CommentObj[];
}
export interface jsonObj {
  comments: CommentObj[];
  currentUser: User;
}
