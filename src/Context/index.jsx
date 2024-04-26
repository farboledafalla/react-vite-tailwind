import { createContext, useEffect, useState } from 'react';
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

   // Shopping Cart - Order
   const [order, setOrder] = useState([]);

   // Get products
   const [items, setItems] = useState(null);

   // Get products by title
   const [searchByTitle, setSearchByTitle] = useState('');
   console.log('searchByTitle: ', searchByTitle);

   //Consumir API
   useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
         .then((response) => response.json())
         .then((data) => {
            setItems(data);
         });
   }, []);

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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.object,
};
