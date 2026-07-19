import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (priceRange === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => window.history.pushState({}, '', '/shop')}
              className="accent-primary"
            />
            <span className="text-sm">All Jewelry</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => window.history.pushState({}, '', `/shop?category=${cat.id}`)}
                className="accent-primary"
              />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 - $75' },
            { value: 'over75', label: 'Over $75' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange === option.value}
                onChange={() => setPriceRange(option.value)}
                className="accent-primary"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-4">Material</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: '18K Gold Plated', label: '18K Gold Plated' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={material === option.value}
                onChange={() => setMaterial(option.value)}
                className="accent-primary"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="container-padding py-8 md:py-12 border-b border-border">
        <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-2">
          {selectedCategory !== 'all'
            ? categories.find(c => c.id === selectedCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <p className="text-muted-foreground text-sm">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="container-padding py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-sm mb-6"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile sidebar overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-background p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="serif-heading text-xl">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                    Close
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-sm focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      ...product,
                      nameId: `product-${product.id}-name`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your filters to discover more jewelry.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
