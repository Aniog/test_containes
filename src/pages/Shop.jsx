import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { StarRating } from '@/components/shared/StarRating';
import { useCart } from '@/context/CartContext';

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
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-ivory text-[9px] font-sans uppercase tracking-widest px-2 py-1">
            Bestseller
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-velmora-obsidian/90 text-velmora-ivory py-3 text-[10px] font-sans uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="text-[10px] font-sans text-velmora-mink">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-serif text-sm uppercase tracking-product text-velmora-obsidian hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="text-[11px] font-sans text-velmora-mink mt-0.5">
          {product.shortDescription}
        </p>
        <span className="font-serif text-base text-velmora-obsidian mt-2 block">
          {formatPrice(product.price)}
        </span>
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
  };

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-stone py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-velmora-obsidian">
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-velmora-charcoal border border-velmora-stone px-4 py-2.5 hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal border border-velmora-stone px-3 py-2.5 bg-transparent focus:outline-none focus:border-velmora-gold"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-8 p-6 bg-velmora-cream border border-velmora-stone">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-4 h-4 text-velmora-mink" />
              </button>
            </div>
            <FilterPanel
              category={category}
              setCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        )}

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel
              category={category}
              setCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort + count */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-xs font-sans text-velmora-mink">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal border border-velmora-stone px-4 py-2.5 bg-transparent focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-obsidian mb-3">No pieces found</p>
                <p className="text-xs font-sans text-velmora-mink uppercase tracking-widest mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="text-xs font-sans uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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

function FilterPanel({ category, setCategory, priceRange, setPriceRange }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.value}>
              <button
                onClick={() => setCategory(c.value)}
                className={`text-xs font-sans transition-colors ${
                  category === c.value
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-charcoal hover:text-velmora-gold'
                }`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-velmora-stone" />

      {/* Price */}
      <div>
        <h3 className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r) => (
            <li key={r.value}>
              <button
                onClick={() => setPriceRange(r.value)}
                className={`text-xs font-sans transition-colors ${
                  priceRange === r.value
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-charcoal hover:text-velmora-gold'
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-velmora-stone" />

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {['Gold Tone', 'Silver Tone', 'Rose Gold'].map((m) => (
            <li key={m}>
              <button className="text-xs font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
