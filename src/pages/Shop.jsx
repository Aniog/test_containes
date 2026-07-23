import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-200', label: '$80+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.slug}`}
        className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]"
      >
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover product-img-zoom transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover product-img-zoom transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian text-[9px] font-sans font-semibold uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory text-[9px] font-sans font-semibold uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-obsidian/90 text-ivory hover:bg-gold hover:text-obsidian py-3 text-[10px] uppercase tracking-widest font-sans font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <span id={`shop-title-${product.id}`}>
          <Link to={`/product/${product.slug}`}>
            <p className="font-serif text-sm uppercase tracking-widest2 text-obsidian hover:text-gold transition-colors leading-tight">
              {product.name}
            </p>
          </Link>
        </span>
        <span id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-sans font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="text-[10px] font-sans text-taupe">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return max ? p.price >= min && p.price <= max : p.price >= min;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-ivory-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1
            id="shop-page-title"
            className="font-serif text-3xl md:text-5xl font-light text-obsidian"
          >
            {category === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="mt-3 text-sm font-sans text-taupe">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-taupe hover:text-gold transition-colors border border-ivory-dark px-4 py-2"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-4 py-2 text-[10px] font-sans uppercase tracking-widest border transition-all duration-200 ${
                  category === cat.value
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-ivory-dark text-taupe hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-[10px] font-sans uppercase tracking-widest text-taupe hidden md:block">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs font-sans text-obsidian bg-ivory border border-ivory-dark px-3 py-2 outline-none hover:border-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => handleCategoryChange(cat.value)}
                        className={`text-xs font-sans transition-colors ${
                          category === cat.value
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-gold'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline mb-8" />

              {/* Price filter */}
              <div>
                <h3 className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-xs font-sans transition-colors ${
                          priceRange === range.value
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-gold'
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

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-obsidian/40 cart-overlay" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-sans uppercase tracking-widest text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-taupe" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                        className={`px-3 py-1.5 text-[10px] font-sans uppercase tracking-widest border transition-all ${
                          category === cat.value
                            ? 'border-gold bg-gold text-obsidian'
                            : 'border-ivory-dark text-taupe'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => { setPriceRange(range.value); setFilterOpen(false); }}
                        className={`px-3 py-1.5 text-[10px] font-sans uppercase tracking-widest border transition-all ${
                          priceRange === range.value
                            ? 'border-gold bg-gold text-obsidian'
                            : 'border-ivory-dark text-taupe'
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
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setPriceRange('all'); }}
                  className="mt-4 text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
