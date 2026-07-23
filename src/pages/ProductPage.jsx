import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Minus, Plus, ChevronRight, Truck, RotateCcw, Gem } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PLACEHOLDER_IMG, formatPrice, getProduct, getRelated } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useReveal } from '@/hooks/useReveal';
import Stars from '@/components/ui/Stars';
import Accordion from '@/components/product/Accordion';
import ProductCard from '@/components/product/ProductCard';

const galleryViews = [
  { suffix: 'g1', label: 'still life on dark background' },
  { suffix: 'g2', label: 'worn by model close-up warm light' },
  { suffix: 'g3', label: 'macro detail texture' },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem, openCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const pageRef = useRef(null);
  useReveal([id]);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, pageRef.current), [id]);

  useEffect(() => {
    setActiveImage(0);
    setVariant('Gold');
    setQuantity(1);
  }, [id]);

  const related = useMemo(() => (product ? getRelated(product.id, 4) : []), [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAddToCart = () => {
    addItem(product.id, variant, quantity);
    openCart();
  };

  return (
    <div ref={pageRef} className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-10 md:pt-32">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.18em] text-sand">
        <Link to="/" className="transition-colors hover:text-gold">Home</Link>
        <ChevronRight className="h-3 w-3 text-umber" />
        <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
        <ChevronRight className="h-3 w-3 text-umber" />
        <span className="text-gold">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="relative aspect-square overflow-hidden border border-umber bg-onyx">
            {product.badge && (
              <span className="absolute left-4 top-4 z-10 border border-gold/30 bg-noir/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
                {product.badge}
              </span>
            )}
            {galleryViews.map((view, i) => (
              <img
                key={view.suffix}
                data-strk-img-id={`pdp-${product.id}-${view.suffix}`}
                data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] gold jewelry ${view.label}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src={PLACEHOLDER_IMG}
                alt={`${product.name} — view ${i + 1}`}
                aria-hidden={activeImage !== i}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  activeImage === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {galleryViews.map((view, i) => (
              <button
                key={view.suffix}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`View ${i + 1}`}
                className={`aspect-square overflow-hidden border bg-onyx transition-all duration-300 ${
                  activeImage === i
                    ? 'border-gold'
                    : 'border-umber opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${view.suffix}`}
                  data-strk-img={`[pdp-${product.id}-tagline] [pdp-${product.id}-name] gold jewelry ${view.label}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src={PLACEHOLDER_IMG}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:py-4">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.26em] text-gold">
            {product.category}
          </p>
          <h1
            id={`pdp-${product.id}-name`}
            className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.14em] text-ivory md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={`pdp-${product.id}-tagline`} className="mt-2 font-sans text-sm text-sand">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2.5">
            <Stars rating={product.rating} />
            <span className="font-sans text-xs text-sand">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-gold">{formatPrice(product.price)}</p>

          <p className="mt-6 font-sans text-sm leading-relaxed text-sand">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-ivory">
              Finish — <span className="text-gold">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-6 py-2.5 font-sans text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    variant === v
                      ? 'border-gold bg-gold text-noir'
                      : 'border-umber text-sand hover:border-gold/60 hover:text-ivory'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center justify-between border border-umber sm:justify-start">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3.5 text-sand transition-colors hover:text-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-sans text-sm text-ivory">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                className="p-3.5 text-sand transition-colors hover:text-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-gold py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.24em] text-noir transition-colors duration-300 hover:bg-goldlight"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-umber py-5">
            {[
              { Icon: Truck, label: 'Free Shipping' },
              { Icon: RotateCcw, label: '30-Day Returns' },
              { Icon: Gem, label: '18K Gold Plated' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-sand">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Accordion title="Description" defaultOpen>
              {product.description} Each piece arrives in our signature gift box with a
              soft pouch and polishing cloth.
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">
              Complimentary worldwide shipping on every order, dispatched within 1–2
              business days in protective gift packaging. Express options available at
              checkout. Not quite right? Returns and exchanges are free within 30 days —
              no questions asked.
            </Accordion>
          </div>
        </div>
      </div>

      <section className="mt-20 md:mt-28">
        <div className="reveal flex items-end justify-between">
          <div>
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.26em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-ivory md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden border-b border-gold/50 pb-1 text-[11px] font-sans uppercase tracking-[0.22em] text-gold transition-colors hover:text-goldlight md:block"
          >
            View All
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
