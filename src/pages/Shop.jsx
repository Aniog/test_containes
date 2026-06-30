import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges, materials } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-100/40 pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-1"
      >
        <span className="text-xs uppercase tracking-ultra-wide font-medium text-charcoal-800">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-charcoal-400 transition-transform duration-200',
            open ? 'rotate-180' : ''
          )}
        />
      </button>
      <div className={cn(
        'overflow-hidden transition-all duration-300',
        open ? 'max-h-96 mt-3' : 'max-h-0'
      )}>
        {children}
      </div>
    </div>
  );
}

function CheckboxItem({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <div className={cn(
        'w-4 h-4 border flex items-center justify-center transition-all duration-200',
        checked
          ? 'bg-charcoal-950 border-charcoal-950'
          : 'border-charcoal-300 group-hover:border-charcoal-500'
      )}>
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      <span className={cn(
        'text-sm transition-colors',
        checked ? 'text-charcoal-950 font-medium' : 'text-charcoal-600 group-hover:text-charcoal-900'
      )}>
        {label}
      </span>
      {count !== undefined && (
        <span className="text-charcoal-400 text-xs ml-auto">({count})</span>
      )}
    </label>
  );
}

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    let cleanup;
    const load = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const config = (await import('@/strk-img-config.json')).default;
        if (config && Object.keys(config).length > 0) {
          cleanup = ImageHelper.loadImages(config, containerRef.current);
        }
      } catch {}
    };
    load();
    return () => { if (typeof cleanup === 'function') cleanup(); };
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (priceId) => {
    setSelectedPrices(prev =>
      prev.includes(priceId) ? prev.filter(p => p !== priceId) : [...prev, priceId]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const activeFilterCount = selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      const ranges = selectedPrices.map(id => priceRanges.find(r => r.id === id)).filter(Boolean);
      result = result.filter(p =>
        ranges.some(r => p.price >= r.min && p.price <= r.max)
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const getCategoryCount = (catId) => products.filter(p => p.category === catId).length;

  const filterSidebar = (
    <div className="space-y-2">
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between pb-4 mb-2 border-b border-brand-100/40">
          <span className="text-xs text-charcoal-500">
            {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active
          </span>
          <button
            onClick={clearFilters}
            className="text-xs text-gold-600 uppercase tracking-wide hover:underline"
          >
            Clear All
          </button>
        </div>
      )}

      <FilterSection title="Category">
        {categories.map(cat => (
          <CheckboxItem
            key={cat.id}
            label={cat.label}
            checked={selectedCategories.includes(cat.id)}
            onChange={() => toggleCategory(cat.id)}
            count={getCategoryCount(cat.id)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {priceRanges.map(range => (
          <CheckboxItem
            key={range.id}
            label={range.label}
            checked={selectedPrices.includes(range.id)}
            onChange={() => togglePrice(range.id)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Material">
        {materials.map(mat => (
          <CheckboxItem
            key={mat.id}
            label={mat.label}
            checked={selectedMaterials.includes(mat.id)}
            onChange={() => toggleMaterial(mat.id)}
          />
        ))}
      </FilterSection>
    </div>
  );

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="pt-20 md:pt-24 bg-cream-50 border-b border-brand-100/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500 mb-4">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal-900">Shop</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal-950">
            Our Collection
          </h1>
          <p className="text-charcoal-500 text-sm mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex items-center justify-between mb-6">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal-700 border border-charcoal-200 px-4 py-2 hover:border-charcoal-400 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-charcoal-500 text-xs uppercase tracking-wide hidden sm:block">Sort by</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm text-charcoal-900 border border-charcoal-200 bg-white px-3 py-2 focus:outline-none focus:border-gold-500 cursor-pointer appearance-none pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236d6d6d' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 8px center',
              }}
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {filterSidebar}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal-900 mb-2">No products found</p>
                <p className="text-charcoal-500 text-sm mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold-600 uppercase tracking-wide border-b border-gold-600 pb-0.5 hover:text-gold-700"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-all duration-300',
          mobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-charcoal-950/40 transition-opacity duration-300',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream-50 shadow-xl transition-transform duration-300 ease-out overflow-y-auto',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-100">
            <h3 className="font-serif text-lg text-charcoal-950">Filters</h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 text-charcoal-500 hover:text-charcoal-950 transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-4">
            {filterSidebar}
          </div>
        </div>
      </div>
    </div>
  );
}
