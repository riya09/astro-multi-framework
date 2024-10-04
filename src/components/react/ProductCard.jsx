import { updateItem } from "../../store";
//
export default function ({ product }) {
  const addToCart = () => {
    updateItem(product);
  }
  return (
    <div className="rounded overflow-hidden shadow-lg p-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">Price: ${product.price}</p>
      <button onClick={addToCart}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
