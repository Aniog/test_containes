import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : []);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="mb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
          <h1 className="serif text-5xl tracking-wide mt-1">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm tracking-[0.08em]">FILTERS</span>
                <button onClick={clearFilters} className="text-xs text-[#8B7355] hover:underline">CLEAR ALL</button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="text-xs tracking-[0.1em] mb-4 text-[#6B665F]">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
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

              {/* Material */}
              <div className="mb-8">
                <div className="text-xs tracking-[0.1em] mb-4 text-[#6B665F]">MATERIAL</div>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8B7355]"
                      />
                      {mat} Tone
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[0.1em] mb-4 text-[#6B665F]">PRICE RANGE</div>
                <div className="flex items-center gap-3 text-sm">
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="input w-20 text-center py-2"
                  />
                  <span className="text-[#6B665F]">—</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                    className="input w-20 text-center py-2"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DFD3]">
              <span className="text-sm text-[#6B665F]">{filteredProducts.length} products</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#E5DFD3] bg-white px-4 py-2 focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline">CLEAR FILTERS</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;