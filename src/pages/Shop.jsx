import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const ShopCard = ({ product }) => {
  const { addItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-portrait">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`shop-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-obsidian/90 py-3 px-4">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full font-manrope text-[10px] tracking-widest uppercase text-parchment hover:text-gold transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <span className="font-cormorant text-base uppercase tracking-widest2 text-ink block leading-tight">
          {product.name}
        </span>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = priceRanges[activePriceIdx];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const setCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">All Jewelry</h1>
          <p className="font-manrope text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-manrope text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-divider text-muted hover:border-gold hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-200"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-manrope text-xs tracking-wider text-muted bg-transparent border border-divider px-4 py-2 focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activeCategory === cat ? 'text-gold' : 'text-muted hover:text-ink'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-divider pt-8">
                <h3 className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map((range, idx) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceIdx(idx)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activePriceIdx === idx ? 'text-gold' : 'text-muted hover:text-ink'
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

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-parchment overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
                <span className="font-manrope text-xs tracking-widest uppercase text-ink">Filters</span>
                <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="px-6 py-8 flex flex-col gap-8">
                <div>
                  <h3 className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setCategory(cat); setFilterOpen(false); }}
                        className={`font-manrope text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                          activeCategory === cat ? 'border-gold bg-gold text-obsidian' : 'border-divider text-muted'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-4">Price</h3>
                  <div className="flex flex-col gap-3">
                    {priceRanges.map((range, idx) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceIdx(idx); setFilterOpen(false); }}
                        className={`font-manrope text-xs text-left transition-colors duration-200 ${
                          activePriceIdx === idx ? 'text-gold' : 'text-muted'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-cormorant text-2xl text-muted italic mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceIdx(0); }}
                  className="font-manrope text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
