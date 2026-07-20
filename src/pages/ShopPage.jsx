import { useState, useMemo } from 'react';
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
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      );
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) =>
        p.materials.toLowerCase().includes(selectedMaterial.toLowerCase())
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
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== null,
    selectedMaterial !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial('all');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl tracking-ultra-wide text-charcoal-900">Filters</h2>
          <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-charcoal-500">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-900 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-900 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
              className={`block text-sm transition-colors ${
                selectedPriceRange?.label === range.label ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-900 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['all', 'gold-plated', 'sterling silver', 'stainless steel'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors capitalize ${
                selectedMaterial === mat ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs text-charcoal-500 underline hover:text-charcoal-800 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="section-padding py-12 md:py-16 text-center bg-cream-100">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900">
          {selectedCategory !== 'all'
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
      </div>

      <div className="section-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-ultra-wide uppercase text-charcoal-700 border border-charcoal-200 px-4 py-2.5 hover:border-charcoal-400 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-charcoal-900 text-cream-50 text-[10px] rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              <p className="font-sans text-sm text-charcoal-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans text-xs tracking-wide text-charcoal-700 bg-transparent border border-charcoal-200 px-4 py-2.5 pr-8 focus:outline-none focus:border-charcoal-400 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-charcoal-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-charcoal-400 mb-2">No products found</p>
                  <p className="font-sans text-sm text-charcoal-300 mb-6">Try adjusting your filters</p>
                  <button onClick={clearFilters} className="btn-outline text-xs">
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
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-full bg-cream-50 shadow-2xl overflow-y-auto animate-slide-in-right">
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  );
}
