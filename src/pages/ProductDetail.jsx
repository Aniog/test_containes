import { useEffect, useRef, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProduct, getRelated } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPriceWithCents } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function StarRow({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5 text-champagne">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-champagne' : ''}`}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="text-xs text-mute tracking-wide">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  );
}

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
        <span className="text-xs uppercase tracking-[0.3em] text-ink">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-ink transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          strokeWidth={1.4}
        />
      </button>
      {open && (
        <div className="pb-6 text-sm text-ink-soft leading-relaxed animate-fade">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const containerRef = useRef(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [variant, setVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (!product) return undefined;
    setActiveImageIdx(0);
    setVariant(product.variants?.[0] || 'Gold');
    setQty(1);
    return undefined;
  }, [product]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product?.id, activeImageIdx]);

  if (!product) return <Navigate to="/shop" replace />;

  const related = getRelated(product.id, 4);
  const titleId = `pdp-${product.id}-title`;
  const tagId = `pdp-${product.id}-tagline`;

  const onAdd = () => {
    setAdding(true);
    addItem(product, { variant, qty });
    setTimeout(() => setAdding(false), 600);
  };

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-20 md:pb-28">
        {/* Breadcrumbs */}
        <nav className="text-xs tracking-[0.2em] uppercase text-mute mb-8">
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[96px_1fr] gap-4 md:gap-5">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 md:gap-4 order-2 md:order-1">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-[3/4] bg-bone overflow-hidden transition-all ${
                    activeImageIdx === idx
                      ? 'ring-1 ring-ink'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={img.id}
                    data-strk-img={`[${tagId}] [${titleId}] gold demi fine jewelry detail editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="order-1 md:order-2 relative aspect-[3/4] bg-bone overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={product.images[activeImageIdx].id}
                data-strk-img={`[${tagId}] [${titleId}] ${product.tagline} editorial close up gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover animate-fade"
                key={`${product.id}-${activeImageIdx}`}
                loading="eager"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-4 lg:pt-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-champagne mb-3">
              {product.material}
            </p>
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl tracking-[0.18em] uppercase text-ink"
            >
              {product.name}
            </h1>
            <p id={tagId} className="mt-3 text-sm text-mute">
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-5">
              <span className="font-serif text-2xl text-ink">
                {formatPriceWithCents(product.price)}
              </span>
              <span className="w-px h-5 bg-hairline" />
              <StarRow rating={product.rating} reviews={product.reviews} />
            </div>

            <p className="mt-8 text-base text-ink-soft leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-soft mb-3">
                Tone — <span className="text-ink">{variant}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => {
                  const selected = variant === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2.5 rounded-full text-xs tracking-[0.25em] uppercase border transition-all ${
                        selected
                          ? 'bg-ink text-cream border-ink'
                          : 'bg-transparent text-ink border-hairline hover:border-ink'
                      }`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-soft mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream-deep transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                </button>
                <span className="w-12 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream-deep transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={onAdd}
                disabled={adding}
                className="flex-1 bg-champagne text-cream hover:bg-champagne-deep disabled:opacity-70 py-4 text-xs tracking-[0.3em] uppercase transition-colors"
              >
                {adding ? 'Added to bag ✓' : 'Add to Cart'}
              </button>
              <button
                type="button"
                aria-label="Save to wishlist"
                className="w-14 h-14 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
              >
                <Heart className="w-4 h-4" strokeWidth={1.4} />
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-xs text-ink-soft">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-champagne" strokeWidth={1.4} />
                Free shipping over $60
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw
                  className="w-4 h-4 text-champagne"
                  strokeWidth={1.4}
                />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <Sparkles
                  className="w-4 h-4 text-champagne"
                  strokeWidth={1.4}
                />
                18K gold plated
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck
                  className="w-4 h-4 text-champagne"
                  strokeWidth={1.4}
                />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">
                  <strong className="text-ink">Materials.</strong> {product.materials}
                </p>
                <p>
                  <strong className="text-ink">Care.</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream-deep py-20 md:py-28 border-t border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif font-light text-3xl md:text-4xl text-ink">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-ink-soft link-underline hover:text-ink"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
