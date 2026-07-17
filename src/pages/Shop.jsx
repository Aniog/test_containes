import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

    // Sorting
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

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120;

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Shop Nav */}
      <nav className="sticky top-0 z-50 bg-[#F8F5F1] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-[4px] text-[#2C2522]">VELMORA</Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px] text-[#2C2522]">
            <Link to="/shop" className="text-[#8B7355]">SHOP</Link>
            <Link to="/shop" className="hover:text-[#8B7355]">COLLECTIONS</Link>
            <Link to="/" className="hover:text-[#8B7355]">ABOUT</Link>
            <Link to="/" className="hover:text-[#8B7355]">JOURNAL</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#2C2522] hover:text-[#8B7355]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#2C2522] hover:text-[#8B7355] relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B7355] text-white text-[10px] rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#8B7355]">DISCOVER</span>
            <h1 className="font-serif text-4xl text-[#2C2522]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] bg-transparent px-4 py-2 text-[#2C2522] focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-sm tracking-[1px] text-[#8B7355]"
            >
              <Filter className="w-4 h-4" /> FILTER
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between md:hidden">
                <span className="text-sm tracking-[1px]">Filters</span>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-4 h-4" /></button>
              </div>

              {/* Categories */}
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">CATEGORY</div>
                <div className="space-y-2.5">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm text-[#5C554E]">
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
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">MATERIAL</div>
                <div className="space-y-2.5">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm text-[#5C554E]">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8B7355]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">PRICE RANGE</div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-xs text-[#6B655C] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-[2px] text-[#8B7355] hover:text-[#6B5535]"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="text-xs tracking-[1px] text-[#6B655C] mb-6">{filteredProducts.length} products</div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B655C] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm tracking-[1px] text-[#8B7355]">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs tracking-[1px] text-[#6B655C]">
          © 2026 Velmora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Shop;