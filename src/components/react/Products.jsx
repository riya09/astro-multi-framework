import ProductCard from "./ProductCard";


export default function Products() {
  const products = [
    {
      id: 1,
      name: "Sneaker",
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      name: "T-Shirt",
      quantity: 1,
      price: 12,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, p) => {
        return <ProductCard product={product} key={p} />;
      })}
    </div>
  );
}
