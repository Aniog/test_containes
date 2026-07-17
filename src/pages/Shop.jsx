import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const [filters, setFilters] = useState({
    category: activeCategory,
    priceRange: '',
    material: '',
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.priceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (filters.priceRange === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (filters.priceRange === 'over100') {
      result = result.filter((p) => p.price > 100);
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
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
  }, [filters, sortBy]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? '' : value }));
    if (key === 'category') {
      if (value === activeCategory) {
        setSearchParams({});
      } else {
        setSearchParams({ category: value });
      }
    }
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: '', material: '' });
    setSearchParams({});
  };

  const hasFilters = filters.category || filters.priceRange || filters.material;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-base mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block text-sm transition-colors ${
                filters.category === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-base'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-base mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { label: 'Under $50', value: 'under50' },
            { label: '$50 – $100', value: '50to100' },
            { label: 'Over $100', value: 'over100' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('priceRange', opt.value)}
              className={`block text-sm transition-colors ${
                filters.priceRange === opt.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-base'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-base mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {['18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={`block text-sm transition-colors ${
                filters.material === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-taupe hover:text-velmora-base'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-taupe hover:text-velmora-base underline underline-offset-2 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding py-10 md:py-14 text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-3">
          The Collection
        </p>
        <h1 className="heading-lg text-velmora-base">
          {activeCategory || 'All Jewelry'}
        </h1>
      </div>

      <div className="section-padding pb-20">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-velmora-base"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <p className="text-xs text-velmora-taupe hidden md:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase font-medium text-velmora-base pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-taupe pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe text-sm mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="aspect-[3/4] bg-velmora-beige overflow-hidden mb-3">
                      <img
                        src={product.images[0].src}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="product-name text-velmora-base group-hover:text-velmora-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                      <span className="text-xs text-velmora-taupe">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium text-velmora-base mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[80] md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-velmora-cream shadow-2xl p-6 transform transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-lg tracking-wider">Filters</h3>
            <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5 text-velmora-base" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </main>
  );
}