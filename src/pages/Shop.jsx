import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', label: 'Over $75', min: 75, max: Infinity }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    const range = priceRanges.find(r => r.id === priceRange);
    if (range) {
      result = result.filter(p => p.price >= range.min && p.price < range.max);
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

  return (
    <main className="pt-[72px]">
      <div className="container py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop All
          </h1>
          <p className="text-stone" style={{ color: 'var(--color-stone)' }}>
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 
                className="font-serif text-sm tracking-wider mb-4"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}
              >
                CATEGORY
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-sm block text-left transition-colors ${
                    selectedCategory === 'all' ? 'text-gold' : 'text-stone hover:text-charcoal'
                  }`}
                  style={{ color: selectedCategory === 'all' ? 'var(--color-gold)' : 'var(--color-stone)' }}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-sm block text-left transition-colors capitalize ${
                      selectedCategory === cat.id ? 'text-gold' : 'text-stone hover:text-charcoal'
                    }`}
                    style={{ color: selectedCategory === cat.id ? 'var(--color-gold)' : 'var(--color-stone)' }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 
                className="font-serif text-sm tracking-wider mb-4"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}
              >
                PRICE
              </h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`text-sm block text-left transition-colors ${
                      priceRange === range.id ? 'text-gold' : 'text-stone hover:text-charcoal'
                    }`}
                    style={{ color: priceRange === range.id ? 'var(--color-gold)' : 'var(--color-stone)' }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <span className="text-sm text-stone mr-4" style={{ color: 'var(--color-stone)' }}>
                {filteredProducts.length} products
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none border-b border-transparent focus:border-charcoal"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Sort by: Price: Low to High</option>
                  <option value="price-high">Sort by: Price: High to Low</option>
                  <option value="newest">Sort by: Newest</option>
                </select>
                <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-stone mb-4" style={{ color: 'var(--color-stone)' }}>
                  No products found matching your criteria.
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
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
            className="fixed inset-0 z-50 bg-charcoal/30"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] z-50 bg-cream p-6 overflow-y-auto animate-slide-in" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl" style={{ fontFamily: 'var(--font-serif)' }}>Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="font-serif text-sm tracking-wider mb-4" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>CATEGORY</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-sm block text-left w-full ${selectedCategory === 'all' ? 'text-gold' : 'text-stone'}`}
                  style={{ color: selectedCategory === 'all' ? 'var(--color-gold)' : 'var(--color-stone)' }}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-sm block text-left w-full capitalize ${selectedCategory === cat.id ? 'text-gold' : 'text-stone'}`}
                    style={{ color: selectedCategory === cat.id ? 'var(--color-gold)' : 'var(--color-stone)' }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-serif text-sm tracking-wider mb-4" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>PRICE</h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`text-sm block text-left w-full ${priceRange === range.id ? 'text-gold' : 'text-stone'}`}
                    style={{ color: priceRange === range.id ? 'var(--color-gold)' : 'var(--color-stone)' }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsFilterOpen(false)}
              className="btn-primary w-full"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </main>
  );
}