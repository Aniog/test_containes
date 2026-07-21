import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated', 'Crystal'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated'];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';
  const activeSort = searchParams.get('sort') || 'Featured';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activeMaterial !== 'All') {
      filtered = filtered.filter(p => p.materials.includes(activeMaterial));
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (activeSort) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Best Rated':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, activeMaterial, activeSort, priceRange]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'All' || value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => updateParam('category', cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Under $50', value: '0-50' },
            { label: '$50 – $75', value: '50-75' },
            { label: '$75 – $100', value: '75-100' },
            { label: 'Over $100', value: '100-' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => updateParam('price', opt.value)}
              className={`block text-sm transition-colors ${
                priceRange === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat}
              onClick={() => updateParam('material', mat)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-charcoal'
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
      <div className="container-site py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-charcoal mb-3">The Collection</h1>
          <p className="text-velmora-warmgray text-sm">
            {activeCategory !== 'All' ? activeCategory : 'All Pieces'} — {filteredProducts.length} items
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {filterContent}
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-stone/40">
              <button
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-warmgray hover:text-velmora-charcoal transition-colors"
                onClick={() => setMobileFilters(!mobileFilters)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="flex items-center gap-2 text-xs text-velmora-warmgray ml-auto">
                <span className="hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => updateParam('sort', e.target.value)}
                    className="appearance-none bg-transparent text-xs font-medium tracking-wider uppercase text-velmora-charcoal pr-6 pl-2 py-1 cursor-pointer focus:outline-none"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-warmgray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters panel */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileFilters ? 'max-h-96 mb-8' : 'max-h-0'}`}>
              <div className="pb-6 border-b border-velmora-stone/40">
                {filterContent}
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-warmgray text-sm">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs text-velmora-gold hover:text-velmora-golddark underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
