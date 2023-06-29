/* eslint-disable react/prop-types */
import { useContext } from 'react';
import GlobalContext from '../../store/global-context';

import classes from './Card.module.css';

const Index = (props) => {
  const ctx = useContext(GlobalContext);

  return (
    <div
      className={`${ctx.lightTheme ? classes['alter-card'] : classes.card} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
};

export default Index;
