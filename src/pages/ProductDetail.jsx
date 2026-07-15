import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-widest text-text-primary hover:text-gold transition-colors"
      >
        {title}
        <ChevronDown
          className={cn('w-4 h-4 transition-transform duration-300', open && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ excludeId }) {
  const related = products.filter((p) => p.id !== excludeId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="mt-16 lg:mt-24">
      <h3 className="font-serif text-2xl text-text-primary mb-8">You May Also Like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {related.map((product) => {
          const img = product.images[0];
          return (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[4/5] bg-hairline overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={`related-${img.id}`}
                  data-strk-img={`[related-${product.id}-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4
                id={`related-${product.id}-title`}
                className="font-serif text-sm uppercase tracking-widest-plus text-text-primary mt-3 group-hover:text-gold transition-colors"
              >
                {product.name}
              </h4>
              <p className="font-sans text-sm text-text-secondary mt-1">${product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('');
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || 'gold');
      setQty(1);
      setActiveImage(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="max-w-content mx-auto px-6 lg:px-12 py-32 text-center">
        <h2 className="font-serif text-2xl text-text-primary">Product Not Found</h2>
        <Link to="/shop" className="inline-block mt-4 text-gold hover:text-gold-hover font-sans text-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-hairline overflow-hidden relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`pd-main-${product.images[activeImage].id}`}
                data-strk-img={`[pd-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 bg-hairline overflow-hidden border-2 transition-colors',
                    activeImage === idx ? 'border-gold' : 'border-transparent'
                  )}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    data-strk-img-id={`pd-thumb-${img.id}`}
                    data-strk-img={`[pd-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-6">
            <h1
              id="pd-title"
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest-plus text-text-primary"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={14} />
              <span className="font-sans text-xs text-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="font-sans text-xl font-medium text-text-primary mt-4">
              ${product.price}
            </p>
            <p className="font-sans text-sm text-text-secondary mt-5 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <span className="font-sans text-xs uppercase tracking-widest text-text-primary">
                  Tone
                </span>
                <div className="flex gap-3 mt-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        'px-5 py-2 border font-sans text-xs uppercase tracking-wider transition-colors',
                        selectedVariant === v
                          ? 'border-gold bg-gold text-white'
                          : 'border-hairline text-text-secondary hover:border-gold'
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs uppercase tracking-widest text-text-primary">
                Quantity
              </span>
              <div className="flex items-center border border-hairline w-max mt-2">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-3 font-sans text-sm text-text-primary min-w-[2rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, qty)}
              className="w-full mt-8 bg-gold text-white font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold-hover transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $50. Orders are processed within 1–2 business days and typically arrive within 5–10 business days depending on your location. We offer 30-day hassle-free returns on all unworn items in original packaging.
                </p>
              </Accordion>
              <div className="border-b border-hairline" />
            </div>
          </div>
        </div>

        <RelatedProducts excludeId={product.id} />
      </div>
    </div>
  );
}
