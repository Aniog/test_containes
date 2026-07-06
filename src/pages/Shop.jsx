import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const nameId = `shop-product-name-${product.id}`;
  const descId = `shop-product-desc-${product.id}`;
  const imgId = `shop-product-img-${product.id}`;

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted-bg overflow-hidden">
          <span id={descId} className="sr-only">{product.description}</span>
          <img
            alt={product.name}
            data-strk-img-id={imgId}
            data-strk-img={`[${descId}] [${nameId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-charcoal text-white text-xs font-medium tracking-wide uppercase hover:bg-accent transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 id={nameId} className="font-serif text-sm font-medium tracking-product uppercase text-charcoal group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted">${product.price}</p>
          <p className="text-xs text-muted capitalize">{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams);
    if (range === 'all') {
      params.delete('price');
    } else {
      params.set('price', range);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block text-sm transition-colors ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to80', label: '$50 – $80' },
            { value: 'over80', label: 'Over $80' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm transition-colors ${priceRange === option.value ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          <span className="block text-sm text-muted">18K Gold Plated</span>
          <span className="block text-sm text-muted">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-muted mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + Sort */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <FilterSidebar className="hidden md:block w-48 flex-shrink-0" />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-sm">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl font-medium">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}
