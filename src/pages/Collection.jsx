import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' }
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', name: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity }
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest' }
];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    sort: 'featured'
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category !== 'all') {
      params.set('category', filters.category);
    }
    setSearchParams(params, { replace: true });
  }, [filters.category, setSearchParams]);
  
  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      
      // Price filter
      const priceRange = priceRanges.find(p => p.id === filters.price);
      if (priceRange && (product.price < priceRange.min || product.price >= priceRange.max)) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        case 'featured':
        default:
          return 0;
      }
    });
  
  const activeFilterCount = [
    filters.category !== 'all',
    filters.price !== 'all'
  ].filter(Boolean).length;
  
  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-[var(--color-bg-secondary)] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-4">
            The Collection
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry, designed to be treasured.
          </p>
        </div>
      </section>
      
      {/* Filters Bar */}
      <section className="border-b border-[var(--color-border)] sticky top-20 bg-[var(--color-bg-primary)] z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[var(--color-gold)] text-[var(--color-bg-primary)] text-xs flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            
            {/* Desktop Filter Pills */}
            <div className="hidden md:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilters(f => ({ ...f, category: category.id }))}
                  className={cn(
                    'px-4 py-2 text-sm transition-colors',
                    filters.category === category.id
                      ? 'bg-[var(--color-gold)] text-[var(--color-bg-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Results Count & Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[var(--color-text-muted)] hidden sm:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  Sort: <span className="hidden sm:inline">{sortOptions.find(s => s.id === filters.sort)?.name}</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform', isSortOpen && 'rotate-180')} strokeWidth={1.5} />
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-surface)] border border-[var(--color-border)] z-40">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setFilters(f => ({ ...f, sort: option.id }));
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          'w-full px-4 py-3 text-left text-sm transition-colors',
                          filters.sort === option.id
                            ? 'text-[var(--color-gold)] bg-[var(--color-bg-secondary)]'
                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]'
                        )}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Grid */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-secondary)] mb-4">No products match your filters.</p>
              <Button variant="secondary" onClick={() => setFilters({ category: 'all', price: 'all', sort: 'featured' })}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Mobile Filter Drawer */}
      <>
        {/* Backdrop */}
        <div 
          className={cn(
            'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity md:hidden',
            isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={cn(
            'fixed top-0 left-0 z-50 h-full w-80 bg-[var(--color-bg-primary)] shadow-2xl transition-transform md:hidden',
            isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setFilters(f => ({ ...f, category: category.id }))}
                      className={cn(
                        'w-full px-4 py-3 text-left text-sm transition-colors',
                        filters.category === category.id
                          ? 'bg-[var(--color-surface)] text-[var(--color-gold)]'
                          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilters(f => ({ ...f, price: range.id }))}
                      className={cn(
                        'w-full px-4 py-3 text-left text-sm transition-colors',
                        filters.price === range.id
                          ? 'bg-[var(--color-surface)] text-[var(--color-gold)]'
                          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]'
                      )}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 border-t border-[var(--color-border)]">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Apply Filters
              </Button>
              <button
                onClick={() => {
                  setFilters({ category: 'all', price: 'all', sort: 'featured' });
                  setIsMobileFilterOpen(false);
                }}
                className="w-full mt-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default Collection;
