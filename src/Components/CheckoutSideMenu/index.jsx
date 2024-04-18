import { useContext } from 'react';

// Componentes
import { OrderCard } from '../../Components/OrderCard';

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
         <div className='px-6 overflow-y-scroll'>
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
      </aside>
   );
};
