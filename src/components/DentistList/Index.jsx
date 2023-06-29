/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './DentistList.module.css';
import Card from '../Card';
import ToggleButton from '../ToggleButton';
import GlobalContext from '../../store/global-context';

const Index = (props) => {
  const ctx = useContext(GlobalContext);

  const addFavHandler = (dentist) => {
    const existingFavIndex = ctx.fav.findIndex((f) => f.id == dentist.id);
    const existingFav = ctx.fav[existingFavIndex];
    if (!existingFav) {
      ctx.onAddFav({
        id: dentist.id,
        name: dentist.name,
        email: dentist.email,
        phone: dentist.phone,
      });
    }
  };

  const removeFavHandler = (id) => {
    ctx.onRemoveFav(id);
  };

  return (
    <div className={classes.dentists}>
      <h1>Dentists</h1>
      <ul className={classes.list}>
        {props.data.map((dentist) => (
          <div key={dentist.id}>
            <Card
              className={ctx.lightTheme ? classes['alter-item'] : classes.item}
            >
              <Link to={`/dentist/${dentist.id}`}>
                <div className={classes.content}>
                  <img src='./images/doctor.jpg' alt='' />
                  <h2>{dentist.name}</h2>
                  <h3>{dentist.username}</h3>
                </div>
              </Link>
            </Card>

            <ToggleButton
              dentist={dentist}
              onAddFavorite={addFavHandler}
              onRemoveFavorite={removeFavHandler}
              isFavorite={ctx.fav.some(
                (favorite) => favorite.id === dentist.id
              )}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Index;
