import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getBestsellers } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={10}
        className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-ivory-300'}
        strokeWidth={1}
      />
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory-200 aspect-[3/4]">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 bg-velvet-900/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="flex items-center gap-2 font-sans text-[10px] tracking-widest2 uppercase text-ivory-100 hover:text-gold transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Bestseller badge */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-velvet-900 px-2 py-0.5 font-sans text-[9px] tracking-widest uppercase font-semibold">
            Bestseller
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-stone-warm">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base font-medium tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-velvet-900 mt-1">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const products = getBestsellers();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Curated for You</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest2 uppercase text-velvet-900 border-b border-velvet-900 pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
