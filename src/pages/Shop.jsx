import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category') || null;
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat) {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    setSearchParams(params, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      filtered = filtered.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
      );
    }

    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Page header */}
      <div className="bg-cream-100/80 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <h1 className="font-serif text-3xl lg:text-4xl text-ink-900 font-light">Shop</h1>
          <p className="text-ink-400 text-sm mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-ink-700"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase font-medium text-ink-600 pr-5 py-1 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - desktop */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedPrice={selectedPrice}
              selectedMaterial={selectedMaterial}
              onCategoryChange={handleCategoryChange}
              onPriceChange={setSelectedPrice}
              onMaterialChange={setSelectedMaterial}
            />

            <div className="mt-8">
              <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-800 mb-4">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent border border-cream-300 px-3 py-2.5 text-sm text-ink-700 focus:outline-none focus:border-gold-400 appearance-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream-50 p-6 overflow-y-auto shadow-xl animate-slide-down">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-800">
                    Filters
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-ink-400 text-xs uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  selectedPrice={selectedPrice}
                  selectedMaterial={selectedMaterial}
                  onCategoryChange={(cat) => {
                    handleCategoryChange(cat);
                    setMobileFiltersOpen(false);
                  }}
                  onPriceChange={setSelectedPrice}
                  onMaterialChange={setSelectedMaterial}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}