import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'Gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-portrait bg-cream overflow-hidden mb-4">
        <img
          data-strk-img-id={product.imgIds.main}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay with second image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img
            data-strk-img-id={product.imgIds.hover}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velvet text-ivory font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-velvet font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={handleAdd}
            className="w-full bg-velvet text-ivory font-manrope text-[10px] tracking-[0.14em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.12em] text-velvet group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
              />
            ))}
            <span className="font-manrope text-[10px] text-text-tertiary ml-1">({product.reviewCount})</span>
          </div>
          <p className="font-cormorant text-base text-velvet">${product.price}</p>
        </div>
      </div>
    </Link>
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-3">Curated for You</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velvet">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-[11px] tracking-[0.14em] uppercase text-text-secondary hover:text-gold transition-colors duration-200 border-b border-linen hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
