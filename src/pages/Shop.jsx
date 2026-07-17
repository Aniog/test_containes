import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75to100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over100', label: 'Over $100', min: 100, max: Infinity }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
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
        // Featured - keep original order
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

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-velmora-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-velmora-sand text-velmora-charcoal text-sm"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
          
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-2 pr-8 border border-velmora-sand text-velmora-charcoal text-sm bg-transparent focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-10">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm tracking-wider transition-colors ${
                      selectedCategory === 'all' 
                        ? 'text-velmora-gold' 
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`text-sm tracking-wider transition-colors ${
                        selectedCategory === category.id 
                          ? 'text-velmora-gold' 
                          : 'text-velmora-taupe hover:text-velmora-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-10">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      onClick={() => setPriceRange(range.id)}
                      className={`text-sm tracking-wider transition-colors ${
                        priceRange === range.id 
                          ? 'text-velmora-gold' 
                          : 'text-velmora-taupe hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-8">
              <span className="text-sm text-velmora-taupe mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 border border-velmora-sand text-velmora-charcoal text-sm bg-transparent focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velmora-taupe">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-velmora-charcoal/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div className={`absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-xl transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-velmora-charcoal">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm tracking-wider ${
                      selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-taupe'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`text-sm tracking-wider ${
                        selectedCategory === category.id ? 'text-velmora-gold' : 'text-velmora-taupe'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      onClick={() => setPriceRange(range.id)}
                      className={`text-sm tracking-wider ${
                        priceRange === range.id ? 'text-velmora-gold' : 'text-velmora-taupe'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full py-4 bg-velmora-charcoal text-white text-sm tracking-widest"
            >
              APPLY FILTERS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}