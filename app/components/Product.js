import useCartStore from '../store/useCartStore';

const Product = ({ product, isOnCart }) => {
  const { addToCart } = useCartStore();
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <h2 className="text-lg font-bold">
          {product.emoji}
          {product.name}
        </h2>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
      </div>
      <div className="text-right mx-4">
        <input
          disabled={isOnCart}
          className={`border border-gray-500 rounded w-14 text-center ${
            isOnCart ? 'bg-gray-200' : ''
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
        className={`bg-${isOnCart ? 'gray' : 'blue'}-500 hover:bg-${
          isOnCart ? 'gray' : 'blue '
        }-700 text-white font-bold py-2 px-4 rounded`}
        disabled={isOnCart}
        onClick={() => addToCart(product)}
      >
        {isOnCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
