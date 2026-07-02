import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

const materials = ['Gold', 'Silver'];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

const productImgQuery = {
  "vivid-aura-jewels": "gold ear cuff crystal accent jewelry product shot dark background",
  "majestic-flora-nectar": "floral crystal necklace gold pendant product shot dark background",
  "golden-sphere-huggies": "chunky gold dome huggie earrings product shot dark background",
  "amber-lace-earrings": "gold filigree drop earrings product shot dark background jewelry",
  "royal-heirloom-set": "jewelry gift set gold earrings necklace luxury box dark background",
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

  const selectedCategory = searchParams.get('category') || '';
  const selectedPrice = searchParams.get('price') || '';
  const selectedMaterial = searchParams.get('material') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial.toLowerCase());
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial;

  return (
    <main className="pt-20 md:pt-24 bg-ivory-50 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="text-center mb-8">
          <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-3">Collection</p>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'Our Collection'
            }
          </h1>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between border-t border-b border-charcoal-100/30 py-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-600 hover:text-charcoal-900 transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
            {hasFilters && (
              <span className="w-2 h-2 bg-gold-500 rounded-full" />
            )}
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-charcoal-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase text-charcoal-600 cursor-pointer pr-6 focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className={cn(
            'fixed md:relative inset-0 z-40 md:z-auto bg-charcoal-900/30 md:bg-transparent md:w-56 flex-shrink-0 transition-all duration-300',
            showFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'
          )}>
            <div 
              className={cn(
                'absolute md:relative right-0 top-0 h-full w-72 md:w-auto bg-ivory-50 md:bg-transparent p-6 md:p-0 overflow-y-auto transition-transform duration-300',
                showFilters ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
              )}
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h3 className="text-xs tracking-widest uppercase text-charcoal-800 font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="md:hidden text-charcoal-500">
                  <X size={18} />
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <h4 className="text-[11px] tracking-widest uppercase text-charcoal-600 font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={cn(
                      'block text-sm transition-colors',
                      !selectedCategory ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                    )}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={cn(
                        'block text-sm transition-colors',
                        selectedCategory === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h4 className="text-[11px] tracking-widest uppercase text-charcoal-600 font-semibold mb-3">Price</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', '')}
                    className={cn(
                      'block text-sm transition-colors',
                      !selectedPrice ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                    )}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={cn(
                        'block text-sm transition-colors',
                        selectedPrice === range.label ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h4 className="text-[11px] tracking-widest uppercase text-charcoal-600 font-semibold mb-3">Material</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('material', '')}
                    className={cn(
                      'block text-sm transition-colors',
                      !selectedMaterial ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                    )}
                  >
                    All
                  </button>
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={cn(
                        'block text-sm transition-colors',
                        selectedMaterial === mat ? 'text-charcoal-900 font-medium' : 'text-charcoal-400 hover:text-charcoal-700'
                      )}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-wider uppercase text-gold-600 hover:text-gold-700 transition-colors underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active filters pills */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-ivory-200 text-charcoal-600 px-3 py-1.5">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => updateFilter('category', '')}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-ivory-200 text-charcoal-600 px-3 py-1.5">
                    {selectedPrice}
                    <button onClick={() => updateFilter('price', '')}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-ivory-200 text-charcoal-600 px-3 py-1.5">
                    {selectedMaterial}
                    <button onClick={() => updateFilter('material', '')}>
                      <X size={10} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-400 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-300 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative overflow-hidden bg-ivory-200 aspect-[4/5] mb-4">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}-1`}
                          data-strk-img={productImgQuery[product.id] || "gold jewelry product shot"}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-charcoal-900 text-ivory-50 text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product);
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-charcoal-900/90 backdrop-blur-sm text-ivory-50 py-3 text-xs tracking-widest uppercase font-medium hover:bg-charcoal-900 transition-colors"
                          >
                            <ShoppingBag size={14} strokeWidth={1.5} />
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </Link>

                    <div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs tracking-ultra-wide text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-charcoal-400">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-semibold text-charcoal-900">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
