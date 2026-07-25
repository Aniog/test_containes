import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { ChevronDown } from 'lucide-react';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const [sortBy, setSortBy] = useState('featured');
  // mobile filter state
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category');
  
  // Filter products
  let filteredProducts = products;
  if (categoryFilter) {
    if (categoryFilter.toLowerCase() === 'collections' || categoryFilter.toLowerCase() === 'all') {
       // show all
    } else {
       filteredProducts = products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }
  }

  // Sort products
  let displayProducts = [...filteredProducts];
  if (sortBy === 'price-low') {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    displayProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    displayProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="bg-background min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl uppercase tracking-wider mb-4">
            {categoryFilter ? categoryFilter.replace('-', ' ') : 'All Jewelry'}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our full collection of demi-fine solid gold plated pieces designed to be lived in.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
            <button 
              className="uppercase tracking-widest text-sm font-medium flex items-center gap-2"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              Filters <ChevronDown size={16} className={`transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className="relative">
              <select 
                title="Sort by filter"
                className="appearance-none bg-transparent uppercase tracking-widest text-sm font-medium pr-6 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-10">
              
              {/* Category Filter */}
              <div>
                <h3 className="uppercase tracking-widest text-sm font-medium mb-4 border-b border-border pb-2">Category</h3>
                <ul className="space-y-3 font-serif lg:text-lg">
                  <li><Link to="/shop" className={`${!categoryFilter ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>All Jewelry</Link></li>
                  <li><Link to="/shop?category=earrings" className={`${categoryFilter === 'earrings' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>Earrings</Link></li>
                  <li><Link to="/shop?category=necklaces" className={`${categoryFilter === 'necklaces' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>Necklaces</Link></li>
                  <li><Link to="/shop?category=huggies" className={`${categoryFilter === 'huggies' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>Huggies</Link></li>
                  <li><Link to="/shop?category=sets" className={`${categoryFilter === 'sets' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>Gift Sets</Link></li>
                </ul>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="uppercase tracking-widest text-sm font-medium mb-4 border-b border-border pb-2">Material</h3>
                <ul className="space-y-3 font-serif opacity-70 pointer-events-none">
                  <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked readOnly className="accent-primary" /> 18k Gold Plated</label></li>
                  <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-primary" /> 14k Solid Gold</label></li>
                  <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-primary" /> Sterling Silver</label></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center border-b border-border pb-4 mb-8">
              <span className="text-muted-foreground text-sm uppercase tracking-widest">{displayProducts.length} Products</span>
              <div className="relative">
                <span className="text-muted-foreground text-sm uppercase tracking-widest mr-2">Sort By:</span>
                <select 
                  className="appearance-none bg-transparent uppercase tracking-widest text-sm font-medium pr-6 focus:outline-none cursor-pointer"
                  value={sortBy}
                  title="Sort by filter"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {displayProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                    <img 
                       data-strk-img-id={`shop-img-${product.id}`}
                       data-strk-img={`[product-title-${product.id}]`}
                       data-strk-img-ratio="4x5"
                       data-strk-img-width="600"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       alt={product.name}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary flex items-center justify-center text-secondary-foreground text-xs uppercase tracking-widest">
                       <img 
                         data-strk-img-id={`shop-img2-${product.id}`}
                         data-strk-img={`[product-title-${product.id}] close up`}
                         data-strk-img-ratio="4x5"
                         data-strk-img-width="600"
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                         alt={`${product.name} alternate`}
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({...product, variant: 'gold'}, 1);
                      }}
                      className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs text-black py-3 uppercase tracking-widest text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
                    <h3 id={`product-title-${product.id}`} className="font-serif text-lg tracking-wide uppercase mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {displayProducts.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-muted-foreground">No products found in this category.</p>
                <Link to="/shop" className="inline-block mt-6 border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
                  Clear Filters
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}