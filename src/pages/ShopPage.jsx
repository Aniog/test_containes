import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categoryOptions = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-cream font-sans text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 space-y-1.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} strokeWidth={0} className={i < Math.floor(product.rating) ? 'fill-gold' : 'fill-linen'} />
          ))}
          <span className="font-sans text-[10px] text-ink-faint ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-serif text-sm tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300 font-medium"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
        <p className="font-sans text-sm text-ink">${product.price}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (val) => {
    setCategory(val);
    setSearchParams(val !== 'all' ? { category: val } : {});
  };

  const activeFiltersCount = (category !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0);

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 md:py-16 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">
          Velmora Collection
        </p>
        <h1 id="shop-page-title" className="font-serif text-3xl md:text-4xl font-light text-ink">
          {category === 'all'
            ? 'All Jewelry'
            : categoryOptions.find(c => c.value === category)?.label || 'Shop'}
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink-muted border border-linen px-4 py-2.5 hover:border-ink hover:text-ink transition-all duration-300"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-gold text-cream text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active filter pills */}
            {category !== 'all' && (
              <button
                onClick={() => handleCategoryChange('all')}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase text-gold border border-gold/30 bg-gold/10 px-3 py-1.5 hover:bg-gold/20 transition-colors duration-300"
              >
                {categoryOptions.find(c => c.value === category)?.label}
                <X size={10} strokeWidth={2} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-ink-faint hidden sm:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-sans text-xs tracking-widest uppercase text-ink-muted bg-transparent border border-linen px-3 py-2.5 focus:outline-none focus:border-ink transition-colors duration-300 cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-56 flex-shrink-0 animate-fade-in">
              <div className="sticky top-24 space-y-8">
                {/* Category filter */}
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4 pb-2 border-b border-linen">
                    Category
                  </h3>
                  <ul className="space-y-2">
                    {categoryOptions.map(opt => (
                      <li key={opt.value}>
                        <button
                          onClick={() => handleCategoryChange(opt.value)}
                          className={`font-sans text-sm transition-colors duration-300 ${
                            category === opt.value
                              ? 'text-gold font-medium'
                              : 'text-ink-muted hover:text-ink'
                          }`}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price filter */}
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4 pb-2 border-b border-linen">
                    Price
                  </h3>
                  <ul className="space-y-2">
                    {priceRanges.map(opt => (
                      <li key={opt.value}>
                        <button
                          onClick={() => setPriceRange(opt.value)}
                          className={`font-sans text-sm transition-colors duration-300 ${
                            priceRange === opt.value
                              ? 'text-gold font-medium'
                              : 'text-ink-muted hover:text-ink'
                          }`}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material filter */}
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4 pb-2 border-b border-linen">
                    Material
                  </h3>
                  <ul className="space-y-2">
                    {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                      <li key={m}>
                        <button className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-300">
                          {m}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-ink-muted italic mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-4 md:gap-6 ${
                filterOpen
                  ? 'grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
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
