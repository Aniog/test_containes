import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
const materials = ['gold', 'silver'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [showSort, setShowSort] = useState(false);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activePrice = searchParams.get('price') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activeMaterial, activePrice, sort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (next.get(key) === value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasFilters = activeCategory || activeMaterial || activePrice;

  const FilterPanel = ({ isMobile }) => (
    <div className={`${isMobile ? '' : 'w-60 flex-shrink-0'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-velvet">
          Filters
        </h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-[10px] text-taupe underline hover:text-gold transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs uppercase tracking-[0.15em] text-taupe font-medium mb-3">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => updateFilter('category', c)}
              className={`text-left text-sm capitalize transition-colors ${
                activeCategory === c ? 'text-velvet font-medium' : 'text-taupe hover:text-velvet'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-xs uppercase tracking-[0.15em] text-taupe font-medium mb-3">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((r) => (
            <button
              key={r.label}
              onClick={() => updateFilter('price', r.label)}
              className={`text-left text-sm transition-colors ${
                activePrice === r.label ? 'text-velvet font-medium' : 'text-taupe hover:text-velvet'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-taupe font-medium mb-3">
          Material
        </h4>
        <div className="flex flex-col gap-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => updateFilter('material', m)}
              className={`text-left text-sm capitalize transition-colors ${
                activeMaterial === m ? 'text-velvet font-medium' : 'text-taupe hover:text-velvet'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium">
            Shop All
          </h1>
          <p className="mt-2 text-sm text-taupe font-light">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-velvet"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sort */}
          <div className="relative ml-auto">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-velvet"
            >
              Sort by
              <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 bg-cream border border-linen shadow-lg z-20 min-w-[160px]">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-asc', label: 'Price: Low to High' },
                  { value: 'price-desc', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Top Rated' },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      setSort(s.value);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.1em] transition-colors ${
                      sort === s.value ? 'bg-gold/10 text-velvet font-medium' : 'text-taupe hover:bg-linen'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block">
            <FilterPanel isMobile={false} />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-gold text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-linen overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-taupe">Image</span>
                        </div>
                        {product.tag && (
                          <span className="absolute top-2 left-2 px-2 py-0.5 bg-cream text-[10px] uppercase tracking-[0.1em] text-velvet font-medium">
                            {product.tag}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 text-center">
                        <h3 className="font-serif text-sm tracking-[0.15em] uppercase font-medium text-velvet">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-taupe font-light">${product.price}</p>
                      </div>
                    </Link>
                    <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          addItem(product, 'gold', 1);
                          toast.success(`${product.name} added to bag`);
                        }}
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-medium text-velvet hover:text-gold transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Quick Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-velvet/40 z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-cream z-[70] shadow-2xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wide">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel isMobile={true} />
          </div>
        </>
      )}
    </div>
  );
}
