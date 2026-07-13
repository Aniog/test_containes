import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: hovered
                ? 'linear-gradient(145deg, #2C2018 0%, #3D2E1A 50%, #1A1614 100%)'
                : 'linear-gradient(145deg, #F2EDE4 0%, #E8D5A3 50%, #C9A96E 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span
                className={`font-cormorant text-6xl font-light transition-colors duration-500 ${
                  hovered ? 'text-velmora-gold/50' : 'text-velmora-obsidian/20'
                }`}
              >
                {product.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.tags?.includes('bestseller') && (
              <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-velmora-obsidian text-velmora-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleAdd}
              className={`w-full py-3 font-manrope text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-200 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-ivory'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight group-hover:text-velmora-gold transition-colors duration-200">
              {product.name}
            </h3>
            <span className="font-manrope text-sm font-medium text-velmora-charcoal flex-shrink-0">
              ${product.price}
            </span>
          </div>
          <p className="font-manrope text-xs text-velmora-stone mt-1">{product.shortDescription}</p>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gold/25'
                }`}
              />
            ))}
            <span className="font-manrope text-[10px] text-velmora-stone ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceIdx = parseInt(searchParams.get('price') || '0');
  const activeSort = searchParams.get('sort') || 'featured';

  const setCategory = (cat) => {
    const p = new URLSearchParams(searchParams);
    if (cat === 'all') p.delete('category');
    else p.set('category', cat);
    setSearchParams(p);
  };

  const setPriceRange = (idx) => {
    const p = new URLSearchParams(searchParams);
    if (idx === 0) p.delete('price');
    else p.set('price', idx.toString());
    setSearchParams(p);
  };

  const setSort = (val) => {
    const p = new URLSearchParams(searchParams);
    if (val === 'featured') p.delete('sort');
    else p.set('sort', val);
    setSearchParams(p);
    setSortOpen(false);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }
    const range = PRICE_RANGES[activePriceIdx];
    list = list.filter(p => p.price >= range.min && p.price <= range.max);
    if (activeSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, activePriceIdx, activeSort]);

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20 lg:pt-24">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            All Jewelry
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light">
            The Collection
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-velmora-gold/10">
          {/* Category pills */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-manrope text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 capitalize ${
                  activeCategory === cat
                    ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                    : 'bg-transparent text-velmora-stone border-velmora-gold/25 hover:border-velmora-gold hover:text-velmora-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="lg:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-charcoal border border-velmora-gold/25 px-4 py-2 hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="font-manrope text-xs text-velmora-stone hidden sm:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-charcoal border border-velmora-gold/25 px-4 py-2 hover:border-velmora-gold transition-colors"
              >
                {SORT_OPTIONS.find(o => o.value === activeSort)?.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-velmora-ivory border border-velmora-gold/20 shadow-lg z-20 min-w-[180px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSort(opt.value)}
                      className={`w-full text-left px-4 py-3 font-manrope text-xs uppercase tracking-widest transition-colors ${
                        activeSort === opt.value
                          ? 'text-velmora-gold bg-velmora-cream'
                          : 'text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block w-full text-left font-manrope text-xs capitalize transition-colors duration-200 py-1 ${
                        activeCategory === cat
                          ? 'text-velmora-gold'
                          : 'text-velmora-stone hover:text-velmora-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-velmora-gold/15" />

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`block w-full text-left font-manrope text-xs transition-colors duration-200 py-1 ${
                        activePriceIdx === i
                          ? 'text-velmora-gold'
                          : 'text-velmora-stone hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-velmora-gold/15" />

              {/* Material */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
                    <button
                      key={m}
                      className="block w-full text-left font-manrope text-xs text-velmora-stone hover:text-velmora-charcoal transition-colors duration-200 py-1"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-velmora-obsidian/40 backdrop-blur-sm">
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-ivory p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-stone" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { setCategory(cat); setFilterOpen(false); }}
                          className={`font-manrope text-xs uppercase tracking-widest px-3 py-2 border capitalize transition-all ${
                            activeCategory === cat
                              ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                              : 'border-velmora-gold/25 text-velmora-stone'
                          }`}
                        >
                          {cat === 'all' ? 'All' : cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">Price</h3>
                    <div className="flex flex-wrap gap-2">
                      {PRICE_RANGES.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => { setPriceRange(i); setFilterOpen(false); }}
                          className={`font-manrope text-xs uppercase tracking-widest px-3 py-2 border transition-all ${
                            activePriceIdx === i
                              ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                              : 'border-velmora-gold/25 text-velmora-stone'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-velmora-stone mb-3">No pieces found</p>
                <p className="font-manrope text-xs text-velmora-stone/60 uppercase tracking-widest mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs uppercase tracking-widest text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
