import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const categoryFilters = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

const materialFilters = [
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { value: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { value: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { value: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

export default function ShopPage() {
  const { category: catParam } = useParams();
  const containerRef = useRef(null);

  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(
    catParam ? [catParam] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category from URL param
  useEffect(() => {
    if (catParam) {
      setSelectedCategories([catParam]);
    }
  }, [catParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.value === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
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
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
  };

  const hasFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || selectedPrice;

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-espresso mb-3">Category</h4>
        <div className="space-y-2">
          {categoryFilters.map((f) => (
            <label key={f.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(f.value)}
                onChange={() => toggleCategory(f.value)}
                className="w-3.5 h-3.5 border-warmgray/50 rounded-none accent-gold"
              />
              <span className="text-sm text-mocha group-hover:text-espresso transition-colors">{f.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-espresso mb-3">Material</h4>
        <div className="space-y-2">
          {materialFilters.map((f) => (
            <label key={f.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(f.value)}
                onChange={() => toggleMaterial(f.value)}
                className="w-3.5 h-3.5 border-warmgray/50 rounded-none accent-gold"
              />
              <span className="text-sm text-mocha group-hover:text-espresso transition-colors">{f.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-espresso mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((r) => (
            <label key={r.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === r.value}
                onChange={() => setSelectedPrice(selectedPrice === r.value ? null : r.value)}
                className="w-3.5 h-3.5 border-warmgray/50 rounded-none accent-gold"
              />
              <span className="text-sm text-mocha group-hover:text-espresso transition-colors">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wider uppercase text-rosedeep hover:text-espresso transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-3">
            {catParam ? catParam.charAt(0).toUpperCase() + catParam.slice(1) : 'Shop All'}
          </h1>
          <div className="w-10 h-px bg-gold mx-auto" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Product grid area */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-warmgray/15">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-mocha"
              >
                <SlidersHorizontal size={14} /> Filters
                {hasFilters && <span className="bg-gold text-warmwhite w-4 h-4 rounded-full text-[10px] flex items-center justify-center">{selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0)}</span>}
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-taupe tracking-wider hidden md:inline">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs tracking-wider uppercase bg-transparent border border-warmgray/20 px-3 py-2 outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-taupe">No products match your filters.</p>
                <button onClick={clearFilters} className="text-xs tracking-wider uppercase text-gold mt-3 hover:text-espresso transition-colors">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
          <div
            className="fixed inset-0 bg-espresso/40 z-[120] md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-warmwhite z-[130] p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} className="text-taupe" />
              </button>
            </div>
            <FiltersContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-accent w-full mt-8 text-center"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </>
      )}
    </div>
  );
}
