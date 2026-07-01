import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Filter, ChevronDown, SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Get active category filter from URL
  const selectedCategory = searchParams.get('category') || 'all';

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-20 bg-velmora-light min-h-screen">
      <div className="bg-velmora-muted/30 py-16 px-4 md:px-8 text-center border-b border-velmora-border">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-dark mb-4">
          {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h1>
        <p className="text-velmora-gray max-w-lg mx-auto">
          Explore our collection of demi-fine jewelry designed for everyday elegance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center pb-4 border-b border-velmora-border">
            <button 
              className="flex items-center gap-2 font-semibold text-sm uppercase tracking-widest text-velmora-dark"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="w-4 h-4" /> Filter
            </button>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-semibold text-sm uppercase tracking-widest text-velmora-dark pr-6 py-2 outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'fixed inset-0 z-50 bg-velmora-light p-6 overflow-y-auto' : 'hidden md:block'}`}>
            {isFilterOpen && (
              <div className="flex justify-between items-center mb-8 border-b border-velmora-border pb-4 md:hidden">
                <h2 className="text-xl font-serif">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
              </div>
            )}
            
            <div className="space-y-12">
              <div>
                <h3 className="font-semibold tracking-wider text-xs uppercase text-velmora-dark mb-6">Category</h3>
                <ul className="space-y-4 text-velmora-gray">
                  {['all', 'earrings', 'necklaces', 'huggies', 'gifts'].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          setCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`capitalize hover:text-velmora-dark transition-colors ${selectedCategory === cat ? 'text-velmora-dark font-medium' : ''}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold tracking-wider text-xs uppercase text-velmora-dark mb-6">Material</h3>
                <ul className="space-y-4 text-velmora-gray">
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked readOnly className="rounded-none border-velmora-border text-velmora-gold focus:ring-velmora-gold" />
                      <span>18k Gold Plated</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" disabled className="rounded-none border-velmora-border text-velmora-gold focus:ring-velmora-gold" />
                      <span className="opacity-50">Silver Tone (Coming Soon)</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold tracking-wider text-xs uppercase text-velmora-dark mb-6">Price</h3>
                <ul className="space-y-4 text-velmora-gray">
                  <li><button className="hover:text-velmora-dark">Under $50</button></li>
                  <li><button className="hover:text-velmora-dark">$50 - $100</button></li>
                  <li><button className="hover:text-velmora-dark">Over $100</button></li>
                </ul>
              </div>
            </div>
            
            {isFilterOpen && (
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full mt-12 bg-velmora-dark text-velmora-light py-4 font-semibold tracking-wider uppercase text-sm"
              >
                Apply Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-velmora-border">
              <span className="text-sm text-velmora-gray">{filteredProducts.length} Products</span>
              <div className="flex items-center gap-2">
                <span className="text-sm uppercase tracking-widest font-semibold text-velmora-dark">Sort By:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-medium text-sm text-velmora-gray pr-6 py-1 outline-none cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-gray" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-muted mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                    />
                    <img 
                      src={product.image_hover} 
                      alt={`${product.name} alternate view`} 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-dark font-semibold text-xs tracking-widest uppercase py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-velmora-dark hover:text-white"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <Link to={`/product/${product.id}`} className="mt-auto flex flex-col pt-2">
                    <h3 className="uppercase tracking-widest text-[11px] font-bold mb-1 text-velmora-dark">{product.name}</h3>
                    <p className="text-velmora-gray font-medium text-sm">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-gray text-lg">No products found matching your filters.</p>
                <button 
                  onClick={() => setCategory('all')}
                  className="mt-6 uppercase tracking-wider text-sm font-semibold text-velmora-dark border-b border-velmora-dark pb-1"
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