import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  // Initialize from URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const materials = ['Gold', 'Silver', 'Rose Gold'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    // Material filter
    if (selectedMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.name.toLowerCase().includes(selectedMaterial.toLowerCase()))
      );
    }

    // Sort
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
  }, [selectedCategories, selectedPriceRange, selectedMaterial, sortBy]);

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange !== null || selectedMaterial !== null;

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-ink-600 mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border-ink-300 text-gold-500 focus:ring-gold-400 rounded"
              />
              <span className="text-sm text-ink-500 group-hover:text-ink-700 transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-ink-600 mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range, idx) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === idx}
                onChange={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                className="w-4 h-4 border-ink-300 text-gold-500 focus:ring-gold-400"
              />
              <span className="text-sm text-ink-500 group-hover:text-ink-700 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-ink-600 mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                className="w-4 h-4 border-ink-300 text-gold-500 focus:ring-gold-400"
              />
              <span className="text-sm text-ink-500 group-hover:text-ink-700 transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans tracking-wide text-gold-600 hover:text-gold-700 underline underline-offset-2 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Hero banner */}
      <div className="bg-ink-800 section-padding py-16 md:py-24 text-center">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-4">
          Shop All Jewelry
        </h1>
        <p className="text-cream-300/60 text-sm max-w-md mx-auto">
          Discover our complete collection of demi-fine 18K gold jewelry, designed for modern elegance.
        </p>
      </div>

      <div className="section-padding py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            className="lg:hidden flex items-center gap-2 text-sm text-ink-500 hover:text-ink-700 transition-colors"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-sans tracking-wide">Filters</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold-500 text-white text-[10px] rounded-full flex items-center justify-center">
                {selectedCategories.length + (selectedPriceRange !== null ? 1 : 0) + (selectedMaterial ? 1 : 0)}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-ink-300 hidden sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-ink-500 pr-8 pl-2 py-1 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-ink-300 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden lg:block w-56 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink-400 mb-2">No pieces found</p>
                <p className="text-sm text-ink-300 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
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
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 bg-cream-50 shadow-elevated overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-ink-100/30">
              <h2 className="font-sans text-sm font-semibold tracking-ultra-wide uppercase text-ink-700">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-ink-400 hover:text-ink-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
