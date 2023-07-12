import { ChangeEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classes from './TextArea.module.scss';

export function TextArea(props: propsType) {
  const [text, setText] = useState(props.value || '');
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    props.onTextInput(event.target.value);
  };

  return (
    <TextareaAutosize
      className={classes.textAreaStyle}
      minRows={5}
      maxRows={8}
      placeholder={props.placeHolderText}
      value={text}
      onChange={handleTextChange}
    />
  );
}
interface propsType {
  placeHolderText?: string;
  value?: string;
  onTextInput: (text: string) => void;
}
