import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';

// Mock catalog
const catalog = [
  { id: 'vivid-aura-jewels', title: 'Vivid Aura Jewels', price: 42, category: 'earrings', material: 'gold' },
  { id: 'majestic-flora-nectar', title: 'Majestic Flora Nectar', price: 68, category: 'necklaces', material: 'gold' },
  { id: 'golden-sphere-huggies', title: 'Golden Sphere Huggies', price: 38, category: 'huggies', material: 'gold' },
  { id: 'amber-lace-earrings', title: 'Amber Lace Earrings', price: 54, category: 'earrings', material: 'gold' },
  { id: 'royal-heirloom-set', title: 'Royal Heirloom Set', price: 95, category: 'sets', material: 'gold' },
  { id: 'silver-drop-tears', title: 'Silver Drop Tears', price: 48, category: 'earrings', material: 'silver' },
  { id: 'minimalist-chain', title: 'Minimalist Chain', price: 55, category: 'necklaces', material: 'silver' },
  { id: 'classic-hoops', title: 'Classic Hoops', price: 35, category: 'huggies', material: 'gold' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    import('../strk-img-config.json')
      .then((config) => {
        ImageHelper.loadImages(config.default || config, containerRef.current);
      })
      .catch(err => {
         // fallback if config not found
         ImageHelper.loadImages({}, containerRef.current);
      });
  }, [activeCategory, activeSort]);

  const handleFilterChange = (type, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' && type === 'category') {
      params.delete('category');
    } else {
      params.set(type, value);
    }
    setSearchParams(params);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = catalog;
    
    // Filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (activeSort === 'price-low') return a.price - b.price;
      if (activeSort === 'price-high') return b.price - a.price;
      // featured - original order
      return 0;
    });

    return result;
  }, [activeCategory, activeSort]);

  return (
    <div className="bg-brand-light pt-24 pb-24 min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl text-brand-dark mb-4 capitalize">
            {activeCategory === 'all' ? 'All Collection' : `${activeCategory}`}
          </h1>
          <p className="text-brand-muted max-w-lg mx-auto">
            Discover our curated selection of demi-fine jewelry designed for everyday elegance.
          </p>
        </div>

        {/* Toolbar (Mobile Filters Toggle & Sort) */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-DEFAULT/30">
          <button 
            className="md:hidden flex items-center text-sm uppercase tracking-widest text-brand-dark font-medium"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filter
          </button>

          <span className="hidden md:block text-brand-muted text-sm">
            {filteredAndSortedProducts.length} Products
          </span>

          <div className="relative group">
            <button className="flex items-center text-sm uppercase tracking-widest text-brand-dark font-medium cursor-pointer">
              Sort By <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[200px]">
              <div className="bg-white border border-brand-DEFAULT/30 shadow-lg py-2">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' }
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleFilterChange('sort', opt.value)}
                    className={`block w-full text-left px-6 py-2 text-sm transition-colors ${activeSort === opt.value ? 'bg-brand-light text-brand-gold' : 'hover:bg-brand-light text-brand-dark'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-10">
              <div>
                <h3 className="font-serif tracking-widest uppercase text-brand-dark mb-4 pb-2 border-b border-brand-DEFAULT/30">Categories</h3>
                <ul className="space-y-3 text-sm">
                  {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => handleFilterChange('category', cat)}
                        className={`capitalize transition-colors ${activeCategory === cat ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-dark'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-24 text-brand-muted">
                <p>No products found matching your criteria.</p>
                <button 
                  onClick={() => handleFilterChange('category', 'all')}
                  className="mt-4 underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
                {filteredAndSortedProducts.map(product => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[3/4] overflow-hidden bg-[#EFECE8] relative mb-4">
                        <img
                          alt={product.title}
                          data-strk-img-id={`shop-img-${product.id}`}
                          data-strk-img={`[shop-title] [title-${product.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src={`https://source.unsplash.com/random/400x533/?jewelry,${product.category},${Math.random()}`}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 id={`title-${product.id}`} className="font-serif text-lg text-brand-dark mb-1 group-hover:text-brand-gold transition-colors">{product.title}</h3>
                      <p className="text-brand-dark">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="relative w-4/5 max-w-xs bg-brand-light h-full ml-auto shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-brand-DEFAULT/30">
              <h2 className="font-serif text-xl uppercase tracking-widest">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)}><X size={24} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
               <h3 className="font-serif tracking-widest uppercase text-brand-dark mb-4 pb-2">Categories</h3>
                <ul className="space-y-4 text-sm uppercase tracking-widest">
                  {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          handleFilterChange('category', cat);
                          setIsMobileFiltersOpen(false);
                        }}
                        className={`transition-colors ${activeCategory === cat ? 'text-brand-gold font-medium' : 'text-brand-muted'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="p-6 border-t border-brand-DEFAULT/30">
               <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-brand-dark text-white uppercase tracking-widest py-3 text-sm"
                >
                 View Results
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}