/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import { FAVS } from '../utils/constants';
import GlobalContext from './global-context';

const getFavFromStorage = () => {
  const localData = localStorage.getItem(FAVS);
  return JSON.parse(localData) || [];
};

const setFavInStorage = (fav) =>
  localStorage.setItem(FAVS, JSON.stringify(fav));

const GlobalProvider = (props) => {
  const [lightTheme, setLightTheme] = useState(false);
  const [fav, setFav] = useState(getFavFromStorage());

  useEffect(() => {
    setFavInStorage(fav);
  }, [fav]);

  const addFav = (favorite) => {
    setFav((prevState) => [...prevState, favorite]);
  };

  const removeFav = (id) => {
    const filteredFavs = fav.filter((f) => f.id !== id);
    setFav(filteredFavs);
  };

  const changeThemeHandler = () => {
    setLightTheme(!lightTheme);
  };

  const globalContext = {
    lightTheme,
    fav,
    onAddFav: addFav,
    onRemoveFav: removeFav,
    onChangeTheme: changeThemeHandler,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
