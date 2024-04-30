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

   // Get products filtered
   const [filteredItems, setFilteredItems] = useState([]);

   // Get products by category
   const [searchByCategory, setSearchByCategory] = useState('');

   //Consumir API
   useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
         .then((response) => response.json())
         .then((data) => {
            setItems(data);
         });
   }, []);

   // Filtrar items según searchByTitle
   const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter((item) =>
         item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
   };

   // Filtrar items según searchByCategory
   const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter((item) =>
         item.category.name
            .toLowerCase()
            .includes(searchByCategory.toLowerCase())
      );
   };

   const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
         return filteredItemsByTitle(items, searchByTitle);
      }

      if (searchType === 'BY_CATEGORY') {
         return filteredItemsByCategory(items, searchByCategory);
      }

      if (searchType === 'BY_TITLE_AND_CATEGORY') {
         return filteredItemsByCategory(items, searchByCategory).filter(
            (item) =>
               item.title.toLowerCase().includes(searchByTitle.toLowerCase())
         );
      }

      if (!searchType) {
         return items;
      }
   };
   useEffect(() => {
      if (searchByTitle && !searchByCategory)
         setFilteredItems(
            filterBy('BY_TITLE', items, searchByTitle, searchByCategory)
         );
      if (!searchByTitle && searchByCategory)
         setFilteredItems(
            filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)
         );
      if (searchByTitle && searchByCategory)
         setFilteredItems(
            filterBy(
               'BY_TITLE_AND_CATEGORY',
               items,
               searchByTitle,
               searchByCategory
            )
         );
      if (!searchByTitle && !searchByCategory)
         setFilteredItems(
            filterBy(null, items, searchByTitle, searchByCategory)
         );
   }, [items, searchByTitle, searchByCategory]);

   console.log('filteredItems: ', filteredItems);
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
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.object,
};
