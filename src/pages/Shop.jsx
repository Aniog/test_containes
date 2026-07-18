import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem, openDrawer } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterOpen, setFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [addedId, setAddedId] = useState(null);

  const activeCategory = searchParams.get('category') || 'all';
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [materialFilter, setMaterialFilter] = useState('all');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy, priceRange, materialFilter]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material === materialFilter);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.reverse(); break;
      default: break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange, materialFilter]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const setCategory = (slug) => {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Header */}
      <div className="section-padding mb-10">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal text-center">
          Shop All
        </h1>
        <p className="mt-3 text-sm text-velmora-warmgray text-center max-w-md mx-auto">
          Explore our full collection of demi-fine gold jewelry. Each piece crafted to be worn and treasured.
        </p>
      </div>

      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent
              categories={categories}
              activeCategory={activeCategory}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              materialFilter={materialFilter}
              setMaterialFilter={setMaterialFilter}
            />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-slate hover:text-velmora-charcoal transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter & Sort
              </button>
              <p className="text-xs text-velmora-warmgray hidden lg:block">
                {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-[10px] tracking-widest uppercase text-velmora-warmgray">Sort</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-velmora-border pl-3 pr-8 py-1.5 text-xs text-velmora-charcoal cursor-pointer focus:outline-none focus:border-velmora-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-warmgray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal tracking-wide">No products found</p>
                <p className="text-sm text-velmora-warmgray mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => {
                  const isHovered = hoveredId === product.id;
                  const wasAdded = addedId === product.id;
                  return (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group block"
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                        <img
                          alt={product.shortName}
                          data-strk-img-id={`shop-${product.id}-${isHovered ? product.imgId2 : product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="hidden" id={product.titleId}>{product.shortName}</span>
                        <span className="hidden" id={product.descId}>{product.description}</span>

                        {/* Hover Add to Cart */}
                        <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            className={`w-full py-2.5 flex items-center justify-center gap-2 text-[11px] tracking-widest uppercase transition-colors ${
                              wasAdded
                                ? 'bg-green-700 text-white'
                                : 'bg-velmora-charcoal/90 backdrop-blur-sm text-white hover:bg-velmora-gold'
                            }`}
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            {wasAdded ? 'Added!' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 text-center">
                        <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-velmora-charcoal leading-tight">
                          {product.shortName}
                        </h3>
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                          <span className="text-xs text-velmora-warmgray">{product.rating}</span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-velmora-charcoal">${product.price}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-velmora-cream shadow-2xl overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between p-5 border-b border-velmora-border">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-slate" />
              </button>
            </div>
            <div className="p-5">
              <FilterContent
                categories={categories}
                activeCategory={activeCategory}
                setCategory={(slug) => { setCategory(slug); }}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                materialFilter={materialFilter}
                setMaterialFilter={setMaterialFilter}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}

function FilterContent({ categories: cats, activeCategory, setCategory, priceRange, setPriceRange, materialFilter, setMaterialFilter }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-warmgray mb-4">Category</h4>
        <div className="space-y-2">
          {cats.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.slug)}
              className={`block w-full text-left text-sm transition-colors ${
                activeCategory === cat.slug
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-slate hover:text-velmora-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline-divider" />

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-warmgray mb-4">Price</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="120"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-velmora-gold"
            />
          </div>
          <p className="text-xs text-velmora-warmgray">
            ${priceRange[0]} – ${priceRange[1]}
          </p>
        </div>
      </div>

      <div className="hairline-divider" />

      {/* Material */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-warmgray mb-4">Material</h4>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map(m => (
            <button
              key={m}
              onClick={() => setMaterialFilter(m)}
              className={`block w-full text-left text-sm capitalize transition-colors ${
                materialFilter === m
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-slate hover:text-velmora-charcoal'
              }`}
            >
              {m === 'all' ? 'All Materials' : `18K ${m} Plated`}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      {(activeCategory !== 'all' || materialFilter !== 'all' || priceRange[1] < 120) && (
        <>
          <div className="hairline-divider" />
          <button
            onClick={() => {
              setCategory('all');
              setPriceRange([0, 120]);
              setMaterialFilter('all');
            }}
            className="text-[10px] tracking-[0.2em] uppercase text-velmora-warmgray hover:text-velmora-charcoal transition-colors"
          >
            Clear All Filters
          </button>
        </>
      )}
    </div>
  );
}
