import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Collection = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentCategory, currentSort]); // Rerun when filters change

  // Filter and sort products
  let displayProducts = [...products];
  
  if (currentCategory !== 'all') {
    displayProducts = displayProducts.filter(p => p.category.toLowerCase() === currentCategory);
  }

  if (currentSort === 'price-low-high') {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high-low') {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    if (sort === 'featured') {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sort);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen mb-24">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
          {currentCategory === 'all' ? 'The Collection' : `${currentCategory}`}
        </h1>
        <p className="text-muted-foreground font-sans tracking-wide">
          {displayProducts.length} {displayProducts.length === 1 ? 'Product' : 'Products'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4 mb-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 font-sans tracking-widest text-xs uppercase"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          
          <div className="flex items-center gap-2 border border-border px-3 py-1.5 focus-within:border-foreground transition-colors">
            <select 
              value={currentSort}
              onChange={handleSortChange}
              className="bg-transparent text-xs font-sans uppercase tracking-widest outline-none appearance-none pr-4"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="-ml-3 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`w-full md:w-64 shrink-0 flex-col gap-10 ${isFilterOpen ? 'flex mb-8' : 'hidden md:flex'}`}>
          <div>
            <h3 className="font-serif text-xl mb-4">Category</h3>
            <ul className="space-y-3 font-sans text-sm tracking-wide text-muted-foreground">
              {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryChange(cat)}
                    className={`capitalize hover:text-foreground transition-colors ${currentCategory === cat ? 'text-foreground font-medium' : ''}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="font-serif text-xl mb-4">Sort By</h3>
            <div className="relative border border-border px-4 py-2 focus-within:border-foreground transition-colors">
              <select 
                value={currentSort}
                onChange={handleSortChange}
                className="w-full bg-transparent text-sm font-sans tracking-wide outline-none appearance-none pr-8 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {displayProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.slug}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                    <span id={`shop-${product.id}-name`} className="hidden">{product.name} {product.category}</span>
                    {/* Primary Image */}
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}-main`}
                      data-strk-img={`[shop-${product.id}-name]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    {/* Secondary Image (Hover) */}
                    <img
                      alt={`${product.name} worn`}
                      data-strk-img-id={`shop-${product.id}-hover`}
                      data-strk-img={`[shop-${product.id}-name] worn model`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    
                    {/* Quick Add Button */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button 
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors"
                      >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  
                  <div className="flex flex-col flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
                    <Link to={`/product/${product.slug}`} className="font-serif text-base tracking-wider uppercase mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </Link>
                    <p className="font-sans text-sm mt-auto">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <h3 className="font-serif text-2xl mb-4">No products found</h3>
              <p className="text-muted-foreground mb-8">We couldn't find any products in this category.</p>
              <button 
                onClick={() => handleCategoryChange('all')}
                className="bg-foreground text-background px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-primary transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;