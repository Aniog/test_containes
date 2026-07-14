import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const products = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', material: 'gold', desc: 'Gold ear cuff with crystal accent', imgId: 'vivid-aura-cuff-1a', hoverImgId: 'vivid-aura-cuff-1b' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', material: 'gold', desc: 'Multicolor floral crystal necklace', imgId: 'majestic-flora-neck-2a', hoverImgId: 'majestic-flora-neck-2b' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', material: 'gold', desc: 'Chunky gold dome huggie earrings', imgId: 'golden-sphere-hug-3a', hoverImgId: 'golden-sphere-hug-3b' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, category: 'earrings', material: 'gold', desc: 'Textured gold filigree drop earrings', imgId: 'amber-lace-drop-4a', hoverImgId: 'amber-lace-drop-4b' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, category: 'sets', material: 'gold', desc: 'Gift-boxed earring + necklace set', imgId: 'royal-heirloom-set-5a', hoverImgId: 'royal-heirloom-set-5b' },
  { id: '6', name: 'Lunar Pearl Pendant', price: 72, category: 'necklaces', material: 'gold', desc: 'Freshwater pearl on gold snake chain', imgId: 'lunar-pearl-neck-6a', hoverImgId: 'lunar-pearl-neck-6b' },
  { id: '7', name: 'Stellar Diamond Studs', price: 48, category: 'earrings', material: 'silver', desc: 'Cubic zirconia solitaire studs', imgId: 'stellar-diamond-studs-7a', hoverImgId: 'stellar-diamond-studs-7b' },
  { id: '8', name: 'Twisted Rope Chain', price: 65, category: 'necklaces', material: 'gold', desc: 'Classic gold vermeil rope necklace', imgId: 'twisted-rope-chain-8a', hoverImgId: 'twisted-rope-chain-8b' },
  { id: '9', name: 'Pave Crystal Huggies', price: 45, category: 'huggies', material: 'silver', desc: 'Silver huggies with pave crystals', imgId: 'pave-crystal-huggies-9a', hoverImgId: 'pave-crystal-huggies-9b' }
];

const Collection = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state with URL if it changes
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'all');
  }, [location.search]);

  // Load images when state changes
  useEffect(() => {
    let cleanup = undefined;
    if (containerRef.current) {
       const frameId = window.requestAnimationFrame(() => {
         try {
           cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
         } catch(e) {
           console.error(e);
         }
       });
       return () => {
          window.cancelAnimationFrame(frameId);
          if (cleanup) cleanup();
       }
    }
  }, [activeCategory, activeMaterial, sortOption]);

  // Filtering & Sorting Logic
  let filteredProducts = products.filter(p => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (activeMaterial !== 'all' && p.material !== activeMaterial) return false;
    return true;
  });

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const FilterSidebar = ({ isMobile }) => (
    <div className={`space-y-10 ${isMobile ? 'p-6 bg-background h-full overflow-y-auto' : ''}`}>
      {isMobile && (
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          <h2 className="font-serif tracking-widest text-xl uppercase">Filters</h2>
          <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
        </div>
      )}
      
      <div>
        <h3 className="font-serif tracking-widest uppercase text-sm mb-4 border-b border-border pb-2">Category</h3>
        <ul className="space-y-3">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => { setActiveCategory(cat); if(isMobile) setIsMobileFilterOpen(false); }}
                className={`text-sm tracking-wide capitalize hover:text-accent transition-colors ${activeCategory === cat ? 'text-foreground font-medium underline underline-offset-4 decoration-accent' : 'text-muted-foreground'}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-serif tracking-widest uppercase text-sm mb-4 border-b border-border pb-2">Material</h3>
        <ul className="space-y-3">
          {['all', 'gold', 'silver'].map((mat) => (
            <li key={mat}>
              <button 
                onClick={() => { setActiveMaterial(mat); if(isMobile) setIsMobileFilterOpen(false); }}
                className={`text-sm tracking-wide capitalize hover:text-accent transition-colors ${activeMaterial === mat ? 'text-foreground font-medium underline underline-offset-4 decoration-accent' : 'text-muted-foreground'}`}
              >
                {mat} Tone
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isMobile && (
        <button 
          onClick={() => setIsMobileFilterOpen(false)}
          className="w-full bg-primary text-primary-foreground py-3 rounded-none mt-8 font-medium tracking-wide uppercase text-sm"
        >
          View Results ({filteredProducts.length})
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-24 md:pt-32 pb-24 container mx-auto px-4 md:px-8 min-h-screen" ref={containerRef}>
      
      {/* Header Area */}
      <div className="text-center mb-12">
        <h1 id="collection-title" className="text-4xl md:text-5xl font-serif mb-4 capitalize">
          {activeCategory === 'all' ? 'All Collection' : `${activeCategory}`}
        </h1>
        <p className="text-muted-foreground text-sm tracking-wide">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center border-y border-border py-4 mb-8">
        <button 
          className="md:hidden flex items-center text-sm font-medium tracking-wide uppercase"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <SlidersHorizontal size={16} className="mr-2" />
          Filter
        </button>
        
        <div className="hidden md:block text-sm tracking-wide uppercase text-muted-foreground">
          Filter Options
        </div>

        <div className="flex items-center">
          <span className="text-sm tracking-wide uppercase mr-3 hidden md:inline text-muted-foreground">Sort By</span>
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-transparent border-none text-sm tracking-wide uppercase font-medium focus:ring-0 cursor-pointer pr-6"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <FilterSidebar isMobile={false} />
        </aside>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
            <div className="relative w-4/5 max-w-sm bg-background h-full shadow-xl">
               <FilterSidebar isMobile={true} />
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground font-serif">No products found matching your filters.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setActiveMaterial('all'); }}
                className="mt-6 text-sm uppercase tracking-widest border-b border-primary pb-1"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map((item) => (
                <div key={item.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-secondary w-full">
                     <Link to={`/product/${item.id}`} className="block h-full">
                        {/* Primary Image */}
                        <img 
                          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          data-strk-img-id={item.imgId}
                          data-strk-img={`[product-desc-${item.id}] [product-title-${item.id}] [collection-title]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                        />
                        {/* Hover Image */}
                        <img 
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${item.name} alternate view`}
                          data-strk-img-id={item.hoverImgId}
                          data-strk-img={`model wearing [product-desc-${item.id}] [product-title-${item.id}]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                        />
                     </Link>
                     <button className="absolute bottom-0 left-0 w-full bg-primary text-primary-foreground py-3 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-none tracking-widest uppercase">
                       Quick Add
                     </button>
                  </div>
                  <div className="flex flex-col flex-grow text-center">
                    <Link to={`/product/${item.id}`}>
                      <h3 id={`product-title-${item.id}`} className="font-serif tracking-wide text-sm md:text-base mb-1">{item.name}</h3>
                    </Link>
                    <p id={`product-desc-${item.id}`} className="sr-only">{item.desc}</p>
                    <div className="mt-auto pt-1">
                      <span className="text-sm text-muted-foreground">${item.price}</span>
                    </div>
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