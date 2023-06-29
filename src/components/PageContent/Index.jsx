/* eslint-disable react/prop-types */
import classes from './PageContent.module.css';

function Index({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default Index;
