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

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return catMatch && matMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-12 text-center border-b border-[#E5DFD4]">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</p>
          <h1 className="font-serif text-5xl tracking-[0.05em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 pt-10">
          {/* Filters Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="filter-label">Category</p>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976F]"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>

              <div>
                <p className="filter-label">Material</p>
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#B8976F]"
                    />
                    <span className="text-sm">{mat}</span>
                  </label>
                ))}
              </div>

              <div>
                <p className="filter-label mb-4">Price Range</p>
                <div className="flex gap-3 items-center text-sm">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-16 border border-[#E5DFD4] px-2 py-1 text-center"
                  />
                  <span className="text-[#6B665F]">to</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                    className="w-16 border border-[#E5DFD4] px-2 py-1 text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD4] px-4 py-2 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-image-container">
                      <img src={product.images.primary} alt={product.name} className="product-image primary" />
                      <img src={product.images.secondary} alt={product.name} className="product-image secondary" />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6B665F] mb-4">${product.price}</p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn btn-gold w-full text-xs py-3"
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