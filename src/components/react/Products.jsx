import { updateItem } from "../../store";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Marocchino",
      basePrice: 10,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/marocchino.png",
    },
    {
      id: 2,
      name: "Americano",
      basePrice: 12,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/americano.png",
    },
    {
      id: 3,
      name: "Cappuccino",
      basePrice: 8,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/cappuccino.png",
    },
    {
      id: 4,
      name: "Frappe",
      basePrice: 8.5,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/frappe.png",
    },
    {
      id: 5,
      name: "Mocha",
      basePrice: 11,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/mocha.png",
    },
    {
      id: 6,
      name: "Irish",
      basePrice: 10.5,
      image: "https://ik.imagekit.io/8nyszdblwle/miscellaneous/irish.png",
    },
  ];
  const addToCart = (product) => {
    updateItem(product);
  };
  return (
    <div className="md:my-14 my-6 md:mx-8 mx-4">
      <h2 className="mb-2 text-lg font-bold text-sky-800">React Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 border p-4 rounded">
        {products.map((product, p) => {
          return <ProductCard product={product} addToCart={addToCart} key={p} />;
        })}
      </div>
    </div>
  );
}
