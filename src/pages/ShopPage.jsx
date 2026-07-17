import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link ref={cardRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-ivory-dark overflow-hidden product-img-wrap">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="mt-4 px-1">
        <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight">
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-xs text-taupe mt-1 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-semibold text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-gold fill-gold" />
            <span className="font-sans text-xs text-taupe">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';
  const priceParam = searchParams.get('price') || '0';
  const queryParam = searchParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find((c) => c.toLowerCase() === categoryParam) || 'All'
  );
  const [activePrice, setActivePrice] = useState(parseInt(priceParam));
  const [activeSort, setActiveSort] = useState(sortParam);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    updateParam('category', cat.toLowerCase());
  };

  const handlePrice = (idx) => {
    setActivePrice(idx);
    updateParam('price', idx);
  };

  const handleSort = (val) => {
    setActiveSort(val);
    updateParam('sort', val);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (queryParam) {
      const q = queryParam.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory.toLowerCase());
    }

    const priceRange = PRICE_RANGES[activePrice] || PRICE_RANGES[0];
    list = list.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

    if (activeSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, activePrice, activeSort, queryParam]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-14 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            {queryParam ? `Search: "${queryParam}"` : 'The Collection'}
          </p>
          <h1 id="shop-page-title" className="font-serif text-4xl md:text-5xl font-light text-ivory">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-taupe-light mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategory(cat)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          activeCategory === cat
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-obsidian'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline mb-8" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => handlePrice(i)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          activePrice === i
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-obsidian border border-ivory-dark px-4 py-2.5 hover:border-taupe transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="font-sans text-xs uppercase tracking-widest text-taupe hidden sm:block">
                  Sort:
                </span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => handleSort(e.target.value)}
                    className="appearance-none bg-transparent border border-ivory-dark font-sans text-xs uppercase tracking-widest text-obsidian px-4 py-2.5 pr-8 outline-none hover:border-taupe transition-colors cursor-pointer"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="font-sans text-sm text-taupe mb-6">
                  Try adjusting your filters or browse all jewelry.
                </p>
                <button
                  onClick={() => { handleCategory('All'); handlePrice(0); }}
                  className="font-sans text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/50 cart-overlay"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-ivory flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
              <h2 className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium">
                Filter
              </h2>
              <button onClick={() => setFilterOpen(false)} className="text-taupe hover:text-obsidian">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => { handleCategory(cat); setFilterOpen(false); }}
                        className={`font-sans text-sm ${activeCategory === cat ? 'text-gold font-medium' : 'text-taupe'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hairline mb-8" />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-3">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => { handlePrice(i); setFilterOpen(false); }}
                        className={`font-sans text-sm ${activePrice === i ? 'text-gold font-medium' : 'text-taupe'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
