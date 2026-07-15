import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const toggleFilter = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter(v => v !== value));
    } else {
      setter([...list, value]);
    }
  };

  let filtered = products.filter(p => {
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return catMatch && matMatch && priceMatch;
  });

  if (sortBy === 'price-low') filtered.sort((a,b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a,b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));

  return (
    <div className="pt-20 pb-20 max-w-[1400px] mx-auto px-6">
      <div className="mb-10">
        <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-2">DISCOVER</div>
        <h1 className="font-serif text-5xl tracking-[-0.01em]">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="filter-label">Category</div>
              {categories.map(c => (
                <label key={c} className="flex items-center gap-2.5 text-sm py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedCategories.includes(c)} onChange={() => toggleFilter(c, selectedCategories, setSelectedCategories)} className="accent-[#1C1C1C]" />
                  {c}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label">Material</div>
              {materials.map(m => (
                <label key={m} className="flex items-center gap-2.5 text-sm py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedMaterials.includes(m)} onChange={() => toggleFilter(m, selectedMaterials, setSelectedMaterials)} className="accent-[#1C1C1C]" />
                  {m}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label mb-3">Price Range</div>
              <input type="range" min="30" max="120" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full accent-[#1C1C1C]" />
              <div className="flex justify-between text-xs text-[#8B8178] mt-1"><span>$30</span><span>${priceRange[1]}</span></div>
            </div>

            <button onClick={() => { setSelectedCategories([]); setSelectedMaterials([]); setPriceRange([0,120]); }} className="text-xs tracking-[0.1em] text-[#BFA46F] hover:text-[#1C1C1C]">Clear Filters</button>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5E2DC]">
            <div className="text-sm text-[#8B8178]">{filtered.length} products</div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm border border-[#E5E2DC] px-4 py-2 bg-white focus:outline-none">
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-[#8B8178]">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;