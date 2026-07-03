import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Filter, ChevronDown } from 'lucide-react';

export function Shop() {
  const containerRef = useRef(null);
  const allProducts = getProducts();
  const { addItem } = useCart();
  const [products, setProducts] = useState(allProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    let sorted = [...allProducts];
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setProducts(sorted);
  }, [sortBy]);

  useEffect(() => {
    // If strk-img-config is populated, render images after state settles
    if (ImageHelper && strkImgConfig && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        } catch (e) {
          // ignore
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  const categories = ['All Collections', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['18k Gold Plated', 'Sterling Silver', 'Rose Gold'];
  
  return (
    <div ref={containerRef} className="pt-24 pb-24 px-4 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 w-full max-w-[1400px]">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Shop All</h1>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">
            Discover our complete collection of demi-fine jewelry. Crafted for the everyday and the extraordinary.
          </p>
        </div>

        {/* Controls Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-border/60 pb-4 mb-8 gap-4">
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          
          <div className="hidden md:block text-sm text-muted-foreground font-light">
            Showing {products.length} products
          </div>
          
          <div className="flex items-center gap-4 text-sm font-light relative">
            <span className="uppercase tracking-widest text-xs hidden sm:inline-block">Sort By</span>
            <select 
              className="bg-transparent border-0 outline-none cursor-pointer pr-8 tracking-wide appearance-none relative z-10 w-[140px]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1rem',
              }}
            >
              <option value="featured">Featured</option>
              <option value="new">New Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className={`w-full md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <Accordion type="multiple" defaultValue={['category', 'material']} className="w-full">
              
              <AccordionItem value="category" className="border-border/60">
                <AccordionTrigger className="font-serif tracking-wide text-lg hover:no-underline py-6">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-4">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 border border-border group-hover:border-accent transition-colors flex items-center justify-center">
                            {i === 0 && <div className="w-2 h-2 bg-foreground rounded-full"></div>}
                          </div>
                          <span className={`${i === 0 ? 'text-foreground' : 'text-muted-foreground'} font-light group-hover:text-foreground transition-colors`}>{cat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="material" className="border-border/60">
                <AccordionTrigger className="font-serif tracking-wide text-lg hover:no-underline py-6">
                  Material
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-4">
                    {materials.map((mat, i) => (
                      <li key={i}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 border border-border group-hover:border-accent transition-colors flex items-center justify-center"></div>
                          <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">{mat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
            </Accordion>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer flex flex-col items-center">
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary/30 mb-6 block w-full">
                    {product.isNew && (
                      <div className="absolute top-4 left-4 z-10 bg-background/90 text-foreground px-2 py-1 text-[10px] uppercase tracking-widest font-medium">New</div>
                    )}
                    {product.isBestSeller && (
                      <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-2 py-1 text-[10px] uppercase tracking-widest font-medium">Bestseller</div>
                    )}
                    <img
                      alt={product.name}
                      src={product.image}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[prod-${product.id}-name-shop] gold jewelry professional product shot`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      className="object-cover w-full h-full transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                    <img
                      alt={`${product.name} lifestyle`}
                      src={product.hoverImage}
                      data-strk-img-id={`shop-hover-${product.id}`}
                      data-strk-img={`[prod-${product.id}-name-shop] worn on body editorial`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-normal"
                    />
                  </Link>
                  <div className="flex flex-col items-center w-full">
                    <h3 id={`prod-${product.id}-name-shop`} className="font-serif text-center uppercase tracking-widest text-sm text-foreground mb-2 leading-tight">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm font-light mb-4">${product.price}</p>
                    
                    <div className="w-full mt-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ ...product, quantity: 1, variant: '18K Gold' });
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none shadow-none text-xs uppercase tracking-widest py-5 transition-colors"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}