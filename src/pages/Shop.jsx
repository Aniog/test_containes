import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  let filtered = [...products];

  if (selectedCategories.length > 0) {
    filtered = filtered.filter(p => selectedCategories.includes(p.category));
  }
  if (selectedMaterials.length > 0) {
    filtered = filtered.filter(p => selectedMaterials.includes(p.material));
  }
  filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

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
    <div className="pt-20 max-w-[1400px] mx-auto px-6 pb-20">
      <div className="py-12 text-center">
        <div className="text-xs tracking-[0.15em] text-[#8B7E6F]">DISCOVER</div>
        <h1 className="font-serif text-5xl tracking-[-0.01em] mt-2">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="filter-label">CATEGORY</div>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                  <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} className="accent-[#C5A26F]" />
                  {cat}
                </label>
              ))}
            </div>

            <div className="mb-8">
              <div className="filter-label">MATERIAL</div>
              {materials.map(mat => (
                <label key={mat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                  <input type="checkbox" checked={selectedMaterials.includes(mat)} onChange={() => toggleMaterial(mat)} className="accent-[#C5A26F]" />
                  {mat}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label">PRICE RANGE</div>
              <input 
                type="range" 
                min="0" max="120" step="5"
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#C5A26F]"
              />
              <div className="flex justify-between text-xs text-[#8B7E6F] mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E0D8]">
            <div className="text-sm text-[#8B7E6F]">{filtered.length} products</div>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5E0D8] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;