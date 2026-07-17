import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { seedProducts } from '../lib/data';
import { Filter, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [activeCategory, setActiveCategory] = useState(urlCategory ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1) : 'All');
  const [sort, setSort] = useState('featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let prods = [...seedProducts];
    
    // Filter
    if (activeCategory !== 'All') {
      prods = prods.filter(p => p.category === activeCategory);
    }
    
    // Sort
    if (sort === 'price-low') {
      prods.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      prods.sort((a, b) => b.price - a.price);
    }

    return prods;
  }, [activeCategory, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sort, filteredProducts]);

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      {/* Shop Header */}
      <div className="bg-secondary/20 py-16 mb-12 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-widest uppercase mb-4">
            {activeCategory === 'All' ? 'Fine Jewelry' : activeCategory}
          </h1>
          <p className="max-w-xl mx-auto font-light text-muted-foreground">
            Explore our curated collection of demi-fine gold jewelry. Designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
          <button 
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest font-semibold"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="hidden lg:block text-sm text-muted-foreground uppercase tracking-wider">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground hidden sm:inline">Sort By:</span>
            <div className="relative">
              <select 
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm uppercase tracking-widest font-semibold focus:outline-none border-b border-transparent focus:border-accent cursor-pointer"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className={`lg:w-1/4 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32 space-y-10">
              
              <div>
                <h3 className="font-serif tracking-widest uppercase text-lg mb-6 border-b border-border pb-2">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm uppercase tracking-wider transition-colors hover:text-accent flex items-center gap-3 ${activeCategory === cat ? 'text-foreground font-semibold' : 'text-muted-foreground font-light'}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat ? 'bg-accent' : 'bg-transparent'}`} />
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif tracking-widest uppercase text-lg mb-6 border-b border-border pb-2">Material</h3>
                <ul className="space-y-4 text-sm font-light text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" id="mat-gold" className="accent-accent" checked readOnly />
                    <label htmlFor="mat-gold">18K Gold Plated</label>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" id="mat-silver" className="accent-accent" />
                    <label htmlFor="mat-silver">Sterling Silver</label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
               <div className="text-center py-24 bg-secondary/20 rounded">
                 <p className="font-serif text-xl text-muted-foreground uppercase tracking-widest mb-4">No products found</p>
                 <button 
                   onClick={() => setActiveCategory('All')} 
                   className="text-sm uppercase tracking-widest font-semibold border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
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
};

export default Shop;