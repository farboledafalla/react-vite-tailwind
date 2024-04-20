import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';

function MyOrder() {
   const context = useContext(ShoppingCartContext);

   return (
      <Layout>
         MyOrder
         <div className='flex flex-col w-80 border border-black p-4 rounded-lg'>
            {/* Traemos la última orden del listado (-1), solo uno [0] */}
            {context.order && context.order.length > 0 ? (
               context.order
                  ?.slice(-1)[0]
                  .products.map((product) => (
                     <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                     />
                  ))
            ) : (
               <p>No hay productos en la orden</p>
            )}
         </div>
      </Layout>
   );
}

export default MyOrder;
