import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
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

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-velmora-taupe">{filteredProducts.length} pieces</p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-widest focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-0.5 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-10">
              <h3 className="font-serif text-lg tracking-wider mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm transition-colors ${
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
                      className={`text-sm transition-colors ${
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
              <h3 className="font-serif text-lg tracking-wider mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      onClick={() => setPriceRange(range.value)}
                      className={`text-sm transition-colors ${
                        priceRange === range.value
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
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <span className="text-sm text-velmora-taupe mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-widest focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-0.5 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-velmora-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-charcoal/50"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-xl transform transition-transform ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg tracking-wider mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm transition-colors ${
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
                      className={`text-sm transition-colors ${
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
              <h3 className="font-serif text-lg tracking-wider mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      onClick={() => setPriceRange(range.value)}
                      className={`text-sm transition-colors ${
                        priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-taupe'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}