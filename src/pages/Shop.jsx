import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  let filtered = products.filter(p => {
    const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return catMatch && priceMatch;
  });

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 pb-20">
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Filters */}
        <aside className="w-full md:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="filter-label">Category</div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block text-sm py-1.5 ${selectedCategory === cat ? 'text-[#B8976F] font-medium' : 'text-[#6B665F] hover:text-[#2C2825]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="filter-label">Price Range</div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-[#B8976F]"
              />
              <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <div className="filter-label">Material</div>
              <div className="text-sm text-[#6B665F]">18K Gold Plated</div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-[#6B665F]">{filtered.length} products</p>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filtered.map(product => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="product-image-container aspect-[4/3.6] mb-4 relative">
                    <img src={product.image} alt={product.name} className="product-image absolute inset-0 w-full h-full object-cover" />
                    <img src={product.imageSecondary} alt={product.name} className="product-image-secondary absolute inset-0 w-full h-full object-cover" />
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="quick-add btn-primary text-xs py-2.5 px-6"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                  <p className="text-[#6B665F] text-sm">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}