import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allCategories = ['earrings', 'necklaces', 'huggies', 'sets'];
const allMaterials = ['18k-gold-plated'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategories, selectedPrices, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (idx) => {
    setSelectedPrices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategories, selectedPrices, sortBy]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal-900 mb-4">Category</h4>
        <div className="space-y-2.5">
          {allCategories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleCategory(cat)}
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat) ? 'bg-charcoal-900 border-charcoal-900' : 'border-warm-400 group-hover:border-charcoal-900'
                }`}
              >
                {selectedCategories.includes(cat) && <span className="text-cream-50 text-[10px]">✓</span>}
              </div>
              <span className="text-sm capitalize text-warm-600">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal-900 mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((r, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => togglePrice(idx)}
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedPrices.includes(idx) ? 'bg-charcoal-900 border-charcoal-900' : 'border-warm-400 group-hover:border-charcoal-900'
                }`}
              >
                {selectedPrices.includes(idx) && <span className="text-cream-50 text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-warm-600">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal-900 mb-4">Material</h4>
        <div className="space-y-2.5">
          {allMaterials.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 border bg-charcoal-900 border-charcoal-900 flex items-center justify-center">
                <span className="text-cream-50 text-[10px]">✓</span>
              </div>
              <span className="text-sm capitalize text-warm-600">{mat.replace(/-/g, ' ')}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide">The Collection</h1>
            <p className="mt-3 text-sm text-warm-500 tracking-wide">Discover pieces crafted to be treasured</p>
          </div>

          <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-200">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.15em] uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filter
            </button>
            <span className="hidden md:block text-sm text-warm-500">{filtered.length} products</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-warm-500 uppercase tracking-wider hidden sm:inline">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-warm-300 px-3 py-2 focus:outline-none focus:border-charcoal-900"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="flex gap-10">
            <aside className="hidden md:block w-56 flex-shrink-0">
              <FilterContent />
            </aside>

            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-warm-500">No products match your filters.</p>
                  <button
                    onClick={() => { setSelectedCategories([]); setSelectedPrices([]); }}
                    className="mt-4 text-sm underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <div key={product.id} className="group">
                      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-warm-100 overflow-hidden mb-3">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-warm-300" strokeWidth={1} />
                        </div>
                        <div
                          className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/10 transition-colors duration-300"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, product.variants[0]);
                          }}
                          className="absolute bottom-3 left-3 right-3 py-2.5 bg-cream-50 text-charcoal-900 text-[10px] tracking-[0.15em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gold-400 hover:text-cream-50 text-center"
                        >
                          Add to Cart
                        </button>
                      </Link>
                      <div className="space-y-1">
                        <h3 className="font-serif text-sm uppercase tracking-wider truncate">{product.name}</h3>
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span className="text-xs text-warm-500">{product.rating}</span>
                        </div>
                        <p className="text-sm font-medium">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div className="absolute inset-0 bg-charcoal-950/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl tracking-wide">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full mt-8 py-3 bg-charcoal-900 text-cream-50 text-xs tracking-[0.2em] uppercase"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
