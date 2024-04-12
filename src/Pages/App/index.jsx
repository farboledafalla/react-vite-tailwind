//Páginas
import Home from '../Home';
import MyAccount from '../Home';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

import './App.css';

function App() {
   return (
      <div className=' bg-green-300'>
         <Home />
         <MyAccount />
         <MyOrders />
         <MyOrder />
         <NotFound />
         <SignIn />
      </div>
   );
}

export default App;
