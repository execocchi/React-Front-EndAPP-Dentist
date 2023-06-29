import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import Card from '../Card';
import classes from './Form.module.css';
import GlobalContext from '../../store/global-context';
import Modal from '../Modal';

function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consultation, setConsultation] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(GlobalContext);

  const handleChange = (setState) => (e) => setState(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 5 || !email.includes('@')) {
      setError(true);
      return;
    }
    setMessage(true);

    const timer = () => {
      setName('');
      setEmail('');
      setConsultation('');
      navigate('/');
    };
    setTimeout(() => timer(), 2000);
  };

  const errorText = (
    <div className={ctx.lightTheme ? classes['alter-error'] : classes.error}>
      <h2>Please check the submitted information!</h2>
      <p>Name must be at least 6 characters</p>
      <p>You must enter a valid email(`@`)</p>
    </div>
  );
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 2000);
    }
  });

  return (
    <>
      <Card>
        <form
          className={ctx.lightTheme ? classes['alter-form'] : classes.form}
          onSubmit={handleSubmit}
        >
          <p>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              name='name'
              onChange={handleChange(setName)}
              value={name}
              required
            />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              onChange={handleChange(setEmail)}
              value={email}
              required
            />
          </p>
          <p>
            <label htmlFor='consultation'>Consultation</label>
            <textarea
              id='consultation'
              name='consultation'
              rows='5'
              onChange={handleChange(setConsultation)}
              value={consultation}
              required
            />
          </p>
          <div className={classes.actions}>
            <button type='submit'>Save</button>
          </div>
        </form>
      </Card>
      {message && !error && (
        <Modal
          onClick={() => setMessage(false)}
          title={`Thank you  ${name}`}
          message='We`ll be contacting you soon'
        />
      )}
      {error ? <Card>{errorText}</Card> : undefined}
    </>
  );
}

export default Index;
