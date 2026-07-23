import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Top Rated' },
];

const categoryFilters = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

const priceRanges = [
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-70', name: '$50 – $70', min: 50, max: 70 },
  { id: '70-plus', name: '$70+', min: 70, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const toggleCategory = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (id) => {
    setSelectedPrices(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter(p => {
        return selectedPrices.some(pid => {
          const range = priceRanges.find(r => r.id === pid);
          return range && p.price >= range.min && p.price < range.max;
        });
      });
    }

    switch (sortBy) {
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
  }, [selectedCategories, selectedPrices, sortBy]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants.find(v => v.id === product.defaultVariant) || product.variants[0];
    addItem(product, variant, 1);
  };

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-4">Category</h3>
        <div className="flex flex-col gap-2.5">
          {categoryFilters.map(cat => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <div
                className={`w-4 h-4 border ${selectedCategories.includes(cat.id) ? 'bg-gold border-gold' : 'border-champagne bg-transparent'} flex items-center justify-center transition-colors duration-200`}
              >
                {selectedCategories.includes(cat.id) && <X className="w-3 h-3 text-ink" />}
              </div>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="sr-only"
              />
              <span className="text-sm text-muted group-hover:text-ink transition-colors">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-4">Price</h3>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center gap-2.5 cursor-pointer group">
              <div
                className={`w-4 h-4 border ${selectedPrices.includes(range.id) ? 'bg-gold border-gold' : 'border-champagne bg-transparent'} flex items-center justify-center transition-colors duration-200`}
              >
                {selectedPrices.includes(range.id) && <X className="w-3 h-3 text-ink" />}
              </div>
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.id)}
                onChange={() => togglePrice(range.id)}
                className="sr-only"
              />
              <span className="text-sm text-muted group-hover:text-ink transition-colors">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors text-left"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-warm-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="py-8 md:py-12 border-b border-champagne">
          <h1 className="font-serif text-3xl md:text-4xl text-ink">Shop All</h1>
          <p className="text-muted text-sm mt-2">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8 py-8">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="relative ml-auto">
                <button
                  className="flex items-center gap-2 text-xs tracking-[0.1em] text-muted hover:text-ink transition-colors"
                >
                  Sort by: {sortOptions.find(s => s.id === sortBy)?.name}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-3 left-3 right-3 bg-warm-white text-ink py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Quick Add
                      </button>
                    </div>
                    <div className="text-center">
                      <h3
                        id={`shop-name-${product.id}`}
                        className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-ink group-hover:text-gold transition-colors duration-300"
                      >
                        {product.name}
                      </h3>
                      <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDesc}</p>
                      <div className="flex items-center justify-center gap-1.5 mt-1.5">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-champagne'}`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium mt-1.5">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[80vw] bg-warm-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wide">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
