import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
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
        break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-warm">
      <div className="bg-brand-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Discover our complete collection of demi-fine jewelry, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal mb-6">Categories</h3>
              <ul className="space-y-3 mb-10">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm transition-colors duration-300 ${
                      activeCategory === 'all' ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`text-sm transition-colors duration-300 ${
                        activeCategory === category.id ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal mb-6">Price</h3>
              <div className="space-y-3">
                {[
                  { label: 'Under $50', min: 0, max: 50 },
                  { label: '$50 - $75', min: 50, max: 75 },
                  { label: '$75 - $100', min: 75, max: 100 },
                  { label: 'Over $100', min: 100, max: 200 },
                ].map((range) => (
                  <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === range.min && priceRange[1] === range.max}
                      onChange={() => setPriceRange([range.min, range.max])}
                      className="accent-brand-gold"
                    />
                    <span className="text-sm text-brand-muted">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-brand-charcoal"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-brand-muted">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-brand-border rounded-sm px-4 py-2 pr-8 text-sm text-brand-charcoal focus:outline-none focus:border-brand-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {mobileFiltersOpen && (
              <div className="lg:hidden mb-8 p-6 bg-white rounded-sm shadow-sm">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-charcoal mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-4 py-2 border rounded-sm text-sm transition-all duration-300 ${
                      activeCategory === 'all' ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-brand-border text-brand-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 py-2 border rounded-sm text-sm transition-all duration-300 ${
                        activeCategory === category.id ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-brand-border text-brand-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No products found</p>
                <p className="text-sm text-brand-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
