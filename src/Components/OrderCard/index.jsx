// PropTypes
import PropTypes from 'prop-types';

// Iconos
import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderCard = (props) => {
   const { id, title, imageUrl, price, handleDelete } = props;
   let renderSMarkIcon;

   if (handleDelete) {
      renderSMarkIcon = (
         <XMarkIcon
            onClick={() => handleDelete(id)}
            className='h-5 w-5 text-black cursor-pointer'
         />
      );
   }

   return (
      <div className='flex justify-between items-center mb-3'>
         <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
               <img
                  className='w-full h-full rounded-lg object-cover'
                  src={imageUrl}
                  alt={title}
               />
            </figure>
            <p className='text-sm font-light'>{title}</p>
         </div>
         <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>${price}</p>
            {renderSMarkIcon}
         </div>
      </div>
   );
};

OrderCard.propTypes = {
   id: PropTypes.number,
   title: PropTypes.string,
   imageUrl: PropTypes.array,
   price: PropTypes.number,
   handleDelete: PropTypes.func,
};
