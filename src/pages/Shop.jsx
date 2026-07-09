import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
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
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory ? (
              <span className="capitalize">{activeCategory}</span>
            ) : (
              'All Jewelry'
            )}
          </h1>
          <p className="mt-2 text-muted-fg text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-charcoal hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-wider bg-transparent border border-border px-3 py-2 text-charcoal focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h3 className="text-sm font-medium text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('')}
                    className={`block text-sm transition-colors ${!activeCategory ? 'text-accent font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm capitalize transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted-fg hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Price</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-muted-fg">$30 – $120</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal mb-3">Material</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-muted-fg">18K Gold Plated</span>
                  <span className="block text-sm text-muted-fg">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}-img-h8`}
                        data-strk-img={`[shop-${product.id}-name] gold jewelry editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                          }}
                          className="w-full bg-charcoal/90 text-white py-2.5 text-[10px] uppercase tracking-widest font-medium hover:bg-charcoal transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-3">
                    <h3
                      id={`shop-${product.id}-name`}
                      className="font-serif text-xs uppercase tracking-product text-charcoal"
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-border'}`}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-charcoal mt-1">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-fg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
