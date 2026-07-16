import { useEffect, useRef, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const categoryFilters = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materialFilters = [
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
];

export default function Shop() {
  const { category } = useParams();
  const shopRef = useRef(null);
  const { addItem } = useCart();
  const [sort, setSort] = useState('featured');
  const [activeCategory, setActiveCategory] = useState(category || '');
  const [activeMaterial, setActiveMaterial] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(category || '');
  }, [category]);

  useEffect(() => {
    if (shopRef.current) {
      const raf = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, shopRef.current);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [activeCategory, activeMaterial, sort]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => {
        if (activeCategory === 'huggies') return p.subcategory === 'huggies';
        if (activeCategory === 'sets') return p.category === 'sets';
        return p.category === activeCategory;
      });
    }
    if (activeMaterial) {
      result = result.filter((p) => p.variants.includes(activeMaterial));
    }
    switch (sort) {
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
  }, [activeCategory, activeMaterial, sort]);

  const clearFilters = () => {
    setActiveCategory('');
    setActiveMaterial('');
  };

  const hasFilters = activeCategory || activeMaterial;

  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Jewelry';

  return (
    <div ref={shopRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl text-charcoal">
            {title}
          </h1>
          <p className="text-stone text-sm mt-1">{filtered.length} pieces</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone hover:text-charcoal transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {hasFilters && `(${filtered.length})`}
          </button>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-[0.15em] text-stone pr-6 py-1 border-b border-sand/50 focus:outline-none focus:border-charcoal cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Sidebar filters - desktop */}
        <aside className="hidden md:block w-52 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal mb-4">Category</h3>
            <div className="space-y-2.5">
              <button
                onClick={() => setActiveCategory('')}
                className={`block text-sm transition-colors ${!activeCategory ? 'text-gold' : 'text-stone hover:text-charcoal'}`}
              >
                All
              </button>
              {categoryFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveCategory(activeCategory === f.value ? '' : f.value)}
                  className={`block text-sm transition-colors ${activeCategory === f.value ? 'text-gold' : 'text-stone hover:text-charcoal'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal mb-4">Material</h3>
            <div className="space-y-2.5">
              {materialFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveMaterial(activeMaterial === f.value ? '' : f.value)}
                  className={`block text-sm transition-colors ${activeMaterial === f.value ? 'text-gold' : 'text-stone hover:text-charcoal'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-stone hover:text-charcoal transition-colors"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          )}
        </aside>

        {/* Mobile filters */}
        {mobileFilterOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-cream pt-20 px-6 animate-fade-in">
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="absolute top-6 right-6 text-charcoal p-2"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  <button onClick={() => { setActiveCategory(''); setMobileFilterOpen(false); }} className={`block text-sm ${!activeCategory ? 'text-gold' : 'text-stone'}`}>All</button>
                  {categoryFilters.map((f) => (
                    <button key={f.value} onClick={() => { setActiveCategory(activeCategory === f.value ? '' : f.value); setMobileFilterOpen(false); }} className={`block text-sm ${activeCategory === f.value ? 'text-gold' : 'text-stone'}`}>{f.label}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal mb-4">Material</h3>
                <div className="space-y-3">
                  {materialFilters.map((f) => (
                    <button key={f.value} onClick={() => { setActiveMaterial(activeMaterial === f.value ? '' : f.value); setMobileFilterOpen(false); }} className={`block text-sm ${activeMaterial === f.value ? 'text-gold' : 'text-stone'}`}>{f.label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-charcoal mb-2">No pieces match your filters</p>
              <button onClick={clearFilters} className="text-sm text-gold hover:text-gold-dark transition-colors">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-sand/20 overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-name-${product.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={(e) => { e.preventDefault(); addItem(product, 'gold'); }}
                        className="w-9 h-9 bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center shadow-lg hover:bg-gold hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product, 'gold'); }}
                      className="md:hidden absolute bottom-3 right-3 w-9 h-9 bg-white/90 text-charcoal flex items-center justify-center shadow-lg active:bg-gold active:text-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </Link>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 id={`shop-name-${product.id}`} className="product-name text-xs tracking-widest text-charcoal mb-1 truncate">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-xs text-stone">{product.rating}</span>
                    </div>
                    <p className="text-sm text-charcoal mt-1">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
