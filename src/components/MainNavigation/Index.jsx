import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import GlobalContext from '../../store/global-context';
import classes from './MainNavigation.module.css';

const Index = () => {
  const ctx = useContext(GlobalContext);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/favs'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Favs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div onClick={ctx.onChangeTheme} className={classes.logo}>
        <img src='/vite.svg' alt='Logo' />
      </div>
    </header>
  );
};

export default Index;
