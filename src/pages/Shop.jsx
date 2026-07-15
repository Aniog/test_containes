import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80 - $120' },
  ];

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4 text-[#1A1A1A]">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-left text-sm ${
              selectedCategory === 'all' ? 'text-[#C9A962] font-medium' : 'text-[#8B8580] hover:text-[#1A1A1A]'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-left text-sm capitalize ${
                selectedCategory === cat.id ? 'text-[#C9A962] font-medium' : 'text-[#8B8580] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-lg mb-4 text-[#1A1A1A]">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-left text-sm ${
                priceRange === range.value ? 'text-[#C9A962] font-medium' : 'text-[#8B8580] hover:text-[#1A1A1A]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4 text-[#1A1A1A]">Material</h3>
        <div className="space-y-3">
          <button className="block text-left text-sm text-[#C9A962] font-medium">
            18K Gold Plated
          </button>
          <button className="block text-left text-sm text-[#8B8580] hover:text-[#1A1A1A]">
            Sterling Silver
          </button>
        </div>
      </div>
    </>
  );

  return (
    <main className="pt-20 md:pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-[#F5F0E8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Shop All</h1>
          <p className="text-[#8B8580]">Discover our complete collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#1A1A1A]"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm text-[#1A1A1A] focus:outline-none cursor-pointer"
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
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-[#FAF8F5] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn-gold mt-8"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <span className="text-sm text-[#8B8580] mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-sm text-[#1A1A1A] focus:outline-none cursor-pointer border-b border-[#8B8580]/30"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-[#8B8580] mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#8B8580] mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="btn-gold-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}