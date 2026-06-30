import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const Collection = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('cat');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sort, setSort] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryParam]);

  useEffect(() => {
    let result = [...products];
    if (categoryParam) {
      result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [categoryParam, sort]);

  useEffect(() => {
    // Wait for render before scanning
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="w-full flex-1 pt-24 pb-24">
      {/* Header */}
      <div className="bg-secondary py-16 mb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 id="collection-headline" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
            {categoryParam || 'All Jewelry'}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our carefully curated collection of essential everyday pieces designed to last a lifetime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          
          <div className="relative">
             <select 
               value={sort} 
               onChange={(e) => setSort(e.target.value)}
               className="appearance-none bg-transparent text-sm uppercase tracking-widest font-medium pr-6 focus:outline-none"
             >
               <option value="featured">Featured</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
               <option value="rating">Highest Rated</option>
             </select>
             <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
           </div>
        </div>

        {/* Sidebar Filters */}
        <div className={`w-full lg:w-64 shrink-0 lg:block ${showMobileFilters ? 'block' : 'hidden'}`}>
           <div className="sticky top-28 space-y-10">
             
             <div>
               <h3 className="text-sm uppercase tracking-widest font-medium mb-6">Category</h3>
               <ul className="space-y-4 text-sm">
                 {categories.map(cat => {
                   const isAll = cat === 'All';
                   const toUrl = isAll ? '/shop' : `/shop?cat=${cat}`;
                   const isActive = (isAll && !categoryParam) || (!isAll && categoryParam === cat);
                   return (
                     <li key={cat}>
                       <Link 
                         to={toUrl} 
                         className={`hover:opacity-70 transition-opacity ${isActive ? 'font-medium underline underline-offset-4' : 'text-muted-foreground'}`}
                       >
                         {cat}
                       </Link>
                     </li>
                   )
                 })}
               </ul>
             </div>

             <div className="hidden lg:block">
               <h3 className="text-sm uppercase tracking-widest font-medium mb-6">Sort By</h3>
               <div className="relative border-b border-border pb-2">
                 <select 
                   value={sort} 
                   onChange={(e) => setSort(e.target.value)}
                   className="w-full appearance-none bg-transparent text-sm focus:outline-none"
                 >
                   <option value="featured">Featured</option>
                   <option value="price-low">Price: Low to High</option>
                   <option value="price-high">Price: High to Low</option>
                   <option value="rating">Highest Rated</option>
                 </select>
                 <ChevronDown className="w-4 h-4 absolute right-0 top-0 pointer-events-none text-muted-foreground" />
               </div>
             </div>

           </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              <p>No products found in this category.</p>
              <Link to="/shop" className="underline mt-4 inline-block hover:text-foreground">View all products</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <div key={product.id} className="group flex flex-col h-full">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary mb-4 overflow-hidden border border-border/20">
                    <img
                        alt={product.name}
                        data-strk-img-id={`collection-${product.id}`}
                        data-strk-img={`[product-title-${product.id}] [collection-headline]`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="text-center mt-auto">
                    <h3 id={`product-title-${product.id}`} className="font-serif uppercase tracking-widest text-xs md:text-sm mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">${product.price}</p>
                    <button 
                      onClick={() => addItem(product)}
                      className="mt-4 text-xs tracking-widest uppercase border-b border-transparent hover:border-foreground pb-0.5 transition-all opacity-0 group-hover:opacity-100"
                    >
                      + Quick Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;