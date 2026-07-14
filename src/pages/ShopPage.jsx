import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-ivory mb-3">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-white/95 hover:bg-brand-gold hover:text-brand-charcoal text-brand-charcoal font-sans text-xs uppercase tracking-wide py-3 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-ultra-wide text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.type}</p>
        <p className="font-sans text-sm text-brand-warm mt-1">${product.price}</p>
      </Link>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const range = priceRanges.find(r => r.label === selectedPrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block font-sans text-sm transition-colors ${selectedCategory === 'all' ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block font-sans text-sm transition-colors ${selectedCategory === cat.id ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray mb-3">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice('all')}
            className={`block font-sans text-sm transition-colors ${selectedPrice === 'all' ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={`block font-sans text-sm transition-colors ${selectedPrice === range.label ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="font-sans text-xs uppercase tracking-wide text-brand-warm-gray mb-3">Material</h3>
        <div className="space-y-2">
          {['all', 'Gold', 'Silver'].map(m => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block font-sans text-sm transition-colors ${selectedMaterial === m ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'}`}
            >
              {m === 'all' ? 'All Materials' : m}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-brand-cream">
      {/* Page header */}
      <div className="bg-brand-charcoal py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-white">The Collection</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wide text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-warm-gray">No pieces match your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedPrice('all'); setSelectedMaterial('all'); }}
                  className="mt-4 font-sans text-xs uppercase tracking-wide text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-brand-cream shadow-2xl p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-muted p-1" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
