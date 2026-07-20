import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import products, { categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['Gold Tone', 'Silver Tone'];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const [activePrice, setActivePrice] = useState(null);
  const [activeMaterial, setActiveMaterial] = useState('');
  const [sort, setSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges[activePrice];
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase().includes(activeMaterial.toLowerCase()))
      );
    }

    switch (sort) {
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
  }, [activeCategory, activePrice, activeMaterial, sort]);

  const clearFilters = () => {
    setActivePrice(null);
    setActiveMaterial('');
    setSort('featured');
    setSearchParams({});
  };

  const hasFilters = activeCategory || activePrice !== null || activeMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-deep-700 mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSearchParams({})}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              !activeCategory ? 'text-deep-800 font-medium' : 'text-deep-500 hover:text-deep-700'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.slug })}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                activeCategory === cat.slug ? 'text-deep-800 font-medium' : 'text-deep-500 hover:text-deep-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-deep-700 mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => setActivePrice(activePrice === i ? null : i)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                activePrice === i ? 'text-deep-800 font-medium' : 'text-deep-500 hover:text-deep-700'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-wider uppercase text-deep-700 mb-4">Finish</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setActiveMaterial(activeMaterial === mat ? '' : mat)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                activeMaterial === mat ? 'text-deep-800 font-medium' : 'text-deep-500 hover:text-deep-700'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-subtitle">Explore</p>
          <h1 className="section-title mt-3">Shop All Jewelry</h1>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-deep-100">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-deep-600 hover:text-deep-800"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
                </button>
                <span className="font-sans text-xs text-deep-400">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-deep-400 hover:text-deep-700 tracking-wider uppercase transition-colors"
                  >
                    Clear all
                  </button>
                )}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-sans text-xs text-deep-600 bg-transparent border border-deep-200 px-3 py-2 focus:outline-none focus:border-deep-400"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-deep-500">No products found.</p>
                <button onClick={clearFilters} className="btn-outline mt-4 text-xs">Clear Filters</button>
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

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-deep-950/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-72 bg-cream shadow-2xl animate-slide-in-left">
            <div className="flex items-center justify-between px-6 py-5 border-b border-deep-100">
              <h2 className="font-serif text-lg text-deep-800">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)} className="text-deep-500 hover:text-deep-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}