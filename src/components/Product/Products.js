import Product from "./Product";
import products from "./product.json";

const Products = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-16 mb-14">
        Gift By Categories
      </h1>
      <ul className="grid md:grid-cols-3 p-10 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
