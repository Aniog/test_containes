import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '../data/products';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: 'Over $100' },
];

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';
  const activePrice = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.subcategory === 'huggies');
      } else {
        result = result.filter((p) => p.category === activeCategory);
      }
    }

    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.filter((p) => p.tags.includes('new')).concat(result.filter((p) => !p.tags.includes('new')));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSort, activePrice]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory, activeSort, activePrice]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-velmora-charcoal mb-4 font-medium">Category</h4>
        <div className="space-y-2.5">
          <button
            onClick={() => updateParam('category', 'all')}
            className={`block text-sm transition-velmora ${
              activeCategory === 'all' ? 'text-velmora-gold-dark font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.slug)}
              className={`block text-sm transition-velmora ${
                activeCategory === cat.slug ? 'text-velmora-gold-dark font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-velmora-charcoal mb-4 font-medium">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateParam('price', range.value)}
              className={`block text-sm transition-velmora ${
                activePrice === range.value ? 'text-velmora-gold-dark font-medium' : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-velmora-charcoal mb-4 font-medium">Material</h4>
        <div className="space-y-2.5">
          <button className="block text-sm text-velmora-stone hover:text-velmora-charcoal transition-velmora">18K Gold Plated</button>
          <button className="block text-sm text-velmora-stone hover:text-velmora-charcoal transition-velmora">Silver Tone</button>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-velmora-charcoal">
              {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.slug === activeCategory)?.name || 'All Jewelry'}
            </h1>
            <p className="text-sm text-velmora-stone mt-1">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-velmora-stone hover:text-velmora-charcoal transition-velmora"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>

            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="text-xs tracking-[0.08em] uppercase bg-transparent border-b border-velmora-sand/50 py-2 pr-4 text-velmora-charcoal focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] bg-velmora-sand/10 overflow-hidden mb-4">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-name-${product.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className={`absolute bottom-0 left-0 right-0 py-2.5 text-center text-[10px] tracking-[0.12em] uppercase font-medium transition-all duration-300 ${
                        addedId === product.id
                          ? 'bg-velmora-gold text-white'
                          : 'bg-velmora-charcoal/90 text-white translate-y-full group-hover:translate-y-0'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        <ShoppingBag className="w-3 h-3" />
                        {addedId === product.id ? 'Added!' : 'Add to Cart'}
                      </span>
                    </button>
                  </div>
                  <span id={`shop-name-${product.id}`} className="hidden">{product.name}</span>
                  <h3 className="product-name text-xs lg:text-sm mb-1.5">{product.name}</h3>
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-velmora-stone">({product.reviewCount})</span>
                  </div>
                  <p className="price-tag text-sm">${product.price}</p>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-stone">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs tracking-[0.12em] uppercase text-velmora-gold hover:text-velmora-gold-dark underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[80] lg:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-velmora-warm-cream shadow-2xl transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
            <h2 className="font-serif text-lg tracking-[0.1em] uppercase">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
}