import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: 'over-80', label: 'Over $80' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      result = result.filter(p => {
        switch (priceRange) {
          case 'under-40': return p.price < 40;
          case '40-60': return p.price >= 40 && p.price < 60;
          case '60-80': return p.price >= 60 && p.price < 80;
          case 'over-80': return p.price >= 80;
          default: return true;
        }
      });
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
        // For demo, just reverse
        result.reverse();
        break;
      default:
        // Featured - keep original order
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

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <main className="min-h-screen bg-velmora-cream pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-charcoal">
            Shop All
          </h1>
          <p className="mt-4 text-velmora-charcoal/60 max-w-xl mx-auto">
            Discover our collection of demi-fine gold jewelry, crafted to be treasured.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm tracking-wider uppercase focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg tracking-wider mb-4">Category</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`text-sm tracking-wider transition-colors ${
                        selectedCategory === 'all' 
                          ? 'text-velmora-gold' 
                          : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm tracking-wider capitalize transition-colors ${
                          selectedCategory === category.id 
                            ? 'text-velmora-gold' 
                            : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg tracking-wider mb-4">Price</h3>
                <ul className="space-y-3">
                  {priceRanges.map(range => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-sm tracking-wider transition-colors ${
                          priceRange === range.value 
                            ? 'text-velmora-gold' 
                            : 'text-velmora-charcoal/60 hover:text-velmora-gold'
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
                  className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm tracking-wider uppercase focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-charcoal/60 mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                      <img 
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-velmora-gold text-velmora-charcoal text-xs tracking-widest uppercase">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="product-name text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                        <span className="text-xs text-velmora-taupe">
                          {product.rating}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-velmora-charcoal">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-velmora-charcoal/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-velmora-cream z-50 md:hidden overflow-y-auto animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl tracking-wider">Filters</h2>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
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
                      className={`text-sm tracking-wider transition-colors ${
                        selectedCategory === 'all' 
                          ? 'text-velmora-gold' 
                          : 'text-velmora-charcoal/60'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm tracking-wider capitalize transition-colors ${
                          selectedCategory === category.id 
                            ? 'text-velmora-gold' 
                            : 'text-velmora-charcoal/60'
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
                  {priceRanges.map(range => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-sm tracking-wider transition-colors ${
                          priceRange === range.value 
                            ? 'text-velmora-gold' 
                            : 'text-velmora-charcoal/60'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn-primary"
                >
                  Apply Filters
                </button>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="w-full text-center text-sm text-velmora-taupe hover:text-velmora-gold"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}