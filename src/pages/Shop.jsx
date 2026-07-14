import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import { products, categories } from '../data/products';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">CATEGORY</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#8B7355]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">PRICE RANGE</p>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-xs text-[#6B6058] mt-1">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#6B6058]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="input w-auto text-sm py-2 pr-8"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#6B6058]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

export default Shop;