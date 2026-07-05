import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/lib/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-widest font-sans font-medium py-3 transition-all duration-300 hover:bg-accent hover:text-cream ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Add to Cart
      </button>

      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-sans text-xs uppercase tracking-product text-charcoal font-medium">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-fg mt-1 font-sans">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            {activeCategory
              ? categories.find(c => c.slug === activeCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="text-muted-fg text-sm mt-2 font-sans">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilter('category', '')}
                  className={`block text-sm font-sans transition-colors ${!activeCategory ? 'text-accent font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => setFilter('category', cat.slug)}
                    className={`block text-sm font-sans transition-colors ${activeCategory === cat.slug ? 'text-accent font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Price
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'All Prices', value: '' },
                  { label: 'Under $50', value: 'under50' },
                  { label: '$50 – $80', value: '50to80' },
                  { label: 'Over $80', value: 'over80' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('price', opt.value)}
                    className={`block text-sm font-sans transition-colors ${priceRange === opt.value ? 'text-accent font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filters */}
            {(activeCategory || priceRange) && (
              <button
                onClick={() => {
                  setSearchParams({});
                }}
                className="flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors"
              >
                <X className="w-3 h-3" />
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-fg">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-accent text-sm mt-2 underline"
                >
                  Clear filters
                </button>
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
    </div>
  );
}
