import { createContext } from 'react';
import PropTypes from 'prop-types';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
   return (
      <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.func,
};
