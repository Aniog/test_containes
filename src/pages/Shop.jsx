import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materialFilters = ['All', '18K Gold Plated'];
const priceRanges = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const shopImgIdMap = {
    'vivid-aura-jewels': 'shop-vivid-aura-jewels',
    'majestic-flora-nectar': 'shop-majestic-flora-nectar',
    'golden-sphere-huggies': 'shop-golden-sphere-huggies',
    'amber-lace-earrings': 'shop-amber-lace-earrings',
    'royal-heirloom-set': 'shop-royal-heirloom-set',
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const categoryParam = searchParams.get('category') || 'All';
  const sortParam = searchParams.get('sort') || 'featured';
  const materialParam = searchParams.get('material') || 'All';
  const priceParam = searchParams.get('price') || 'All';

  const [filters, setFilters] = useState({
    category: categoryParam,
    sort: sortParam,
    material: materialParam,
    price: priceParam,
  });

  // Sync URL params
  useEffect(() => {
    const params = {};
    if (filters.category !== 'All') params.category = filters.category;
    if (filters.sort !== 'featured') params.sort = filters.sort;
    if (filters.material !== 'All') params.material = filters.material;
    if (filters.price !== 'All') params.price = filters.price;
    setSearchParams(params);
  }, [filters]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'All') {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.material !== 'All') {
      result = result.filter((p) => p.material === filters.material);
    }
    if (filters.price !== 'All') {
      const range = priceRanges.find((r) => r.label === filters.price);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleQuickAdd = (product) => {
    addItem(product, product.variants[0], 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-900 font-medium mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`text-left text-sm transition-colors ${
                filters.category === cat
                  ? 'text-gold font-medium'
                  : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-900 font-medium mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-2">
          {materialFilters.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat)}
              className={`text-left text-sm transition-colors ${
                filters.material === mat
                  ? 'text-gold font-medium'
                  : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-velvet-900 font-medium mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`text-left text-sm transition-colors ${
                filters.price === range.label
                  ? 'text-gold font-medium'
                  : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() =>
          setFilters({ category: 'All', sort: 'featured', material: 'All', price: 'All' })
        }
        className="text-xs tracking-wider uppercase text-velvet-500 hover:text-gold transition-colors"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-velvet-900">
          {filters.category !== 'All' ? filters.category : 'Shop All'}
        </h1>
        <p className="mt-2 text-velvet-500 text-sm font-light tracking-wide">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
        <hr className="hairline-divider w-16 mx-auto mt-5" />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between pb-6 border-b border-velvet-100 mb-8">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-700 font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        <div className="hidden lg:block w-56" />

        <div className="flex items-center gap-2">
          <span className="text-xs text-velvet-500 hidden sm:inline">Sort by:</span>
          <select
            value={filters.sort}
            onChange={(e) => setFilter('sort', e.target.value)}
            className="text-xs tracking-wider text-velvet-700 font-medium bg-transparent border border-velvet-200 py-2 px-3 focus:outline-none focus:border-velvet-600 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Sidebar - desktop */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <FilterContent />
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velvet-500">No products match your filters.</p>
              <button
                onClick={() =>
                  setFilters({ category: 'All', sort: 'featured', material: 'All', price: 'All' })
                }
                className="text-xs tracking-wider uppercase text-gold hover:text-gold-600 mt-4 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <article key={product.id} className="group">
                  <div className="relative aspect-[3/4] bg-velvet-50 overflow-hidden">
                    <Link to={`/product/${product.slug}`}>
                      <img
                        alt={product.name}
                        data-strk-img-id={shopImgIdMap[product.slug]}
                        data-strk-img={`[shop-name-${product.slug}] [shop-desc-${product.slug}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <span id={`shop-name-${product.slug}`} className="hidden">{product.name}</span>
                    <span id={`shop-desc-${product.slug}`} className="hidden">{product.description}</span>

                    {/* Quick add */}
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
                        addedId === product.id
                          ? 'bg-green-600 text-white'
                          : 'bg-white/90 backdrop-blur-sm text-velvet-900 opacity-0 group-hover:opacity-100 hover:bg-gold hover:text-white'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 mt-3 hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-[11px] text-velvet-600">{product.rating}</span>
                    <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
                  </div>
                  <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wider text-velvet-900">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-velvet-500 hover:text-velvet-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-10"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
