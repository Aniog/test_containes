import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const badgeColors = {
  Bestseller: 'bg-champagne text-ivory',
  New: 'bg-obsidian text-ivory',
  Gift: 'bg-blush text-obsidian',
};

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 font-inter text-[9px] uppercase tracking-[0.12em] px-2.5 py-1 ${badgeColors[product.badge] || 'bg-linen text-obsidian'}`}
          >
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-inter text-[10px] uppercase tracking-[0.12em] py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3 h-3" strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${
                i < Math.floor(product.rating) ? 'fill-champagne text-champagne' : 'text-linen fill-linen'
              }`}
              strokeWidth={0}
            />
          ))}
          <span className="font-inter text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-[0.12em] text-obsidian hover:text-champagne transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-inter text-[11px] text-stone mt-0.5">
          {product.subtitle}
        </p>
        <p className="font-inter text-sm font-medium text-obsidian mt-1.5">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-inter text-xs uppercase tracking-[0.15em] px-10 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ProductCard };
export default Bestsellers;
