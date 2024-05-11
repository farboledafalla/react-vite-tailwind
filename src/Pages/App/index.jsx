import { useContext } from 'react';

//Rutas
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';

//Páginas
import Home from '../Home';
import { MyAccount } from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

//Contexto
import {
   ShoppingCartProvider,
   initializeLocalStorage,
   ShoppingCartContext,
} from '../../Context';

//Componentes
import Navbar from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

//Estilos
import './App.css';

//Función con las rutas
const AppRoutes = () => {
   const context = useContext(ShoppingCartContext);

   // Account
   const account = localStorage.getItem('account');
   const parsedAccount = JSON.parse(account);

   // Sign Out
   const signOut = localStorage.getItem('sign-out');
   const parsedSignOut = JSON.parse(signOut);

   // Has an account
   const noAccountInLocalStorage = parsedAccount
      ? Object.keys(parsedAccount).length === 0
      : true;
   const noAccountInLocalState = Object.keys(context.account).length === 0;
   const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
   const isUserSignOut = context.signOut || parsedSignOut;

   let routes = useRoutes([
      {
         path: '/',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/my-account',
         element: <MyAccount />,
      },
      {
         path: '/my-orders',
         element: <MyOrders />,
      },
      {
         path: '/my-order',
         element: <MyOrder />,
      },
      {
         path: '/my-orders/last',
         element: <MyOrder />,
      },
      {
         path: '/my-orders/:id',
         element: <MyOrder />,
      },
      {
         path: '/sign-in',
         element: <SignIn />,
      },
      {
         path: '/clothes',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/electronics',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/furnitures',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/toys',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/others',
         element:
            hasUserAnAccount && !isUserSignOut ? (
               <Home />
            ) : (
               <Navigate replace to={'/sign-in'} />
            ),
      },
      {
         path: '/*',
         element: <NotFound />,
      },
   ]);

   return routes;
};

const App = () => {
   // Initialize LocalStorage
   initializeLocalStorage();

   return (
      <ShoppingCartProvider>
         <BrowserRouter>
            <AppRoutes />
            <Navbar />
            <CheckoutSideMenu />
         </BrowserRouter>
      </ShoppingCartProvider>
   );
};

export default App;
