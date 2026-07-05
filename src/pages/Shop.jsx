import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', material: 'gold', imgId: 'shop-img-1', hoverImgId: 'shop-hover-1' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', material: 'gold', imgId: 'shop-img-2', hoverImgId: 'shop-hover-2' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', material: 'gold', imgId: 'shop-img-3', hoverImgId: 'shop-hover-3' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', material: 'gold', imgId: 'shop-img-4', hoverImgId: 'shop-hover-4' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'sets', material: 'gold', imgId: 'shop-img-5', hoverImgId: 'shop-hover-5' },
  { id: '6', name: 'LUMINA DROP EARRINGS', price: 48, category: 'earrings', material: 'silver', imgId: 'shop-img-6', hoverImgId: 'shop-hover-6' },
  { id: '7', name: 'CELESTIAL CHAIN', price: 72, category: 'necklaces', material: 'silver', imgId: 'shop-img-7', hoverImgId: 'shop-hover-7' },
  { id: '8', name: 'MINIMALIST HUGGIES', price: 32, category: 'huggies', material: 'silver', imgId: 'shop-img-8', hoverImgId: 'shop-hover-8' },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(p => activeCategory === 'all' || p.category === activeCategory)
                                   .sort((a, b) => {
                                     if (sort === 'price-low') return a.price - b.price;
                                     if (sort === 'price-high') return b.price - a.price;
                                     return 0; // featured
                                   });

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div ref={containerRef} className="pt-8 pb-24 px-4 md:px-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All Collection</h1>
        <p className="text-muted-foreground">Everyday elegance, crafted to last.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center justify-between border border-border p-4 w-full uppercase tracking-widest text-sm font-medium"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className="flex items-center gap-2"><Filter size={16} /> Filters</span>
          <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Sidebar */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="md:sticky md:top-32 space-y-10">
            
            {/* Category Filter */}
            <div>
              <h3 className="font-medium uppercase tracking-widest text-sm mb-4">Category</h3>
              <ul className="space-y-3 text-muted-foreground">
                {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`capitalize hover:text-foreground transition-colors ${activeCategory === cat ? 'text-foreground font-medium' : ''}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material Filter (Visual only for now) */}
            <div>
              <h3 className="font-medium uppercase tracking-widest text-sm mb-4">Material</h3>
              <ul className="space-y-3 text-muted-foreground">
                {['18k Gold Plated', 'Sterling Silver'].map((mat) => (
                  <li key={mat}>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                      <input type="checkbox" className="rounded-sm border-border text-primary focus:ring-primary" />
                      <span>{mat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter (Visual only for now) */}
            <div>
              <h3 className="font-medium uppercase tracking-widest text-sm mb-4">Price</h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Under $50', '$50 - $100', 'Over $100'].map((price) => (
                  <li key={price}>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                      <input type="checkbox" className="rounded-sm border-border text-primary focus:ring-primary" />
                      <span>{price}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Controls Bar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-muted-foreground text-sm">{filteredProducts.length} Products</span>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground hidden sm:inline">Sort by:</span>
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border-none focus:outline-none uppercase tracking-widest font-medium cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 block">
                  <img 
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[shop-product-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={product.hoverImgId}
                    data-strk-img={`[shop-product-title-${product.id}] worn`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                    alt={`${product.name} worn`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase font-medium hover:bg-primary hover:text-primary-foreground shadow-sm transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h3 id={`shop-product-title-${product.id}`} className="font-serif font-medium tracking-wider text-sm md:text-base leading-snug hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground mt-1">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;