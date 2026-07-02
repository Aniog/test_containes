import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ChevronDown, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const fetchProducts = async () => {
      let query = client.from('Product').select('*');
      
      if (activeCategory !== 'All') {
        query = query.eq('category', activeCategory);
      }

      const { data: response } = await query;
      
      if (response?.success) {
        let list = response.data.list;
        
        // Sorting logic (manual for now since seed data is small)
        if (activeSort === 'price-low') {
          list = [...list].sort((a, b) => a.data.price - b.data.price);
        } else if (activeSort === 'price-high') {
          list = [...list].sort((a, b) => b.data.price - a.data.price);
        }

        setProducts(list);
      }
    };
    fetchProducts();
  }, [activeCategory, activeSort]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0 border-b border-hairline pb-12">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest">
              {activeCategory === 'All' ? 'The Collection' : activeCategory}
            </h1>
            <p className="text-muted-foreground font-sans tracking-wide">
              {products.length} {products.length === 1 ? 'item' : 'items'} found
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Categories */}
            <div className="hidden md:flex items-center space-x-8 mr-12 border-r border-hairline pr-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat, sort: activeSort })}
                  className={cn(
                    "uppercase tracking-widest text-[11px] font-bold transition-colors hover:text-accent",
                    activeCategory === cat ? "text-primary border-b border-accent pb-1" : "text-muted-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 uppercase tracking-widest text-[11px] font-bold">
                <span>Sort: {activeSort.replace('-', ' ')}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-secondary border border-hairline shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-20">
                {[
                  { label: 'Featured', value: 'featured' },
                  { label: 'Price: Low to High', value: 'price-low' },
                  { label: 'Price: High to Low', value: 'price-high' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSearchParams({ category: activeCategory, sort: option.value })}
                    className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden p-2 border border-hairline flex items-center"
            >
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Filter Menu */}
        <div className={cn(
          "md:hidden flex flex-wrap gap-4 pt-4 transition-all duration-300",
          isFilterOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSearchParams({ category: cat, sort: activeSort });
                setIsFilterOpen(false);
              }}
              className={cn(
                "px-4 py-2 text-[10px] uppercase tracking-widest border border-hairline transition-colors",
                activeCategory === cat ? "bg-primary text-secondary" : "bg-transparent text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="py-24 text-center space-y-6">
            <h2 className="text-2xl font-serif italic text-muted-foreground">No pieces found in this category</h2>
            <Button variant="outline" onClick={() => setSearchParams({ category: 'All' })}>Review All Jewelry</Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => {
              const fields = product.data;
              return (
                <div key={product.id} className="group flex flex-col space-y-6">
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                    <Link to={`/product/${fields.slug}`}>
                      <img
                        data-strk-img-id={`shop-prod-${product.id}`}
                        data-strk-img={`[shop-prod-title-${product.id}] [shop-prod-desc-${product.id}] gold jewelry editorial close up`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={fields.name}
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <button 
                      onClick={() => addToCart(fields, fields.variants[0])}
                      className="absolute bottom-6 left-6 right-6 bg-secondary/95 backdrop-blur-sm py-4 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-accent hover:text-secondary shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-center">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{fields.category}</p>
                      <h3 id={`shop-prod-title-${product.id}`} className="uppercase tracking-widest text-[12px] font-bold">
                        <Link to={`/product/${fields.slug}`} className="hover:text-accent transition-colors">
                          {fields.name}
                        </Link>
                      </h3>
                      <p id={`shop-prod-desc-${product.id}`} className="hidden">{fields.description}</p>
                    </div>
                    <p className="text-sm tracking-widest">${fields.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
