import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect, useMemo } from 'react';
import { products } from '../data';
import { useAppStore } from '../store';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SlidersHorizontal } from 'lucide-react';

const Collections = () => {
  const { category = 'all' } = useParams();
  const { addToCart } = useAppStore();
  const containerRef = useRef(null);

  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState('all');

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
        // use request AF to wait for react state to settle
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [category, sortBy, selectedMetal]);
  
  // Create category map for header
  const categoryHeaders = {
    all: { title: "All Collections", desc: "Discover our complete range of demi-fine jewelry. Crafted for everyday elegance." },
    earrings: { title: "Earrings", desc: "From subtle studs to statement drops. Find your frame." },
    necklaces: { title: "Necklaces", desc: "Delicate chains and striking pendants. Ready to layer." },
    huggies: { title: "Huggies", desc: "Close-fitting hoops for a seamless look. Perfect for your curated ear." },
    sets: { title: "Curated Sets", desc: "Thoughtfully paired pieces for effortless styling or complete gifting." }
  };
  
  const headerInfo = categoryHeaders[category] || categoryHeaders.all;

  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Category filter
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    
    // Material filter (simulated simple logic)
    if (selectedMetal !== 'all') {
       // In a real app we'd have a specific finish tag, doing a rough check here
       if (selectedMetal === 'gold') {
          result = result.filter(p => p.material.toLowerCase().includes('gold') || !p.material.toLowerCase().includes('silver'));
       } else if (selectedMetal === 'silver') {
          // Dummy data only has gold, but this shows architecture
          result = result.filter(p => p.material.toLowerCase().includes('silver') && !p.material.toLowerCase().includes('gold'));
       }
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...result].sort((a, b) => b.price - a.price);
      case 'az':
        return [...result].sort((a, b) => a.name.localeCompare(b.name));
      default: // 'featured'
        return result;
    }
  }, [category, sortBy, selectedMetal]);

  return (
    <div className="pt-20 pb-24" ref={containerRef}>
      
      {/* Category Header */}
      <div className="bg-brand-sand py-16 px-4 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="collection-header" className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">{headerInfo.title}</h1>
          <p id="collection-desc" className="text-brand-dark/70 font-light text-lg">{headerInfo.desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-brand-sand pb-4 mb-8 gap-4">
          <button 
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand-gold transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          
          <div className="text-sm font-sans tracking-wide text-brand-gray hidden md:block">
            {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
          
          <div className="flex items-center gap-2 text-sm tracking-widest text-brand-dark">
            <span className="uppercase font-medium">Sort By:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none outline-none cursor-pointer focus:ring-0 font-sans tracking-normal"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
              <option value="az">Alphabetically, A-Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Filter Sidebar */}
          <div className={`md:w-64 flex-shrink-0 transition-all duration-300 overflow-hidden ${showFilters ? 'h-auto opacity-100 mb-8' : 'h-0 opacity-0 md:h-auto md:opacity-100 md:mb-0'}`}>
            <h3 className="font-serif text-xl text-brand-dark border-b border-brand-sand pb-2 mb-4">Categories</h3>
            <ul className="space-y-3 mb-8 text-brand-dark/80 font-light">
               {['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
                 <li key={cat}>
                    <Link 
                      to={`/collections/${cat.toLowerCase()}`}
                      className={`hover:text-brand-gold transition-colors ${category === cat.toLowerCase() ? 'text-brand-gold font-medium' : ''}`}
                    >
                      {cat}
                    </Link>
                 </li>
               ))}
            </ul>

            <h3 className="font-serif text-xl text-brand-dark border-b border-brand-sand pb-2 mb-4">Metal Finish</h3>
            <ul className="space-y-3 text-brand-dark/80 font-light">
               {['all', 'gold', 'silver'].map((metal) => (
                 <li key={metal}>
                    <button 
                      onClick={() => setSelectedMetal(metal)}
                      className={`hover:text-brand-gold transition-colors capitalize text-left flex items-center gap-2 w-full`}
                    >
                      <div className={`w-3 h-3 rounded-full border border-brand-gray flex items-center justify-center`}>
                        {selectedMetal === metal && <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />}
                      </div>
                      {metal === 'all' ? 'All Finishes' : `${metal} Tone`}
                    </button>
                 </li>
               ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
               <div className="text-center py-20 text-brand-gray font-light">
                 <p className="text-xl mb-4">No products found matching your criteria.</p>
                 <button onClick={() => { setSortBy('featured'); setSelectedMetal('all'); }} className="text-brand-gold underline">Reset Filters</button>
               </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] mb-4 overflow-hidden bg-brand-sand/30">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          data-strk-img-id={`col-img-1-${product.id}`}
                          data-strk-img={product.image.replace(/\[|\]/g, '')}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                        />
                        
                        {/* Secondary Image on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-sand/30">
                          <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                            alt={`${product.name} alternate view`}
                            className="w-full h-full object-cover"
                            data-strk-img-id={`col-img-2-${product.id}`}
                            data-strk-img={product.images[1].replace(/\[|\]/g, '')}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="400"
                          />
                        </div>
                        
                        {/* Quick Add Button */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm text-brand-dark uppercase tracking-widest text-xs py-3 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Quick Add
                        </button>
                      </Link>
                      <div className="text-center font-serif text-lg text-brand-dark mb-1">
                        <Link to={`/product/${product.id}`} id={`col-name-${product.id}`} className="hover:text-brand-gold transition-colors">
                          {product.name}
                        </Link>
                      </div>
                      <div className="text-center font-sans tracking-wide text-brand-gray text-sm">
                        ${product.price}
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Collections;