import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Get filter values from URL
  const categoryParam = searchParams.get('category');
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set('category', selectedCategories[0]);
    } else if (selectedCategories.length > 1) {
      selectedCategories.forEach((cat) => params.append('category', cat));
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategories, setSearchParams]);

  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.reviews - a.reviews; // Using reviews as proxy for popularity/newest
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 150]);
    setSelectedMaterial('');
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const activeFiltersCount = selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < 150 ? 1 : 0);

  return (
    <main className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      {/* Page Header */}
      <div className="bg-velmora-sand/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            {categoryParam 
              ? categories.find(c => c.id === categoryParam)?.name || 'Shop All' 
              : 'The Collection'}
          </h1>
          <p className="text-velmora-taupe mt-2">
            {sortedProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 md:hidden text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-velmora-espresso text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-velmora-taupe">Category:</span>
            {['earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={cn(
                  'px-4 py-1.5 text-sm border transition-all capitalize',
                  selectedCategories.includes(cat)
                    ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                    : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                )}
              >
                {cat}
              </button>
            ))}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-taupe hover:text-velmora-charcoal underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 text-sm text-velmora-charcoal"
            >
              <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown className={cn('w-4 h-4 transition-transform', showSortDropdown && 'rotate-180')} />
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-velmora-sand rounded shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm hover:bg-velmora-sand/30 transition-colors',
                      sortBy === option.value
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-charcoal'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-velmora-cream p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl text-velmora-charcoal">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5 text-velmora-taupe" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-velmora-charcoal mb-3">Category</h4>
                <div className="space-y-2">
                  {['earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="capitalize text-velmora-charcoal">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-velmora-charcoal mb-3">Price</h4>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 px-2 py-1 border border-velmora-sand rounded text-sm"
                    min="0"
                  />
                  <span className="text-velmora-taupe">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 px-2 py-1 border border-velmora-sand rounded text-sm"
                    min="0"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button variant="secondary" size="full" onClick={clearFilters}>
                  Clear All
                </Button>
                <Button variant="primary" size="full" onClick={() => setIsFilterOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-velmora-taupe mb-4">No products match your filters.</p>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Collection;
