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
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-blush aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian text-ivory font-sans text-xs uppercase tracking-widest2 py-3.5 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-ivory font-sans text-[9px] uppercase tracking-widest2 px-2 py-1">
            Bestseller
          </div>
        )}
      </Link>

      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider fill-divider'}
            />
          ))}
          <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-base font-medium uppercase tracking-widest2 text-obsidian hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-stone leading-relaxed line-clamp-2 hidden">
          {product.shortDescription}
        </p>
        <p className="font-sans text-sm font-medium text-obsidian">${product.price}</p>
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
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest3 text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest2 text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
