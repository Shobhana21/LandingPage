import { useState, useEffect } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions from backend
  const fetchSuggestions = async (q) => {
    if (!q) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/products/search?q=${q}`);
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch suggestions when query changes with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(query);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearchChange(value); // optional callback to filter products grid
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setSuggestions([]);
    onSearchChange(name); // optional: immediately filter products grid
  };

  return (
    <header className="header">
      <div className="logo">ShopEasy</div>

      <div className="search-box" style={{ position: "relative" }}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-dropdown">
            {suggestions.map((product) => (
              <li
                key={product._id}
                onClick={() => handleSuggestionClick(product.name)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="header-icons">
        <FaUser className="icon" title="Account" />
        <FaShoppingCart className="icon" title="Cart" />
      </div>
    </header>
  );
};

export default Header;
