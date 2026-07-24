import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import ProductCard from '../components/ProductCard';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const containerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response, error } = await client
          .from('Product')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        const list = response?.data?.list || [];
        setProducts(list);
        setFilteredProducts(list);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => {
        const category = p.data?.category || '';
        return category.toLowerCase() === activeCategory.toLowerCase() || 
               p.data?.name?.toLowerCase().includes(activeCategory.toLowerCase().slice(0, -1));
      });
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.data.price - b.data.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.data.price - a.data.price);
    }

    setFilteredProducts(result);
  }, [activeCategory, sortBy, products]);

  const FilterSidebar = () => (
    <div className="flex flex-col gap-10">
      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Category</h4>
        <div className="flex flex-col gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm text-left tracking-widest uppercase text-[11px] transition-colors ${
                activeCategory === cat ? 'text-accent font-bold' : 'text-muted hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Material</h4>
        <div className="flex flex-col gap-3 text-muted text-sm tracking-widest uppercase text-[11px]">
          <span className="cursor-pointer hover:text-primary">18K Gold Plated</span>
          <span className="cursor-pointer hover:text-primary">Sterling Silver</span>
          <span className="cursor-pointer hover:text-primary">Rose Gold</span>
        </div>
      </div>

      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Price Range</h4>
        <div className="flex flex-col gap-3 text-muted text-sm tracking-widest uppercase text-[11px]">
          <span className="cursor-pointer hover:text-primary">Under $50</span>
          <span className="cursor-pointer hover:text-primary">$50 - $100</span>
          <span className="cursor-pointer hover:text-primary">Over $100</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-serif uppercase tracking-[0.2em] mb-4">Shop All Jewelry</h1>
          <p className="text-sm text-muted font-sans tracking-wide max-w-lg">
            Elevate your everyday with our curated collection of demi-fine jewelry. Each piece is designed to be cherished.
          </p>
        </div>
        
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-8 border-b md:border-none pb-4 md:pb-0">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <Filter className="w-4 h-4" /> Filters
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background border-r border-border">
                <SheetHeader className="pb-8">
                  <SheetTitle className="text-sm uppercase tracking-widest text-left">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
              Sort By <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white border border-stone-100 shadow-soft p-4 flex flex-col gap-4 z-40 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              {[
                { label: 'Newest Arrivals', value: 'newest' },
                { label: 'Price: Low to High', value: 'price-low' },
                { label: 'Price: High to Low', value: 'price-high' }
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`text-[10px] text-right uppercase tracking-[0.15em] ${
                    sortBy === opt.value ? 'text-accent font-bold' : 'text-muted hover:text-primary'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <aside className="hidden md:block w-48 flex-shrink-0">
          <FilterSidebar />
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {loading ? (
              Array(8).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse bg-stone-100 aspect-[3/4]" />
              ))
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-full py-24 text-center">
                <p className="text-muted font-serif italic text-lg">No pieces found matching your criteria.</p>
                <Button 
                  onClick={() => setActiveCategory('All')} 
                  variant="link" 
                  className="mt-4 text-xs uppercase tracking-widest"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
