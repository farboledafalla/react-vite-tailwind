// PropTypes
import PropTypes from 'prop-types';

// Iconos
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const OrdersCard = (props) => {
   const { totalPrice, totalProducts } = props;

   return (
      <div className='flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg'>
         <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
               <span className='font-light'>01.02.2023</span>
               <span className='font-light'>{totalProducts} articles</span>
            </p>
            <p className='flex gap-2 items-center'>
               <span className='font-medium text-2xl'>${totalPrice}</span>
               <ChevronRightIcon className='h-5 w-5 text-black cursor-pointer' />
            </p>
         </div>
      </div>
   );
};

OrdersCard.propTypes = {
   totalPrice: PropTypes.number,
   totalProducts: PropTypes.number,
};
