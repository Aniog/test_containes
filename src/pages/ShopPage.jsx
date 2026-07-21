import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-[#6B6B6B]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter Toggle (Mobile) */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-[#C9A962] rounded-full" />}
          </button>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => handleCategoryChange('')}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm capitalize">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-3">
                  {['all', 'gold', 'silver', 'rose-gold'].map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm capitalize">{mat === 'all' ? 'All' : mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All' },
                    { value: '0-40', label: 'Under $40' },
                    { value: '40-60', label: '$40 - $60' },
                    { value: '60-100', label: '$60 - $100' },
                    { value: '100-200', label: 'Over $100' }
                  ].map(price => (
                    <label key={price.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === price.value}
                        onChange={() => setPriceRange(price.value)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm">{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-[#6B6B6B] hover:text-[#C9A962]"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort (Desktop) */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none border border-[#E8E4DE] px-4"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B6B6B] mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-[#FAF8F5] p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="mobile-category"
                    checked={selectedCategory === ''}
                    onChange={() => handleCategoryChange('')}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm">All</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm capitalize">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {['all', 'gold', 'silver', 'rose-gold'].map(mat => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-material"
                      checked={selectedMaterial === mat}
                      onChange={() => setSelectedMaterial(mat)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm capitalize">{mat === 'all' ? 'All' : mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <div className="space-y-3">
                {[
                  { value: 'all', label: 'All' },
                  { value: '0-40', label: 'Under $40' },
                  { value: '40-60', label: '$40 - $60' },
                  { value: '60-100', label: '$60 - $100' },
                  { value: '100-200', label: 'Over $100' }
                ].map(price => (
                  <label key={price.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={priceRange === price.value}
                      onChange={() => setPriceRange(price.value)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm">{price.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="flex-1 btn-secondary"
                >
                  Clear
                </button>
              )}
              <button 
                onClick={() => setShowFilters(false)}
                className="flex-1 btn-accent"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
