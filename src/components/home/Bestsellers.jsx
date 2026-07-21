import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(i => (
      <Star
        key={i}
        size={10}
        className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-parchment'}
        strokeWidth={1}
      />
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-parchment aspect-portrait">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image on hover */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-velmora-obsidian text-velmora-gold font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-cream font-manrope text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-mist mb-1">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-cormorant text-base font-medium uppercase tracking-wider text-velmora-obsidian hover:text-velmora-gold transition-colors leading-tight"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>
          </div>
          <span className="font-manrope text-sm font-medium text-velmora-obsidian flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-whisper">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);
  const products = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-linen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-mist hover:text-velmora-gold transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            View All
            <span className="text-velmora-gold">→</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProductCard };
export default Bestsellers;
