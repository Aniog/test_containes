import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

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
    setSearchParams({});
  };

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  const activeFilterCount = selectedCategories.length + selectedMaterials.length;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between py-8 border-b">
          <div>
            <p className="text-xs tracking-[3px] text-[#C5A46E] mb-1">COLLECTION</p>
            <h1 className="serif text-4xl tracking-wide">All Jewelry</h1>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-sm tracking-[1px] flex items-center gap-1"
            >
              FILTERS {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#D4CFC4] px-4 py-2 pr-10 text-sm tracking-[1px] cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A–Z</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-8">
          {/* FILTER SIDEBAR */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Active filters */}
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-xs tracking-[1.5px] text-[#C5A46E] hover:underline">
                  CLEAR ALL FILTERS
                </button>
              )}

              {/* Category */}
              <div>
                <p className="text-xs tracking-[2px] text-[#6B665C] mb-4">CATEGORY</p>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="filter-checkbox w-4 h-4"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs tracking-[2px] text-[#6B665C] mb-4">MATERIAL</p>
                <div className="space-y-3">
                  {['Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="filter-checkbox w-4 h-4"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-xs tracking-[2px] text-[#6B665C] mb-4">PRICE</p>
                <div className="space-y-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A46E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665C]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {searchQuery && (
              <p className="text-sm text-[#6B665C] mb-4">Showing results for "{searchQuery}"</p>
            )}
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="group">
                    <div className="product-card bg-white">
                      <div className="product-image-container aspect-[4/3.5] bg-[#F5F2EB] relative overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="product-image w-full h-full object-cover"
                        />
                        {product.images[1] && (
                          <img 
                            src={product.images[1]} 
                            alt={product.name}
                            className="product-image-secondary w-full h-full object-cover"
                          />
                        )}
                        <button 
                          onClick={(e) => handleQuickAdd(product, e)}
                          className="quick-add btn-premium bg-white text-[#2C2A26] px-5 py-1.5 text-xs tracking-[1.5px] shadow-lg hover:bg-[#C5A46E] hover:text-white"
                        >
                          QUICK ADD
                        </button>
                      </div>
                      <div className="p-4">
                        <p className="product-name text-sm tracking-[2px] mb-1">{product.name}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[#6B665C]">{formatPrice(product.price)}</p>
                          <span className="text-[10px] text-[#6B665C] tracking-widest">{product.category.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="serif text-2xl mb-2">No products found</p>
                <p className="text-[#6B665C] mb-6">Try adjusting your filters</p>
                <Button variant="outline" onClick={clearFilters}>CLEAR FILTERS</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
