import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.toneOptions[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-parchment overflow-hidden mb-3">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img={`[shop-${product.id}-name] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          data-strk-img-id={`shop-${product.id}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick Add */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 backdrop-blur-sm text-velmora-charcoal font-sans text-[11px] font-medium tracking-widest-lg uppercase flex items-center justify-center gap-1.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick Add
        </button>
        {/* Tags */}
        {product.tags.includes('new') && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-velmora-charcoal text-white text-[9px] font-sans font-medium tracking-widest uppercase">
            New
          </span>
        )}
      </div>
      <p id={`shop-${product.id}-name`} className="hidden">{product.name}</p>
      <h3 className="font-sans text-[11px] font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-0.5 truncate">
        {product.name}
      </h3>
      <p className="font-sans text-sm text-velmora-stone">
        ${product.price}
      </p>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || '';

  const [filters, setFilters] = useState({
    category: initialCategory,
    priceRange: '',
    material: '',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: '', material: '' });
    setSearchParams({});
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const filterSections = [
    {
      title: 'Category',
      key: 'category',
      options: [
        { label: 'Earrings', value: 'earrings' },
        { label: 'Necklaces', value: 'necklaces' },
        { label: 'Huggies', value: 'huggies' },
        { label: 'Sets', value: 'sets' },
      ],
    },
    {
      title: 'Price',
      key: 'priceRange',
      options: [
        { label: 'Under $40', value: '0-40' },
        { label: '$40 – $60', value: '40-60' },
        { label: '$60 – $100', value: '60-100' },
        { label: 'Over $100', value: '100-' },
      ],
    },
    {
      title: 'Material',
      key: 'material',
      options: [
        { label: '18K Gold Plated', value: '18k-gold-plated' },
      ],
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-charcoal font-light mb-3">
            The Collection
          </h1>
          <p className="font-sans text-sm text-velmora-stone">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-linen">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center gap-2 font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Desktop sort */}
          <div className="hidden lg:block" />

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal pr-8 py-2 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="mb-6 font-sans text-xs text-velmora-gold hover:text-velmora-goldDark transition-colors"
              >
                Clear all filters
              </button>
            )}
            <div className="space-y-8">
              {filterSections.map((section) => (
                <div key={section.key}>
                  <h4 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-3">
                    {section.title}
                  </h4>
                  <div className="space-y-2">
                    {section.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            filters[section.key] === opt.value
                              ? 'bg-velmora-charcoal border-velmora-charcoal'
                              : 'border-velmora-sand group-hover:border-velmora-charcoal'
                          }`}
                        >
                          {filters[section.key] === opt.value && (
                            <div className="w-1.5 h-1.5 bg-white" />
                          )}
                        </div>
                        <input
                          type="radio"
                          name={section.key}
                          value={opt.value}
                          checked={filters[section.key] === opt.value}
                          onChange={() => updateFilter(section.key, opt.value)}
                          className="hidden"
                        />
                        <span className="font-sans text-sm text-velmora-stone group-hover:text-velmora-charcoal transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 w-80 bg-velmora-cream z-50 p-6 overflow-y-auto lg:hidden animate-slide-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal">
                    Filters
                  </h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mb-6 font-sans text-xs text-velmora-gold"
                  >
                    Clear all
                  </button>
                )}
                <div className="space-y-8">
                  {filterSections.map((section) => (
                    <div key={section.key}>
                      <h4 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-3">
                        {section.title}
                      </h4>
                      <div className="space-y-2">
                        {section.options.map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer">
                            <input
                              type="radio"
                              name={`mobile-${section.key}`}
                              value={opt.value}
                              checked={filters[section.key] === opt.value}
                              onChange={() => {
                                updateFilter(section.key, opt.value);
                                setMobileFiltersOpen(false);
                              }}
                              className="w-4 h-4 accent-velmora-charcoal"
                            />
                            <span className="font-sans text-sm text-velmora-stone">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-3">No products found</p>
                <p className="font-sans text-sm text-velmora-stone mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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