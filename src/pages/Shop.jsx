import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPrice !== 'all') {
      if (selectedPrice === 'under50') {
        result = result.filter(p => p.price < 50);
      } else if (selectedPrice === '50to80') {
        result = result.filter(p => p.price >= 50 && p.price <= 80);
      } else if (selectedPrice === 'over80') {
        result = result.filter(p => p.price > 80);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  return (
    <div className="shop-page">
      {/* Header */}
      <div className="shop-header">
        <h1>THE COLLECTION</h1>
        <p className="body-text mt-2">Demi-fine gold jewelry, crafted for everyday elegance.</p>
      </div>

      <div className="shop-content">
        {/* Filters Sidebar */}
        <aside className="filters">
          <div className="filter-group">
            <h4>CATEGORY</h4>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-option ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4>PRICE</h4>
            {[
              { value: 'all', label: 'All Prices' },
              { value: 'under50', label: 'Under $50' },
              { value: '50to80', label: '$50 – $80' },
              { value: 'over80', label: 'Over $80' },
            ].map((p) => (
              <button
                key={p.value}
                className={`filter-option ${selectedPrice === p.value ? 'active' : ''}`}
                onClick={() => setSelectedPrice(p.value)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4>MATERIAL</h4>
            <button className="filter-option active">18K Gold Plated</button>
            <button className="filter-option">Hypoallergenic Brass</button>
          </div>

          <button 
            className="text-xs underline mt-4"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPrice('all');
              setSortBy('featured');
              setSearchParams({});
            }}
          >
            CLEAR ALL FILTERS
          </button>
        </aside>

        {/* Products */}
        <div>
          {/* Sort Bar */}
          <div className="sort-bar">
            <span className="text-sm text-muted">
              {filteredProducts.length} PRODUCTS
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted hidden sm:inline">SORT BY</span>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No products match your filters.</p>
              <button 
                className="btn btn-ghost mt-4"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPrice('all');
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            <div>
              <div className="footer-logo">VELMORA</div>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <Link to="/shop">All Jewelry</Link>
              <Link to="/shop?category=earrings">Earrings</Link>
              <Link to="/shop?category=necklaces">Necklaces</Link>
              <Link to="/shop?category=huggies">Huggies</Link>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">Care Guide</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">Our Story</Link>
              <Link to="/journal">Journal</Link>
            </div>
          </div>
          <div className="divider my-8" />
          <div className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
