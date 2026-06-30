import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

const Shop = () => {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['all', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase() === activeMaterial.toLowerCase());
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, activeMaterial, priceRange, sortBy]);

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-100 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-velmora-obsidian mb-4 capitalize">
              {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
            </h1>
            <p className="text-neutral-500 text-sm tracking-wide">
              Showing {filteredProducts.length} results
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
             >
               <Filter className="w-4 h-4" /> Filters
             </button>
             
             <div className="relative group">
               <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                 Sort By: {sortBy.replace('-', ' ')} <ChevronDown className="w-4 h-4" />
               </button>
               <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                 {['featured', 'price-low', 'price-high'].map((option) => (
                   <button
                     key={option}
                     onClick={() => setSortBy(option)}
                     className="w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-neutral-50 transition-colors"
                   >
                     {option.replace('-', ' ')}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className={cn(
            "fixed inset-0 z-[70] bg-white md:relative md:bg-transparent md:z-0 md:block w-full md:w-64 transform transition-transform duration-500 md:translate-x-0 p-8 md:p-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden absolute top-6 right-6"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-10">
              {/* Categories */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-velmora-obsidian">Category</h4>
                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsSidebarOpen(false);
                      }}
                      className={cn(
                        "text-left text-sm tracking-wide hover:text-velmora-gold transition-colors capitalize",
                        activeCategory.toLowerCase() === cat.toLowerCase() ? "text-velmora-gold font-medium" : "text-neutral-500"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-velmora-obsidian">Material</h4>
                <div className="flex flex-col gap-3">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setActiveMaterial(mat)}
                      className={cn(
                        "text-left text-sm tracking-wide hover:text-velmora-gold transition-colors capitalize",
                        activeMaterial.toLowerCase() === mat.toLowerCase() ? "text-velmora-gold font-medium" : "text-neutral-500"
                      )}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-velmora-obsidian">Price Range</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>$0</span>
                    <span>$200</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-velmora-gold"
                  />
                  <span className="text-xs font-sans text-neutral-400">Up to ${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-neutral-500 font-serif italic text-xl">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveMaterial('all');
                    setPriceRange([0, 200]);
                  }}
                  className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-velmora-obsidian pb-1"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
