import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-cream overflow-hidden">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] worn gold jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute inset-0"
        />

        {/* Tag */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-obsidian text-ivory font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            New
          </span>
        )}
        {product.tags.includes('bestseller') && !product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-250 bg-obsidian/90 backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs tracking-widest uppercase text-ivory hover:text-gold transition-colors"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-cormorant text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors truncate"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="font-manrope text-xs text-mist mt-0.5 truncate">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm font-500 text-obsidian flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-mist">({product.reviewCount})</span>
        </div>
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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            View All
            <span className="w-6 h-px bg-current inline-block" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
