import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const dispatch = useCartDispatch();
  const ref = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activeSort = searchParams.get('sort') || 'featured';
  const priceMin = searchParams.get('priceMin') || '';
  const priceMax = searchParams.get('priceMax') || '';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [activeCategory, activeMaterial, activeSort, priceMin, priceMax]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) result = result.filter((p) => p.category === activeCategory);
    if (activeMaterial) result = result.filter((p) => p.material === activeMaterial);
    if (priceMin) result = result.filter((p) => p.price >= Number(priceMin));
    if (priceMax) result = result.filter((p) => p.price <= Number(priceMax));

    switch (activeSort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [activeCategory, activeMaterial, activeSort, priceMin, priceMax]);

  const clearAll = () => setSearchParams({});

  const hasFilters = activeCategory || activeMaterial || priceMin || priceMax;

  return (
    <main ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide mb-3">Shop All</h1>
        <p className="text-velvet-500 text-sm tracking-wide">
          Explore our collection of demi-fine gold jewelry
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-velvet-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-velvet-600 hover:text-velvet-900 transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {hasFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            )}
          </button>
          <span className="text-xs text-velvet-400">{filtered.length} products</span>
        </div>
        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-velvet-600 hover:text-velvet-900 transition-colors"
          >
            Sort: {sortOptions.find((o) => o.value === activeSort)?.label}
            <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
          </button>
          {sortOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
              <div className="absolute right-0 top-8 z-20 bg-white border border-velvet-200 rounded-sm shadow-lg py-2 min-w-[180px] animate-fade-in">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setFilter('sort', opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-xs tracking-wider uppercase transition-colors
                      ${activeSort === opt.value ? 'text-gold-600 bg-velvet-50' : 'text-velvet-600 hover:bg-velvet-50'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-10 lg:gap-14">
        {/* Filter sidebar */}
        <aside className={`${filterOpen ? 'fixed inset-0 z-30 bg-white p-6 overflow-y-auto' : 'hidden'} md:block md:static md:w-52 md:flex-shrink-0`}>
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h3 className="font-serif text-lg tracking-wide">Filters</h3>
            <button onClick={() => setFilterOpen(false)} className="p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs tracking-[0.1em] uppercase text-gold-600 hover:text-gold-700 mb-6"
            >
              Clear All
            </button>
          )}

          {/* Category */}
          <div className="mb-8">
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velvet-700 mb-4">Category</h4>
            <div className="flex flex-col gap-2">
              {['earrings', 'necklaces', 'huggies'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter('category', activeCategory === cat ? '' : cat)}
                  className={`text-left text-sm transition-colors capitalize
                    ${activeCategory === cat ? 'text-gold-600 font-medium' : 'text-velvet-500 hover:text-velvet-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-8">
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velvet-700 mb-4">Material</h4>
            <div className="flex flex-col gap-2">
              {['gold', 'silver'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setFilter('material', activeMaterial === mat ? '' : mat)}
                  className={`text-left text-sm transition-colors capitalize
                    ${activeMaterial === mat ? 'text-gold-600 font-medium' : 'text-velvet-500 hover:text-velvet-700'}`}
                >
                  {mat} Tone
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium text-velvet-700 mb-4">Price</h4>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceMin}
                onChange={(e) => setFilter('priceMin', e.target.value)}
                className="w-full px-3 py-2 border border-velvet-200 rounded-sm text-sm
                  focus:outline-none focus:border-velvet-400 transition-colors"
              />
              <span className="text-velvet-300">–</span>
              <input
                type="number"
                placeholder="Max"
                value={priceMax}
                onChange={(e) => setFilter('priceMax', e.target.value)}
                className="w-full px-3 py-2 border border-velvet-200 rounded-sm text-sm
                  focus:outline-none focus:border-velvet-400 transition-colors"
              />
            </div>
          </div>

          {/* Apply button mobile */}
          <button
            onClick={() => setFilterOpen(false)}
            className="btn-primary w-full mt-8 md:hidden"
          >
            Apply Filters
          </button>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velvet-500 text-sm">No products match your filters.</p>
              <button onClick={clearAll} className="mt-4 text-sm text-gold-600 hover:text-gold-700 underline underline-offset-4">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} dispatch={dispatch} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ProductCard({ product, dispatch }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD', productId: product.id, variant: 'gold', quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-3">
        <div
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-xs tracking-[0.1em] uppercase font-medium rounded-sm transition-all duration-300
              ${added
                ? 'bg-gold-500 text-velvet-950 border border-gold-500'
                : 'bg-white/95 text-velvet-900 border border-white/50 hover:bg-white'}`}
          >
            {added ? 'Added' : (
              <span className="flex items-center justify-center gap-1.5">
                <ShoppingBag className="w-3 h-3" />
                Add to Cart
              </span>
            )}
          </button>
        </div>
      </div>
      <h3 id={`shop-title-${product.id}`} className="product-name text-xs group-hover:text-gold-600 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
        <span className="text-xs text-velvet-500">{product.rating}</span>
      </div>
      <p className="text-sm text-velvet-800 mt-0.5 font-medium">${product.price}</p>
    </Link>
  );
}
