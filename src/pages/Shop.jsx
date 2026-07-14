import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
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
        <div className="relative aspect-[3/4] bg-cream overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-title] [shop-${product.id}-desc] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[calc(25%+1rem)] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-charcoal px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-border hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="pt-4">
        <h3 id={`shop-${product.id}-title`} className="font-sans text-xs uppercase tracking-product font-medium text-charcoal">
          {product.name}
        </h3>
        <p id={`shop-${product.id}-desc`} className="sr-only">{product.description}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-gold" fill="currentColor" />
          ))}
          <span className="text-xs text-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-charcoal mt-1.5">${product.price}</p>
      </div>
    </div>
  );
};

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-stone text-sm">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-charcoal bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-wider text-charcoal bg-transparent border border-border px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            <div className="md:sticky md:top-28">
              <div className="flex items-center justify-between md:hidden mb-4">
                <span className="text-sm font-medium text-charcoal">Filters</span>
                <button onClick={() => setFilterOpen(false)} className="p-1 bg-transparent border-none cursor-pointer">
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block text-sm cursor-pointer bg-transparent border-none text-left ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'} transition-colors`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm cursor-pointer bg-transparent border-none text-left ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'} transition-colors`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-3">Price</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-stone">$30 – $120</span>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider font-medium text-charcoal mb-3">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-stone">18K Gold Plated</span>
                  <span className="block text-sm text-stone">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone text-sm">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
