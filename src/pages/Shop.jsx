import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-linen/50 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <h1 id="shop-title" className="font-serif text-3xl md:text-5xl font-light text-charcoal text-center">
            The Collection
          </h1>
          <p id="shop-subtitle" className="text-taupe text-sm mt-3 text-center uppercase tracking-wide">
            Timeless pieces for every occasion
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          {/* Category filters - desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors ${
                activeCategory === 'all' ? 'border-gold text-gold' : 'border-transparent text-taupe hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={`text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors ${
                  activeCategory === cat.slug ? 'border-gold text-gold' : 'border-transparent text-taupe hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-wide text-taupe bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-linen border border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false); }}
                className={`text-xs uppercase tracking-wide px-3 py-1.5 border ${
                  activeCategory === 'all' ? 'border-gold text-gold' : 'border-sand text-taupe'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.slug); setFilterOpen(false); }}
                  className={`text-xs uppercase tracking-wide px-3 py-1.5 border ${
                    activeCategory === cat.slug ? 'border-gold text-gold' : 'border-sand text-taupe'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product count */}
        <p className="text-xs text-taupe mb-6">{filteredProducts.length} products</p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-${product.imgId}`}
                    data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] [shop-subtitle] [shop-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
                <h3
                  id={`shop-${product.id}-title`}
                  className="font-serif text-xs uppercase tracking-product text-charcoal"
                >
                  {product.name}
                </h3>
                <p id={`shop-${product.id}-desc`} className="sr-only">{product.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-taupe">${product.price}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
