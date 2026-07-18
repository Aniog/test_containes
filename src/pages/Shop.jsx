import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Star, ShoppingBag } from 'lucide-react';
import products, { categories, priceRanges, collections } from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useCartDispatch();
  const containerRef = useRef(null);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activeCollection = searchParams.get('collection') || '';
  const activePrice = searchParams.get('price') || 'all';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeCollection === 'bestsellers') {
      result = result.filter((p) => p.bestseller);
    } else if (activeCollection === 'new-arrivals') {
      result = result.filter((p) => p.newArrival);
    }

    if (activePrice !== 'all') {
      const range = priceRanges.find((r) => r.id === activePrice);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
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
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeCollection, activePrice, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeCollection, activePrice, sortBy]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearAll = () => {
    setSearchParams({});
  };

  const hasFilters = activeCategory !== 'all' || activeCollection || activePrice !== 'all';

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center py-12 md:py-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4952E] mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-[2.25rem] md:text-[3rem] tracking-[0.04em]">
            {activeCategory !== 'all' ? activeCategory : 'Shop All'}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E3D9] mb-8">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-[13px] tracking-wider uppercase font-medium md:hidden"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filter & Sort
          </button>

          <div className="hidden md:flex items-center gap-6">
            {hasFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#78716C] hover:text-[#252320] transition-colors"
              >
                <X size={13} strokeWidth={1.5} />
                Clear All
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-wider uppercase text-[#78716C] hidden md:inline">
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[13px] font-medium bg-transparent border-none cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <FilterBlock title="Category">
                {categories.map((c) => (
                  <FilterItem
                    key={c.id}
                    active={activeCategory === c.id}
                    onClick={() => setFilter('category', c.id)}
                  >
                    {c.name}
                  </FilterItem>
                ))}
              </FilterBlock>

              <FilterBlock title="Collection">
                {collections.map((c) => (
                  <FilterItem
                    key={c.id}
                    active={activeCollection === c.id}
                    onClick={() => setFilter('collection', c.id)}
                  >
                    {c.name}
                  </FilterItem>
                ))}
              </FilterBlock>

              <FilterBlock title="Price">
                {priceRanges.map((r) => (
                  <FilterItem
                    key={r.id}
                    active={activePrice === r.id}
                    onClick={() => setFilter('price', r.id)}
                  >
                    {r.name}
                  </FilterItem>
                ))}
              </FilterBlock>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setMobileFilterOpen(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>

                <div className="space-y-8">
                  <FilterBlock title="Category">
                    {categories.map((c) => (
                      <FilterItem
                        key={c.id}
                        active={activeCategory === c.id}
                        onClick={() => setFilter('category', c.id)}
                      >
                        {c.name}
                      </FilterItem>
                    ))}
                  </FilterBlock>

                  <FilterBlock title="Collection">
                    {collections.map((c) => (
                      <FilterItem
                        key={c.id}
                        active={activeCollection === c.id}
                        onClick={() => setFilter('collection', c.id)}
                      >
                        {c.name}
                      </FilterItem>
                    ))}
                  </FilterBlock>

                  <FilterBlock title="Price">
                    {priceRanges.map((r) => (
                      <FilterItem
                        key={r.id}
                        active={activePrice === r.id}
                        onClick={() => setFilter('price', r.id)}
                      >
                        {r.name}
                      </FilterItem>
                    ))}
                  </FilterBlock>
                </div>

                {hasFilters && (
                  <button
                    onClick={() => {
                      clearAll();
                      setMobileFilterOpen(false);
                    }}
                    className="mt-6 text-[11px] tracking-wider uppercase text-[#78716C] underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#78716C] text-sm mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="btn-ghost text-xs tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-[#A8A39C] mb-6">
                  {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      onQuickAdd={(p) =>
                        dispatch({
                          type: 'ADD_ITEM',
                          payload: {
                            product: p,
                            variant: p.variants[0],
                            quantity: 1,
                          },
                        })
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FilterBlock({ title, children }) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#A8A39C] mb-3">
        {title}
      </h4>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function FilterItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-left text-[13px] transition-colors duration-200 ${
        active
          ? 'text-[#252320] font-medium'
          : 'text-[#78716C] hover:text-[#252320]'
      }`}
    >
      {children}
    </button>
  );
}

function ShopProductCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-[3/4] bg-[#F5EDDA] overflow-hidden mb-4"
      >
        <img
          data-strk-img-id={`shop-${product.id}-img`}
          data-strk-img={`[shop-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.newArrival && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] tracking-widest uppercase font-medium text-[#252320] px-2.5 py-1">
            New
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-[11px] tracking-wider uppercase font-medium text-[#252320] hover:bg-[#C4952E] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div>
        <p
          id={`shop-name-${product.id}`}
          className="product-name text-xs md:text-[13px] mb-1.5"
        >
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium tracking-wide">
            ${product.price}
          </span>
          <div className="flex items-center gap-0.5">
            <Star size={11} fill="#C4952E" stroke="#C4952E" />
            <span className="text-[11px] text-[#78716C]">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
