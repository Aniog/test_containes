import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['gold', 'silver'];
const categories = ['earrings', 'necklaces', 'huggies', 'sets'];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggle = (val, list, setList) => {
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterBlock = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat)
                    ? 'bg-velmora-dark border-velmora-dark'
                    : 'border-stone-300 group-hover:border-velmora-dark'
                }`}
                onClick={() => toggle(cat, selectedCategories, setSelectedCategories)}
              >
                {selectedCategories.includes(cat) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-stone-600 capitalize">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedPrices.includes(idx)
                    ? 'bg-velmora-dark border-velmora-dark'
                    : 'border-stone-300 group-hover:border-velmora-dark'
                }`}
                onClick={() => toggle(idx, selectedPrices, setSelectedPrices)}
              >
                {selectedPrices.includes(idx) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-stone-600">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedMaterials.includes(mat)
                    ? 'bg-velmora-dark border-velmora-dark'
                    : 'border-stone-300 group-hover:border-velmora-dark'
                }`}
                onClick={() => toggle(mat, selectedMaterials, setSelectedMaterials)}
              >
                {selectedMaterials.includes(mat) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-stone-600 capitalize">{mat} tone</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedPrices([]);
            setSelectedMaterials([]);
          }}
          className="text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 bg-velmora-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl">The Collection</h1>
          <p className="mt-3 text-stone-500 text-sm">Discover pieces designed to become part of your story.</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <p className="hidden md:block text-sm text-stone-500">{filtered.length} products</p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm uppercase tracking-widest pr-8 py-2 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterBlock />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPrices([]);
                    setSelectedMaterials([]);
                  }}
                  className="mt-4 text-sm uppercase tracking-widest text-velmora-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowMobileFilters(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterBlock />
          </div>
        </>
      )}
    </div>
  );
}
