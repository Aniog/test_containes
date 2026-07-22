import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const ProductCard = ({ product, onQuickAdd }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-card overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
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
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-gold text-velmora-black text-sm uppercase tracking-wider font-medium
              transition-all duration-300 hover:bg-velmora-gold-hover ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </span>
          </button>
        </div>
      </Link>
      
      <Link to={`/product/${product.id}`}>
        <h3 className="product-title text-sm mb-1 text-velmora-text group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}`} 
            />
          ))}
        </div>
        <span className="text-velmora-muted text-xs">({product.reviews})</span>
      </div>
      <p className="text-velmora-gold mt-1">${product.price}</p>
    </div>
  );
};

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Material filter
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(activeMaterial));
    }
    
    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }
    
    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
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
  }, [activeCategory, activeMaterial, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-text mb-4">
            {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-velmora-muted mb-6"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Category</h3>
                <div className="space-y-3">
                  {['all', ...categories.map(c => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`block text-left text-sm transition-colors duration-300 ${
                        activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Price</h3>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-40', label: 'Under $40' },
                    { value: '40-60', label: '$40 - $60' },
                    { value: '60-100', label: '$60 - $100' },
                    { value: '100-200', label: 'Over $100' },
                  ].map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block text-left text-sm transition-colors duration-300 ${
                        priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Material</h3>
                <div className="space-y-3">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={`block text-left text-sm transition-colors duration-300 ${
                        activeMaterial === mat ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      {mat === 'all' ? 'All Materials' : `${mat.charAt(0).toUpperCase() + mat.slice(1)} Tone`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold text-sm hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div 
                className="absolute inset-0 bg-black/60"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-80 bg-velmora-dark p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-velmora-text">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-6 h-6 text-velmora-muted" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Category</h3>
                  <div className="space-y-3">
                    {['all', ...categories.map(c => c.id)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => updateFilter('category', cat)}
                        className={`block text-left text-sm w-full ${
                          activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-muted'
                        }`}
                      >
                        {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Price</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: '0-40', label: 'Under $40' },
                      { value: '40-60', label: '$40 - $60' },
                      { value: '60-100', label: '$60 - $100' },
                      { value: '100-200', label: 'Over $100' },
                    ].map((range) => (
                      <button
                        key={range.value}
                        onClick={() => updateFilter('price', range.value)}
                        className={`block text-left text-sm w-full ${
                          priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-muted'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Material</h3>
                  <div className="space-y-3">
                    {['all', 'gold', 'silver'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => updateFilter('material', mat)}
                        className={`block text-left text-sm w-full ${
                          activeMaterial === mat ? 'text-velmora-gold' : 'text-velmora-muted'
                        }`}
                      >
                        {mat === 'all' ? 'All Materials' : `${mat.charAt(0).toUpperCase() + mat.slice(1)} Tone`}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="full" 
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-end mb-6">
              <label className="text-sm text-velmora-muted mr-3">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-velmora-card border border-velmora-border text-velmora-text px-4 py-2 text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickAdd={addItem}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velmora-muted mb-6">No products found matching your criteria.</p>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;