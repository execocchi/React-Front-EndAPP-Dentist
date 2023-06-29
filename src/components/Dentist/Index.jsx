/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import classes from './Dentist.module.css';

const Index = ({ data }) => {
  return (
    <article className={classes.dentist}>
      <img src='/images/doctor.jpg' alt='Doctor' />
      <h1>{data.name}</h1>
      <h2>Email:{data.email}</h2>
      <h2>Phone:{data.phone}</h2>
      <h2>Web:{data.website}</h2>
      <menu className={classes.actions}>
        <Link className={classes.button} to='/'>
          Back to home
        </Link>
      </menu>
    </article>
  );
};
export default Index;
