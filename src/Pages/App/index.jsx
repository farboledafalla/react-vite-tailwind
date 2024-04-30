//Rutas
import { useRoutes, BrowserRouter } from 'react-router-dom';

//Páginas
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

//Contexto
import { ShoppingCartProvider } from '../../Context';

//Componentes
import Navbar from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

//Estilos
import './App.css';

//Función con las rutas
const AppRoutes = () => {
   let routes = useRoutes([
      {
         path: '/',
         element: <Home />,
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
         element: <Home />,
      },
      {
         path: '/electronics',
         element: <Home />,
      },
      {
         path: '/furniture',
         element: <Home />,
      },
      {
         path: '/toys',
         element: <Home />,
      },
      {
         path: '/others',
         element: <Home />,
      },
      {
         path: '/*',
         element: <NotFound />,
      },
   ]);

   return routes;
};

const App = () => {
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
