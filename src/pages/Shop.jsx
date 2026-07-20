import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background pt-8 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <nav className="flex text-xs font-medium tracking-widest uppercase text-muted mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">Shop All</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase">Collections</h1>
        </div>

        <div className="flex relative">
          <FilterSidebar 
            isMobileOpen={isMobileFilterOpen} 
            setIsMobileOpen={setIsMobileFilterOpen} 
          />
          <ProductGrid setIsMobileFilterOpen={setIsMobileFilterOpen} />
        </div>
        
      </div>
    </div>
  );
};

export default Shop;
