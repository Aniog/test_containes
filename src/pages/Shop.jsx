import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-light-gray overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-base py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Quick Add</span>
            </span>
          </button>
        </div>
      </Link>
      
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-gray'
              }`}
            />
          ))}
        </div>
        <p className="mt-1 text-velmora-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedMaterial = searchParams.get('material') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by material
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(selectedMaterial));
    }
    
    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50);
          break;
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75to100':
          result = result.filter(p => p.price > 75 && p.price <= 100);
          break;
        case 'over100':
          result = result.filter(p => p.price > 100);
          break;
      }
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

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-velmora-base">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-velmora-warm-gray">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center space-x-2 py-3 border border-velmora-warm-gray/30"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Filters</span>
          </button>

          {/* Sidebar Filters */}
          <aside className={`
            fixed lg:static inset-0 z-50 lg:z-auto
            bg-velmora-cream lg:bg-transparent
            transition-transform duration-300 lg:transition-none
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            w-full lg:w-64 flex-shrink-0
          `}>
            <div className="h-full lg:h-auto overflow-y-auto p-6 lg:p-0">
              {/* Mobile Close */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-warm-gray mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-left w-full py-1 ${selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-base hover:text-velmora-gold'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-left w-full py-1 capitalize ${selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-base hover:text-velmora-gold'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-warm-gray mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: '75to100', label: '$75 - $100' },
                    { value: 'over100', label: 'Over $100' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block text-left w-full py-1 ${priceRange === option.value ? 'text-velmora-gold' : 'text-velmora-base hover:text-velmora-gold'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-warm-gray mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                    { value: 'silver', label: 'Sterling Silver' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('material', option.value)}
                      className={`block text-left w-full py-1 ${selectedMaterial === option.value ? 'text-velmora-gold' : 'text-velmora-base hover:text-velmora-gold'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-warm-gray hover:text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-velmora-warm-gray">{filteredProducts.length} products</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-none bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickAdd={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-warm-gray">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}