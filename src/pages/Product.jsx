import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Heart, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { findProduct, relatedProducts, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/cn';

const ACCORDIONS = [
  {
    key: 'description',
    title: 'Description',
    body: (p) => (
      <>
        <p>{p.description}</p>
        <p className="mt-4">
          Designed in our small atelier and made in considered batches, each
          piece arrives nestled in a cream gift box, ribbon-tied and ready for
          giving — or for keeping.
        </p>
      </>
    ),
  },
  {
    key: 'materials',
    title: 'Materials & Care',
    body: (p) => (
      <>
        <ul className="space-y-2">
          {p.materials.map((m) => (
            <li key={m}>· {m}</li>
          ))}
          <li>· Hypoallergenic. Nickel & lead free.</li>
        </ul>
        <p className="mt-5">
          Wipe gently with a soft cloth after wear. Avoid perfume, lotion, and
          chlorine. Store in the dust pouch provided to keep the gold finish
          luminous.
        </p>
      </>
    ),
  },
  {
    key: 'shipping',
    title: 'Shipping & Returns',
    body: () => (
      <>
        <p>
          Complimentary worldwide shipping on every order. Express options
          available at checkout. Most orders dispatch within 1–2 business days.
        </p>
        <p className="mt-4">
          We offer a relaxed 30-day return window, no questions asked. Pieces
          must return unworn, in original packaging.
        </p>
      </>
    ),
  },
];

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = findProduct(id);
  const containerRef = useRef(null);

  const titleId = product ? `pdp-${product.id}-title` : 'pdp-title';
  const descId = product ? `pdp-${product.id}-desc` : 'pdp-desc';

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold');
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState('description');
  const [activeImg, setActiveImg] = useState(0);

  const { addItem } = useCart();

  const galleryImages = useMemo(() => {
    if (!product) return [];
    const baseSubject = `${product.category} gold jewelry`;
    return [
      {
        imgId: `pdp-${product.id}-shot-1`,
        query: `gold ${product.category} luxury fine jewelry studio close up editorial warm light demi fine`,
      },
      {
        imgId: `pdp-${product.id}-shot-2`,
        query: `woman wearing gold ${product.category} model editorial lifestyle warm light jewelry`,
      },
      {
        imgId: `pdp-${product.id}-shot-3`,
        query: `macro gold jewelry detail texture sparkle close up ${baseSubject} elegant`,
      },
      {
        imgId: `pdp-${product.id}-shot-4`,
        query: `gold jewelry flat lay editorial styling cream neutral background ${product.category} aesthetic`,
      },
    ];
  }, [product]);

  const related = useMemo(() => (product ? relatedProducts(product.id, 4) : []), [product]);

  useEffect(() => {
    if (!product) return;
    if (!containerRef.current) return;
    const fid = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(fid);
  }, [product, activeImg]);

  useEffect(() => {
    if (product) {
      setTone(product.tones?.[0] || 'Gold');
      setQty(1);
      setActiveImg(0);
    }
  }, [product?.id]); // eslint-disable-line

  if (!product) {
    return (
      <div className="mx-auto max-w-[1200px] px-6 py-32 text-center md:px-10">
        <p className="font-serif text-3xl italic text-ink">
          We can't find that piece.
        </p>
        <p className="mt-4 text-sm text-mocha">
          It may have been retired or moved. Return to the collection to keep
          looking.
        </p>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="mt-8 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-cream"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 md:px-10 md:pb-28">
        {/* Breadcrumb */}
        <nav className="mb-8 text-[11px] uppercase tracking-[0.25em] text-mocha">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="grid grid-cols-[80px_1fr] gap-4 md:gap-6">
            {/* Thumbs */}
            <div className="flex flex-col gap-3">
              {galleryImages.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    'relative aspect-square w-full overflow-hidden bg-ivory transition-all',
                    activeImg === i
                      ? 'ring-1 ring-ink'
                      : 'opacity-70 hover:opacity-100'
                  )}
                >
                  <img
                    alt=""
                    data-strk-img-id={g.imgId + '-thumb'}
                    data-strk-img={g.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
              {galleryImages.map((g, i) => (
                <img
                  key={i}
                  alt={product.name}
                  data-strk-img-id={g.imgId}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pl-4 lg:pt-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl font-light uppercase tracking-[0.18em] text-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <StarRating value={product.rating} size={14} />
              <span className="text-[11px] uppercase tracking-[0.25em] text-mocha">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p id={descId} className="mt-6 max-w-md text-base leading-relaxed text-mocha">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink">
                Tone — <span className="text-mocha">{tone}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {(product.tones || ['Gold']).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.28em] transition-all',
                      tone === t
                        ? 'border-ink bg-ink text-cream'
                        : 'border-hairline text-ink hover:border-ink'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + add */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  className="px-4 py-3 text-mocha hover:text-ink"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="min-w-10 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  className="px-4 py-3 text-mocha hover:text-ink"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, { tone, qty })}
                className="flex flex-1 items-center justify-center gap-3 bg-champagne px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ink transition-colors hover:bg-champagne-deep"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
              <button
                type="button"
                aria-label="Save to wishlist"
                className="inline-flex items-center justify-center border border-hairline px-4 py-4 text-mocha hover:border-ink hover:text-ink"
              >
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick perks */}
            <ul className="mt-8 grid grid-cols-1 gap-3 border-y border-hairline py-5 sm:grid-cols-3">
              <li className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink">
                <Truck size={14} strokeWidth={1.5} className="text-champagne-deep" /> Free Shipping
              </li>
              <li className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink">
                <RotateCcw size={14} strokeWidth={1.5} className="text-champagne-deep" /> 30-Day Returns
              </li>
              <li className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink">
                <Sparkles size={14} strokeWidth={1.5} className="text-champagne-deep" /> 18K Gold Plated
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-6">
              {ACCORDIONS.map((a) => {
                const open = openAcc === a.key;
                return (
                  <div key={a.key} className="border-b border-hairline">
                    <button
                      type="button"
                      onClick={() => setOpenAcc(open ? '' : a.key)}
                      className="flex w-full items-center justify-between py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-[12px] uppercase tracking-[0.3em] text-ink">
                        {a.title}
                      </span>
                      <ChevronDown
                        size={16}
                        strokeWidth={1.5}
                        className={cn(
                          'text-mocha transition-transform duration-300',
                          open && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid overflow-hidden text-sm leading-relaxed text-mocha transition-all duration-500 ease-out',
                        open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="min-h-0">{a.body(product)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 border-t border-hairline pt-16 md:mt-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-serif text-3xl font-light text-ink md:text-4xl">
              You may also love
            </h2>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-[0.3em] text-ink underline-offset-8 hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
