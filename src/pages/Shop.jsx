import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy]);

  let filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All</h1>
          <p className="mt-3 text-stone text-sm font-sans">Discover our complete collection of demi-fine jewelry</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal font-sans bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone font-sans hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-charcoal font-sans bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h3 className="text-sm font-sans font-medium text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none cursor-pointer">
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm font-sans bg-transparent border-none cursor-pointer transition-colors ${
                      selectedCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm font-sans bg-transparent border-none cursor-pointer transition-colors ${
                        selectedCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-stone font-sans">$30 – $120</span>
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-stone font-sans">18K Gold Plated</span>
                  <span className="block text-sm text-stone font-sans">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-xs text-stone font-sans mb-4">{filtered.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone text-sm font-sans">No products found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 text-gold text-sm underline underline-offset-4 bg-transparent border-none cursor-pointer"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
