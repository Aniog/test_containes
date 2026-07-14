import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
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
        case 'over75':
          result = result.filter(p => p.price > 75);
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
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Category</h3>
        <div className="space-y-3">
          {[{ id: 'all', name: 'All Products' }, ...categories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-left text-sm tracking-wider transition-colors ${
                selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-charcoal/70 hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { id: 'all', name: 'All Prices' },
            { id: 'under50', name: 'Under $50' },
            { id: '50to75', name: '$50 - $75' },
            { id: 'over75', name: 'Over $75' }
          ].map((price) => (
            <button
              key={price.id}
              onClick={() => setPriceRange(price.id)}
              className={`block text-left text-sm tracking-wider transition-colors ${
                priceRange === price.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-charcoal/70 hover:text-velmora-charcoal'
              }`}
            >
              {price.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Material</h3>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver'].map((material) => (
            <button
              key={material}
              className="block text-left text-sm tracking-wider text-velmora-charcoal/70 hover:text-velmora-charcoal transition-colors"
            >
              {material}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl">Shop All</h1>
          <p className="mt-4 text-velmora-charcoal/70">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 py-3 px-4 border border-velmora-sand"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm tracking-wider">Filters</span>
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile Filter Overlay */}
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
              isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className="absolute inset-0 bg-velmora-charcoal/50"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-velmora-cream shadow-xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel />
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full mt-8 py-4 bg-velmora-charcoal text-velmora-cream text-sm tracking-widest uppercase"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
              <span className="text-sm text-velmora-taupe">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || priceRange !== 'all') && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-velmora-sand text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                    <button onClick={() => handleCategoryChange('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-velmora-sand text-sm">
                    {priceRange === 'under50' ? 'Under $50' : priceRange === '50to75' ? '$50 - $75' : 'Over $75'}
                    <button onClick={() => setPriceRange('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addToCart(product, 'gold', 1)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream/95 text-velmora-charcoal text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-taupe">{product.rating}</span>
        </div>
        <p className="mt-2 text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
}