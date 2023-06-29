import { useContext } from 'react';

import classes from './FavList.module.css';
import GlobalContext from '../../store/global-context';
import Card from '../Card';
import PageContent from '../PageContent';

const Index = () => {
  const ctx = useContext(GlobalContext);

  const removeHandler = (id) => ctx.onRemoveFav(id);

  return (
    <>
      <div className={classes.dentists}>
        {ctx.fav.length > 0 && <h1>Favourites</h1>}
        {!ctx.fav.length ? (
          <PageContent title='No favs added'>
            Check all the specialists, and add whichever you want to your favs
            page
          </PageContent>
        ) : (
          ctx.fav.map((f) => (
            <div key={f.id}>
              <Card
                className={
                  ctx.lightTheme ? classes['alter-item'] : classes.item
                }
              >
                <div className={classes.content}>
                  <img src='./images/doctor.jpg' alt='' />
                  <h2>{f.name}</h2>
                  <h3>{f.email}</h3>
                  <h3>{f.phone}</h3>
                </div>
              </Card>
              <div className={classes.actions}>
                <button onClick={() => removeHandler(f.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Index;
