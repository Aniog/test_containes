import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted/60 text-center px-4 font-serif italic">
              {product.name}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-dark/90 text-white text-xs font-medium uppercase tracking-wider hover:bg-dark transition-colors border-none rounded-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-sm font-medium text-heading uppercase tracking-product">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
              />
            ))}
            <span className="text-xs text-muted ml-1">({product.reviews})</span>
          </div>
          <p className="text-sm font-medium text-charcoal mt-1.5">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-heading">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted">
            Discover our curated collection of demi-fine pieces.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal bg-transparent border-none hover:text-accent transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider border transition-colors rounded-none ${
                activeCategory === 'all'
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-charcoal bg-transparent hover:border-accent'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider border transition-colors rounded-none ${
                  activeCategory === cat.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-charcoal bg-transparent hover:border-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs text-charcoal bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-accent rounded-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button
                onClick={() => setShowFilters(false)}
                className="text-muted bg-transparent border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setShowFilters(false); }}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider border transition-colors rounded-none ${
                  activeCategory === 'all'
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-charcoal bg-transparent'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setShowFilters(false); }}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider border transition-colors rounded-none ${
                    activeCategory === cat.id
                      ? 'border-accent bg-accent text-white'
                      : 'border-border text-charcoal bg-transparent'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
