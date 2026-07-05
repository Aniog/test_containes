import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [activeCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-[#faf9f7] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
            Shop Our Collection
          </h1>
          <p className="text-[#1a1a1a]/60 mt-4 max-w-xl mx-auto">
            Discover timeless pieces crafted with 18K gold plating, designed 
            to become treasured parts of your jewelry collection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-serif text-lg tracking-[0.1em] text-[#1a1a1a] mb-6">
                CATEGORIES
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm tracking-wide transition-colors ${
                    activeCategory === 'all'
                      ? 'text-[#d4af37] font-medium'
                      : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                  }`}
                >
                  All Jewelry ({products.length})
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm tracking-wide transition-colors ${
                      activeCategory === cat.id
                        ? 'text-[#d4af37] font-medium'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mt-10">
                <h3 className="font-serif text-lg tracking-[0.1em] text-[#1a1a1a] mb-4">
                  PRICE RANGE
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setPriceRange([0, 200])}
                    className={`block text-sm tracking-wide transition-colors ${
                      priceRange[0] === 0 && priceRange[1] === 200
                        ? 'text-[#d4af37] font-medium'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setPriceRange([0, 50])}
                    className={`block text-sm tracking-wide transition-colors ${
                      priceRange[0] === 0 && priceRange[1] === 50
                        ? 'text-[#d4af37] font-medium'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setPriceRange([50, 100])}
                    className={`block text-sm tracking-wide transition-colors ${
                      priceRange[0] === 50 && priceRange[1] === 100
                        ? 'text-[#d4af37] font-medium'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    $50 - $100
                  </button>
                  <button
                    onClick={() => setPriceRange([100, 200])}
                    className={`block text-sm tracking-wide transition-colors ${
                      priceRange[0] === 100 && priceRange[1] === 200
                        ? 'text-[#d4af37] font-medium'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    $100+
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm text-[#1a1a1a]/70"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden bg-[#faf9f7] p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-lg tracking-[0.1em]">FILTERS</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => { handleCategoryChange('all'); setShowFilters(false); }}
                  className={`block w-full text-left text-sm ${
                    activeCategory === 'all' ? 'text-[#d4af37] font-medium' : 'text-[#1a1a1a]/70'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { handleCategoryChange(cat.id); setShowFilters(false); }}
                    className={`block w-full text-left text-sm ${
                      activeCategory === cat.id ? 'text-[#d4af37] font-medium' : 'text-[#1a1a1a]/70'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#1a1a1a]/60">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-[#1a1a1a]/70 bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#1a1a1a]/60">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
