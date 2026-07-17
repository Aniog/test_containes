import React, { useState } from 'react';
import { seedProducts } from '../data/products';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={`/product/${product.id}`}
      className="group cursor-pointer flex flex-col block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-4">
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="font-serif text-sm tracking-widest uppercase mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
        <p className="text-sm text-foreground/80">${product.price}</p>
      </div>
    </a>
  );
};

const CollectionPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  // We double the products just to have more items to display in the grid
  const displayProducts = [...seedProducts, ...seedProducts.map(p => ({...p, id: p.id + 10}))];
  
  const filteredProducts = activeCategory === 'All' 
    ? displayProducts 
    : displayProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      
      {/* Collection Header */}
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">All Jewelry</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Discover our complete collection of demi-fine solid gold layers designed for your everyday moments and special occasions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 pb-6 border-b border-border">
          
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 hide-scrollbar scroll-smooth">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-widest uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? 'text-foreground font-medium border-b border-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>
            
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-sm tracking-widest uppercase text-muted-foreground">Sort By</span>
              <span className="text-sm tracking-widest uppercase font-medium">Featured</span>
              <ChevronDown size={14} className="group-hover:text-accent transition-colors" />
            </div>
          </div>
        </div>

        {/* Filter Drawer (Mobile) or Panel (Desktop) - simplified for demo */}
        {isFilterOpen && (
          <div className="mb-12 bg-secondary/10 p-8 border border-border/50 flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-serif text-lg mb-4">Material</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="text-sm text-foreground/80">18K Gold Vermeil</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                  <span className="text-sm text-foreground/80">Sterling Silver</span>
                </label>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Price</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="price" className="w-4 h-4 accent-primary" />
                  <span className="text-sm text-foreground/80">Under $50</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="price" className="w-4 h-4 accent-primary" />
                  <span className="text-sm text-foreground/80">$50 - $100</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="price" className="w-4 h-4 accent-primary" />
                  <span className="text-sm text-foreground/80">Over $100</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Pagination / Load More */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">Showing {filteredProducts.length} of {displayProducts.length} items</p>
          <button className="border border-foreground text-foreground px-12 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
            Load More
          </button>
        </div>

      </div>
    </div>
  );
};

export default CollectionPage;
