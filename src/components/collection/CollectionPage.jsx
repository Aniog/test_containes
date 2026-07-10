import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter(p => p.price >= range.min && p.price < range.max);
    }

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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange !== null;

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="py-12 md:py-16" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="container">
          <h1 className="section-heading text-center">Shop All</h1>
          <p className="text-center mt-2" style={{ color: 'var(--stone-dark)' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--espresso-mid)' }}
          >
            <Filter size={18} />
            Filters
            {hasActiveFilters && (
              <span 
                className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                style={{ backgroundColor: 'var(--gold)' }}
              >
                {selectedCategories.length + (selectedPriceRange !== null ? 1 : 0)}
              </span>
            )}
          </button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm pr-6 cursor-pointer"
              style={{ color: 'var(--espresso-mid)' }}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={14} 
              className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--stone-dark)' }}
            />
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="mb-8">
              <h3 className="text-sm tracking-wider uppercase mb-4" style={{ color: 'var(--espresso-mid)' }}>
                Category
              </h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <label 
                    key={category.id} 
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="sr-only"
                    />
                    <span 
                      className={`w-5 h-5 border flex items-center justify-center transition-all ${
                        selectedCategories.includes(category.id)
                          ? 'bg-[var(--espresso)] border-[var(--espresso)]'
                          : 'border-[var(--stone)] group-hover:border-[var(--espresso)]'
                      }`}
                    >
                      {selectedCategories.includes(category.id) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path 
                            d="M2 6L5 9L10 3" 
                            stroke="var(--cream)" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <div>
                      <span className="text-sm" style={{ color: 'var(--espresso-light)' }}>
                        {category.name}
                      </span>
                      <span className="text-xs ml-2" style={{ color: 'var(--stone-dark)' }}>
                        ({products.filter(p => p.category === category.id).length})
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm tracking-wider uppercase mb-4" style={{ color: 'var(--espresso-mid)' }}>
                Price
              </h3>
              <div className="space-y-3">
                {priceRanges.map((range, index) => (
                  <label 
                    key={range.label}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === index}
                      onChange={() => setSelectedPriceRange(index)}
                      className="sr-only"
                    />
                    <span 
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        selectedPriceRange === index
                          ? 'bg-[var(--espresso)] border-[var(--espresso)]'
                          : 'border-[var(--stone)] group-hover:border-[var(--espresso)]'
                      }`}
                    >
                      {selectedPriceRange === index && (
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--cream)' }} />
                      )}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--espresso-light)' }}>
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm underline underline-offset-4"
                style={{ color: 'var(--stone-dark)' }}
              >
                Clear all filters
              </button>
            )}
          </aside>

          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm" style={{ color: 'var(--stone-dark)' }}>
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 cursor-pointer border-b pb-1"
                  style={{ color: 'var(--espresso-mid)', borderColor: 'rgba(200, 185, 154, 0.3)' }}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      Sort by: {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown 
                  size={14} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: 'var(--stone-dark)' }}
                />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg mb-4" style={{ color: 'var(--espresso-mid)' }}>
                  No products found
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--stone-dark)' }}>
                  Try adjusting your filters to find what you are looking for.
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-[var(--overlay)]"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl" style={{ color: 'var(--espresso-mid)' }}>
                  Filters
                </h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 -mr-2"
                >
                  <X size={20} style={{ color: 'var(--espresso-mid)' }} />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-sm tracking-wider uppercase mb-4" style={{ color: 'var(--espresso-mid)' }}>
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label 
                      key={category.id} 
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="sr-only"
                      />
                      <span 
                        className={`w-5 h-5 border flex items-center justify-center transition-all ${
                          selectedCategories.includes(category.id)
                            ? 'bg-[var(--espresso)] border-[var(--espresso)]'
                            : 'border-[var(--stone)]'
                        }`}
                      >
                        {selectedCategories.includes(category.id) && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path 
                              d="M2 6L5 9L10 3" 
                              stroke="var(--cream)" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--espresso-light)' }}>
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm tracking-wider uppercase mb-4" style={{ color: 'var(--espresso-mid)' }}>
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range, index) => (
                    <label 
                      key={range.label}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price-mobile"
                        checked={selectedPriceRange === index}
                        onChange={() => setSelectedPriceRange(index)}
                        className="sr-only"
                      />
                      <span 
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          selectedPriceRange === index
                            ? 'bg-[var(--espresso)] border-[var(--espresso)]'
                            : 'border-[var(--stone)]'
                        }`}
                      >
                        {selectedPriceRange === index && (
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--cream)' }} />
                        )}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--espresso-light)' }}>
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={clearFilters}
                  className="flex-1 btn-secondary"
                  disabled={!hasActiveFilters}
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 btn-primary"
                >
                  View {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
