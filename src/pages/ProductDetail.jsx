import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left group"
      >
        <span className="text-sm font-medium tracking-wide text-dark">{title}</span>
        <ChevronDown
          size={16}
          className={`text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out-expo ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center bg-cream min-h-screen">
        <h1 className="font-serif text-2xl text-dark mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="text-sm text-taupe hover:text-gold underline transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const nameId = `pd-name-${product.id}`;

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-taupe mb-6 md:mb-8">
          <Link to="/" className="hover:text-dark transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dark transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-dark capitalize">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible shrink-0">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors ${
                    activeImage === idx ? 'border-dark' : 'border-border hover:border-taupe-light'
                  }`}
                >
                  <img
                    data-strk-img-id={`pd-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pd-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[3/4] bg-cream-dark border border-border overflow-hidden">
              <img
                data-strk-img-id={`pd-main-${product.id}-${activeImage}`}
                data-strk-img={`[pd-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:py-4">
            <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-2 capitalize">
              {product.category}
            </p>
            <h1
              id={nameId}
              className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest text-dark mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} />
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-dark mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-taupe leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-taupe mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                      variant === v
                        ? 'border-dark bg-dark text-cream'
                        : 'border-border text-dark hover:border-taupe-light'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-taupe mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  className="px-3 py-2.5 hover:bg-cream-dark transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2.5 hover:bg-cream-dark transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                addItem(product, variant, quantity);
                setQuantity(1);
              }}
              className="w-full bg-gold text-cream py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-hover transition-colors duration-300 mb-6"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Trust mini icons */}
            <div className="flex flex-wrap gap-4 text-[11px] text-taupe mb-10">
              <span className="flex items-center gap-1.5">
                <Truck size={13} className="text-gold" />
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw size={13} className="text-gold" />
                30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={13} className="text-gold" />
                1-Year Warranty
              </span>
            </div>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <ul className="mt-3 space-y-1">
                <li>• 18K gold-plated finish</li>
                <li>• Hypoallergenic, nickel-free base</li>
                <li>• Designed in New York</li>
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                We offer complimentary worldwide shipping on all orders. Orders are processed 
                within 1–2 business days and delivered within 5–10 business days depending on 
                your location.
              </p>
              <p className="mt-2">
                Not completely in love? Return or exchange any unworn item within 30 days of 
                delivery for a full refund. Gift sets must be returned in original packaging.
              </p>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-2">
                Complete the Look
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
