import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCartActions } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const { category } = useParams();
  const { addItem } = useCartActions();
  const containerRef = useRef(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({
    category: category || '',
    material: '',
    priceRange: '',
  });
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: category || '' }));
  }, [category]);

  const pageTitle = category
    ? categories.find((c) => c.id === category)?.name || 'Shop'
    : 'All Jewelry';

  // Filter and sort
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }
  if (filters.material) {
    filtered = filtered.filter((p) => p.material === filters.material);
  }
  if (filters.priceRange === 'under50') {
    filtered = filtered.filter((p) => p.price < 50);
  } else if (filters.priceRange === '50to100') {
    filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100);
  } else if (filters.priceRange === 'over100') {
    filtered = filtered.filter((p) => p.price > 100);
  }

  if (sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const clearFilters = () => setFilters({ category: '', material: '', priceRange: '' });

  const hasActiveFilters = filters.category || filters.material || filters.priceRange;

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <div ref={containerRef} className="pt-20 lg:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light mb-3">{pageTitle}</h1>
          <p className="text-sm text-velvet-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velvet-200">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-700 hover:text-velvet-900 transition-colors"
          >
            {showFilters ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
            Filters
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500" />
            )}
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velvet-700 pr-6 py-1 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-52 flex-shrink-0 animate-fade-in`}
          >
            <div className="lg:sticky lg:top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-super uppercase text-velvet-800 font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilters({ ...filters, category: '' })}
                    className={`block text-sm transition-colors ${
                      !filters.category ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setFilters({ ...filters, category: c.id })}
                      className={`block text-sm transition-colors ${
                        filters.category === c.id ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-super uppercase text-velvet-800 font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: '', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 – $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFilters({ ...filters, priceRange: opt.value })}
                      className={`block text-sm transition-colors ${
                        filters.priceRange === opt.value ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-super uppercase text-velvet-800 font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: '', label: 'All' },
                    { value: 'gold', label: '18K Gold Plated' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFilters({ ...filters, material: opt.value })}
                      className={`block text-sm transition-colors ${
                        filters.material === opt.value ? 'text-velvet-900 font-medium' : 'text-velvet-500 hover:text-velvet-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-wider uppercase text-velvet-500 hover:text-velvet-900 transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velvet-500 mb-2">No products found</p>
                <button onClick={clearFilters} className="text-sm text-velvet-600 hover:text-velvet-900 transition-colors">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`gold jewelry ${product.name} editorial warm neutral`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                          hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      <img
                        alt={`${product.name} alternate`}
                        data-strk-img-id={`shop-alt-${product.id}`}
                        data-strk-img={`gold jewelry ${product.name} detail close up`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      <button
                        onClick={(e) => handleAdd(e, product)}
                        className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
                          hoveredId === product.id
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-2 opacity-0 pointer-events-none'
                        }`}
                      >
                        Add to Cart — ${product.price}
                      </button>

                      {product.tags.includes('new') && (
                        <span className="absolute top-3 left-3 bg-velvet-50 text-velvet-900 text-[10px] tracking-wider uppercase px-2 py-0.5">
                          New
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="font-serif text-xs md:text-sm tracking-wider uppercase text-velvet-900 mb-1">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-1 mb-1.5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${
                              i < Math.floor(product.rating) ? 'text-sand-500 fill-sand-500' : 'text-velvet-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-velvet-700">${product.price}</p>
                    </div>
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
