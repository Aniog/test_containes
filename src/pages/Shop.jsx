import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $70', min: 50, max: 70 },
  { label: '$70+', min: 70, max: Infinity },
];
const materials = ['All', 'Gold Plated', 'Silver Plated'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    list = list.filter(
      (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
    );

    if (selectedMaterial !== 'All') {
      list = list.filter((p) =>
        selectedMaterial === 'Gold Plated'
          ? p.variants.includes('Gold')
          : p.variants.includes('Silver')
      );
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPrice(priceRanges[0]);
    setSelectedMaterial('All');
    setSortBy('featured');
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500 mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-charcoal-900 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500 mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block text-sm transition-colors ${
                selectedPrice.label === range.label
                  ? 'text-charcoal-900 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500 mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-charcoal-900 font-medium'
                  : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600 hover:text-gold-700 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <main className="pt-16 lg:pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Shop All
          </h1>
          <p className="text-sm text-charcoal-500 mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-100">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-charcoal-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="hidden lg:block text-sm text-charcoal-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-charcoal-500 hidden sm:inline">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans font-medium tracking-wider uppercase border border-charcoal-200 bg-transparent px-3 py-2 focus:outline-none focus:border-charcoal-400"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs font-sans font-medium tracking-widest uppercase text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
            className="fixed inset-0 bg-charcoal-950/30 z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-cream-50 z-[70] shadow-2xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-widest uppercase">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </main>
  );
}
