import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/api/products';
import { Filter, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  
  const filteredProducts = products.filter(p => {
    if (activeCategory === 'All') return true;
    return p.data.category === activeCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.data.price - b.data.price;
    if (sortBy === 'price-high') return b.data.price - a.data.price;
    return 0; // default newest
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif">{activeCategory === 'All' ? 'All Jewelry' : activeCategory}</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans max-w-xl mx-auto">
            Thoughtfully designed, expertly crafted, and made to be treasures.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center border-y border-border py-4">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
             {categories.map(cat => (
               <button 
                key={cat}
                onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-sans whitespace-nowrap pb-1 transition-all",
                  activeCategory === cat ? "border-b border-foreground text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
               >
                {cat}
               </button>
             ))}
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="relative group">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 text-[10px] uppercase tracking-widest font-sans outline-none cursor-pointer"
              >
                <option value="newest">Sort: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {loading ? (
            [...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[3/4] bg-stone-100" />
                <div className="h-4 bg-stone-100 w-3/4 mx-auto" />
                <div className="h-4 bg-stone-100 w-1/2 mx-auto" />
              </div>
            ))
          ) : filteredProducts.length === 0 ? (
             <div className="col-span-full py-24 text-center text-muted-foreground italic font-serif">
              No products found in this category.
             </div>
          ) : (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
