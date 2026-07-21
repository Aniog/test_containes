import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial);
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
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-2">DISCOVER</p>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2 text-sm">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'hover:text-[#8B7355]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label mb-4">Price Range</p>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-xs text-[#7A7368]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <p className="text-sm text-[#7A7368]">{filteredProducts.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[#E5DFD3] px-4 py-2 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#7A7368]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;