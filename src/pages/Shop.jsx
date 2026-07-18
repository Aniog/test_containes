import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, priceRange, selectedMaterials, sortBy]);

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
        <div className="py-12 text-center border-b border-[#E5DFD3]">
          <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">Discover</span>
          <h1 className="heading-serif text-5xl mt-3">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976E]"
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
                    className="w-full accent-[#B8976E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B8976E]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 120]);
                  setSelectedMaterials([]);
                }}
                className="text-xs tracking-[0.1em] uppercase text-[#6B665F] hover:text-[#2C2823]"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DFD3]">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6B665F]">Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F]">No products match your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 120]);
                    setSelectedMaterials([]);
                  }}
                  className="mt-4 text-sm tracking-[0.08em] underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
