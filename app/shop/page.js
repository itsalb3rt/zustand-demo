'use client';
import useCartStore from '../store/useCartStore';
import products from '../products.json';
import Product from '../components/shop/Product';
import Cart from '../components/shop/Cart';
import { MagicMotion } from 'react-magic-motion';

const ShopPage = () => {
  const { cart } = useCartStore();

  const isOnCart = (product) => {
    return cart.some((p) => p.id === product.id);
  };

  return (
    <MagicMotion>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-96 p-4">
          <h1 className="text-2xl font-bold mb-4">🏬 Products</h1>
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center mb-2"
              >
                <Product product={product} isOnCart={isOnCart(product)} />
              </li>
            ))}
          </ul>
          <p className="italic underline">
            Buy more than $100 and get 10% off!{' '}
          </p>
        </div>
        <div className="md:w-1/4 p-4">
          <Cart />
        </div>
      </div>
    </MagicMotion>
  );
};

export default ShopPage;
