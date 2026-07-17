import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    priceRange: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter((p) => {
      if (filters.category.length && !filters.category.includes(p.category)) return false;
      if (filters.material.length && !filters.material.includes(p.material)) return false;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], material: [], priceRange: null });
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6b635c]">DISCOVER</p>
            <h1 className="serif text-4xl">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#e5e0d8] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden text-sm px-4 py-2 border border-[#e5e0d8]"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="filter-label">Category</p>
                  {(filters.category.length > 0 || filters.material.length > 0) && (
                    <button onClick={clearFilters} className="text-xs text-[#c5a26f]">Clear</button>
                  )}
                </div>
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(cat)}
                      onChange={() => toggleFilter('category', cat)}
                      className="accent-[#c5a26f]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div>
                <p className="filter-label mb-4">Material</p>
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={filters.material.includes(mat)}
                      onChange={() => toggleFilter('material', mat)}
                      className="accent-[#c5a26f]"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              <div>
                <p className="filter-label mb-4">Price</p>
                <div className="space-y-2 text-sm">
                  {[null, [0, 50], [50, 80], [80, 150]].map((range, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === range}
                        onChange={() => setFilters((p) => ({ ...p, priceRange: range }))}
                        className="accent-[#c5a26f]"
                      />
                      {range ? `$${range[0]} – $${range[1]}` : 'All Prices'}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6b635c] mb-6">{filteredProducts.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-image-container bg-[#f5f2ed]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image product-image-primary"
                      />
                      <img
                        src={product.imageSecondary}
                        alt={product.name}
                        className="product-image product-image-secondary"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6b635c] mb-3">${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="quick-add btn btn-primary text-xs py-2.5 px-6"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;