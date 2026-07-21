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
  { value: 'rating', label: 'Top Rated' },
];

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-cream mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-${product.id}-title] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-obsidian text-ivory text-[9px] uppercase tracking-widest px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-obsidian text-[9px] uppercase tracking-widest px-2 py-1">New</span>
          )}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={e => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian text-ivory text-[10px] uppercase tracking-widest py-3 hover:bg-charcoal transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <p id={`shop-${product.id}-title`} className="product-name text-sm">{product.name}</p>
      <p id={`shop-${product.id}-desc`} className="text-xs text-mist mt-1">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-serif text-base text-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" stroke="none" />
          <span className="text-[10px] text-mist">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, sort]);

  const priceRange = PRICE_RANGES[selectedPrice];

  const filtered = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange.min && p.price <= priceRange.max)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-14 lg:py-20">
        <div className="section-container text-center">
          <p className="section-label text-gold/70 mb-3">Discover</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-ivory">The Collection</h1>
          <p className="text-ivory/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Demi-fine gold jewelry designed for the everyday. 18K gold plated, hypoallergenic, and crafted to last.
          </p>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-obsidian transition-colors duration-200 lg:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="text-xs text-mist">{filtered.length} pieces</span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-linen text-xs uppercase tracking-widest text-stone px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters */}
          <aside className={`w-56 flex-shrink-0 ${filterOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-obsidian mb-4 pb-2 border-b border-linen">
                Category
              </h3>
              <ul className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSearchParams(cat !== 'all' ? { category: cat } : {});
                      }}
                      className={`text-sm capitalize transition-colors duration-200 ${
                        selectedCategory === cat
                          ? 'text-obsidian font-medium'
                          : 'text-mist hover:text-obsidian'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-obsidian mb-4 pb-2 border-b border-linen">
                Price
              </h3>
              <ul className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setSelectedPrice(i)}
                      className={`text-sm transition-colors duration-200 ${
                        selectedPrice === i
                          ? 'text-obsidian font-medium'
                          : 'text-mist hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-obsidian mb-4 pb-2 border-b border-linen">
                Material
              </h3>
              <ul className="flex flex-col gap-2">
                {['18K Gold Plated', 'Sterling Silver'].map(m => (
                  <li key={m}>
                    <button className="text-sm text-mist hover:text-obsidian transition-colors duration-200">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone mb-3">No pieces found</p>
                <p className="text-sm text-mist mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice(0); }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
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
