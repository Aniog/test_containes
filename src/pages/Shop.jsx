import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 & Above', min: 75, max: Infinity },
];

const materials = ['18K Gold Plated Sterling Silver', '18K Gold Plated Brass'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category') || '';
  const [priceFilter, setPriceFilter] = useState(null);
  const [materialFilter, setMaterialFilter] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products
  let filtered = [...products];

  if (categoryFilter) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }
  if (priceFilter) {
    filtered = filtered.filter((p) => p.price >= priceFilter.min && p.price < priceFilter.max);
  }
  if (materialFilter) {
    filtered = filtered.filter((p) => p.material === materialFilter);
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const handleCategoryChange = (cat) => {
    if (cat === categoryFilter) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setPriceFilter(null);
    setMaterialFilter('');
  };

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter;

  const categoryNames = {
    earrings: 'Earrings',
    necklaces: 'Necklaces',
    huggies: 'Huggies',
    sets: 'Gift Sets',
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="section-padding py-8 md:py-12 text-center">
        <h1 className="heading-lg text-dark-900 mb-3">
          {categoryFilter ? categoryNames[categoryFilter] || 'Shop' : 'Shop All'}
        </h1>
        <p className="body-md text-dark-600">
          {categoryFilter
            ? `Discover our ${categoryNames[categoryFilter]?.toLowerCase()} collection.`
            : 'Explore our collection of demi-fine gold jewelry.'}
        </p>
      </div>

      {/* Toolbar */}
      <div className="section-padding py-4 border-t border-b border-stone-200 flex items-center justify-between">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-dark-700 hover:text-dark-900 transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
          {hasActiveFilters && (
            <span className="w-5 h-5 bg-gold-500 text-white text-[10px] rounded-full flex items-center justify-center">
              {[categoryFilter, priceFilter, materialFilter].filter(Boolean).length}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2">
          <span className="font-sans text-xs text-dark-500">{filtered.length} products</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs uppercase tracking-wider text-dark-700 bg-transparent border-none cursor-pointer appearance-none pr-6 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-dark-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="section-padding py-8 md:py-12 flex gap-8">
        {/* Sidebar filters */}
        <aside
          className={`${
            filterOpen ? 'block' : 'hidden'
          } md:block w-full md:w-56 flex-shrink-0`}
        >
          {/* Mobile close */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <h3 className="font-sans text-sm font-medium text-dark-900">Filters</h3>
            <button onClick={() => setFilterOpen(false)} className="text-dark-600">
              <X size={20} />
            </button>
          </div>

          {/* Category */}
          <div className="mb-8">
            <h4 className="font-sans text-xs uppercase tracking-widest text-dark-800 mb-3">Category</h4>
            <div className="space-y-2">
              {Object.entries(categoryNames).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`block font-sans text-sm transition-colors ${
                    categoryFilter === key ? 'text-gold-500 font-medium' : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h4 className="font-sans text-xs uppercase tracking-widest text-dark-800 mb-3">Price</h4>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setPriceFilter(priceFilter?.label === range.label ? null : range)}
                  className={`block font-sans text-sm transition-colors ${
                    priceFilter?.label === range.label ? 'text-gold-500 font-medium' : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-8">
            <h4 className="font-sans text-xs uppercase tracking-widest text-dark-800 mb-3">Material</h4>
            <div className="space-y-2">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setMaterialFilter(materialFilter === mat ? '' : mat)}
                  className={`block font-sans text-sm text-left transition-colors ${
                    materialFilter === mat ? 'text-gold-500 font-medium' : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="font-sans text-xs uppercase tracking-wider text-gold-500 hover:text-gold-600 transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-dark-700 mb-2">No products found</p>
              <p className="body-sm text-dark-500 mb-6">Try adjusting your filters.</p>
              <button onClick={clearFilters} className="btn-outline">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
