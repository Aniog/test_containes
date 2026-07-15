import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];
const materials = ['All', '18K Gold Plated', 'Crystal', 'Silver Tone'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max);

    if (selectedMaterial !== 'All') {
      result = result.filter((p) =>
        p.materials.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const activeFilterCount = [
    selectedCategory !== 'All',
    selectedPrice.label !== 'All',
    selectedMaterial !== 'All',
  ].filter(Boolean).length;

  const FilterContent = () => (
    <>
      <div className="mb-8">
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-warmgray mb-3">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`text-left text-sm py-1 transition-colors ${
                selectedCategory === c ? 'text-velmora-charcoal font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-warmgray mb-3">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((r) => (
            <button
              key={r.label}
              onClick={() => setSelectedPrice(r)}
              className={`text-left text-sm py-1 transition-colors ${
                selectedPrice.label === r.label ? 'text-velmora-charcoal font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-warmgray mb-3">
          Material
        </h4>
        <div className="flex flex-col gap-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`text-left text-sm py-1 transition-colors ${
                selectedMaterial === m ? 'text-velmora-charcoal font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 bg-velmora-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Shop All</h1>
          <p className="text-sm text-velmora-warmgray mt-2">Timeless pieces for every occasion</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-medium"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-velmora-charcoal text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <span className="text-xs text-velmora-warmgray hidden md:inline">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs bg-transparent border border-velmora-taupe/50 rounded px-3 py-2 focus:outline-none focus:border-velmora-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-10">
          {/* Desktop filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-warmgray">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedPrice(priceRanges[0]);
                    setSelectedMaterial('All');
                  }}
                  className="mt-4 text-xs tracking-wider uppercase text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 z-[60] bg-velmora-cream shadow-2xl md:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-taupe/30">
              <h3 className="font-serif text-lg tracking-widest uppercase">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <div className="p-5">
              <FilterContent />
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full mt-6 bg-velmora-charcoal text-white py-3 text-xs font-medium tracking-widest uppercase"
              >
                Show {filtered.length} {filtered.length === 1 ? 'Product' : 'Products'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
