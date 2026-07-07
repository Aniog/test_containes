import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    let result = [...products];
    
    if (categoryParam) {
      result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
    }
    
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filteredProducts]);

  const toggleCategory = (cat) => {
    if (categoryParam?.toLowerCase() === cat.toLowerCase()) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-background min-h-screen pt-12 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Archive</h1>
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="flex items-center gap-2 title-uppercase text-[10px] hover:text-primary transition-colors lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>
              <div className="hidden lg:flex items-center gap-8">
                <button 
                  onClick={() => { searchParams.delete('category'); setSearchParams(searchParams); }}
                  className={`title-uppercase text-[10px] transition-colors ${!categoryParam ? 'text-primary' : 'hover:text-primary/70'}`}
                >
                  All Items
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`title-uppercase text-[10px] transition-colors ${categoryParam?.toLowerCase() === cat.toLowerCase() ? 'text-primary' : 'hover:text-primary/70'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 group relative">
              <span className="title-uppercase text-[10px] text-muted-foreground mr-2">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent title-uppercase text-[10px] border-none focus:ring-0 cursor-pointer pr-8 appearance-none"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div>
              <h3 className="title-uppercase text-xs mb-6">Category</h3>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => toggleCategory(cat)}
                      className={`text-sm font-light transition-editorial ${categoryParam?.toLowerCase() === cat.toLowerCase() ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="title-uppercase text-xs mb-6">Price</h3>
              <ul className="space-y-3">
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">Under $50</button></li>
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">$50 - $100</button></li>
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">Over $100</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="title-uppercase text-xs mb-6">Material</h3>
              <ul className="space-y-3">
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">18K Gold Plated</button></li>
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">Recycled Brass</button></li>
                <li><button className="text-sm font-light text-foreground/70 hover:text-foreground">Cubic Zirconia</button></li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col h-full">
                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                      <span id={`shop-query-${product.id}`} className="hidden">{product.imageQuery}</span>
                      <Link to={`/product/${product.id}`} className="block h-full">
                        <img
                          data-strk-img-id={`shop-main-${product.id}`}
                          data-strk-img={`[shop-query-${product.id}] studio flat lay`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-editorial duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <img
                            data-strk-img-id={`shop-hover-${product.id}`}
                            data-strk-img={`[shop-query-${product.id}] model wearing editorial`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                            alt={`${product.name} worn`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest font-semibold transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-editorial duration-500 flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={14} />
                        Add to Bag
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="title-uppercase text-[11px] mb-1">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="font-sans font-medium text-sm">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif italic text-2xl mb-4">No pieces found in this category.</p>
                <button 
                  onClick={() => { searchParams.delete('category'); setSearchParams(searchParams); }}
                  className="title-uppercase text-xs border-b border-primary pb-1 text-primary"
                >
                  View All Archive
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
