import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || '';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
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
  }, [activeCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setPriceRange([0, 120]);
    setSelectedMaterial('');
    setSortBy('featured');
  };

  const hasFilters = activeCategory || selectedMaterial || sortBy !== 'featured';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-velmora-ink mb-4">Category</h4>
        <div className="space-y-2">
          {['', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat) {
                  setSearchParams({ category: cat });
                } else {
                  setSearchParams({});
                }
              }}
              className={`block text-sm transition-colors ${
                (cat === '' && !activeCategory) || activeCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-charcoal/70 hover:text-velmora-ink'
              }`}
            >
              {cat || 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-velmora-ink mb-4">Price</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="120"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-velmora-gold"
          />
          <div className="flex justify-between text-xs text-velmora-taupe">
            <span>$0</span>
            <span>Up to ${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-velmora-ink mb-4">Material</h4>
        <div className="space-y-2">
          {['', 'Gold', 'Silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal/70 hover:text-velmora-ink'
              }`}
            >
              {mat || 'All'}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-rose hover:text-velmora-gold transition-colors flex items-center gap-1"
        >
          <X size={12} /> Clear all
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-velmora-cream pt-24 md:pt-28 min-h-screen">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-ink mb-2">
            {activeCategory || 'All Jewelry'}
          </h1>
          <p className="text-sm text-velmora-taupe">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-stone">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="md:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-velmora-ink"
              >
                <SlidersHorizontal size={14} />
                Filters
                {hasFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velmora-taupe hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none text-xs font-medium text-velmora-ink bg-transparent pr-6 py-1 cursor-pointer focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-taupe pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                mobileFiltersOpen ? 'max-h-[500px] mb-8 pb-8 border-b border-velmora-stone' : 'max-h-0'
              }`}
            >
              <FilterContent />
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe text-sm mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4 relative">
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product);
                        }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      >
                        <span className="text-xs font-medium text-velmora-ink">+</span>
                      </button>
                    </div>
                    <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase text-velmora-ink mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
                        />
                      ))}
                      <span className="text-[10px] text-velmora-taupe ml-1">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}