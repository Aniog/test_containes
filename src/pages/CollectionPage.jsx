import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Filter, ChevronDown, Check } from 'lucide-react';

const products = [
  {
    id: 'prod-1',
    title: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: 'Gold Vermeil',
    desc: 'gold ear cuff with crystal accent',
    imgId: 'product-vivid-aura-1',
  },
  {
    id: 'prod-2',
    title: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold Plated',
    desc: 'multicolor floral crystal necklace',
    imgId: 'product-majestic-flora-1',
  },
  {
    id: 'prod-3',
    title: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: 'Gold Vermeil',
    desc: 'chunky gold dome huggie earrings',
    imgId: 'product-golden-sphere-1',
  },
  {
    id: 'prod-4',
    title: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold Vermeil',
    desc: 'textured gold filigree drop earrings',
    imgId: 'product-amber-lace-1',
  },
  {
    id: 'prod-5',
    title: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: 'Solid Gold',
    desc: 'gift-boxed earring + necklace set',
    imgId: 'product-royal-heirloom-1',
  },
  {
    id: 'prod-6',
    title: 'Lumina Pearl Drop',
    price: 62,
    category: 'Earrings',
    material: 'Gold Vermeil',
    desc: 'elegant freshwater pearl drop earrings',
    imgId: 'product-lumina-pearl-1',
  },
  {
    id: 'prod-7',
    title: 'Celeste Chain Choker',
    price: 75,
    category: 'Necklaces',
    material: 'Solid Gold',
    desc: 'delicate gold chain choker necklace',
    imgId: 'product-celeste-chain-1',
  },
  {
    id: 'prod-8',
    title: 'Petite Star Huggies',
    price: 34,
    category: 'Huggies',
    material: 'Gold Plated',
    desc: 'small huggies with star engraving',
    imgId: 'product-petite-star-1',
  }
];

const CollectionPage = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // We need to re-run ImageHelper when filtered products change
  // using requestAnimationFrame to clear the frame allows React to mount images
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeMaterial, sortOption]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold Vermeil', 'Solid Gold', 'Gold Plated'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  let filteredProducts = products.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchMaterial = activeMaterial === 'All' || p.material === activeMaterial;
    return matchCategory && matchMaterial;
  });

  if (sortOption === 'Price: Low to High') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'Price: High to Low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Collection Header */}
        <div className="bg-secondary/30 py-16 md:py-24 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">All Jewelry</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground font-sans">
              Discover our complete collection of demi-fine pieces. From delicate huggies to statement necklaces, find your new everyday signatures.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Filter Toggle */}
          <div className="flex justify-between items-center mb-8 lg:hidden pb-4 border-b border-border">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-sm font-sans tracking-widest uppercase"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center text-sm font-sans tracking-widest uppercase"
              >
                Sort <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-premium z-20 border border-border">
                  {sortOptions.map(option => (
                    <button
                      key={option}
                      className={`block w-full text-left px-4 py-3 text-sm font-sans transition-colors hover:bg-muted ${sortOption === option ? 'text-primary' : 'text-foreground'}`}
                      onClick={() => { setSortOption(option); setIsSortOpen(false); }}
                    >
                      <span className="flex items-center justify-between">
                        {option}
                        {sortOption === option && <Check className="w-4 h-4" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <aside className={`w-full lg:w-64 shrink-0 transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              
              <div className="mb-10">
                <h3 className="font-serif text-lg tracking-widest uppercase mb-6 pb-2 border-b border-border">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-sans transition-colors ${activeCategory === cat ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-lg tracking-widest uppercase mb-6 pb-2 border-b border-border">Material</h3>
                <ul className="space-y-4">
                  {materials.map(mat => (
                    <li key={mat}>
                      <button 
                        onClick={() => setActiveMaterial(mat)}
                        className={`text-sm font-sans transition-colors ${activeMaterial === mat ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              
              {/* Desktop Sort */}
              <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground font-sans">{filteredProducts.length} Products</p>
                <div className="relative">
                  <button 
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center text-sm font-sans tracking-widest uppercase"
                  >
                    Sort by: {sortOption} <ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                  
                  {isSortOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-premium z-20 border border-border">
                      {sortOptions.map(option => (
                        <button
                          key={option}
                          className={`block w-full text-left px-5 py-3 text-sm font-sans transition-colors hover:bg-muted ${sortOption === option ? 'text-primary' : 'text-foreground'}`}
                          onClick={() => { setSortOption(option); setIsSortOpen(false); }}
                        >
                          <span className="flex items-center justify-between">
                            {option}
                            {sortOption === option && <Check className="w-4 h-4" />}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-muted-foreground mb-4">No pieces match your selection.</p>
                  <button 
                    onClick={() => { setActiveCategory('All'); setActiveMaterial('All'); }}
                    className="btn-outline"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="group relative flex flex-col">
                      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[product-title-${product.id}] ${product.desc} jewelry elegant flat lay`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                        />
                        
                        {/* Hover Quick Add Area */}
                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <div className="w-full bg-background/95 backdrop-blur-sm text-foreground text-center py-3 font-serif text-sm tracking-widest uppercase transition-colors duration-300 shadow-soft">
                            View Details
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 id={`product-title-${product.id}`} className="font-serif text-base tracking-wider uppercase mb-2">
                          {product.title}
                        </h3>
                        <p className="font-sans text-muted-foreground">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionPage;