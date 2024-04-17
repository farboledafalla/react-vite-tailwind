import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
   // Shopping Cart - Increment quantity
   const [count, setCount] = useState(0);

   // Open - close
   const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
   // Funciones para modificar el valor de 'isProductDetailOpen'
   const openProductDetail = () => setIsProductDetailOpen(true);
   const closeProductDetail = () => setIsProductDetailOpen(false);

   // ProductDetail - Show product
   const [productToShow, setProductToShow] = useState({});

   // Shopping Cart - Add products to cart
   const [cartProducts, setCartProducts] = useState([]);

   return (
      <ShoppingCartContext.Provider
         value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.object,
};
