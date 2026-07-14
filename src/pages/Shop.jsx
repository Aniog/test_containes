import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  
  const selectedCategory = searchParams.get('category');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
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
  }, [selectedCategory, priceRange, selectedMaterials, sortBy]);

  const toggleMaterial = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSearchParams({});
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSortBy('featured');
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-2">Discover</p>
          <h1 className="serif text-5xl tracking-[-0.01em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <p className="uppercase tracking-[0.1em] text-xs">Filters</p>
                {(selectedCategory || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120) && (
                  <button onClick={clearFilters} className="text-xs text-[#B8975E] hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-sm tracking-[0.05em] mb-3">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        if (selectedCategory === cat) {
                          setSearchParams({});
                        } else {
                          setSearchParams({ category: cat });
                        }
                      }}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedCategory === cat ? 'text-[#B8975E]' : 'text-[#6B665F] hover:text-[#2C2823]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <p className="text-sm tracking-[0.05em] mb-3">Price Range</p>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8975E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-sm tracking-[0.05em] mb-3">Material</p>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B8975E]"
                      />
                      <span className="text-[#6B665F]">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D4C9B8]">
              <p className="text-sm text-[#6B665F]">{filteredProducts.length} products</p>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[#D4C9B8] px-4 py-2 focus:outline-none focus:border-[#B8975E]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm text-[#B8975E] hover:underline">
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