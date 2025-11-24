import ProductCard from "./ProductCard";
import "./ProductsGrid.css";

const ProductsGrid = ({ products }) => {
  return (
    <section className="products-section">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((p) => <ProductCard key={p._id} product={p} />)
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
