import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, material, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }

    switch (sort) {
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
  }, [category, priceRange, material, sort]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone[0], 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const clearFilters = () => {
    setCategory('all');
    setPriceRange('all');
    setMaterial('all');
    setSearchParams({});
  };

  const hasActiveFilters = category !== 'all' || priceRange !== 'all' || material !== 'all';

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block text-sm font-sans transition-colors duration-200 ${
                category === cat
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '30-50', label: '$30 – $50' },
            { value: '50-70', label: '$50 – $70' },
            { value: '70-120', label: '$70 – $120' },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-sm font-sans transition-colors duration-200 ${
                priceRange === range.value
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Material
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: '18K Gold Plated', label: '18K Gold Plated' },
          ].map((mat) => (
            <button
              key={mat.value}
              onClick={() => setMaterial(mat.value)}
              className={`block text-sm font-sans transition-colors duration-200 ${
                material === mat.value
                  ? 'text-brand-gold font-medium'
                : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wide uppercase font-sans text-brand-gold hover:text-brand-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wide uppercase font-sans font-medium text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm text-brand-muted font-sans">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-brand-muted font-sans">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-extra-wide uppercase font-sans font-medium border border-brand-gold text-brand-gold px-6 py-2 hover:bg-brand-gold hover:text-white transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredId === product.id ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                          hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className={`w-full text-xs tracking-extra-wide uppercase font-sans font-medium py-3 flex items-center justify-center gap-2 transition-colors duration-300 ${
                            addedId === product.id
                              ? 'bg-brand-charcoal text-white'
                              : 'bg-brand-gold text-white hover:bg-brand-gold-dark'
                          }`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          {addedId === product.id ? 'Added!' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                    <h3
                      id={product.titleId}
                      className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal"
                    >
                      {product.name}
                    </h3>
                    <p id={product.descId} className="sr-only">{product.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.round(product.rating)
                                ? 'text-brand-gold fill-brand-gold'
                                : 'text-brand-sand'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 text-sm font-sans font-medium text-brand-charcoal">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
