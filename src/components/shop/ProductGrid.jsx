import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGrid({ products: items }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [items]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map(product => (
        <div key={product.id} className="group">
          <Link to={`/product/${product.slug}`}>
            <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] rounded-sm mb-3">
              {product.badge && (
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="font-inter text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
                    {product.badge}
                  </span>
                </div>
              )}
              <img
                data-strk-img-id={`shop-${product.imgId}`}
                data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                data-strk-img-id={`shop-hover-${product.img2Id}`}
                data-strk-img={`[shop-${product.titleId}] gold jewelry worn editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={`${product.name} worn`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  onClick={(e) => { e.preventDefault(); addItem(product); }}
                  className="w-full bg-velmora-obsidian/90 text-velmora-linen font-inter text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
                >
                  <ShoppingBag size={12} /> Quick Add
                </button>
              </div>
            </div>
          </Link>
          <div className="space-y-1">
            <p id={`shop-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-[0.12em] text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p id={`shop-${product.descId}`} className="hidden">
              {product.shortDescription}
            </p>
            <div className="flex items-center justify-between">
              <StarRating rating={product.rating} size={11} />
              <div className="flex items-center gap-1.5">
                {product.originalPrice && (
                  <span className="font-inter text-xs text-velmora-ash line-through">${product.originalPrice}</span>
                )}
                <span className="font-inter text-sm text-velmora-obsidian font-medium">${product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
