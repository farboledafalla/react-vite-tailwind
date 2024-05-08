import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Iconos
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

// Contexto
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
   // Crear variable para el contexto
   const context = useContext(ShoppingCartContext);

   //Estilos
   const activeStyle = 'underline underline-offset-4';

   // SignOut
   const handleSignOut = () => {
      const stringifiedSignOut = JSON.stringify(true);
      localStorage.setItem('sign-out', stringifiedSignOut);
      context.setSignOut(true);
   };

   return (
      <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
         <ul className='flex items-center gap-3'>
            <li className=' font-semibold text-lg'>
               <NavLink to='/'>Shopi</NavLink>
            </li>
            <li>
               <NavLink
                  to='/'
                  onClick={() => {
                     context.setSearchByCategory('');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  All
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/clothes'
                  onClick={() => {
                     context.setSearchByCategory('ropa');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Clothes
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/electronics'
                  onClick={() => {
                     context.setSearchByCategory('electronics');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Electronics
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/furnitures'
                  onClick={() => {
                     context.setSearchByCategory('furniture');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Furnitures
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/toys'
                  onClick={() => {
                     context.setSearchByCategory('toys');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Toys
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/others'
                  onClick={() => {
                     context.setSearchByCategory('others');
                     context.setSearchByTitle('');
                  }}
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Others
               </NavLink>
            </li>
         </ul>
         <ul className='flex items-center gap-3'>
            <li className=' text-black/50'>franklim.arboleda@gmail.com</li>
            <li>
               <NavLink
                  to='/my-orders'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  My Orders
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/my-account'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  My Account
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/sign-in'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
                  onClick={() => handleSignOut()}
               >
                  Sign Out
               </NavLink>
            </li>
            <li className='flex flex-row justify-between items-center'>
               <ShoppingBagIcon className='h-6 w-6 text-black' />{' '}
               <div>{context.cartProducts.length}</div>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
