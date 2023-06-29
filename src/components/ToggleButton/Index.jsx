/* eslint-disable react/prop-types */
import { useState } from 'react';

import classes from './ToggleButton.module.css';

const Index = ({ isFavorite, onAddFavorite, onRemoveFavorite, dentist }) => {
  const [isFav, setIsFav] = useState(isFavorite);

  const toggleButtonHandler = () => {
    if (isFav) {
      setIsFav(false);
      onRemoveFavorite(dentist.id);
    } else {
      setIsFav(true);
      onAddFavorite(dentist);
    }
  };

  return (
    <div className={classes.actions}>
      <button onClick={toggleButtonHandler}>{isFav ? 'Remove' : 'Add'}</button>
    </div>
  );
};

export default Index;
