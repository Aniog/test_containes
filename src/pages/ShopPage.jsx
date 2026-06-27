import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy, priceRange]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => {
        if (activeCategory === 'Huggies') return p.subCategory === 'Huggies';
        return p.category === activeCategory;
      });
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
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
  }, [activeCategory, sortBy, priceRange]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  const clearFilters = () => {
    setSortBy('featured');
    setPriceRange([0, 120]);
    setCategory('All');
  };

  const hasFilters = activeCategory !== 'All' || sortBy !== 'featured' || priceRange[0] !== 0 || priceRange[1] !== 120;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-velmora-text mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-velmora-text mb-4">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-velmora-text-muted">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-velmora-gold"
          />
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-gold underline-offset-2 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-2 tracking-wide">
          {activeCategory === 'All' ? 'Shop All' : activeCategory}
        </h1>
        <p className="text-velmora-text-muted text-center text-sm mb-10">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-velmora-text-secondary"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasFilters && (
                <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              )}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-velmora-divider bg-white px-3 py-1.5 text-velmora-text-secondary focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Sort - desktop */}
          <div className="hidden md:block col-start-2">
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-velmora-divider bg-white px-3 py-2 text-velmora-text-secondary focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="md:col-start-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-velmora-gold-light rounded-sm overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`shop-${product.imgId}`}
                      data-strk-img={`[shop-title-${product.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-text p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-velmora-gold hover:text-white"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    {product.new && (
                      <span className="absolute top-2 left-2 bg-velmora-gold text-white text-[10px] px-2 py-0.5 tracking-wider uppercase">
                        New
                      </span>
                    )}
                  </div>
                  <h3
                    id={`shop-title-${product.id}`}
                    className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-velmora-text mb-1"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-velmora-gold text-velmora-gold'
                              : 'fill-velmora-divider text-velmora-divider'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
                  </div>
                  <p className="text-sm font-medium text-velmora-text">${product.price}</p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-text-muted mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold underline-offset-2 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFilterOpen(false)} />
        <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-lg">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-5 h-5 text-velmora-text-secondary" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </main>
  );
}
