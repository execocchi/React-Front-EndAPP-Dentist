/* eslint-disable react/prop-types */

import classes from './Modal.module.css';

const Index = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onClick}>Okay</button>
        </footer>
      </div>
    </>
  );
};

export default Index;
