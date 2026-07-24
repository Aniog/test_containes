import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-cream rounded-sm overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={product.imgQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, 'gold');
              }}
              className="bg-brand-ivory text-brand-black px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 translate-y-4 group-hover:translate-y-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 inline mr-2" />
              Add to Cart
            </button>
          </div>
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
              New
            </span>
          )}
        </div>
        <div className="text-center">
          <h3 className="font-serif text-sm md:text-base uppercase tracking-widest text-brand-black mb-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-brand-charcoal">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, selectedPrice, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPrice !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
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
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const activeFilters = [
    selectedCategory !== 'all' && { label: categories.find(c => c.id === selectedCategory)?.name, clear: () => handleCategoryChange('all') },
    selectedPrice !== 'all' && { label: priceRanges.find(r => r.id === selectedPrice)?.label, clear: () => setSelectedPrice('all') },
  ].filter(Boolean);

  return (
    <main ref={containerRef} className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-brand-cream border-b border-brand-sand">
        <div className="container-narrow py-8 text-center">
          <p className="text-label mb-3">Our Collection</p>
          <h1 className="heading-display">
            {selectedCategory !== 'all'
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'
            }
          </h1>
        </div>
      </div>

      <div className="container-narrow py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-brand-charcoal hover:text-brand-gold transition-colors lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2">
                {activeFilters.map((filter, idx) => (
                  <button
                    key={idx}
                    onClick={filter.clear}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-cream text-xs tracking-wider uppercase border border-brand-sand hover:border-brand-gold transition-colors"
                  >
                    {filter.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-warmgray hidden sm:inline">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-brand-charcoal pr-8 pl-2 py-2 border border-brand-sand focus:outline-none focus:border-brand-gold cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-brand-warmgray" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className={cn(
            "w-64 flex-shrink-0 lg:block",
            showFilters ? "fixed inset-0 z-50 bg-brand-ivory p-6 overflow-auto lg:static lg:p-0 lg:bg-transparent" : "hidden"
          )}>
            {showFilters && (
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Category filter */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest-xl uppercase text-brand-warmgray font-medium mb-4">
                Category
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={cn(
                    "block w-full text-left text-sm py-1.5 transition-colors",
                    selectedCategory === 'all' ? "text-brand-black font-medium" : "text-brand-warmgray hover:text-brand-black"
                  )}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={cn(
                      "block w-full text-left text-sm py-1.5 transition-colors",
                      selectedCategory === cat.id ? "text-brand-black font-medium" : "text-brand-warmgray hover:text-brand-black"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest-xl uppercase text-brand-warmgray font-medium mb-4">
                Price
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPrice('all')}
                  className={cn(
                    "block w-full text-left text-sm py-1.5 transition-colors",
                    selectedPrice === 'all' ? "text-brand-black font-medium" : "text-brand-warmgray hover:text-brand-black"
                  )}
                >
                  All Prices
                </button>
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={cn(
                      "block w-full text-left text-sm py-1.5 transition-colors",
                      selectedPrice === range.id ? "text-brand-black font-medium" : "text-brand-warmgray hover:text-brand-black"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-warmgray mb-2">No products found</p>
                <p className="text-sm text-brand-warmgray/70">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
