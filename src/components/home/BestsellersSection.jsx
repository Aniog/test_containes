import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-stone aspect-product mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-ink/90 backdrop-blur-sm text-velmora-cream font-inter text-[11px] tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-ink transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-inter text-[10px] tracking-[0.1em] uppercase bg-velmora-gold text-velmora-ink px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
        {product.tags.includes('gift set') && (
          <div className="absolute top-3 left-3">
            <span className="font-inter text-[10px] tracking-[0.1em] uppercase bg-velmora-ink text-velmora-cream px-2 py-1">
              Gift Set
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div>
        <p
          id={product.titleId}
          className="font-cormorant text-base font-medium tracking-[0.12em] uppercase text-velmora-ink leading-tight mb-1"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="font-inter text-xs text-velmora-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BestsellersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block font-inter text-xs tracking-[0.15em] uppercase border border-velmora-ink text-velmora-ink px-10 py-4 hover:bg-velmora-ink hover:text-velmora-cream transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
