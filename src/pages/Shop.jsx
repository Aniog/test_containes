import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
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
      <div className="relative aspect-[3/4] bg-stone-pale overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.img2Id}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-charcoal text-ivory text-[9px] uppercase tracking-widest font-sans px-2 py-1">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className="w-full bg-charcoal/90 text-ivory text-[10px] uppercase tracking-widest font-sans py-3 hover:bg-charcoal transition-colors"
          >
            {added ? '✓ Added' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-title-${product.id}`} className="font-serif text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors duration-300">
        {product.name}
      </p>
      <p id={`shop-desc-${product.id}`} className="text-xs text-stone font-sans mt-1">{product.shortDesc}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="font-sans text-sm text-charcoal font-medium">${product.price}</p>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-light'}`} strokeWidth={0} />
            ))}
          </div>
          <span className="text-[10px] text-stone font-sans">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (range) => {
    setSelectedPrices(prev =>
      prev.includes(range.label) ? prev.filter(l => l !== range.label) : [...prev, range.label]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSort('featured');
  };

  const filtered = products
    .filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))
    .filter(p => {
      if (selectedPrices.length === 0) return true;
      return selectedPrices.some(label => {
        const range = PRICE_RANGES.find(r => r.label === label);
        return range && p.price >= range.min && p.price < range.max;
      });
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFilterCount = selectedCategories.length + selectedPrices.length;

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered.length, sort, selectedCategories.join(','), selectedPrices.join(',')]);

  return (
    <div className="min-h-screen bg-ivory pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-stone-pale">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">All Jewelry</h1>
          <p className="text-sm font-sans text-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-stone-pale">
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-charcoal hover:text-gold transition-colors duration-300"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filter
            {activeFilterCount > 0 && (
              <span className="bg-gold text-charcoal text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-widest font-sans text-charcoal pr-6 py-1 focus:outline-none cursor-pointer hover:text-gold transition-colors"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone pointer-events-none" strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-52 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs uppercase tracking-widest font-sans text-charcoal">Filters</p>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] uppercase tracking-widest font-sans text-stone hover:text-charcoal transition-colors flex items-center gap-1"
                  >
                    <X className="w-3 h-3" strokeWidth={1.5} />
                    Clear
                  </button>
                )}
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-4">Category</p>
                <div className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => toggleCategory(cat)}
                        className={`w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                          selectedCategories.includes(cat)
                            ? 'bg-charcoal border-charcoal'
                            : 'border-stone-light group-hover:border-charcoal'
                        }`}
                      >
                        {selectedCategories.includes(cat) && (
                          <div className="w-1.5 h-1.5 bg-ivory" />
                        )}
                      </div>
                      <span
                        onClick={() => toggleCategory(cat)}
                        className="text-xs font-sans text-charcoal capitalize cursor-pointer"
                      >
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-4">Price</p>
                <div className="space-y-3">
                  {PRICE_RANGES.map(range => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => togglePrice(range)}
                        className={`w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                          selectedPrices.includes(range.label)
                            ? 'bg-charcoal border-charcoal'
                            : 'border-stone-light group-hover:border-charcoal'
                        }`}
                      >
                        {selectedPrices.includes(range.label) && (
                          <div className="w-1.5 h-1.5 bg-ivory" />
                        )}
                      </div>
                      <span
                        onClick={() => togglePrice(range)}
                        className="text-xs font-sans text-charcoal cursor-pointer"
                      >
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
                <p className="font-serif text-2xl text-charcoal font-light mb-3">No pieces found</p>
                <p className="text-sm text-stone font-sans mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest font-sans text-charcoal border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-ivory transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={containerRef}
                className={`grid gap-5 lg:gap-6 ${
                  filterOpen
                    ? 'grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {filtered.map(product => (
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
