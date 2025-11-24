import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // Filter products whenever searchQuery changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allProducts]);

  return (
    <div>
      <Header onSearchChange={setSearchQuery} />
      <Hero />
      <ProductsGrid products={filteredProducts} />
    </div>
  );
}

export default App;
