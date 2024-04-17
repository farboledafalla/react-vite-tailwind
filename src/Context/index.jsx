import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
   // Shopping Cart - Increment quantity
   const [count, setCount] = useState(0);

   // Product Detail - Open/close
   const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
   const openProductDetail = () => setIsProductDetailOpen(true);
   const closeProductDetail = () => setIsProductDetailOpen(false);

   // Checkout Side Menu - Open/close
   const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
   const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
   const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

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
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.object,
};
