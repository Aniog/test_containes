import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/api/products';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'All');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [sortOrder, setSortOrder] = useState('Featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated Brass'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    
    if (activeMaterial !== 'All') {
      result = result.filter(p => p.material === activeMaterial);
    }
    
    if (sortOrder === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [activeCategory, activeMaterial, sortOrder]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 uppercase tracking-tight">
              {activeCategory === 'All' ? 'The Collection' : activeCategory}
            </h1>
            <p className="text-zinc-500 font-light max-w-md">
              Timeless silhouettes designed for the modern ritual. Explore our curation of demi-fine treasures.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto border-b border-zinc-200 pb-2">
            <span className="uppercase-spaced text-[10px] text-zinc-400">Sort by:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent uppercase-spaced text-[10px] outline-none cursor-pointer"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-64 space-y-12 shrink-0">
            <div>
              <h3 className="uppercase-spaced mb-6 text-xs border-b pb-2">Category</h3>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "text-sm font-light hover:text-primary transition-soft",
                        activeCategory === cat ? "text-primary font-medium" : "text-zinc-600"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="uppercase-spaced mb-6 text-xs border-b pb-2">Material</h3>
              <ul className="space-y-4">
                {materials.map(mat => (
                  <li key={mat}>
                    <button
                      onClick={() => setActiveMaterial(mat)}
                      className={cn(
                        "text-sm font-light hover:text-primary transition-soft",
                        activeMaterial === mat ? "text-primary font-medium" : "text-zinc-600"
                      )}
                    >
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 border py-4 uppercase-spaced text-xs w-full mb-8"
          >
            <Filter size={16} /> Filters
          </button>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-zinc-400">No pieces found in this curation.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActiveMaterial('All'); }}
                  className="mt-6 uppercase-spaced border-b border-primary pb-1"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-8 overflow-y-auto animate-fade-in">
          <div className="flex justify-between items-center mb-12">
            <h2 className="uppercase-spaced text-lg">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)}><X size={24} /></button>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="uppercase-spaced mb-6 text-xs border-b pb-2">Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-4 py-2 border rounded-full text-xs uppercase-spaced",
                      activeCategory === cat ? "bg-primary border-primary text-white" : "border-zinc-200 text-zinc-600"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="uppercase-spaced mb-6 text-xs border-b pb-2">Material</h3>
              <div className="flex flex-wrap gap-3">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setActiveMaterial(mat)}
                    className={cn(
                      "px-4 py-2 border rounded-full text-xs uppercase-spaced",
                      activeMaterial === mat ? "bg-primary border-primary text-white" : "border-zinc-200 text-zinc-600"
                    )}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="w-full bg-primary text-white py-4 uppercase-spaced mt-12"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
