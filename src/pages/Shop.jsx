import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

const CATEGORY_FILTERS = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const PRICE_FILTERS = ['All', 'Under $50', '$50 - $75', '$75 - $100', 'Over $100'];
const MATERIAL_FILTERS = ['All', '18K Gold Plated', 'Sterling Silver'];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(
    CATEGORY_FILTERS.find(c => c.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  );
  const [priceRange, setPriceRange] = useState('All');
  const [material, setMaterial] = useState('All');
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORY_FILTERS.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [category, priceRange, material, sort]);

  const filteredProducts = products
    .filter(p => category === 'All' || p.category.toLowerCase() === category.toLowerCase())
    .filter(p => {
      if (priceRange === 'All') return true;
      if (priceRange === 'Under $50') return p.price < 50;
      if (priceRange === '$50 - $75') return p.price >= 50 && p.price <= 75;
      if (priceRange === '$75 - $100') return p.price >= 75 && p.price <= 100;
      if (priceRange === 'Over $100') return p.price > 100;
      return true;
    })
    .filter(p => material === 'All' || p.material === material)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const FilterSection = ({ title, options, value, onChange }) => (
    <div className="mb-6">
      <h4 className="text-xs font-sans uppercase tracking-wide text-velmora-ink font-medium mb-3">{title}</h4>
      <div className="space-y-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`block w-full text-left text-sm font-sans transition-colors ${
              value === option ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="pt-24 md:pt-28 pb-8 bg-velmora-warm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-heading md:text-4xl text-velmora-ink tracking-wide">The Collection</h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-wide text-velmora-ink md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm font-sans text-velmora-muted hidden md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs font-sans uppercase tracking-wide text-velmora-ink pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <FilterSection title="Category" options={CATEGORY_FILTERS} value={category} onChange={setCategory} />
            <FilterSection title="Price" options={PRICE_FILTERS} value={priceRange} onChange={setPriceRange} />
            <FilterSection title="Material" options={MATERIAL_FILTERS} value={material} onChange={setMaterial} />
          </div>

          {/* Mobile filters overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowFilters(false)} />
              <div className="absolute top-0 left-0 h-full w-72 bg-velmora-cream p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-velmora-ink">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5 text-velmora-muted" />
                  </button>
                </div>
                <FilterSection title="Category" options={CATEGORY_FILTERS} value={category} onChange={setCategory} />
                <FilterSection title="Price" options={PRICE_FILTERS} value={priceRange} onChange={setPriceRange} />
                <FilterSection title="Material" options={MATERIAL_FILTERS} value={material} onChange={setMaterial} />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-ink mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[4/5] bg-velmora-warm overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-black/20 flex items-end justify-center pb-4 transition-opacity duration-300 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="bg-white text-velmora-ink font-sans text-[10px] uppercase tracking-wide px-5 py-2.5 flex items-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3
                      id={`shop-${product.titleId}`}
                      className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-velmora-ink"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={`shop-${product.descId}`}
                      className="text-xs text-velmora-muted mt-0.5 line-clamp-1"
                    >
                      {product.description}
                    </p>
                    <p className="text-sm font-sans font-medium text-velmora-ink mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
