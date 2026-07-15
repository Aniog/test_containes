import { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

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
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-light text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="text-stone text-sm text-center mt-3">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-medium">Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-stone bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold rounded-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none">
                  <X className="w-4 h-4 text-stone" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block text-sm transition-colors bg-transparent border-none p-0 ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm transition-colors bg-transparent border-none p-0 ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Price</h4>
                <div className="space-y-2">
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">Under $40</button>
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">$40 – $70</button>
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">$70 – $100</button>
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">Over $100</button>
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Material</h4>
                <div className="space-y-2">
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">18K Gold Plated</button>
                  <button className="block text-sm text-stone hover:text-charcoal transition-colors bg-transparent border-none p-0">Sterling Silver</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block no-underline"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
                    <img
                      data-strk-img-id={`shop-${product.imgId}`}
                      data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-none rounded-none"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <h3
                    id={`shop-${product.titleId}`}
                    className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal mb-1"
                  >
                    {product.name}
                  </h3>
                  <p id={`shop-${product.descId}`} className="hidden">{product.description}</p>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                        style={i < Math.floor(product.rating) ? { fill: '#B8860B' } : {}}
                      />
                    ))}
                    <span className="text-xs text-stone ml-1">({product.reviewCount})</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal">${product.price}</p>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-stone">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
