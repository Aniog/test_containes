import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, Minus, Plus, Truck, RotateCcw, Sparkles, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { findProduct, relatedProducts } from '@/data/products';
import { useCart, formatPrice } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-ink transition-transform duration-300',
            open && 'rotate-180'
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-500 ease-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-6 text-sm text-ink-soft leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = findProduct(id);
  const containerRef = useRef(null);

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, activeImage]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const related = relatedProducts(product.id, 4);

  // Static gallery slots — each slot uses a pre-defined imgId so the
  // strk-img build plugin can statically resolve and pre-fetch each one.
  const gallery = [
    { id: product.imgId, query: product.imgQuery, label: 'Front' },
    { id: product.imgIdAlt, query: product.altImgQuery, label: 'On Model' },
    { id: product.imgIdDetail, query: product.detailQuery, label: 'Detail' },
    { id: product.imgIdFlatlay, query: product.flatlayQuery, label: 'Flat Lay' },
  ];

  const titleId = `pdp-${product.id}-title`;
  const descId = `pdp-${product.id}-desc`;

  return (
    <div ref={containerRef} className="bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-6 text-[11px] uppercase tracking-[0.25em] text-ink-soft">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-3">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-3">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-ink">
          {product.categoryLabel}
        </Link>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-4">
              {/* Thumbnails (desktop) */}
              <ul className="hidden md:flex md:flex-col gap-3 order-1">
                {gallery.map((g, idx) => (
                  <li key={g.id}>
                    <button
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        'block w-20 aspect-[4/5] overflow-hidden border transition-all duration-300',
                        activeImage === idx
                          ? 'border-ink opacity-100'
                          : 'border-hairline opacity-70 hover:opacity-100'
                      )}
                      aria-label={`Show ${g.label} image`}
                    >
                      <img
                        data-strk-img-id={g.id}
                        data-strk-img={g.query}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={g.label}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Main image — render all 4 stacked, fade between them */}
              <div className="relative bg-cream aspect-[4/5] overflow-hidden order-2">
                {gallery.map((g, idx) => (
                  <img
                    key={g.id}
                    data-strk-img-id={g.id}
                    data-strk-img={g.query}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} — ${g.label}`}
                    className={cn(
                      'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out',
                      activeImage === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Mobile thumb strip */}
            <ul className="flex md:hidden gap-2 mt-3 overflow-x-auto scrollbar-hide">
              {gallery.map((g, idx) => (
                <li key={`m-${g.id}`} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      'block w-16 aspect-[4/5] overflow-hidden border transition-all duration-300',
                      activeImage === idx ? 'border-ink' : 'border-hairline opacity-70'
                    )}
                  >
                    <img
                      data-strk-img-id={g.id}
                      data-strk-img={g.query}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={g.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-3">
              {product.categoryLabel}
            </p>
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.18em] text-ink leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3.5 h-3.5',
                      i < Math.round(product.rating) ? 'fill-gold' : 'fill-transparent'
                    )}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-soft">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p id={descId} className="mt-6 text-base text-ink-soft leading-relaxed">
              {product.short}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-[0.3em] text-ink">
                  Tone
                </span>
                <span className="text-xs text-ink-soft">{variant}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] border transition-all duration-300',
                      variant === v
                        ? 'bg-ink text-ivory border-ink'
                        : 'bg-transparent text-ink border-hairline hover:border-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-8 flex items-stretch gap-4">
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-12 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, { variant, quantity })}
                className="flex-1 bg-ink text-ivory py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors duration-300"
              >
                Add to Bag — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Trust mini */}
            <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <Truck className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">Free Ship $75+</span>
              </li>
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <RotateCcw className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">30-Day Returns</span>
              </li>
              <li className="flex flex-col items-center gap-2 py-4 border border-hairline">
                <Sparkles className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">18K Gold Plated</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materialsCare}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shippingReturns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-ink hover:text-gold-deep border-b border-ink/30 hover:border-gold-deep pb-1 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
