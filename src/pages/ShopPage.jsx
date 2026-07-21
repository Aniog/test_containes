import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '@/lib/products';
import ProductCard from '@/components/home/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materialOptions = ['All', '18K Gold Plated', 'Silver'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [material, setMaterial] = useState('All');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 120]);

  const setCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => {
        if (activeCategory === 'Huggies') {
          return p.subcategory === 'Huggies';
        }
        return p.category === activeCategory;
      });
    }

    if (material !== 'All') {
      result = result.filter((p) => p.material === material);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
  }, [activeCategory, material, sort, priceRange]);

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-warm-200 mb-4 font-medium">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-gold-400'
                  : 'text-warm-400 hover:text-warm-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-warm-200 mb-4 font-medium">
          Price Range
        </h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="120"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gold-400"
          />
          <div className="flex justify-between text-xs text-warm-400">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-warm-200 mb-4 font-medium">
          Material
        </h4>
        <div className="space-y-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm transition-colors ${
                material === mat
                  ? 'text-gold-400'
                  : 'text-warm-400 hover:text-warm-200'
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
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">
            {activeCategory === 'All' ? 'Shop All' : activeCategory}
          </h1>
          <p className="mt-3 text-sm text-warm-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterSection />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-velvet-800 border border-warm-600/40 rounded-full text-xs tracking-wider uppercase text-warm-200 shadow-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed bottom-0 left-0 right-0 z-50 bg-velvet-900 border-t border-warm-700/30 rounded-t-xl p-6 max-h-[70vh] overflow-y-auto lg:hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm tracking-wider uppercase text-warm-200 font-medium">
                    Filters
                  </span>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-warm-400 hover:text-gold-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSection />
              </div>
            </>
          )}

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2 flex-wrap">
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-1.5 text-xs tracking-wider uppercase rounded-sm transition-all ${
                      activeCategory === cat
                        ? 'bg-gold-500/15 border border-gold-400 text-gold-300'
                        : 'bg-transparent border border-warm-700/40 text-warm-400 hover:border-warm-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-warm-700/40 rounded-sm px-3 py-2 pr-8 text-xs text-warm-300 cursor-pointer focus:outline-none focus:border-gold-500"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-velvet-900 text-warm-200">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-500 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-400">No products match your filters.</p>
                <button
                  onClick={() => {
                    setCategory('All');
                    setMaterial('All');
                    setPriceRange([0, 120]);
                  }}
                  className="btn-outline mt-6 text-xs"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
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
