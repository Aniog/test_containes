import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-charcoal aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase bg-champagne text-velvet px-2 py-0.5 font-semibold">
            Bestseller
          </span>
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-400 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full py-3 bg-velvet/90 backdrop-blur-sm text-mist font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne hover:text-velvet transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <div className="pt-3 pb-2 space-y-1">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={10} />
        <h3 id={`shop-${product.titleId}`} className="font-serif text-sm tracking-widest uppercase text-velvet font-light leading-tight">
          {product.name}
        </h3>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-stone">{product.shortDesc}</p>
        <p className="font-sans text-sm text-velvet font-medium">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-mist min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b hairline py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3 font-medium">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velvet font-light">
            The Collection
          </h1>
          <p className="font-sans text-sm text-stone mt-3 max-w-md mx-auto">
            18K gold plated demi-fine jewelry. Hypoallergenic. Made to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 font-sans text-xs tracking-widest uppercase font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-velvet text-champagne border-velvet'
                    : 'bg-transparent text-stone border-smoke hover:border-velvet hover:text-velvet'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-champagne transition-colors border border-smoke px-3 py-1.5 hover:border-champagne"
            >
              <SlidersHorizontal size={13} />
              Filter
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-smoke px-4 py-1.5 pr-8 font-sans text-xs tracking-widest uppercase text-stone hover:border-velvet focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>

            <span className="font-sans text-xs text-stone hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-parchment border hairline p-6 mb-8 flex flex-wrap gap-8 items-start">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-velvet font-semibold mb-3">
                Price Range
              </p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`px-3 py-1.5 font-sans text-xs tracking-wide border transition-all duration-200 ${
                      activePriceRange.label === range.label
                        ? 'bg-velvet text-champagne border-velvet'
                        : 'bg-transparent text-stone border-smoke hover:border-velvet hover:text-velvet'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActivePriceRange(priceRanges[0]);
                setSortBy('featured');
              }}
              className="flex items-center gap-1.5 font-sans text-xs text-stone hover:text-champagne transition-colors mt-auto"
            >
              <X size={12} />
              Clear Filters
            </button>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-velvet/50 font-light">No pieces found</p>
              <button
                onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]); }}
                className="mt-4 font-sans text-xs tracking-widest uppercase text-champagne hover:text-gold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
