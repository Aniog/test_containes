import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', name: 'Under $50', min: 0, max: 50 },
    { id: '50to75', name: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', name: 'Over $75', min: 75, max: Infinity }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
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
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name}
          </h1>
          <p className="mt-4 text-velmora-taupe">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between py-4 border-y border-velmora-sand mb-8">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-[0.15em]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                  selectedCategory === category.id 
                    ? 'text-velmora-charcoal' 
                    : 'text-velmora-taupe hover:text-velmora-charcoal'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm uppercase tracking-[0.15em] cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-velmora-taupe mb-6">No products found matching your criteria.</p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group"
                onMouseEnter={() => {
                  setHoveredProduct(product.id);
                  setActiveImageIndex(prev => ({ ...prev, [product.id]: 1 }));
                }}
                onMouseLeave={() => {
                  setHoveredProduct(null);
                  setActiveImageIndex(prev => ({ ...prev, [product.id]: 0 }));
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] bg-velmora-sand/20 overflow-hidden">
                    <img 
                      src={product.images[activeImageIndex[product.id] || 0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Quick Add Overlay */}
                    <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="w-full bg-velmora-cream text-velmora-charcoal py-3 text-sm uppercase tracking-[0.15em] hover:bg-velmora-gold hover:text-white transition-colors"
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="mt-4 text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-sm tracking-[0.15em] hover:text-velmora-gold transition-colors">
                      {product.shortName}
                    </h3>
                  </Link>
                  <p className="mt-1 text-velmora-gold font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-velmora-cream shadow-2xl animate-slide-up overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label 
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => handleCategoryChange(category.id)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-velmora-taupe">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label 
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.id}
                        onChange={() => setSelectedPriceRange(range.id)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-velmora-taupe">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-velmora-sand">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="btn-accent w-full"
              >
                Apply Filters
              </button>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="w-full mt-3 text-sm text-velmora-taupe hover:text-velmora-charcoal"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;