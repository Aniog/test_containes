import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-40', label: 'Under $40' },
  { id: '40-70', label: '$40 - $70' },
  { id: '70-100', label: '$70 - $100' },
  { id: 'over-100', label: 'Over $100' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, material, sort]);

  // Sync URL param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.some((c) => c.id === cat)) {
      setCategory(cat);
    }
  }, [searchParams]);

  const filtered = products.filter((p) => {
    if (category !== 'all' && p.category !== category) return false;
    if (priceRange === 'under-40' && p.price >= 40) return false;
    if (priceRange === '40-70' && (p.price < 40 || p.price > 70)) return false;
    if (priceRange === '70-100' && (p.price < 70 || p.price > 100)) return false;
    if (priceRange === 'over-100' && p.price <= 100) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-brand-text mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left font-sans text-sm transition-colors py-1 ${
                category === cat.id
                  ? 'text-brand-accent font-medium'
                  : 'text-brand-text-secondary hover:text-brand-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-brand-text mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((pr) => (
            <button
              key={pr.id}
              onClick={() => setPriceRange(pr.id)}
              className={`block w-full text-left font-sans text-sm transition-colors py-1 ${
                priceRange === pr.id
                  ? 'text-brand-accent font-medium'
                  : 'text-brand-text-secondary hover:text-brand-text'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-widest text-brand-text mb-4">Material</h4>
        <div className="space-y-2.5">
          {['all', 'gold', 'silver'].map((m) => (
            <button
              key={m}
              onClick={() => setMaterial(m)}
              className={`block w-full text-left font-sans text-sm capitalize transition-colors py-1 ${
                material === m
                  ? 'text-brand-accent font-medium'
                  : 'text-brand-text-secondary hover:text-brand-text'
              }`}
            >
              {m === 'all' ? 'All Materials' : `${m} Tone`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="border-b border-brand-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="section-heading">Shop</h1>
              <p className="font-sans text-sm text-brand-text-secondary mt-1">
                {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile filter button */}
              <button
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors"
                onClick={() => setMobileFilters(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-widest text-brand-text-secondary hover:text-brand-text pr-6 py-2 cursor-pointer transition-colors focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-text-muted pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex gap-10 py-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-text-secondary mb-2">No pieces found</p>
                <p className="font-sans text-sm text-brand-text-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
                  <ShopProductCard key={product.id} product={product} onAddToCart={addItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-brand-surface p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-brand-text">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </main>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-brand-surface-alt rounded-sm overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[shop-name-${product.id}] [shop-desc-${product.id}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-brand-surface-alt transition-all duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              data-strk-img-id={`${product.imgId}-hover`}
              data-strk-img={`[shop-name-${product.id}] [shop-desc-${product.id}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product, 'gold');
            }}
            className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </a>

      <span id={`shop-name-${product.id}`} className="hidden">{product.name}</span>
      <span id={`shop-desc-${product.id}`} className="hidden">{product.description}</span>

      <a href={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs mb-0.5">{product.name}</h3>
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'
              }`}
            />
          ))}
          <span className="font-sans text-[10px] text-brand-text-muted ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <p className="price">${product.price}</p>
      </a>
    </div>
  );
}