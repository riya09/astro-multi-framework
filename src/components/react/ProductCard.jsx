export default function ({ product, addToCart }) {
  const addProduct = () => {
    addToCart(product);
  }
  return (
    <div className="relative w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 w-100 overflow-hidden rounded bg-slate-300 p-7 flex justify-center"
      >
        <img
          src={product.image}
          alt="product image"
          width="150"
          height="150"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <div className="flex justify-between items-center mb-4 gap-2">
          <h5 className="text-xl tracking-tight text-slate-700">
            {product.name}
          </h5>
          <p className="text-2xl font-bold text-slate-600">${product.basePrice}</p>
        </div>
        <button
          onClick={addProduct}
          className="flex items-center justify-center w-full rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-600 outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}
