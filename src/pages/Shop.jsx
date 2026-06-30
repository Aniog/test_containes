import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const productsData = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', material: 'gold', image: '[vivid-aura-earrings]' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', material: 'gold', image: '[majestic-flora-necklace]' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', material: 'gold', image: '[golden-sphere-huggies]' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', material: 'gold', image: '[amber-lace-earrings]' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'sets', material: 'gold', image: '[royal-heirloom-set]' },
  { id: '6', name: 'SILVER MOON DROP', price: 48, category: 'earrings', material: 'silver', image: '[silver-moon-drop-earrings]' },
  { id: '7', name: 'OBSIDIAN LINK CHAIN', price: 72, category: 'necklaces', material: 'gold', image: '[obsidian-link-necklace]' },
  { id: '8', name: 'PETITE PEARL HUGGIES', price: 34, category: 'huggies', material: 'silver', image: '[petite-pearl-huggies]' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const currentMaterial = searchParams.get('material') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';
  
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const { addItem } = useCart();

  React.useEffect(() => {
    import('@strikingly/sdk').then(({ ImageHelper }) => {
       import('@/strk-img-config.json').then((module) => {
         if (containerRef.current) {
            ImageHelper.loadImages(module.default || module, containerRef.current);
         }
       }).catch((e) => console.warn(e));
    }).catch((e) => console.error(e));
  }, [currentCategory, currentMaterial, currentSort]); // Re-run if list changes

  const filteredProducts = productsData
    .filter(p => currentCategory === 'all' ? true : p.category === currentCategory)
    .filter(p => currentMaterial === 'all' ? true : p.material === currentMaterial)
    .sort((a, b) => {
       if (currentSort === 'price-low') return a.price - b.price;
       if (currentSort === 'price-high') return b.price - a.price;
       return 0; // featured/default
    });

  const handleFilterChange = (key, value) => {
     const params = new URLSearchParams(searchParams);
     if (value === 'all') params.delete(key);
     else params.set(key, value);
     setSearchParams(params);
  };

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 md:py-24 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif tracking-widest uppercase mb-4 text-foreground">
          {currentCategory === 'all' ? 'The Collection' : currentCategory}
        </h1>
        <p className="text-secondary max-w-xl mx-auto font-sans">
          Curated pieces designed to elevate your everyday. Explore our timeless selection of demi-fine jewelry.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
           <button 
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
           >
             <Filter className="w-4 h-4" /> Filters
           </button>
           
           <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
                Sort <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                 <button onClick={() => handleFilterChange('sort', 'featured')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Featured</button>
                 <button onClick={() => handleFilterChange('sort', 'price-low')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: Low to High</button>
                 <button onClick={() => handleFilterChange('sort', 'price-high')} className="block w-full text-left px-4 py-2 text-sm hover:bg-muted">Price: High to Low</button>
              </div>
           </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-64 shrink-0 space-y-10 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
           <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Category</h3>
              <ul className="space-y-3 font-sans text-sm text-secondary">
                 <li><button onClick={() => handleFilterChange('category', 'all')} className={`hover:text-primary ${currentCategory === 'all' ? 'text-foreground font-medium' : ''}`}>All Jewelry</button></li>
                 <li><button onClick={() => handleFilterChange('category', 'earrings')} className={`hover:text-primary ${currentCategory === 'earrings' ? 'text-foreground font-medium' : ''}`}>Earrings</button></li>
                 <li><button onClick={() => handleFilterChange('category', 'necklaces')} className={`hover:text-primary ${currentCategory === 'necklaces' ? 'text-foreground font-medium' : ''}`}>Necklaces</button></li>
                 <li><button onClick={() => handleFilterChange('category', 'huggies')} className={`hover:text-primary ${currentCategory === 'huggies' ? 'text-foreground font-medium' : ''}`}>Huggies</button></li>
                 <li><button onClick={() => handleFilterChange('category', 'sets')} className={`hover:text-primary ${currentCategory === 'sets' ? 'text-foreground font-medium' : ''}`}>Sets</button></li>
              </ul>
           </div>
           
           <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Material</h3>
              <ul className="space-y-3 font-sans text-sm text-secondary">
                 <li><button onClick={() => handleFilterChange('material', 'all')} className={`hover:text-primary ${currentMaterial === 'all' ? 'text-foreground font-medium' : ''}`}>All Materials</button></li>
                 <li><button onClick={() => handleFilterChange('material', 'gold')} className={`hover:text-primary ${currentMaterial === 'gold' ? 'text-foreground font-medium' : ''}`}>18k Gold Plated</button></li>
                 <li><button onClick={() => handleFilterChange('material', 'silver')} className={`hover:text-primary ${currentMaterial === 'silver' ? 'text-foreground font-medium' : ''}`}>Sterling Silver</button></li>
              </ul>
           </div>

           {/* Desktop Sort */}
           <div className="hidden lg:block pt-10 border-t border-border">
              <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Sort By</h3>
              <ul className="space-y-3 font-sans text-sm text-secondary">
                 <li><button onClick={() => handleFilterChange('sort', 'featured')} className={`hover:text-primary ${currentSort === 'featured' ? 'text-foreground font-medium' : ''}`}>Featured</button></li>
                 <li><button onClick={() => handleFilterChange('sort', 'price-low')} className={`hover:text-primary ${currentSort === 'price-low' ? 'text-foreground font-medium' : ''}`}>Price: Low to High</button></li>
                 <li><button onClick={() => handleFilterChange('sort', 'price-high')} className={`hover:text-primary ${currentSort === 'price-high' ? 'text-foreground font-medium' : ''}`}>Price: High to Low</button></li>
              </ul>
           </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
           {filteredProducts.length === 0 ? (
             <div className="text-center py-24 text-secondary">
                <p>No products found matching your filters.</p>
                <button onClick={() => setSearchParams({})} className="mt-4 text-primary underline underline-offset-4">Clear all filters</button>
             </div>
           ) : (
             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-8">
               {filteredProducts.map((p) => (
                 <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col gap-4 cursor-pointer">
                    <div className="relative aspect-[4/5] bg-muted overflow-hidden rounded-sm">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                        data-strk-img-id={`shop-img-${p.id}`}
                        data-strk-img={p.image}
                        data-strk-img-ratio="4x5"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        alt={p.name}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                        <Button 
                          variant="secondary" 
                          onClick={(e) => {
                             e.preventDefault();
                             e.stopPropagation();
                             addItem(p, 1, 'gold');
                          }}
                          className="w-full bg-background/90 backdrop-blur text-foreground tracking-widest uppercase text-xs h-10 pointer-events-auto"
                        >
                          Quick Add
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <h3 className="font-serif uppercase tracking-widest text-xs text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-secondary text-xs font-sans">${p.price}</p>
                    </div>
                  </Link>
               ))}
             </div>
           )}
        </div>
      </div>

    </div>
  );
};

export default Shop;