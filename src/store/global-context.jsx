/* eslint-disable no-unused-vars */
import React from 'react';

const GlobalContext = React.createContext({
  lightTheme: false,
  fav: '',
  onAddFav: (fav) => {},
  onRemoveFav: (id) => {},
  onChangeTheme: () => {},
});

export default GlobalContext;
