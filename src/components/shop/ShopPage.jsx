import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, material, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === category);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material.toLowerCase().includes(material));
    }

    switch (sort) {
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
  }, [category, priceRange, material, sort]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '30-50', label: '$30 – $50' },
    { value: '50-80', label: '$50 – $80' },
    { value: '80-120', label: '$80 – $120' },
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                category === cat ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                priceRange === range.value ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal mb-3">Material</h3>
        <div className="space-y-2">
          {['all', 'gold'].map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                material === mat ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm-border">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block font-sans text-sm text-brand-warm-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wide uppercase text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFilters(false)}>
              <div
                className="absolute top-0 left-0 h-full w-72 bg-brand-cream p-6 overflow-y-auto animate-slide-in-right"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs tracking-wide uppercase text-brand-charcoal">Filters</h3>
                  <button onClick={() => setMobileFilters(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-brand-warm-gray" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-brand-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
                        <img
                          data-strk-img-id={`${product.images[0].imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product);
                            }}
                            className="w-full bg-brand-warm-black/90 text-white font-sans text-xs tracking-wide uppercase py-3 flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm tracking-ultra-wide uppercase text-brand-charcoal">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-brand-charcoal mt-0.5">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
