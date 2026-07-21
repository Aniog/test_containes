import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import Button from '../components/ui/button';
import { products, categories } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryParam = searchParams.get('category');
  if (categoryParam && !selectedCategories.includes(categoryParam)) {
    setSelectedCategories([categoryParam]);
  }

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 150]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 150;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl mb-2">Shop</h1>
            <p className="text-sm text-gray-500">{filteredProducts.length} products</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm tracking-wide"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-gray-200 px-4 py-2 pr-8 text-sm focus:border-[#C9A96E] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs tracking-widest uppercase font-medium">Filters</h3>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-[#C9A96E] hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              <div className="mb-8">
                <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedCategories.includes(cat.id) ? 'border-[#C9A96E] bg-[#C9A96E]' : 'border-gray-300 group-hover:border-[#C9A96E]'
                        }`}
                      >
                        {selectedCategories.includes(cat.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span
                        className="text-sm group-hover:text-[#C9A96E] transition-colors"
                        onClick={() => toggleCategory(cat.id)}
                      >
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Price Range</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $80', min: 50, max: 80 },
                    { label: '$80 - $100', min: 80, max: 100 },
                    { label: 'Over $100', min: 100, max: 150 },
                  ].map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          priceRange[0] === range.min && priceRange[1] === range.max
                            ? 'border-[#C9A96E] bg-[#C9A96E]'
                            : 'border-gray-300 group-hover:border-[#C9A96E]'
                        }`}
                      >
                        {priceRange[0] === range.min && priceRange[1] === range.max && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span
                        className="text-sm group-hover:text-[#C9A96E] transition-colors"
                        onClick={() => setPriceRange([range.min, range.max])}
                      >
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] tracking-widest uppercase px-2 py-1">
                          Bestseller
                        </span>
                      )}
                    </Link>
                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-sm tracking-wide group-hover:text-[#C9A96E] transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl animate-slide-in">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-full pb-32">
              <div className="mb-8">
                <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center ${
                          selectedCategories.includes(cat.id) ? 'border-[#C9A96E] bg-[#C9A96E]' : 'border-gray-300'
                        }`}
                        onClick={() => toggleCategory(cat.id)}
                      >
                        {selectedCategories.includes(cat.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm" onClick={() => toggleCategory(cat.id)}>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-4">Price Range</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $80', min: 50, max: 80 },
                    { label: '$80 - $100', min: 80, max: 100 },
                    { label: 'Over $100', min: 100, max: 150 },
                  ].map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center ${
                          priceRange[0] === range.min && priceRange[1] === range.max
                            ? 'border-[#C9A96E] bg-[#C9A96E]'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setPriceRange([range.min, range.max])}
                      >
                        {priceRange[0] === range.min && priceRange[1] === range.max && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm" onClick={() => setPriceRange([range.min, range.max])}>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
              <Button className="w-full" onClick={() => setMobileFiltersOpen(false)}>
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
