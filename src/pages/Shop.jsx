import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Price filter
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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
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
    { value: '80-120', label: '$80+' }
  ];

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-velmora-white uppercase tracking-wider mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-left w-full py-2 text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-white'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-left w-full py-2 text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-velmora-white uppercase tracking-wider mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-left w-full py-2 text-sm transition-colors ${
                priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-white'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-velmora-black pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-white mb-2">Shop All</h1>
          <p className="text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 bg-velmora-black md:hidden">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-velmora-border">
                  <h2 className="font-serif text-xl text-velmora-white">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 text-velmora-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <FilterContent />
                </div>
                <div className="p-4 border-t border-velmora-border">
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-velmora-soft border border-velmora-border text-velmora-white px-4 py-2 text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-muted mb-4">No products found</p>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-velmora-soft overflow-hidden mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500"
                          style={{ opacity: hoveredProduct === product.id ? 0 : 1 }}
                        />
                        <img
                          src={product.images[1]}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                          style={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                        />
                        
                        {/* Quick Add */}
                        <div 
                          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-velmora-black/80 to-transparent transition-all duration-300 ${
                            hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="w-full"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product);
                            }}
                          >
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Quick Add
                          </Button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-velmora-white line-clamp-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                          <span className="text-xs text-velmora-muted">{product.rating}</span>
                        </div>
                        <p className="text-velmora-gold font-medium">${product.price}</p>
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