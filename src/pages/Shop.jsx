import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Filter, ChevronDown } from 'lucide-react';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const initialSort = searchParams.get('sort') || 'featured';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortOption, setSortOption] = useState(initialSort);
  const [priceFilter, setPriceFilter] = useState('all');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, sortOption, priceFilter]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setCategoryFilter(cat.toLowerCase());
    }
  }, [searchParams]);

  // Filter products
  let filteredProducts = products.filter(p => {
    if (categoryFilter !== 'all' && p.category.toLowerCase() !== categoryFilter) return false;
    if (priceFilter === 'under50' && p.price >= 50) return false;
    if (priceFilter === '50to100' && (p.price < 50 || p.price > 100)) return false;
    if (priceFilter === 'over100' && p.price <= 100) return false;
    return true;
  });

  // Sort products
  if (sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleCategoryChange = (cat) => {
    setCategoryFilter(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
  const prices = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to100', label: '$50 - $100' },
    { value: 'over100', label: 'Over $100' }
  ];

  return (
    <div className="bg-background min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-muted py-12 md:py-20 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          {categoryFilter === 'all' ? 'All Collections' : categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
        </h1>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Discover our full range of 18K gold-plated demi-fine jewelry. Designed for everyday elegance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button 
              className="flex items-center text-sm font-medium uppercase tracking-widest border border-border px-4 py-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-4 h-4 mr-2" /> Filters
            </button>
            <div className="relative">
              <select 
                className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-sm uppercase tracking-widest font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">A to Z</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar */}
          <div className={`w-full md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-10">
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-xl mb-4 border-b border-border pb-2 text-foreground">Category</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        className={`text-sm uppercase tracking-wider hover:text-primary transition-colors ${categoryFilter === cat ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
                        onClick={() => handleCategoryChange(cat)}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-serif text-xl mb-4 border-b border-border pb-2 text-foreground">Price</h3>
                <ul className="space-y-3">
                  {prices.map(price => (
                    <li key={price.value}>
                      <button 
                        className={`text-sm uppercase tracking-wider hover:text-primary transition-colors ${priceFilter === price.value ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
                        onClick={() => setPriceFilter(price.value)}
                      >
                        {price.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Sort By:</span>
                <div className="relative">
                  <select 
                    className="appearance-none bg-transparent py-1 pr-6 text-sm uppercase tracking-widest font-medium focus:outline-none text-foreground cursor-pointer"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">A to Z</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted-foreground">No products found matching your filters.</p>
                <button 
                  onClick={() => {
                    handleCategoryChange('all');
                    setPriceFilter('all');
                  }}
                  className="mt-4 text-sm uppercase tracking-widest border-b border-foreground"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img-id={`shop-img-${product.id}`}
                        data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img-id={`shop-img-hover-${product.id}`}
                        data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] lifestyle`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        alt={`${product.name} lifestyle`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button 
                          className="w-full rounded-none bg-background/90 text-foreground hover:bg-background hover:text-primary backdrop-blur uppercase tracking-widest text-xs"
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, 1, product.variants[0]);
                          }}
                        >
                          Quick Add
                        </Button>
                      </div>
                    </Link>
                    <div className="text-center">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 text-foreground">{product.name}</h3>
                        <p className="text-muted-foreground text-sm">${product.price}</p>
                        <span id={`product-desc-${product.id}`} className="sr-only">{product.description}</span>
                      </Link>
                    </div>
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