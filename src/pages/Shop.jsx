import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [categoryFilter, sortOption]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...seedProducts];

    // Filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // 'featured' - just keep original order
        break;
    }

    return result;
  }, [categoryFilter, sortOption]);

  const updateCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Sets' },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="bg-accent/30 py-12 mb-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4">
            {categoryFilter ? categories.find(c => c.id === categoryFilter)?.label : 'All Jewelry'}
          </h1>
          <p id="shop-subtitle" className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of demi-fine gold jewelry. Designed to be treasured daily.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 border-t border-border pt-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase hover:text-primary transition-colors"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <div className="relative">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-transparent text-sm tracking-widest uppercase focus:outline-none pr-6 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="sticky top-24 space-y-10">
              
              <div>
                <h3 className="font-serif text-xl mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateCategory(cat.id)}
                        className={`text-sm tracking-wide hover:text-primary transition-colors ${
                          (categoryFilter === cat.id || (!categoryFilter && cat.id === 'all'))
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Filter (Visual only for UI completeness) */}
              <div>
                <h3 className="font-serif text-xl mb-4">Material</h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked className="accent-primary" />
                      <span className="text-sm tracking-wide group-hover:text-primary transition-colors">18K Gold Plated</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm tracking-wide text-muted-foreground group-hover:text-primary transition-colors">Sterling Silver</span>
                    </label>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Desktop Sort */}
            <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} Products</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sort By:</span>
                <div className="relative">
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-transparent text-sm font-medium tracking-wide focus:outline-none pr-6 cursor-pointer border-b border-transparent hover:border-foreground"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Alphabetically, A-Z</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-8">
              {filteredAndSortedProducts.length > 0 ? (
                filteredAndSortedProducts.map((product) => (
                  <div key={`shop-item-${product.id}`} className="group relative flex flex-col h-full">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                      <img 
                        data-strk-img-id={`shop-img-${product.id}`}
                        data-strk-img={`[shop-item-title-${product.id}] [shop-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Hover Quick Add */}
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <button 
                           onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="w-full bg-background/95 backdrop-blur text-foreground py-2 md:py-3 text-xs md:text-sm tracking-widest uppercase hover:bg-background transition-colors shadow-sm"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>
                    <div className="flex flex-col flex-grow">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={`shop-item-title-${product.id}`} className="font-serif text-base md:text-lg uppercase tracking-wide mb-1 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <span className="text-sm md:text-base text-muted-foreground mt-auto">${product.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center">
                  <p className="text-lg font-serif">No products found for this category.</p>
                  <button 
                    onClick={() => updateCategory('all')}
                    className="mt-4 border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-primary transition-colors"
                  >
                    View All Jewelry
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
