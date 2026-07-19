import { useEffect, useRef, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-stone aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {product.tags?.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-espresso font-inter text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-espresso text-cream font-inter text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3 h-3" />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>
      <div className="pt-3">
        <p id={product.titleId} className="font-cormorant text-sm font-medium tracking-widest uppercase text-charcoal">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5" style={{ color: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF', fill: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF' }} />
            ))}
          </div>
          <p className="font-inter text-sm font-medium text-charcoal">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((range) => p.price >= range.min && p.price < range.max)
      );
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategories, selectedPrices, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (range) => {
    setSelectedPrices((prev) =>
      prev.some((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
  };

  const hasFilters = selectedCategories.length > 0 || selectedPrices.length > 0;

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="border-b border-divider py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-charcoal tracking-wide">
            The Collection
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors bg-transparent border-0 p-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter {hasFilters && `(${selectedCategories.length + selectedPrices.length})`}
          </button>

          <div className="flex items-center gap-2">
            <span className="font-inter text-[10px] tracking-wider uppercase text-warm-gray hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent font-inter text-xs tracking-wider uppercase text-charcoal pr-6 pl-0 py-1 border-0 border-b border-charcoal focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-charcoal pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-56 flex-shrink-0 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-[10px] tracking-widest uppercase text-charcoal">Filters</span>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-inter text-[10px] tracking-wider uppercase text-warm-gray hover:text-gold transition-colors bg-transparent border-0 p-0 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-4">Category</p>
                <div className="space-y-2.5">
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-3.5 h-3.5 accent-gold"
                      />
                      <span className="font-inter text-xs capitalize text-charcoal group-hover:text-gold transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-4">Price</p>
                <div className="space-y-2.5">
                  {PRICE_RANGES.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedPrices.some((r) => r.label === range.label)}
                        onChange={() => togglePrice(range)}
                        className="w-3.5 h-3.5 accent-gold"
                      />
                      <span className="font-inter text-xs text-charcoal group-hover:text-gold transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-warm-gray">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors bg-transparent border-0 border-b"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={containerRef}
                className={`grid gap-4 md:gap-6 ${
                  filterOpen
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
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
};

export default Shop;
