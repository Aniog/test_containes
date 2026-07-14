import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={11}
          className={i <= Math.round(rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-linen aspect-[3/4]">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 bg-velmora-obsidian/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <ShoppingBag size={13} strokeWidth={1.5} className="text-velmora-gold" />
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="font-inter text-[10px] uppercase tracking-widest text-velmora-cream"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 space-y-1.5">
        <StarRating rating={product.rating} />
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="product-name hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-inter text-xs text-velmora-text-muted line-clamp-1">
          {product.shortDescription}
        </p>
        <p className="font-cormorant text-xl text-velmora-obsidian">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velmora-cream">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="label-ui text-velmora-gold mb-2">Curated for you</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-widest text-velmora-text-secondary hover:text-velmora-gold transition-colors border-b border-velmora-sand pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
