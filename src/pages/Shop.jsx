import { useState, useEffect, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts({ category: selectedCategory, sortBy })
      .then((rows) => {
        setProducts(rows);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const price = p.data?.price ?? p.price ?? 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });
  }, [products, priceRange]);

  const activeFilterCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 200 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 200]);
  };

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center py-10 md:py-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-velmora-stone max-w-md mx-auto">
            Discover our curated selection of demi-fine gold jewelry — designed to be worn, layered, and treasured.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 border-t border-b border-velmora-warm mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <span className="hidden md:block text-xs text-velmora-stone">
            {filteredProducts.length} products
          </span>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-warm shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-velmora-sand transition-colors ${
                      sortBy === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-base'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs uppercase tracking-widest font-medium">
                  Filters
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-stone underline hover:text-velmora-gold transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-3">
                  Category
                </h4>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-base hover:text-velmora-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-3">
                  Price
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-velmora-stone">${priceRange[0]}</span>
                  <span className="text-xs text-velmora-stone">-</span>
                  <span className="text-xs text-velmora-stone">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([0, parseInt(e.target.value)])
                  }
                  className="w-full accent-velmora-gold"
                />
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-velmora-sand rounded mb-4" />
                    <div className="h-4 bg-velmora-sand rounded w-3/4 mx-auto mb-2" />
                    <div className="h-3 bg-velmora-sand rounded w-1/3 mx-auto" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-velmora-base/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-velmora-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs uppercase tracking-widest font-medium">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-3">
                Category
              </h4>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-base'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-3">
                Price
              </h4>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-velmora-stone">${priceRange[0]}</span>
                <span className="text-xs text-velmora-stone">-</span>
                <span className="text-xs text-velmora-stone">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([0, parseInt(e.target.value)])
                }
                className="w-full accent-velmora-gold"
              />
            </div>

            <button
              onClick={() => {
                clearFilters();
                setMobileFiltersOpen(false);
              }}
              className="w-full border border-velmora-base text-velmora-base py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-base hover:text-white transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
