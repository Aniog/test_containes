import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80+' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-sans text-sm tracking-wider text-velmora-charcoal mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block font-sans text-sm text-left w-full ${
              categoryFilter === 'all' ? 'text-velmora-gold' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
            } transition-colors`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block font-sans text-sm text-left w-full capitalize ${
                categoryFilter === cat.id ? 'text-velmora-gold' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
              } transition-colors`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-sans text-sm tracking-wider text-velmora-charcoal mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block font-sans text-sm text-left w-full ${
                priceFilter === range.value ? 'text-velmora-gold' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
              } transition-colors`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Shop All
          </h1>
          <p className="font-sans text-velmora-taupe max-w-xl mx-auto">
            Discover our complete collection of demi-fine jewelry, each piece crafted with intention and care.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-sm text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          
          {/* Mobile Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-sm text-velmora-charcoal pr-6 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <>
              <div
                className="fixed inset-0 bg-velmora-warmBlack/30 z-40 md:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="fixed top-0 left-0 h-full w-80 bg-velmora-cream z-50 p-6 md:hidden overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn-primary mt-8"
                >
                  Apply Filters
                </button>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <span className="font-sans text-sm text-velmora-taupe mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-sm text-velmora-charcoal pr-6 focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <p className="font-sans text-sm text-velmora-taupe mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-card group"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image-primary absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                          src={product.imageSecondary}
                          alt={product.name}
                          className="product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                        />
                        
                        {/* Quick Add */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1, 'gold');
                          }}
                          className="absolute bottom-0 left-0 right-0 bg-velmora-warmBlack/90 text-velmora-cream font-sans text-xs tracking-wider py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>

                    <div className="mt-4 text-center">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal hover:text-velmora-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-velmora-gold mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-velmora-taupe mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline"
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