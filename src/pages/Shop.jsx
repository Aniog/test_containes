import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../components/cart/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('featured');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const { addToCart } = useCart();

  useEffect(() => {
    try {
      ImageHelper.loadImages({}, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not yet fully configured', e);
    }
  }, [activeCategory, activeSort]);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const allProducts = [
    { id: '1', title: 'Vivid Aura Jewels', price: 42, category: 'earrings', imagePrompt: 'gold ear cuff crystal' },
    { id: '2', title: 'Majestic Flora Nectar', price: 68, category: 'necklaces', imagePrompt: 'gold floral necklace' },
    { id: '3', title: 'Golden Sphere Huggies', price: 38, category: 'huggies', imagePrompt: 'chunky gold huggie earrings' },
    { id: '4', title: 'Amber Lace Earrings', price: 54, category: 'earrings', imagePrompt: 'textured gold drop earrings' },
    { id: '5', title: 'Royal Heirloom Set', price: 95, category: 'sets', imagePrompt: 'gold necklace and earring set box' },
    { id: '6', title: 'Lumina Chain Choker', price: 72, category: 'necklaces', imagePrompt: 'thick gold chain necklace' },
    { id: '7', title: 'Dewdrop Studs', price: 35, category: 'earrings', imagePrompt: 'small gold pearl stud earrings' },
    { id: '8', title: 'Celestial Pendant', price: 58, category: 'necklaces', imagePrompt: 'gold star pendant necklace long' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Sets' },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-title" className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            {categories.find(c => c.id === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Discover our collection of demi-fine jewelry. Crafted from 18k solid gold vermeil for everyday elegance.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-4 mb-8 gap-4">
          <button 
            className="md:hidden flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="hidden md:flex gap-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-sm font-medium uppercase tracking-widest pb-4 -mb-[17px] border-b-2 transition-colors ${activeCategory === cat.id ? 'border-amber-700 text-amber-700' : 'border-transparent text-stone-500 hover:text-foreground'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span className="uppercase tracking-widest text-xs hidden md:inline">Sort By:</span>
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-foreground p-2">
                Featured <ChevronDown size={14} />
              </button>
              {/* Dropdown would go here in a real impl */}
            </div>
            <span className="text-stone-400 ml-4 hidden md:inline">{filteredProducts.length} Results</span>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Mobile Filter Sidebar */}
          <div className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:hidden'}`}>
            <div className={`absolute top-0 bottom-0 left-0 w-80 bg-background shadow-xl transition-transform transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="font-serif text-xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
              </div>
              <div className="p-6">
                <h4 className="text-xs uppercase tracking-widest font-medium mb-4 text-stone-500">Category</h4>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={`mobile-${cat.id}`}>
                      <button
                        onClick={() => { setCategory(cat.id); setIsFilterOpen(false); }}
                        className={`text-sm uppercase tracking-wider ${activeCategory === cat.id ? 'text-amber-700 font-medium' : 'text-stone-600'}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-12">
              {filteredProducts.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      data-strk-img-id={`shop-img-${item.id}`}
                      data-strk-img={`[shop-item-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-center flex gap-2">
                       <button 
                         className="bg-white/90 text-stone-900 text-xs font-semibold py-2 px-4 uppercase tracking-wider backdrop-blur-sm shadow-sm inline-block flex-1 hover:bg-amber-700 hover:text-white transition-colors"
                         onClick={(e) => {
                           e.preventDefault();
                           addToCart(item, 1, 'gold');
                         }}
                       >
                         Add to Cart
                       </button>
                    </div>
                  </div>
                  <h3 id={`shop-item-title-${item.id}`} className="font-medium text-sm md:text-base uppercase tracking-wider text-foreground mb-1 pr-4 truncate">{item.title}</h3>
                  <p className="text-stone-500 text-sm">${item.price}</p>
                </Link>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-stone-500">
                No products found in this category.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;