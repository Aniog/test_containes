import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ProductImage } from '@/components/product/ProductImage';
import Stars from '@/components/product/Stars';
import ProductCard from '@/components/product/ProductCard';
import Reveal from '@/components/Reveal';

const ANGLES = ['main', 'alt', 'detail', 'worn'];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-espresso/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-espresso">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-taupe">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [activeAngle, setActiveAngle] = useState('main');
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const related = useMemo(() => getRelatedProducts(product, 4), [product]);

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <p className="mt-3 text-sm text-taupe">
          This treasure may have sold out or moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-gold px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-taupe">
          <Link to="/" className="transition-colors hover:text-espresso">Home</Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-espresso">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] w-full overflow-hidden bg-ivory">
            <ProductImage
              product={product}
              angle={activeAngle}
              ratio="4x5"
              width={1000}
              className="h-full w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {ANGLES.map((angle) => (
              <button
                key={angle}
                type="button"
                onClick={() => setActiveAngle(angle)}
                aria-label={`View ${angle} image`}
                className={`aspect-square overflow-hidden border transition-all duration-300 ${
                  activeAngle === angle
                    ? 'border-gold opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <ProductImage
                  product={product}
                  angle={angle}
                  ratio="1x1"
                  width={240}
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          {product.isNew && (
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              New Arrival
            </p>
          )}
          <h1 className="mt-2 font-sans text-lg font-medium uppercase tracking-[0.18em] text-espresso md:text-2xl">
            {product.name}
          </h1>
          <p className="mt-2 font-serif text-xl italic text-taupe">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} />
            <span className="text-xs text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-3xl text-espresso">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <span className="text-base text-taupe line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-taupe">{product.description}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-espresso">
              Finish — <span className="text-taupe normal-case tracking-normal">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`flex items-center gap-2.5 border px-5 py-3 text-xs transition-all duration-300 ${
                    variant === v
                      ? 'border-espresso bg-espresso text-cream'
                      : 'border-espresso/20 text-espresso hover:border-espresso/50'
                  }`}
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full ${
                      v === 'Gold'
                        ? 'bg-gradient-to-br from-gold to-gold-deep'
                        : 'bg-gradient-to-br from-sand to-taupe'
                    }`}
                  />
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex gap-4">
            <div className="flex items-center border border-espresso/20">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-ivory"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="w-10 text-center text-sm font-medium text-espresso">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-full w-11 items-center justify-center text-espresso transition-colors hover:bg-ivory"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, variant, quantity)}
              className="flex-1 bg-gold py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Mini trust row */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-espresso/10 py-5">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: ShieldCheck, label: 'Hypoallergenic' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.15em] text-cocoa">{label}</span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-2">
            <Accordion title="Description" defaultOpen>
              <ul className="list-disc space-y-1.5 pl-5">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl font-light text-espresso md:text-4xl">
                You May Also <span className="italic">Like</span>
              </h2>
              <Link
                to="/shop"
                className="hidden text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:text-gold-deep md:block"
              >
                View All
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
