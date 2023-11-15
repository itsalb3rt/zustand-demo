'use client';
import { useEffect, useState } from 'react';
import useCartStore from '../store/useCartStore';
import products from '../products.json';

const ShopPage = () => {
  const { cart, addToCart, removeFromCart, checkout } = useCartStore();
  const [appliedDiscount, setAppliedDiscount] = useState(false);

  useEffect(() => {
    const total = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    if (total > 100 && !appliedDiscount) {
      setAppliedDiscount(true);
    } else if (total <= 100 && appliedDiscount) {
      setAppliedDiscount(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const cartTotal = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const totalWithDiscount = cartTotal * 0.9;

  const isOnCart = (product) => {
    return cart.some((p) => p.id === product.id);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="md:w-1/4 p-4">
        <h1 className="text-2xl font-bold mb-4">🏬 Products</h1>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <div>
                <h2 className="text-lg font-bold">
                  {product.emoji}
                  {product.name}
                </h2>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <input
                  disabled={isOnCart(product)}
                  className={`border border-gray-500 rounded w-12 text-center ${
                    isOnCart(product) ? 'bg-gray-200' : ''
                  }`}
                  type="number"
                  min="1"
                  defaultValue="1"
                  onChange={(event) => {
                    product.quantity = Number(event.target.value);
                  }}
                />
              </div>
              <button
                className={`bg-${
                  isOnCart(product) ? 'gray' : 'blue'
                }-500 hover:bg-${
                  isOnCart(product) ? 'gray' : 'blue '
                }-700 text-white font-bold py-2 px-4 rounded`}
                disabled={isOnCart(product)}
                onClick={() => addToCart(product)}
              >
                {isOnCart(product) ? 'In Cart' : 'Add to Cart'}
              </button>
            </li>
          ))}
        </ul>
        <p className="italic underline">Buy more than $100 and get 10% off! </p>
      </div>
      <div className="md:w-1/4 p-4">
        <div>
          <h2 className="text-lg font-bold mb-4">🛒 Cart</h2>
          <ul>
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <h3 className="text-md font-bold">{product.name}</h3>
                  <p className="text-gray-500">
                    ${product.price.toFixed(2)} x {product.quantity}= $
                    {(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-md font-bold">Total:</h3>

            <div>
              {appliedDiscount && (
                <p className="text-green-500">
                  Discount of ${(cartTotal * 0.1).toFixed(2)} applied!
                </p>
              )}
            </div>
            <p className="text-gray-500">
              $
              {appliedDiscount
                ? totalWithDiscount.toFixed(2)
                : cartTotal.toFixed(2)}
            </p>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
