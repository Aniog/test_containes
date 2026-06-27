import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { useCart } from '../context/CartContext';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem, openCart } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

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
      case 'newest':
        result.sort((a, b) => (a.badge === 'New' ? -1 : 1));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0],
    });
    openCart();
  };

  return (
    <div className="bg-velmora-pearl min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-cream hairline-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide text-center">
            {activeCategory !== 'all' ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-velmora-muted text-center max-w-lg mx-auto">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.description
              : 'Discover our complete collection of demi-fine jewelry.'}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-4">Category</h3>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('all')}
                      className={cn(
                        'text-sm transition-colors',
                        activeCategory === 'all' ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(category.id)}
                        className={cn(
                          'text-sm transition-colors',
                          activeCategory === category.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-4">Price</h3>
                <ul className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        type="button"
                        className="text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors"
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-4">Material</h3>
                <ul className="space-y-2.5">
                  <li>
                    <button type="button" className="text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors">
                      18K Gold Plated
                    </button>
                  </li>
                  <li>
                    <button type="button" className="text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors">
                      Sterling Silver
                    </button>
                  </li>
                  <li>
                    <button type="button" className="text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors">
                      Crystal
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <p className="text-sm text-velmora-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-3 py-2 border border-velmora-border text-xs font-medium tracking-editorial uppercase text-velmora-ink hover:border-velmora-charcoal transition-colors"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-velmora-border pl-3 pr-8 py-2 text-xs font-medium tracking-editorial uppercase text-velmora-ink focus:outline-none focus:border-velmora-charcoal transition-colors cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-velmora-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeCategory !== 'all' && (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-velmora-muted">Active filter:</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-velmora-sand text-velmora-charcoal text-xs font-medium">
                  {categories.find((c) => c.id === activeCategory)?.name}
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('all')}
                    className="text-velmora-muted hover:text-velmora-charcoal"
                    aria-label="Clear filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted">Try adjusting your filters or browse all collections.</p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange('all')}
                  className="mt-4 text-xs font-semibold tracking-editorial uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  View All Jewelry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-full max-w-sm bg-velmora-pearl shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 hairline-bottom">
              <h2 className="font-serif text-lg font-semibold tracking-ultra-wide uppercase text-velmora-charcoal">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 -mr-2 text-velmora-ink hover:text-velmora-gold transition-colors"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-3">Category</h3>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => { handleCategoryChange('all'); setMobileFiltersOpen(false); }}
                      className={cn(
                        'text-sm transition-colors',
                        activeCategory === 'all' ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => { handleCategoryChange(category.id); setMobileFiltersOpen(false); }}
                        className={cn(
                          'text-sm transition-colors',
                          activeCategory === category.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-3">Price</h3>
                <ul className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button type="button" className="text-sm text-velmora-muted">{range.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-charcoal mb-3">Material</h3>
                <ul className="space-y-2.5">
                  <li><button type="button" className="text-sm text-velmora-muted">18K Gold Plated</button></li>
                  <li><button type="button" className="text-sm text-velmora-muted">Sterling Silver</button></li>
                  <li><button type="button" className="text-sm text-velmora-muted">Crystal</button></li>
                </ul>
              </div>
            </div>
            <div className="px-5 py-4 hairline-top">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-velmora-charcoal text-velmora-white text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
