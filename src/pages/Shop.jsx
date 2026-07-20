import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-stone aspect-product mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-ink/90 backdrop-blur-sm text-velmora-cream font-inter text-[11px] tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-ink transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-inter text-[10px] tracking-[0.1em] uppercase bg-velmora-gold text-velmora-ink px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      <p id={`shop-${product.titleId}`} className="font-cormorant text-base font-medium tracking-[0.12em] uppercase text-velmora-ink leading-tight mb-1">
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-inter text-sm text-velmora-charcoal">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="font-inter text-xs text-velmora-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setSelectedCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter((p) => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory.toLowerCase();
      const priceMatch = p.price >= selectedPrice.min && p.price <= selectedPrice.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-velmora-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-stone border-b border-velmora-gold/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-velmora-ink tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-gold/15">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs tracking-[0.1em] uppercase text-velmora-ink border border-velmora-gold/30 px-4 py-2.5 hover:border-velmora-gold transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-inter text-xs text-velmora-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs tracking-[0.1em] uppercase text-velmora-ink border border-velmora-gold/30 px-4 py-2.5 hover:border-velmora-gold transition-colors"
            >
              Sort: {SORT_OPTIONS.find((s) => s.value === sortBy)?.label}
              <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-velmora-cream border border-velmora-gold/20 shadow-card z-20 min-w-[180px]">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-inter text-xs tracking-[0.08em] hover:bg-velmora-stone transition-colors ${
                      sortBy === opt.value ? 'text-velmora-gold' : 'text-velmora-charcoal'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop always visible, mobile drawer */}
          <aside
            className={`
              fixed inset-0 z-40 bg-velmora-cream p-8 pt-20 overflow-y-auto transition-transform duration-400 md:static md:translate-x-0 md:z-auto md:p-0 md:w-52 md:flex-shrink-0 md:block
              ${filterOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div className="flex items-center justify-between mb-8 md:hidden">
              <h2 className="font-cormorant text-2xl font-light text-velmora-ink">Filters</h2>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-muted" strokeWidth={1.5} />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-inter text-[11px] tracking-[0.15em] uppercase text-velmora-gold mb-4">
                Category
              </h3>
              <ul className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                      className={`font-inter text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-muted hover:text-velmora-ink'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-inter text-[11px] tracking-[0.15em] uppercase text-velmora-gold mb-4">
                Price
              </h3>
              <ul className="flex flex-col gap-2">
                {PRICE_RANGES.map((range) => (
                  <li key={range.label}>
                    <button
                      onClick={() => { setSelectedPrice(range); setFilterOpen(false); }}
                      className={`font-inter text-sm transition-colors ${
                        selectedPrice.label === range.label
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-muted hover:text-velmora-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active filters */}
            {(selectedCategory !== 'All' || selectedPrice.label !== 'All Prices') && (
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedPrice(PRICE_RANGES[0]); setSearchParams({}); }}
                className="font-inter text-xs tracking-[0.08em] uppercase text-velmora-muted hover:text-velmora-ink underline underline-offset-2 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </aside>

          {/* Mobile filter backdrop */}
          {filterOpen && (
            <div
              className="fixed inset-0 z-30 bg-velmora-ink/30 md:hidden"
              onClick={() => setFilterOpen(false)}
            />
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-velmora-ink mb-3">No pieces found</p>
                <p className="font-inter text-sm text-velmora-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

export default ShopPage;
