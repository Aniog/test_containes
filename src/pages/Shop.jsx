import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

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

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 id="shop-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p id="shop-subtitle" className="mt-2 text-muted text-sm">
          Discover our curated collection of demi-fine pieces
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-sm text-charcoal hover:text-accent transition-colors md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        {/* Desktop category filters */}
        <div className="hidden md:flex items-center gap-4">
          {categoryOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setCategory(opt.value)}
              className={`text-sm font-medium uppercase tracking-widest transition-colors pb-1 ${
                activeCategory === opt.value
                  ? 'text-accent border-b border-accent'
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Mobile filters */}
      {showFilters && (
        <div className="md:hidden mb-6 p-4 bg-ivory border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-charcoal">Category</span>
            <button onClick={() => setShowFilters(false)}>
              <X className="w-4 h-4 text-muted" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => { setCategory(opt.value); setShowFilters(false); }}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest border transition-colors ${
                  activeCategory === opt.value
                    ? 'border-accent bg-accent text-white'
                    : 'border-border text-charcoal hover:border-accent'
                }`}
              >
                {opt.label}
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
        <div className="text-center py-20">
          <p className="text-muted">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-card-title-${product.id}] [shop-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-white/95 text-charcoal text-xs font-medium uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3
          id={`shop-card-title-${product.id}`}
          className="font-serif text-sm text-charcoal uppercase tracking-product font-medium"
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
      </Link>
    </div>
  );
};

export default Shop;
