import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  // Set standard padding when top scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let products = [...seedProducts];
    if (currentCategory !== 'all') {
      products = products.filter(p => p.category === currentCategory);
    }

    switch (currentSort) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  }, [currentCategory, currentSort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentCategory, currentSort, filteredProducts]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' && key === 'category') {
      newParams.delete('category');
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-24 pb-32 mt-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {currentCategory === 'all' ? 'The Collection' : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
          </h1>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            {filteredProducts.length} Pieces
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center py-4 border-y border-border">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium">
                Sort By <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 shadow-lg">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Top Rated' }
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => updateFilter('sort', opt.value)}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-muted ${currentSort === opt.value ? 'font-medium bg-muted/50' : ''}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32">
              <div className="mb-10">
                <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Category</h3>
                <ul className="space-y-4">
                  {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => updateFilter('category', cat)}
                        className={`text-sm tracking-wide capitalize hover:text-foreground transition-colors ${currentCategory === cat ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 hidden lg:block">
                 <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Sort By</h3>
                 <ul className="space-y-4">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                    { value: 'rating', label: 'Top Rated' }
                  ].map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => updateFilter('sort', opt.value)}
                         className={`text-sm tracking-wide hover:text-foreground transition-colors ${currentSort === opt.value ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                    <Link to={`/product/${product.id}`}>
                      <img 
                        data-strk-img-id={`prod-${product.id}`}
                        data-strk-img={`[prod-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        data-strk-img-id={`prod-hover-${product.id}`}
                        data-strk-img={`[prod-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={product.imageHover} 
                        alt={`${product.name} worn`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </Link>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product, 1, { tone: 'Gold' }); }}
                      className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur text-foreground py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest text-xs font-medium"
                    >
                      Quick Add
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`prod-${product.id}-name`} className="font-serif text-lg mb-1"><Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">{product.name}</Link></h3>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider">{product.material}</p>
                    </div>
                    <span className="font-medium">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center text-muted-foreground">
                <p>No products found matching your filters.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="mt-6 border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors uppercase tracking-widest text-sm"
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