import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy]);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-ivory border-b border-gold-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-3">
            The Collection
          </h1>
          <p className="font-sans text-sm text-warm-gray max-w-md mx-auto">
            Explore our curated selection of demi-fine gold jewelry, designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-muted/20">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors bg-transparent border-none cursor-pointer ${
                selectedCategory === 'all' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors bg-transparent border-none cursor-pointer ${
                  selectedCategory === cat.id ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-warm-gray hidden md:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-charcoal bg-transparent border border-gold-muted/30 px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-gold-muted/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium">Category</span>
              <button onClick={() => setShowFilters(false)} className="bg-transparent border-none cursor-pointer">
                <X className="w-4 h-4 text-warm-gray" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-gold-muted/40'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-transparent text-charcoal border-gold-muted/40'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
                  <img
                    data-strk-img-id={`shop-${product.id}-u3v4w5`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-cream text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 border-none cursor-pointer opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Add to Cart
                  </button>
                </div>
                <h3 id={`shop-${product.id}-title`} className="font-serif text-xs uppercase tracking-widest text-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-charcoal">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
            <p className="font-sans text-sm text-warm-gray">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
