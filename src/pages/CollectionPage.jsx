import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ChevronDown } from 'lucide-react';

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.material !== 'all' && product.material !== filters.material) return false;
    if (filters.priceRange === 'under50' && product.price >= 50) return false;
    if (filters.priceRange === '50to100' && (product.price < 50 || product.price > 100)) return false;
    if (filters.priceRange === 'over100' && product.price <= 100) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      if (value === 'all') {
        searchParams.delete('category');
      } else {
        searchParams.set('category', value);
      }
      setSearchParams(searchParams);
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={filters.category === 'all'}
              onChange={() => updateFilter('category', 'all')}
              className="accent-accent"
            />
            <span className="text-sm text-foreground">All</span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="accent-accent"
              />
              <span className="text-sm text-foreground">{cat.label}</span>
              <span className="text-xs text-[#9B9590]">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === option.value}
                onChange={() => updateFilter('priceRange', option.value)}
                className="accent-accent"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Material</h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All' },
            { value: 'gold', label: 'Gold Plated' },
            { value: 'silver', label: 'Silver Plated' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={filters.material === option.value}
                onChange={() => updateFilter('material', option.value)}
                className="accent-accent"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Page header */}
      <div className="bg-[#FAF8F5] py-12 lg:py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3">
            {filters.category !== 'all'
              ? categories.find(c => c.id === filters.category)?.label || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="text-[#6B6560]">
            {sortedProducts.length} piece{sortedProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            className="lg:hidden flex items-center gap-2 text-sm text-foreground mb-6"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            Filters <ChevronDown className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Sidebar */}
          <aside
            className={`w-64 flex-shrink-0 ${
              mobileFiltersOpen ? 'block' : 'hidden'
            } lg:block`}
          >
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-foreground border border-[#E8E4DF] px-4 py-2 bg-transparent focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-foreground mb-2">No pieces found</p>
                <p className="text-sm text-[#6B6560]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
