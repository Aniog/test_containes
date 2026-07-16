import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, activeSort]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'All') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-noir mb-4">Category</h4>
        <div className="space-y-2.5">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat
                  ? 'text-noir font-medium'
                  : 'text-warmgray-500 hover:text-noir'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-noir mb-4">Material</h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat
                  ? 'text-noir font-medium'
                  : 'text-warmgray-500 hover:text-noir'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price range visual */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-noir mb-4">Price</h4>
        <div className="text-sm text-warmgray-600">$30 – $120</div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-noir">
              {activeCategory !== 'All' ? activeCategory : 'All Jewelry'}
            </h1>
            <p className="text-sm text-warmgray-500 mt-2">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative hidden md:block">
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent text-sm text-warmgray-700 pr-6 py-2 border-b border-warmgray-200 focus:outline-none focus:border-noir transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-warmgray-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 text-sm text-warmgray-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden w-full mb-6 animate-fade-in">
              <FilterPanel />
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warmgray-400">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline text-xs mt-6"
                >
                  Clear Filters
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
    </main>
  );
}