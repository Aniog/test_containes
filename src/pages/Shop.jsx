import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Top Rated', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch } = useCart();

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice) {
      list = list.filter((p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max);
    }
    switch (sortBy) {
      case 'price_asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategory, selectedPrice, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSearchParams({});
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-espresso mb-2">
            {selectedCategory || 'All Jewelry'}
          </h1>
          <p className="text-sm text-velmora-brown">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-velmora-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop sort */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <span className="text-xs text-velmora-brown uppercase tracking-wide">Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-velmora-warm/40 text-sm text-velmora-espresso pl-3 pr-8 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-brown pointer-events-none" />
            </div>
          </div>

          {/* Mobile sort */}
          <div className="md:hidden relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-velmora-warm/40 text-sm text-velmora-espresso pl-3 pr-8 py-2 focus:outline-none focus:border-velmora-gold"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-brown pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-espresso">
                  Filters
                </h3>
                {(selectedCategory || selectedPrice) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-brown underline hover:text-velmora-gold"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <h4 className="text-xs font-medium tracking-wide uppercase text-velmora-brown mb-3">
                  Category
                </h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={!selectedCategory}
                      onChange={() => setSelectedCategory('')}
                      className="accent-velmora-gold"
                    />
                    All
                  </label>
                  {categories.map((c) => (
                    <label key={c} className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === c}
                        onChange={() => setSelectedCategory(c)}
                        className="accent-velmora-gold"
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h4 className="text-xs font-medium tracking-wide uppercase text-velmora-brown mb-3">
                  Price
                </h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={!selectedPrice}
                      onChange={() => setSelectedPrice(null)}
                      className="accent-velmora-gold"
                    />
                    All Prices
                  </label>
                  {priceRanges.map((r, i) => (
                    <label key={i} className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === r}
                        onChange={() => setSelectedPrice(r)}
                        className="accent-velmora-gold"
                      />
                      {r.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-brown mb-3">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold underline hover:text-velmora-goldDark"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="relative w-80 max-w-[85vw] bg-velmora-cream h-full shadow-xl p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-velmora-espresso">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-velmora-espresso" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-medium tracking-wide uppercase text-velmora-brown mb-3">
                Category
              </h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                  <input
                    type="radio"
                    name="m_category"
                    checked={!selectedCategory}
                    onChange={() => setSelectedCategory('')}
                    className="accent-velmora-gold"
                  />
                  All
                </label>
                {categories.map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                    <input
                      type="radio"
                      name="m_category"
                      checked={selectedCategory === c}
                      onChange={() => setSelectedCategory(c)}
                      className="accent-velmora-gold"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-medium tracking-wide uppercase text-velmora-brown mb-3">
                Price
              </h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                  <input
                    type="radio"
                    name="m_price"
                    checked={!selectedPrice}
                    onChange={() => setSelectedPrice(null)}
                    className="accent-velmora-gold"
                  />
                  All Prices
                </label>
                {priceRanges.map((r, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-velmora-espresso cursor-pointer">
                    <input
                      type="radio"
                      name="m_price"
                      checked={selectedPrice === r}
                      onChange={() => setSelectedPrice(r)}
                      className="accent-velmora-gold"
                    />
                    {r.label}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => { clearFilters(); setMobileFiltersOpen(false); }}
              className="mt-auto text-xs text-velmora-brown underline hover:text-velmora-gold"
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = React.useState(false);
  const { dispatch } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url,
        variant: product.variants[0] || 'Default',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div
          className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          {product.hover_image_url && (
            <img
              src={product.hover_image_url}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}
          <button
            onClick={handleAdd}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 text-velmora-espresso text-[11px] font-medium tracking-widest uppercase py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
        <div className="text-center">
          <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-espresso mb-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-velmora-brown">${product.price}</span>
            {product.compare_at_price && (
              <span className="text-xs text-velmora-warm line-through">${product.compare_at_price}</span>
            )}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <StarRating rating={product.rating} size={3} />
            <span className="text-[11px] text-velmora-warm">({product.review_count})</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
