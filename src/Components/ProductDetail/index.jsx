import { useContext } from 'react';

// Contexto
import { ShoppingCartContext } from '../../Context';

// Iconos
import { XMarkIcon } from '@heroicons/react/24/solid';

import './styles.css';

export const ProductDetail = () => {
   const context = useContext(ShoppingCartContext);

   return (
      <aside
         className={`${
            context.isProductDetailOpen ? 'flex' : 'hidden'
         } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
      >
         <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
               <XMarkIcon
                  className='h-5 w-5 text-black cursor-pointer'
                  onClick={() => context.closeProductDetail()}
               />
            </div>
         </div>
      </aside>
   );
};
