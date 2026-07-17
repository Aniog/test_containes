import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
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
      case 'newest':
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="py-10 lg:py-14 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
            The Collection
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-wide">
            {activeCategory || 'All Jewelry'}
          </h1>
          <p className="text-sm text-taupe mt-3">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Filter sidebar — desktop */}
          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-4 font-medium">
                Category
              </h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={clearFilters}
                  className={`text-left text-sm transition-colors ${
                    !activeCategory ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={`text-left text-sm transition-colors ${
                      activeCategory === cat ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-4 font-medium">
                Price
              </h4>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    className="text-left text-sm text-taupe hover:text-espresso transition-colors"
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-4 font-medium">
                Material
              </h4>
              <div className="flex flex-col gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    className="text-left text-sm text-taupe hover:text-espresso transition-colors"
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-espresso text-cream text-xs tracking-[0.12em] uppercase shadow-xl"
            >
              <SlidersHorizontal size={14} />
              Filters{activeCategory ? ' (1)' : ''}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-espresso/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-cream p-6 pb-10 max-h-[70vh] overflow-y-auto rounded-t-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl tracking-wide">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="p-2">
                    <X size={18} />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-3 font-medium">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { clearFilters(); setFilterOpen(false); }}
                      className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                        !activeCategory ? 'bg-espresso text-cream border-espresso' : 'border-stone-warm text-taupe'
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSearchParams({ category: cat }); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                          activeCategory === cat ? 'bg-espresso text-cream border-espresso' : 'border-stone-warm text-taupe'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort + active filters */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-warm">
              <div className="flex items-center gap-2 flex-wrap">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-lighter text-[10px] tracking-[0.1em] uppercase">
                    {activeCategory}
                    <button onClick={clearFilters}>
                      <X size={11} />
                    </button>
                  </span>
                )}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs tracking-[0.08em] uppercase bg-transparent border-0 text-taupe outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe">No products found.</p>
                <button onClick={clearFilters} className="btn-outline mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
