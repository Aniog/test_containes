import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const MATERIALS = ['All', '18K Gold Plated', 'Sterling Silver'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-espresso text-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">Bestseller</span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">New</span>
          )}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-espresso text-cream font-manrope text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-bark transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-cormorant text-base uppercase tracking-widest text-espresso hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-manrope text-xs text-stone mt-1">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-cormorant text-lg text-espresso">${product.price}</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5" style={{ fill: i < Math.floor(product.rating) ? '#b8935a' : 'none', color: i < Math.floor(product.rating) ? '#b8935a' : '#e8e0d4' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const priceRange = PRICE_RANGES[selectedPrice];

  const filtered = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange.min && p.price <= priceRange.max)
    .filter(p => selectedMaterial === 'All' || p.material === selectedMaterial);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">All Jewelry</h1>
          <p className="font-manrope text-sm text-stone mt-2">{sorted.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Filter sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-espresso mb-4">Category</h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-manrope text-xs transition-colors ${selectedCategory === cat ? 'text-gold font-medium' : 'text-bark hover:text-espresso'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-linen" />

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-espresso mb-4">Price</h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setSelectedPrice(i)}
                        className={`font-manrope text-xs transition-colors ${selectedPrice === i ? 'text-gold font-medium' : 'text-bark hover:text-espresso'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-linen" />

              {/* Material */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-espresso mb-4">Material</h3>
                <ul className="space-y-2.5">
                  {MATERIALS.map(mat => (
                    <li key={mat}>
                      <button
                        onClick={() => setSelectedMaterial(mat)}
                        className={`font-manrope text-xs transition-colors ${selectedMaterial === mat ? 'text-gold font-medium' : 'text-bark hover:text-espresso'}`}
                      >
                        {mat}
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
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-bark border border-linen px-4 py-2.5 hover:border-espresso transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="font-manrope text-xs text-stone hidden md:block">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-linen font-manrope text-xs text-bark px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-espresso transition-colors"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-bark">No pieces found</p>
                <p className="font-manrope text-xs text-stone mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sorted.map(product => (
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
          <div className="fixed inset-0 bg-espresso/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl uppercase tracking-widest text-espresso">Filters</span>
              <button onClick={() => setFilterOpen(false)}><X className="w-5 h-5 text-bark" /></button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-espresso mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`font-manrope text-xs px-4 py-2 border transition-colors ${selectedCategory === cat ? 'border-gold bg-gold-pale text-espresso' : 'border-linen text-bark'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-linen" />

              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-espresso mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(i)}
                      className={`font-manrope text-xs px-4 py-2 border transition-colors ${selectedPrice === i ? 'border-gold bg-gold-pale text-espresso' : 'border-linen text-bark'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full mt-8 bg-espresso text-cream font-manrope text-xs uppercase tracking-widest py-4"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
