import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Componentes
import { OrderCard } from '../../Components/OrderCard';
import { totalPrice } from '../../Utils';

// Contexto
import { ShoppingCartContext } from '../../Context';

// Iconos
import { XMarkIcon } from '@heroicons/react/24/solid';

import './styles.css';

export const CheckoutSideMenu = () => {
   const context = useContext(ShoppingCartContext);

   const handleDelete = (id) => {
      const filteredProducts = context.cartProducts.filter(
         (product) => product.id !== id
      );
      context.setCartProducts(filteredProducts);
   };

   const handleCheckout = () => {
      const orderToAdd = {
         date: '01.2.2023',
         products: context.cartProducts,
         totalProducts: context.cartProducts.length,
         totalPrice: totalPrice(context.cartProducts),
      };

      context.setOrder([...context.order, orderToAdd]);
      context.setCartProducts([]);
      context.setSearchByTitle('');
   };

   return (
      <aside
         className={`${
            context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
         } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
      >
         <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
               <XMarkIcon
                  className='h-5 w-5 text-black cursor-pointer'
                  onClick={() => context.closeCheckoutSideMenu()}
               />
            </div>
         </div>
         <div className='px-6 overflow-y-scroll flex-1'>
            {context.cartProducts.map((product) => (
               <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                  handleDelete={handleDelete}
               />
            ))}
         </div>
         <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-4'>
               <span className='font-light'>Total:</span>
               <span className='font-medium text-2xl'>
                  ${totalPrice(context.cartProducts)}
               </span>
            </p>
            <Link to='/my-orders/last'>
               <button
                  className='w-full bg-black py-3 text-white rounded-lg'
                  onClick={() => {
                     handleCheckout();
                  }}
               >
                  Checkout
               </button>
            </Link>
         </div>
      </aside>
   );
};
