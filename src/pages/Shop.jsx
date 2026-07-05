import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-velmora-black/5 pb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Shop the Collection</h1>
            <p className="text-muted-foreground tracking-wide font-light max-w-lg">
              Discover our curated selection of demi-fine gold jewelry, designed to be layered, mixed, and cherished every day.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-widest border border-velmora-black/10 px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
            <div className="relative group ml-auto md:ml-0">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-velmora-black/10 px-6 py-3 min-w-[160px] justify-between">
                Sort: {sortBy}
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className={cn(
            "fixed inset-0 bg-velmora-cream z-[100] md:relative md:z-0 md:block p-10 md:p-0 transition-all duration-500",
            isFilterOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          )}>
            <div className="md:hidden flex justify-end mb-8">
               <button onClick={() => setIsFilterOpen(false)} className="uppercase text-[10px] tracking-widest underline decoration-velmora-gold">Close</button>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold">Category</h3>
                <ul className="space-y-4">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "text-sm tracking-widest uppercase transition-colors hover:text-velmora-gold",
                          activeCategory === cat ? "text-velmora-gold font-semibold" : "text-muted-foreground font-light"
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold">Material</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-none border-velmora-black/20 text-velmora-gold focus:ring-0" />
                    <span className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-velmora-gold">18K Gold Plated</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-none border-velmora-black/20 text-velmora-gold focus:ring-0" />
                    <span className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-velmora-gold">Sterling Silver</span>
                </label>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold">Price</h3>
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="price" className="w-4 h-4 rounded-full border-velmora-black/20 text-velmora-gold focus:ring-0" />
                        <span className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-velmora-gold">Under $50</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="price" className="w-4 h-4 rounded-full border-velmora-black/20 text-velmora-gold focus:ring-0" />
                        <span className="text-sm tracking-widest uppercase text-muted-foreground group-hover:text-velmora-gold">$50 - $100</span>
                    </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;