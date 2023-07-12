import { Fragment } from 'react';

import classes from './modal.module.scss';
import { createPortal } from 'react-dom';

const Backdrop = (props: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portalElement = document.getElementById('overlays')!;

export const Modal = (props: any) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
