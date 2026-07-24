import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = ({ products, onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [products, selectedCategories, selectedMaterials, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter(c => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(updated);
  };

  const toggleMaterial = (mat) => {
    const updated = selectedMaterials.includes(mat)
      ? selectedMaterials.filter(m => m !== mat)
      : [...selectedMaterials, mat];
    setSelectedMaterials(updated);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="text-xs tracking-[0.2em] text-[var(--color-gold)]">DISCOVER</div>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-[var(--color-border)] px-4 py-2 text-sm bg-transparent focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            <div>
              <div className="filter-label">Category</div>
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                  <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} className="accent-[var(--color-gold)]" />
                  {cat}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label">Material</div>
              {materials.map(mat => (
                <label key={mat} className="flex items-center gap-3 mb-3 cursor-pointer text-sm">
                  <input type="checkbox" checked={selectedMaterials.includes(mat)} onChange={() => toggleMaterial(mat)} className="accent-[var(--color-gold)]" />
                  {mat}
                </label>
              ))}
            </div>

            <div>
              <div className="filter-label mb-4">Price Range</div>
              <input 
                type="range" 
                min="0" 
                max="120" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
                className="w-full accent-[var(--color-gold)]" 
              />
              <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <button 
              onClick={() => { setSelectedCategories([]); setSelectedMaterials([]); setPriceRange([0,120]); setSortBy('featured'); }}
              className="text-xs tracking-[0.1em] underline text-[var(--color-text-muted)]"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="text-sm text-[var(--color-text-muted)] mb-6">{filteredProducts.length} products</div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[var(--color-text-muted)]">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;