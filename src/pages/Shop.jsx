import React, { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    let cleanup = () => {};
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {});
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, [categoryFilter, sortBy]);

  let filteredProducts = PRODUCTS;
  if (categoryFilter && categoryFilter.toLowerCase() !== 'all') {
    filteredProducts = filteredProducts.filter(
      p => p.category.toLowerCase() === categoryFilter.toLowerCase()
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  const handleCategoryClick = (cat) => {
    if (cat.toLowerCase() === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl tracking-wide mb-12 text-center">
          {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All Collection'}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm uppercase tracking-widest text-muted-foreground">
             {categories.map(cat => (
               <button 
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`hover:text-foreground transition-colors ${
                    (categoryFilter === cat.toLowerCase() || (!categoryFilter && cat === 'All')) ? 'text-foreground border-b border-foreground' : 'border-b border-transparent'
                  } pb-1`}
               >
                 {cat}
               </button>
             ))}
          </div>
          
          {/* Sort */}
          <div className="flex items-center gap-4 text-sm font-sans">
             <label htmlFor="sort" className="uppercase tracking-widest text-muted-foreground text-xs">Sort by</label>
             <select 
               id="sort"
               value={sortBy} 
               onChange={e => setSortBy(e.target.value)}
               className="bg-transparent border-b border-border py-1 pr-6 focus:outline-none focus:border-foreground"
             >
               <option value="featured">Featured</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
             </select>
          </div>
        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
           <div className="text-center py-24 text-muted-foreground">
              No products found in this category.
           </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
             {sortedProducts.map(product => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
                    <img 
                      data-strk-img-id={`shop-${product.imgId}`}
                      data-strk-img={`[shop-product-title-${product.id}] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`shop-hover-${product.imgIdHover}`}
                      data-strk-img={`model wearing [shop-product-title-${product.id}] jewelry elegant warm`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} worn`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ product, variant: 'gold', quantity: 1 });
                      }}
                      className="absolute bottom-0 inset-x-0 bg-background/95 backdrop-blur-sm text-foreground py-3 text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-foreground hover:text-background"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <Link to={`/product/${product.id}`} className="flex flex-col flex-1 text-center items-center">
                    <h3 id={`shop-product-title-${product.id}`} className="text-xs uppercase tracking-[0.15em] mb-1">{product.name}</h3>
                    <span className="font-serif italic text-muted-foreground text-sm mb-2">{product.material}</span>
                    <span className="font-serif">${product.price}</span>
                  </Link>
                </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
