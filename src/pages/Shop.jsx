import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $100', min: 80, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] shop`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgIdHover}
            data-strk-img={`[${product.descId}] [${product.titleId}] shop hover`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 shadow-sm hover:bg-accent hover:text-white transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        aria-label="Add to cart"
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-product text-stone-900 group-hover:text-accent transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-stone-500 mt-0.5">{product.description}</p>
        <p className="text-sm font-medium text-stone-900 mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    const range = priceRanges[priceRange];
    result = result.filter(p => p.price >= range.min && p.price <= range.max);

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [category, priceRange, sort]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      {/* Page header */}
      <div className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14 text-center">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-stone-900">
            The Collection
          </h1>
          <p className="mt-3 text-stone-500 font-light max-w-md mx-auto">
            Discover pieces designed to be treasured — everyday elegance in 18K gold.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-nav font-medium text-stone-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <span className="text-xs text-stone-500">{filteredProducts.length} pieces</span>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-nav font-semibold text-stone-900 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {allCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block text-sm transition-colors ${
                        category === cat
                          ? 'text-accent font-medium'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-nav font-semibold text-stone-900 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`block text-sm transition-colors ${
                        priceRange === i
                          ? 'text-accent font-medium'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-nav font-semibold text-stone-900 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <button className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
                    18K Gold Plated
                  </button>
                  <button className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
                    Sterling Silver
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-6 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm uppercase tracking-nav font-semibold text-stone-900">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5 text-stone-500" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-nav font-semibold text-stone-900 mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setMobileFiltersOpen(false); }}
                        className={`px-4 py-2 text-xs uppercase tracking-nav border transition-colors ${
                          category === cat
                            ? 'border-accent bg-accent text-white'
                            : 'border-stone-300 text-stone-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-nav font-semibold text-stone-900 mb-3">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setPriceRange(i); setMobileFiltersOpen(false); }}
                        className={`px-4 py-2 text-xs uppercase tracking-nav border transition-colors ${
                          priceRange === i
                            ? 'border-accent bg-accent text-white'
                            : 'border-stone-300 text-stone-700'
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
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="hidden md:block text-xs text-stone-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              <div className="relative ml-auto">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs uppercase tracking-nav text-stone-700 pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-500 pointer-events-none" />
              </div>
            </div>

            <div ref={containerRef}>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-stone-500 font-light">No pieces match your filters</p>
                  <button
                    onClick={() => { handleCategoryChange('All'); setPriceRange(0); }}
                    className="mt-4 text-xs uppercase tracking-nav text-accent hover:text-accent-dark transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
