import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
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
    addItem(product, 'gold');
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
      <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-${product.id}-title] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velvet/90 text-cream font-sans text-xs tracking-widest2 uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-cream font-sans text-xs tracking-widest px-2 py-1 uppercase">
            Bestseller
          </div>
        )}
      </div>

      <p id={`shop-${product.id}-title`} className="font-serif text-sm text-velvet tracking-widest2 uppercase mb-1 group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <p id={`shop-${product.id}-desc`} className="font-sans text-xs text-stone mb-2 line-clamp-1">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-charcoal font-medium">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="font-sans text-xs text-stone">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      const range = PRICE_RANGES[priceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory border-b border-mist py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-velvet font-light">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-mist">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  category === cat
                    ? 'border-gold bg-gold text-cream'
                    : 'border-mist text-stone hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(o => !o)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest2 uppercase text-stone hover:text-gold transition-colors lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-mist font-sans text-xs text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-sans text-xs tracking-widest3 uppercase text-charcoal mb-5">Filter</h3>

              {/* Category */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Category</p>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-sans text-sm transition-colors ${
                          category === cat ? 'text-gold font-medium' : 'text-stone hover:text-gold'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Price</p>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setPriceRange(i)}
                        className={`font-sans text-sm transition-colors ${
                          priceRange === i ? 'text-gold font-medium' : 'text-stone hover:text-gold'
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
                <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Material</p>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-stone hover:text-gold transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 bg-cream lg:hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
                <h3 className="font-serif text-lg text-velvet">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-stone" />
                </button>
              </div>
              <div className="px-6 py-6 space-y-8">
                <div>
                  <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                          category === cat ? 'border-gold bg-gold text-cream' : 'border-mist text-stone'
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setPriceRange(i); setFilterOpen(false); }}
                        className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                          priceRange === i ? 'border-gold bg-gold text-cream' : 'border-mist text-stone'
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
                <p className="font-serif text-2xl text-stone mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0); }}
                  className="font-sans text-xs tracking-widest2 uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
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
