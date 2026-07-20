import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import { cn } from '@/lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: 'over75', label: 'Over $75' }
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
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to75') return p.price >= 50 && p.price <= 75;
        if (priceRange === 'over75') return p.price > 75;
        return true;
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

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={cn(
              'block text-left w-full text-sm transition-colors',
              selectedCategory === 'all' ? 'text-charcoal font-medium' : 'text-charcoal-light hover:text-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                'block text-left w-full text-sm transition-colors capitalize',
                selectedCategory === cat.id ? 'text-charcoal font-medium' : 'text-charcoal-light hover:text-charcoal'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={cn(
                'block text-left w-full text-sm transition-colors',
                priceRange === range.value ? 'text-charcoal font-medium' : 'text-charcoal-light hover:text-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <div className="container-main py-12 md:py-16">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-h2 text-charcoal mb-2">Shop All</h1>
            <p className="text-charcoal-light">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterContent />
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort */}
              <div className="flex justify-end mb-6">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm focus:outline-none focus:border-charcoal"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-charcoal-light mb-4">No products found</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange('all');
                    }}
                    className="text-gold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div 
              className="absolute inset-0 bg-charcoal/50"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-80 bg-cream p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full mt-8 bg-charcoal text-cream py-3 text-sm uppercase tracking-widest"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}