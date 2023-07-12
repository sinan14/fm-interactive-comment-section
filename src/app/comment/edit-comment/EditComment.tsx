import { useState } from 'react';
import { Buttton } from '../button/Button';
import classes from './EditComment.module.scss';
import { TextArea } from '../TextArea/TextArea';

export const EditComment = (props: { text: string }) => {
  const [text, setText] = useState(props.text);
  const onBtnClick = (): void => {
    console.log('btn clicked');
  };
  const handleTextChange = (coment: string) => {
    setText(coment);
  };

  return (
    <div className={classes.editbox_wrapper}>
      <TextArea value={text} onTextInput={handleTextChange} />
      <Buttton
        onBtnClick={onBtnClick}
        cusomStyle={{ alignSelf: 'flex-end' }}
        btnType="update"
      />
    </div>
  );
};
