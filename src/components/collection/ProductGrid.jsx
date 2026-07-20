import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCartDispatch } from '@/lib/CartContext';

export default function ProductGrid({ products, sort, setSort }) {
  const containerRef = useRef(null);
  const dispatch = useCartDispatch();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product, variant: 'Gold', quantity: 1 });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  return (
    <div ref={containerRef} className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-umber">{products.length} pieces</p>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm text-espresso bg-transparent border border-clay px-3 py-1.5 focus:outline-none focus:border-espresso transition-colors cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-umber text-sm">No pieces match your filters.</p>
          <button
            onClick={() => setSort('featured')}
            className="btn-outline mt-4 text-xs"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-square bg-sand overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`shop-${product.id}`}
                  data-strk-img={`[shop-name-${product.id}]`}
                  data-strk-img-ratio={product.imageRatio}
                  data-strk-img-width={product.imageWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="sr-only" id={`shop-name-${product.id}`}>
                  {product.name} demi-fine gold jewelry
                </span>

                {product.badge && (
                  <span className="absolute top-3 left-3 bg-espresso text-cream text-[10px] tracking-widest uppercase px-2 py-1">
                    {product.badge}
                  </span>
                )}

                <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-cream/90 backdrop-blur-sm px-2 py-1 rounded-sm">
                  <Star className="w-2.5 h-2.5 fill-gold text-gold" />
                  <span className="text-[10px] font-medium text-espresso">{product.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-espresso/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-cream text-espresso text-xs tracking-widest uppercase py-2 font-medium hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-serif text-xs tracking-widest uppercase text-espresso truncate">
                {product.name}
              </h3>
              <p className="text-sm text-espresso font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
