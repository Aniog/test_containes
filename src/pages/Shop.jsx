import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  // Derive categories from product data
  const categories = ['All', ...new Set(products.map(p => p.category))];

  useEffect(() => {
    let result = [...products];

    // Filter
    if (categoryParam && categoryParam.toLowerCase() !== 'all' && categoryParam.toLowerCase() !== 'collections') {
       result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
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
        // Mock sorting by newest (reverse id as proxy)
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default: // 'featured'
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
    }

    setFilteredProducts(result);

  }, [categoryParam, sortBy]);

  // Load images when products change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const handleCategoryChange = (cat) => {
    if (cat.toLowerCase() === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-velmora-bg min-h-screen pt-32 pb-24" ref={containerRef}>
      
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <h1 className="font-serif text-4xl tracking-widest uppercase text-velmora-text text-center mb-4">
          {categoryParam ? categoryParam.toUpperCase() : 'ALL JEWELRY'}
        </h1>
        <p className="text-center text-velmora-text/60 max-w-2xl mx-auto">
          Discover our full collection of demi-fine pieces, designed to be layered, lived in, and loved.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle & Sort Header */}
        <div className="lg:hidden flex justify-between items-center border-y border-velmora-border py-4 mb-6">
          <button 
            className="flex items-center gap-2 uppercase tracking-widest text-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent uppercase tracking-widest text-sm pr-6 outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block mb-8 lg:mb-0`}>
          <div className="sticky top-32">
            
            {/* Desktop Sort (hidden on mobile) */}
            <div className="hidden lg:block mb-10">
              <h3 className="font-serif tracking-widest uppercase mb-4 text-sm border-b border-velmora-border pb-2">Sort By</h3>
              <div className="space-y-3">
                 {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'newest', label: 'New Arrivals' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' }
                 ].map(option => (
                   <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${sortBy === option.value ? 'border-velmora-accent' : 'border-velmora-border group-hover:border-velmora-text/50'}`}>
                       {sortBy === option.value && <div className="w-2 h-2 rounded-full bg-velmora-accent" />}
                     </div>
                     <input 
                       type="radio" 
                       name="sort" 
                       value={option.value} 
                       checked={sortBy === option.value}
                       onChange={(e) => setSortBy(e.target.value)}
                       className="hidden" 
                     />
                     <span className={`text-sm ${sortBy === option.value ? 'text-velmora-text' : 'text-velmora-text/70 group-hover:text-velmora-text'} transition-colors`}>
                       {option.label}
                     </span>
                   </label>
                 ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-serif tracking-widest uppercase mb-4 text-sm border-b border-velmora-border pb-2">Category</h3>
              <ul className="space-y-3">
                {categories.map((cat) => {
                  const isActive = (!categoryParam && cat === 'All') || (categoryParam?.toLowerCase() === cat.toLowerCase());
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-sm transition-colors ${isActive ? 'text-velmora-text font-medium' : 'text-velmora-text/70 hover:text-velmora-accent'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
            {products.map((product) => {
              const isVisible = filteredProducts.some(p => p.id === product.id);
              if (!isVisible) return null;
              return (
              <div key={product.id} className="group relative">
                {/* Image Container */}
                <Link key={product.id} to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-border/20 overflow-hidden mb-4">
                  {/* Primary Image */}
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={product.mainImgTag}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    data-strk-img-id={product.altImgId}
                    data-strk-img={product.altImgTag}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  {/* Quick Add Button (Desktop only, mobile clicks through to PDP) */}
                  <div className="hidden lg:block absolute left-0 right-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1, product.variants[0]);
                      }}
                      className="w-full bg-white/95 backdrop-blur py-3 text-sm uppercase tracking-widest text-velmora-text hover:bg-velmora-accent hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="text-center">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 id={`shop-item-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 hover:text-velmora-accent transition-colors truncate px-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-velmora-text/70">${product.price}</p>
                </div>
              </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-velmora-text/60">
              <p>No products found matching your criteria.</p>
              <button 
                onClick={() => handleCategoryChange('All')}
                className="mt-4 underline hover:text-velmora-accent"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}