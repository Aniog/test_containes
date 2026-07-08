import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-stone text-sm mt-3">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-nav text-charcoal font-medium bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-nav text-charcoal bg-transparent border border-sand px-4 py-2 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h3 className="text-sm font-medium text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-nav text-charcoal font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block text-sm w-full text-left bg-transparent border-none cursor-pointer transition-colors py-1 ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm w-full text-left bg-transparent border-none cursor-pointer transition-colors py-1 ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-nav text-charcoal font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('price-low')}
                    className={`block text-sm w-full text-left bg-transparent border-none cursor-pointer transition-colors py-1 ${sortBy === 'price-low' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className={`block text-sm w-full text-left bg-transparent border-none cursor-pointer transition-colors py-1 ${sortBy === 'price-high' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    $50 — $100
                  </button>
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs uppercase tracking-nav text-charcoal font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-stone py-1">18K Gold Plated</span>
                  <span className="block text-sm text-stone py-1">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block no-underline">
                    <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}-img`}
                        data-strk-img={`[shop-${product.id}-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-16 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-btn font-medium py-2 border border-sand hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <div className="pt-3">
                    <h3 id={`shop-${product.id}-title`} className="text-product text-xs font-serif text-charcoal">
                      {product.name}
                    </h3>
                    <p className="text-sm text-stone mt-1">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-stone mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
