import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80 - $120' }
  ];

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
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-velmora-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            Shop All
          </h1>
          <p className="font-sans text-sm text-velmora-taupe mt-3">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center space-x-2 py-2 px-4 border border-velmora-taupe/30"
          >
            <Filter size={16} />
            <span className="font-sans text-sm">Filters</span>
          </button>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block w-full text-left py-2 font-sans text-sm transition-colors ${
                    selectedCategory === 'all' 
                      ? 'text-velmora-gold' 
                      : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block w-full text-left py-2 font-sans text-sm transition-colors ${
                      selectedCategory === cat.id 
                        ? 'text-velmora-gold' 
                        : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block w-full text-left py-2 font-sans text-sm transition-colors ${
                      priceRange === range.value 
                        ? 'text-velmora-gold' 
                        : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-velmora-taupe">
                {filteredProducts.length} products
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-taupe/30 px-4 py-2 pr-8 font-sans text-sm text-velmora-charcoal focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-charcoal">No products found</p>
                <p className="font-sans text-sm text-velmora-taupe mt-2">Try adjusting your filters</p>
                <button 
                  onClick={() => {setSelectedCategory('all'); setPriceRange('all');}}
                  className="mt-4 text-velmora-gold hover:underline font-sans text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="group animate-slide-up opacity-0"
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                        <img 
                          src={product.images[hoveredProduct === product.id ? 1 : 0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Quick Add */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1, 'gold');
                          }}
                          className="absolute bottom-0 left-0 right-0 py-3 bg-velmora-charcoal/90 text-velmora-cream font-sans text-xs tracking-wide uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <ShoppingBag size={14} strokeWidth={1.5} />
                          <span>Quick Add</span>
                        </button>
                      </div>

                      {/* Info */}
                      <div className="mt-4 text-center">
                        <h3 className="font-serif text-sm text-velmora-charcoal tracking-widest">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-center mt-1 space-x-1">
                          <Star size={12} fill="#C9A962" stroke="#C9A962" />
                          <span className="font-sans text-xs text-velmora-taupe">
                            {product.rating}
                          </span>
                        </div>
                        <p className="font-sans text-sm text-velmora-gold mt-1">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}