import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { getProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; 

const Shop = () => {
  const containerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  useEffect(() => {
    // Load and filter/sort products
    let fetched = getProducts();
    
    if (activeCategory !== 'All') {
      fetched = fetched.filter(p => p.category === activeCategory);
    }

    if (sortBy === 'price-low') {
      fetched.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      fetched.sort((a, b) => b.price - a.price);
    }

    setProducts(fetched);
  }, [activeCategory, sortBy]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          if (strkImgConfig && products.length > 0 && containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
          }
        } catch (e) {}
      }, 0);
    });
  }, [products]); // Re-run when products change

  return (
    <div ref={containerRef} className="pt-28 pb-24 min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-velmora-ink">Shop the Collection</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto font-light">Explore our curated selection of demi-fine jewelry. Each piece is designed to be worn effortlessly every day.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center py-4 border-y border-border mb-6">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
          >
            <SlidersHorizontal size={16} /> Filter & Sort
          </button>
          <span className="text-sm text-muted-foreground">{products.length} Products</span>
        </div>

        {/* Sidebar Filter (Desktop) & Drawer (Mobile) */}
        <div className={`
          fixed inset-0 z-50 bg-background p-6 transform transition-transform duration-300 overflow-y-auto
          md:relative md:inset-auto md:z-auto md:bg-transparent md:p-0 md:transform-none md:w-64 md:shrink-0
          ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex justify-between items-center mb-8 md:hidden">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
          </div>

          <div className="mb-10">
            <h3 className="text-xs font-medium tracking-widest uppercase mb-4 text-velmora-charcoal">Categories</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                    className={`text-sm cursor-pointer transition-colors ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-xs font-medium tracking-widest uppercase mb-4 text-velmora-charcoal">Sort By</h3>
            <ul className="space-y-3">
              {sortOptions.map(option => (
                <li key={option.value}>
                  <button 
                    onClick={() => { setSortBy(option.value); setIsFilterOpen(false); }}
                    className={`text-sm cursor-pointer transition-colors ${sortBy === option.value ? 'text-velmora-gold font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4">
            <span className="text-sm text-muted-foreground">{products.length} Products</span>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No products found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((product) => (
                <div key={product.id} className="group flex flex-col relative">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                    <img 
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[shop-title-${product.id}] ${product.category} gold jewelry isolated`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={product.name}
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=600')`,
                        backgroundSize: 'cover'
                      }}
                    />
                     {/* Hover image dummy */}
                     <div 
                       className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/5"
                       style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=600')`,
                          backgroundSize: 'cover'
                       }}
                    />
                  </Link>
                  
                  <div className="flex flex-col flex-1">
                    <Link to={`/product/${product.id}`}>
                      <h3 id={`shop-title-${product.id}`} className="text-sm font-medium tracking-wide uppercase mb-1 text-velmora-ink">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
                    </Link>
                    <div className="flex justify-between items-center mt-auto pt-2">
                      <span className="text-velmora-charcoal">${product.price}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="text-xs tracking-widest uppercase border border-border px-4 py-2 hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
