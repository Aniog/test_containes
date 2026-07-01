import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { seedProducts } from './Home';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(seedProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category');

  useEffect(() => {
    let filtered = [...seedProducts];
    if (categoryFilter && categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Simple sort logic
    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    
    setProducts(filtered);
  }, [categoryFilter, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  return (
    <div className="pt-32 pb-24 bg-velmora-cream min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.2em]">Shop All</h1>
          <div className="w-12 h-[1px] bg-velmora-accent"></div>
          
          {/* Active Filters Display */}
          {categoryFilter && categoryFilter !== 'all' && (
            <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40">Filtered by:</span>
                <button 
                    onClick={() => setSearchParams({})}
                    className="flex items-center space-x-1 px-3 py-1 bg-velmora-sand rounded-full text-[10px] uppercase tracking-widest text-velmora-charcoal"
                >
                    <span>{categoryFilter}</span>
                    <X size={10} />
                </button>
            </div>
          )}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-6 border-y border-velmora-charcoal/5 mb-12">
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity"
            >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                <span>Filters</span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setSearchParams({ category: cat })}
                        className={cn(
                            "text-[10px] uppercase tracking-widest transition-all",
                            categoryFilter === cat || (!categoryFilter && cat === 'all')
                                ? "text-velmora-charcoal font-bold border-b border-velmora-charcoal"
                                : "text-velmora-charcoal/40 hover:text-velmora-charcoal"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative group">
                <button className="flex items-center space-x-1 text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
                    <span>Sort: {sortBy.replace('-', ' ')}</span>
                    <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-velmora-charcoal/5 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                   {['featured', 'price-low', 'price-high'].map((option) => (
                       <button 
                        key={option}
                        onClick={() => setSortBy(option)}
                        className="w-full text-left px-6 py-4 text-[10px] uppercase tracking-widest hover:bg-velmora-sand transition-colors"
                       >
                           {option.replace('-', ' ')}
                       </button>
                   ))}
                </div>
            </div>
        </div>

        {/* Desktop Sidebar + Grid */}
        <div className="flex gap-12">
            {/* Filter Sidebar - Desktop Only */}
            <aside className={cn(
                "hidden lg:block transition-all duration-500 overflow-hidden",
                isFilterOpen ? "w-64 opacity-100" : "w-0 opacity-0"
            )}>
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-[10px] uppercase tracking-widest font-bold">Category</h3>
                        <div className="flex flex-col space-y-3">
                            {categories.map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setSearchParams({ category: cat })}
                                    className={cn(
                                        "text-left text-xs uppercase tracking-widest transition-colors",
                                        categoryFilter === cat || (!categoryFilter && cat === 'all')
                                            ? "text-velmora-charcoal font-medium"
                                            : "text-velmora-charcoal/40 hover:text-velmora-charcoal"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] uppercase tracking-widest font-bold">Material</h3>
                        <div className="flex flex-col space-y-3">
                            {['18K Gold Plated', '925 Sterling Silver', 'Rose Gold'].map((mat) => (
                                <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="w-3 h-3 border border-velmora-charcoal flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-velmora-charcoal opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60">{mat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] uppercase tracking-widest font-bold">Price Range</h3>
                        <div className="flex flex-col space-y-3">
                            {['Under $50', '$50 - $100', 'Over $100'].map((range) => (
                                <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="w-3 h-3 border border-velmora-charcoal flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-velmora-charcoal opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60">{range}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
                {products.length === 0 ? (
                    <div className="py-20 text-center space-y-4">
                        <p className="font-serif italic text-lg opacity-40">No pieces found matching your criteria.</p>
                        <button onClick={() => setSearchParams({})} className="text-[10px] uppercase tracking-widest underline underline-offset-4">Clear all filters</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {products.map((product) => (
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
