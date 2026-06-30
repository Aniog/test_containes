import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block">
        <div className="product-img-wrap relative aspect-[3/4] bg-ivory-dark overflow-hidden mb-4">
          <img
            id={product.imgId}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="img-primary absolute inset-0 w-full h-full object-cover"
          />
          <img
            id={product.imgId2}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="img-secondary absolute inset-0 w-full h-full object-cover"
          />

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              style={i < Math.floor(product.rating)
                ? { color: '#c9a96e', fill: '#c9a96e' }
                : { color: '#e2dbd2', fill: '#e2dbd2' }}
            />
          ))}
          <span className="font-sans text-[10px] text-taupe ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-sans text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors duration-300 font-medium"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <p className="font-sans text-sm text-obsidian font-medium">${product.price}</p>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Our Favourites</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
