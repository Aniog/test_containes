import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-champagne text-velvet font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && !product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velvet text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-velvet/90 backdrop-blur-sm text-ivory font-sans text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-champagne hover:text-velvet transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-${product.titleId}`} className="font-sans text-[10px] tracking-widest uppercase text-velvet font-medium mb-1">
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="font-sans text-[10px] text-stone mb-2 line-clamp-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg text-velvet">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} className="text-champagne fill-champagne" />
          <span className="font-sans text-[10px] text-stone">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(120);
  const [sort, setSort] = useState('featured');

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price > priceRange) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-parchment border-b border-mink/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velvet font-light">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-mink/20">
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-velvet transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] text-stone hidden md:block">Sort by:</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-sans text-xs text-velvet bg-transparent border border-mink/30 px-3 py-1.5 outline-none focus:border-champagne cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside
            className={`flex-shrink-0 transition-all duration-300 overflow-hidden ${
              filterOpen ? 'w-56 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <div className="w-56 pr-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-[10px] tracking-widest uppercase text-velvet">Filters</span>
                <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-velvet">
                  <X size={14} strokeWidth={1.5} />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone mb-4">Category</p>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`text-left font-sans text-xs transition-colors ${
                        activeCategory === cat ? 'text-champagne' : 'text-stone hover:text-velvet'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone mb-4">
                  Max Price: <span className="text-velvet">${priceRange}</span>
                </p>
                <input
                  type="range"
                  min={30}
                  max={120}
                  step={5}
                  value={priceRange}
                  onChange={e => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-sans text-[9px] text-stone">$30</span>
                  <span className="font-sans text-[9px] text-stone">$120</span>
                </div>
              </div>

              {/* Material filter */}
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone mb-4">Material</p>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-mink/40 group-hover:border-champagne transition-colors" />
                      <span className="font-sans text-xs text-stone group-hover:text-velvet transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Category pills (mobile/quick filter) */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`font-sans text-[10px] tracking-widest uppercase px-4 py-1.5 border transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'border-champagne bg-champagne text-velvet'
                      : 'border-mink/30 text-stone hover:border-champagne hover:text-velvet'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velvet mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
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
