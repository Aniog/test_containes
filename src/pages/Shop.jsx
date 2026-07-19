import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Grid, LayoutGrid } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const products = [
  { id: 1, name: 'Vivid Aura Jewels', price: 42, category: 'earrings', description: 'Gold ear cuff with crystal accent' },
  { id: 2, name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', description: 'Multicolor floral crystal necklace' },
  { id: 3, name: 'Golden Sphere Huggies', price: 38, category: 'huggies', description: 'Chunky gold dome huggie earrings' },
  { id: 4, name: 'Amber Lace Earrings', price: 54, category: 'earrings', description: 'Textured gold filigree drop earrings' },
  { id: 5, name: 'Royal Heirloom Set', price: 95, category: 'sets', description: 'Gift-boxed earring + necklace set' },
  { id: 6, name: 'Luna Crescent Hoops', price: 48, category: 'earrings', description: 'Delicate crescent shaped gold hoops' },
  { id: 7, name: 'Celestial Star Pendant', price: 52, category: 'necklaces', description: 'Dainty star charm on 18k chain' },
  { id: 8, name: 'Petite Pearl Huggies', price: 46, category: 'huggies', description: 'Mini gold huggies with shell pearls' },
];

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filteredProducts = products.filter(p => 
    activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest">Shop All</h1>
        <div className="flex justify-center gap-8 mt-12 overflow-x-auto no-scrollbar pb-4 border-b border-border">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={cn(
                "serif-uppercase whitespace-nowrap pb-2 transition-all",
                activeCategory === cat ? "border-b border-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-12 py-4 border-b border-border">
        <button 
          className="flex items-center gap-2 serif-uppercase text-xs"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={16} /> Filters
        </button>
        <div className="flex items-center gap-6">
          <p className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
            {filteredProducts.length} Products
          </p>
          <div className="relative group">
            <button className="flex items-center gap-2 serif-uppercase text-xs">
              Sort: {sortBy} <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
              <img
                data-strk-img-id={`shop-prod-${product.id}`}
                data-strk-img={`[prod-${product.id}-name] [${product.category}] gold jewelry display aesthetic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <div className="text-center">
               <Link to={`/product/${product.id}`}>
                  <h2 id={`prod-${product.id}-name`} className="serif-uppercase text-[11px] mb-2 hover:opacity-70 transition-opacity">
                    {product.name}
                  </h2>
               </Link>
              <p className="text-sm text-muted-foreground font-light">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground font-serif italic">No products found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
EOF > src/pages/Shop.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Grid, LayoutGrid } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const products = [
  { id: 1, name: 'Vivid Aura Jewels', price: 42, category: 'earrings', description: 'Gold ear cuff with crystal accent' },
  { id: 2, name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', description: 'Multicolor floral crystal necklace' },
  { id: 3, name: 'Golden Sphere Huggies', price: 38, category: 'huggies', description: 'Chunky gold dome huggie earrings' },
  { id: 4, name: 'Amber Lace Earrings', price: 54, category: 'earrings', description: 'Textured gold filigree drop earrings' },
  { id: 5, name: 'Royal Heirloom Set', price: 95, category: 'sets', description: 'Gift-boxed earring + necklace set' },
  { id: 6, name: 'Luna Crescent Hoops', price: 48, category: 'earrings', description: 'Delicate crescent shaped gold hoops' },
  { id: 7, name: 'Celestial Star Pendant', price: 52, category: 'necklaces', description: 'Dainty star charm on 18k chain' },
  { id: 8, name: 'Petite Pearl Huggies', price: 46, category: 'huggies', description: 'Mini gold huggies with shell pearls' },
];

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filteredProducts = products.filter(p => 
    activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest">Shop All</h1>
        <div className="flex justify-center gap-8 mt-12 overflow-x-auto no-scrollbar pb-4 border-b border-border">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={cn(
                "serif-uppercase whitespace-nowrap pb-2 transition-all",
                activeCategory === cat ? "border-b border-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-12 py-4 border-b border-border">
        <button 
          className="flex items-center gap-2 serif-uppercase text-xs"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={16} /> Filters
        </button>
        <div className="flex items-center gap-6">
          <p className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
            {filteredProducts.length} Products
          </p>
          <div className="relative group">
            <button className="flex items-center gap-2 serif-uppercase text-xs">
              Sort: {sortBy} <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
              <img
                data-strk-img-id={`shop-prod-${product.id}`}
                data-strk-img={`[prod-${product.id}-name] [${product.category}] gold jewelry display aesthetic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <div className="text-center">
               <Link to={`/product/${product.id}`}>
                  <h2 id={`prod-${product.id}-name`} className="serif-uppercase text-[11px] mb-2 hover:opacity-70 transition-opacity">
                    {product.name}
                  </h2>
               </Link>
              <p className="text-sm text-muted-foreground font-light">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground font-serif italic">No products found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
