import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ProductImage } from '@/components/product/ProductImage';
import Stars from '@/components/product/Stars';

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-ivory"
        aria-label={`View ${product.name}`}
      >
        {/* Primary image */}
        <div className="aspect-[4/5] w-full transition-opacity duration-700 group-hover:opacity-0">
          <ProductImage
            product={product}
            angle="main"
            ratio="4x5"
            width={700}
            className="h-full w-full"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        {/* Hover (alternate) image */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <ProductImage
            product={product}
            angle="alt"
            ratio="4x5"
            width={700}
            className="h-full w-full"
            imgClassName="scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-cream/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
              New
            </span>
          )}
          {product.compareAt && (
            <span className="bg-gold px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream">
              Save {formatPrice(product.compareAt - product.price)}
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, 'Gold', 1);
          }}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/90 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition-transform duration-300 ease-out hover:bg-espresso group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      </Link>

      <div className={`flex flex-col gap-1 ${compact ? 'pt-3' : 'pt-4'}`}>
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/product/${product.id}`}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:text-gold-deep md:text-xs"
          >
            {product.name}
          </Link>
          <Stars rating={product.rating} />
        </div>
        <p className="text-xs text-taupe">{product.tagline}</p>
        <p className="mt-0.5 flex items-baseline gap-2 text-sm text-cocoa">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-taupe line-through">{formatPrice(product.compareAt)}</span>
          )}
        </p>
      </div>
    </div>
  );
}
