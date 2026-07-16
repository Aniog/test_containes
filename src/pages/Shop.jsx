import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ShopProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-title] [shop-${product.id}-desc] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3
          id={`shop-${product.id}-title`}
          className="font-serif text-sm uppercase tracking-product text-charcoal mb-1"
        >
          {product.name}
        </h3>
        <p id={`shop-${product.id}-desc`} className="sr-only">{product.description}</p>
        <p className="text-sm text-stone">${product.price}</p>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[72px] left-0 right-0 mx-3 py-2.5 bg-charcoal text-cream text-xs uppercase tracking-button font-medium flex items-center justify-center gap-2 transition-all duration-300 border-none ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>
    </div>
  );
};

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            The Collection
          </h1>
          <p className="text-sm text-stone">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-button text-charcoal font-medium bg-transparent border-none p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`text-xs uppercase tracking-button font-medium transition-colors bg-transparent border-none p-0 ${
                activeCategory === 'all' ? 'text-charcoal border-b-2 border-charcoal pb-0.5' : 'text-stone hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`text-xs uppercase tracking-button font-medium transition-colors bg-transparent border-none p-0 ${
                  activeCategory === cat.slug ? 'text-charcoal border-b-2 border-charcoal pb-0.5' : 'text-stone hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-button text-stone bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-button text-charcoal font-medium">Category</span>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-1 text-stone bg-transparent border-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { handleCategoryChange('all'); setFilterOpen(false); }}
                className={`px-4 py-2 text-xs uppercase tracking-button font-medium border transition-colors ${
                  activeCategory === 'all' ? 'bg-charcoal text-cream border-charcoal' : 'bg-transparent text-stone border-border'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { handleCategoryChange(cat.slug); setFilterOpen(false); }}
                  className={`px-4 py-2 text-xs uppercase tracking-button font-medium border transition-colors ${
                    activeCategory === cat.slug ? 'bg-charcoal text-cream border-charcoal' : 'bg-transparent text-stone border-border'
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
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
            <p className="text-sm text-stone">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
