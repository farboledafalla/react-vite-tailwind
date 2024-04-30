import { useContext } from 'react';

import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';

// Contexto
import { ShoppingCartContext } from '../../Context';

const Home = () => {
   const context = useContext(ShoppingCartContext);

   // Limpiar caja de texto

   const renderView = () => {
      return context.filteredItems?.length > 0 ? (
         context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
         ))
      ) : (
         <div>We dont have anything to show</div>
      );
   };

   return (
      <Layout>
         <div className='flex w-80 items-center relative justify-center mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
         </div>
         <input
            className='rounded-lg border border-black w-80 px-4 py-3 mb-4 focus:outline-none'
            type='text'
            placeholder='Search a product'
            value={context.searchByTitle}
            onChange={(event) => context.setSearchByTitle(event.target.value)}
         />
         <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
         </div>
         <ProductDetail />
      </Layout>
   );
};

export default Home;
