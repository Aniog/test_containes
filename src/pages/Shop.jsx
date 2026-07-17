import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const materials = ['all', 'gold', 'silver'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const priceRange = priceRanges[selectedPrice];
    result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.variants.includes(selectedMaterial));
    }

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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice !== 0 ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(0);
    setSelectedMaterial('all');
    setSearchParams({});
  };

  return (
    <main className="bg-base min-h-screen pt-20">
      {/* Header */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-serif text-4xl md:text-5xl text-warm-white">The Collection</h1>
          <p className="mt-3 text-sm text-taupe font-sans font-light">
            Timeless demi-fine jewelry, designed to be worn every day.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm font-sans text-warm-white hover:text-accent transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-accent text-base text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm font-sans text-warm-white hover:text-accent transition-colors"
            >
              Sort by: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-surface border border-divider rounded-md shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-divider transition-colors ${
                      sortBy === option.value ? 'text-accent' : 'text-warm-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-warm-white">
                Filters
              </h3>
              <button onClick={() => setFiltersOpen(false)}>
                <X size={18} className="text-warm-white" />
              </button>
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-accent hover:text-accent-hover underline mb-6"
              >
                Clear all filters
              </button>
            )}

            {/* Category */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-white mb-3">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block text-sm font-sans capitalize transition-colors ${
                      selectedCategory === cat ? 'text-accent' : 'text-taupe hover:text-warm-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-white mb-3">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range, idx) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(idx)}
                    className={`block text-sm font-sans transition-colors ${
                      selectedPrice === idx ? 'text-accent' : 'text-taupe hover:text-warm-white'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-white mb-3">
                Material
              </h4>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block text-sm font-sans capitalize transition-colors ${
                      selectedMaterial === mat ? 'text-accent' : 'text-taupe hover:text-warm-white'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-xs text-taupe mb-4 font-sans">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-white">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-accent hover:text-accent-hover underline"
                >
                  Clear filters
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
    </main>
  );
}
