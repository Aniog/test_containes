import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ChevronDown, Filter } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const allProducts = getProducts();

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const activeCategory = rawCategory || 'All';

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        // Already implicitly sorted by the data order
        break;
    }

    return result;
  }, [allProducts, activeCategory, sortBy]);

  // Use requestAnimationFrame for state-driven UI
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        if(containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      } catch (e) {
        console.error("Image load fail", e);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-24 min-h-screen bg-background" ref={containerRef}>
      {/* Header */}
      <div className="bg-secondary py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Elevate your everyday with our demi-fine pieces.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center pb-4 border-b border-border">
            <button 
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter size={16} /> Filters
            </button>
            <span className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} Results</span>
          </div>

          {/* Sidebar Filters */}
          <aside className={`w-full md:w-64 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-32">
              <h3 className="font-serif text-xl mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm uppercase tracking-widest transition-colors ${
                        activeCategory === cat 
                          ? 'text-accent border-b border-accent pb-1' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground uppercase tracking-widest">{filteredAndSortedProducts.length} Results</span>
              
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
                  Sort By: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 w-48 bg-background border border-border shadow-md">
                  <div className="flex flex-col">
                    <button onClick={() => setSortBy('featured')} className="px-4 py-3 text-sm uppercase tracking-widest hover:bg-secondary text-right transition-colors hover:text-accent">Featured</button>
                    <button onClick={() => setSortBy('price-low')} className="px-4 py-3 text-sm uppercase tracking-widest hover:bg-secondary text-right transition-colors hover:text-accent">Price: Low to High</button>
                    <button onClick={() => setSortBy('price-high')} className="px-4 py-3 text-sm uppercase tracking-widest hover:bg-secondary text-right transition-colors hover:text-accent">Price: High to Low</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4 cursor-pointer">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img={product.images.primary.query}
                        data-strk-img-id={product.images.primary.id}
                        data-strk-img-ratio="3x4"
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                         data-strk-img={product.images.hover.query}
                         data-strk-img-id={product.images.hover.id}
                         data-strk-img-ratio="3x4"
                         alt={`${product.name} worn`}
                         className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                          className="w-full bg-background/95 backdrop-blur text-foreground py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>
                    <div className="text-center">
                      <h3 className="font-serif text-lg mb-1" id={`shop-title-${product.id}`}>
                        <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-accent">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif text-xl text-muted-foreground">No products found in this category.</p>
                <button 
                  onClick={() => handleCategoryChange('All')}
                  className="mt-6 border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}