import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { cn } from '../../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  // Filters state
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  
  const materials = ['18k Gold Plated Brass', '18k Gold Plated Sterling Silver'];

  useEffect(() => {
    // Schedule image loading for when products grid updates
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy, selectedMaterials]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  // Filter products
  let filteredProducts = products;
  
  if (activeCategory !== 'all') {
    if (activeCategory === 'bestsellers') {
      filteredProducts = filteredProducts.filter(p => p.bestseller);
    } else {
      filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
    }
  }

  if (selectedMaterials.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      selectedMaterials.some(m => p.material.includes(m))
    );
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const categoryTitleMap = {
    'all': 'All Jewelry',
    'earrings': 'Earrings',
    'necklaces': 'Necklaces',
    'huggies': 'Huggies',
    'bestsellers': 'Bestsellers',
    'collections': 'Collections',
    'sets': 'Sets'
  };

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {categoryTitleMap[activeCategory] || 'Shop Collection'}
          </h1>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center border-y border-border py-4">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center uppercase tracking-wider text-sm font-medium"
            >
              <Filter size={16} className="mr-2" />
              Filter
            </button>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent uppercase tracking-wider text-sm font-medium pr-6 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar Filters */}
          <div className={cn(
            "fixed inset-0 bg-background z-50 p-6 overflow-y-auto transition-transform duration-300 transform md:static md:translate-x-0 md:bg-transparent md:p-0 md:w-64 md:z-auto md:block",
            isFilterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 hidden"
          )}>
            <div className="flex justify-between items-center md:hidden mb-8">
              <h2 className="font-serif text-2xl uppercase tracking-wider">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>

            <div className="space-y-10">
              
              {/* Categories */}
              <div>
                <h3 className="uppercase tracking-wider text-sm font-medium mb-4">Category</h3>
                <ul className="space-y-3">
                  {['all', 'bestsellers', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => handleCategoryChange(cat)}
                        className={cn(
                          "uppercase text-xs tracking-wider transition-colors",
                          activeCategory === cat ? "font-semibold text-foreground border-b border-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {categoryTitleMap[cat]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="uppercase tracking-wider text-sm font-medium mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map((m) => (
                    <label key={m} className="flex items-center space-x-3 cursor-pointer">
                      <div className={cn(
                        "w-4 h-4 border flex items-center justify-center transition-colors",
                        selectedMaterials.includes(m) ? "bg-foreground border-foreground" : "border-border hover:border-foreground"
                      )}>
                        {selectedMaterials.includes(m) && <span className="w-2 h-2 bg-background"></span>}
                      </div>
                      <span className="text-sm text-muted-foreground">{m}</span>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={selectedMaterials.includes(m)}
                        onChange={() => toggleMaterial(m)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile apply button */}
            <div className="md:hidden mt-12">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-4 bg-foreground text-background uppercase tracking-widest text-sm font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-end mb-8 relative">
              <div className="flex items-center border-b border-border pb-1">
                <span className="uppercase tracking-wider text-xs text-muted-foreground mr-2">Sort by</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent uppercase tracking-wider text-xs font-medium pr-6 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-[80%] pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-24">
                <h3 className="font-serif text-2xl mb-2">No products found.</h3>
                <p className="text-muted-foreground">Try adjusting your filters.</p>
                <button 
                  onClick={() => {
                    handleCategoryChange('all');
                    setSelectedMaterials([]);
                  }}
                  className="mt-6 border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                     <Link to={`/product/${product.id}`} className="block aspect-[4/5] bg-muted mb-4 overflow-hidden relative">
                        <img 
                          data-strk-img-id={`shop-prod-${product.id}-1`}
                          data-strk-img={`[shop-prod-title-${product.id}] [shop-title]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10"
                        />
                        <img 
                          data-strk-img-id={`shop-prod-${product.id}-2`}
                          data-strk-img={`[shop-prod-title-${product.id}] model [shop-title]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} alternate view`}
                          className="w-full h-full object-cover absolute inset-0 z-0"
                        />
                      </Link>
                      <div className="text-center">
                        <h3 id={`shop-prod-title-${product.id}`} className="font-serif text-lg mb-1 uppercase tracking-wide">
                          <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4">${product.price}</p>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full py-2.5 bg-foreground text-background text-xs uppercase tracking-widest absolute bottom-[104px] md:bottom-[92px] left-0 z-20"
                        >
                          Quick Add
                        </button>
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
};

export default Shop;