import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products, categories } from '../../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 150]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'featured':
        default:
          return a.bestseller ? -1 : 1;
      }
    });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[var(--color-ivory)]">
        <div className="container text-center">
          <h1
            className="text-3xl lg:text-4xl text-[var(--color-espresso)] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Collection
          </h1>
          <p className="text-[var(--color-mocha)] max-w-md mx-auto">
            Discover demi-fine jewelry crafted for everyday elegance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`block w-full text-left py-1.5 text-sm transition-colors ${
                          selectedCategory === category
                            ? 'text-[var(--color-gold)] font-medium'
                            : 'text-[var(--color-mocha)] hover:text-[var(--color-espresso)]'
                        }`}
                      >
                        {category}
                        {category !== 'All' && (
                          <span className="ml-2 text-[var(--color-warm-gray)]">
                            ({products.filter(p => p.category === category).length})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="150"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-[var(--color-gold)]"
                    />
                    <div className="flex items-center justify-between text-sm text-[var(--color-mocha)]">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-4">
                    Material
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 accent-[var(--color-gold)]"
                      />
                      <span className="text-sm text-[var(--color-mocha)]">18K Gold Plated</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[var(--color-gold)]"
                      />
                      <span className="text-sm text-[var(--color-mocha)]">Sterling Silver</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 text-sm text-[var(--color-mocha)]"
              >
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </button>

              {/* Mobile Sort */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-1 text-sm text-[var(--color-mocha)]"
                >
                  <span>{sortOptions.find(o => o.value === sortBy)?.label}</span>
                  <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-[var(--color-ivory)] shadow-lg py-2 min-w-[160px] z-10">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm ${
                          sortBy === option.value
                            ? 'text-[var(--color-gold)]'
                            : 'text-[var(--color-mocha)]'
                        } hover:bg-[var(--color-cream)]`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Desktop Sort */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-sm text-[var(--color-mocha)]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                <div className="relative">
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2 text-sm text-[var(--color-mocha)]"
                  >
                    <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                    <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSortOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-[var(--color-ivory)] shadow-lg py-2 min-w-[180px] z-10">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={`block w-full px-4 py-2 text-left text-sm ${
                            sortBy === option.value
                              ? 'text-[var(--color-gold)]'
                              : 'text-[var(--color-mocha)]'
                          } hover:bg-[var(--color-cream)]`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-[var(--color-mocha)] mb-4">No products found</p>
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-[var(--color-ivory)] shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)]">
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 -mr-2"
                >
                  <X size={20} className="text-[var(--color-mocha)]" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'text-[var(--color-gold)] font-medium'
                          : 'text-[var(--color-mocha)]'
                      }`}
                    >
                      {category}
                      {category !== 'All' && (
                        <span className="ml-2 text-[var(--color-warm-gray)]">
                          ({products.filter(p => p.category === category).length})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-4">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[var(--color-gold)]"
                  />
                  <div className="flex items-center justify-between text-sm text-[var(--color-mocha)]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="btn-primary w-full"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
