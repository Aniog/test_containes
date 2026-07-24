import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const allCategories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="pt-20 max-w-[1400px] mx-auto px-6 pb-20">
      <div className="flex items-end justify-between py-12">
        <div>
          <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F]">Discover</div>
          <h1 className="font-serif text-5xl tracking-[-0.01em]">The Collection</h1>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="filter-label">Category</div>
              {allCategories.map(cat => (
                <label key={cat} className="flex items-center gap-2.5 mb-2.5 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#C5A26F]"
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label">Price Range</div>
              <div className="text-sm text-[#5A5A5A]">${priceRange[0]} — ${priceRange[1]}</div>
              <input
                type="range"
                min="0"
                max="120"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#C5A26F] mt-2"
              />
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="text-sm text-[#5A5A5A] mb-6">{filteredProducts.length} products</div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container aspect-[4/3.6] bg-[#E8E4DC] mb-4 overflow-hidden">
                    <img src={product.image1} alt={product.name} className="product-image primary absolute inset-0 w-full h-full object-cover" />
                    <img src={product.image2} alt={product.name} className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0" />
                  </div>
                </Link>
                <div className="px-1">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-name text-sm tracking-[0.12em] mb-1 group-hover:text-[#C5A26F] transition-colors">{product.name}</div>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5A5A5A]">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-xs uppercase tracking-[0.08em] text-[#C5A26F] hover:text-[#0F0F0F] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
