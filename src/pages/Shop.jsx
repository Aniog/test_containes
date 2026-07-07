import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter(p => {
      const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      return catMatch && priceMatch && matMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleCategory = (cat) => {
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter(c => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCats);
  };

  const toggleMaterial = (mat) => {
    const newMats = selectedMaterials.includes(mat)
      ? selectedMaterials.filter(m => m !== mat)
      : [...selectedMaterials, mat];
    setSelectedMaterials(newMats);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="py-12 text-center border-b border-[#e5e0d8]">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">Discover</span>
          <h1 className="serif text-5xl mt-2">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
              {/* Categories */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#8b7355]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8b7355]"
                  />
                  <div className="flex justify-between text-xs text-[#6b635e] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-3">
                  {['Gold', 'Silver'].map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8b7355]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([0, 120]);
                }}
                className="text-xs tracking-[0.08em] underline text-[#6b635e]"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-[#6b635e]">{filteredProducts.length} pieces</span>
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm tracking-[0.04em] cursor-pointer focus:outline-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A–Z</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-[#6b635e]">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
