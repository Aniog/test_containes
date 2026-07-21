import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, PRODUCTS, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/product/StarRating';
import ProductCard from '@/components/product/ProductCard';
import { useReveal } from '@/hooks/useReveal';

const ACCORDIONS = [
  {
    id: 'description',
    title: 'Description',
    content: (p) => p.details,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: () =>
      'Plated in a generous layer of 18K gold over recycled sterling silver. Hypoallergenic and nickel-free. To keep your piece luminous, avoid perfume and chlorine, wipe gently with the Velmora polishing cloth, and store in the pouch provided.',
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: () =>
      'Free worldwide shipping on all orders — express upgrades at checkout. Not the one? Return or exchange within 30 days, no questions asked. Every order arrives in our signature linen gift box.',
  },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-bronze transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`grid transition-all duration-400 ease-out-soft ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-taupe">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const imageRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, imageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCategory = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
    const rest = PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category);
    return [...sameCategory, ...rest].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 pt-20 text-center">
        <h1 className="font-serif text-4xl font-light text-ink">Piece not found</h1>
        <p className="text-sm text-taupe">This piece may have sold out or moved.</p>
        <Link
          to="/shop"
          className="bg-bronze px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-bronze-deep"
        >
          Back to the Collection
        </Link>
      </div>
    );
  }

  const gallery = [
    {
      key: 'main',
      imgId: `gallery-${product.imgIds.main}`,
      query: `[${product.textIds.tagline}] [${product.textIds.name}] demi-fine gold jewelry product photograph on warm neutral background, editorial studio light`,
      alt: `${product.name} — studio view`,
    },
    {
      key: 'alt',
      imgId: `gallery-${product.imgIds.alt}`,
      query: `[${product.textIds.tagline}] [${product.textIds.name}] gold jewelry worn by elegant woman, warm lifestyle photography, close-up on skin`,
      alt: `${product.name} — worn`,
    },
    {
      key: 'detail',
      imgId: `gallery-${product.imgIds.detail}`,
      query: `[${product.textIds.tagline}] [${product.textIds.name}] macro detail of gold jewelry texture and craftsmanship, shallow depth of field, warm light`,
      alt: `${product.name} — detail`,
    },
  ];

  const handleAddToCart = () => {
    addItem(product.id, variant, quantity);
  };

  return (
    <div ref={imageRef} className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-14">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-taupe" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-bronze">Home</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
          <Link to="/shop" className="transition-colors hover:text-bronze">Shop</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
          <Link
            to={`/shop?category=${product.category}`}
            className="capitalize transition-colors hover:text-bronze"
          >
            {product.category}
          </Link>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden bg-sand">
              <img
                key={gallery[activeImage].key}
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img={gallery[activeImage].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={gallery[activeImage].alt}
                className="aspect-[4/5] w-full animate-fade-in object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4" role="tablist" aria-label="Product images">
              {gallery.map((img, index) => (
                <button
                  key={img.key}
                  type="button"
                  role="tab"
                  aria-selected={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden bg-sand transition-all duration-300 ${
                    activeImage === index
                      ? 'ring-1 ring-bronze ring-offset-2 ring-offset-ivory'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div ref={revealRef} className="flex flex-col">
            <p className="reveal text-[11px] uppercase tracking-[0.35em] text-bronze">
              {product.bestseller ? 'Bestseller' : product.isNew ? 'New Arrival' : 'The Collection'}
            </p>
            <h1
              id={product.textIds.name}
              className="reveal mt-3 font-serif text-3xl font-light uppercase leading-tight tracking-[0.08em] text-ink md:text-5xl"
            >
              {product.name}
            </h1>
            <p id={product.textIds.tagline} className="reveal mt-2 font-serif text-lg italic text-taupe">
              {product.tagline}
            </p>

            <div className="reveal mt-4">
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>

            <div className="reveal mt-5 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-ink">{formatPrice(product.price)}</span>
              {product.compareAt && (
                <span className="text-sm text-taupe line-through">{formatPrice(product.compareAt)}</span>
              )}
            </div>

            <p id={product.textIds.desc} className="reveal mt-6 text-sm leading-relaxed text-taupe md:text-base">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="reveal mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink">
                Finish — <span className="capitalize text-taupe">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3" role="radiogroup" aria-label="Finish">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="radio"
                    aria-checked={variant === v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                      variant === v
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-hairline text-cocoa hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="reveal mt-8 flex gap-4">
              <div className="flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-full w-11 items-center justify-center text-ink transition-colors hover:text-bronze"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-full w-11 items-center justify-center text-ink transition-colors hover:text-bronze"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-bronze py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-bronze-deep"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Micro trust row */}
            <ul className="reveal mt-7 grid grid-cols-3 gap-3 border-y border-hairline py-5">
              {[
                { Icon: Truck, label: 'Free shipping' },
                { Icon: RotateCcw, label: '30-day returns' },
                { Icon: ShieldCheck, label: '2-year warranty' },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="h-4 w-4 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-taupe">{label}</span>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="reveal mt-2 border-t border-hairline">
              {ACCORDIONS.map((section, i) => (
                <Accordion key={section.id} title={section.title} defaultOpen={i === 0}>
                  {section.content(product)}
                </Accordion>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-hairline pt-14 md:mt-28 md:pt-20">
          <div className="reveal flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Complete the Look</p>
              <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden border-b border-ink/30 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:border-bronze hover:text-bronze md:block"
            >
              View All
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <div key={p.id} className="reveal">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
