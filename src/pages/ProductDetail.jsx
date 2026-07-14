import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed font-sans">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold uppercase tracking-widest hover:text-gold-dark transition-colors">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main ref={containerRef} className="bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-linen rounded-lg overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-${product.id}-gallery-main`}
                data-strk-img={`[${product.id}-search]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'%3E%3Crect fill='%23F0EDE6' width='600' height='800'/%3E%3Ctext x='300' y='400' text-anchor='middle' fill='%23C9A84C' font-size='18' font-family='serif'%3EVelmora%3C/text%3E%3C/svg%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-charcoal text-ivory text-[10px] uppercase tracking-widest-xl px-4 py-1.5 font-sans">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'aspect-square bg-linen rounded cursor-pointer border-2 transition-all duration-300',
                    i === 1 ? 'border-gold' : 'border-transparent hover:border-border'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.id}-search] view angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23F0EDE6' width='200' height='200'/%3E%3Ctext x='100' y='105' text-anchor='middle' fill='%23C9A84C' font-size='10' font-family='serif'%3E{i}%3C/text%3E%3C/svg%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-widest-xl uppercase mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
            </div>

            <p className="font-serif text-3xl text-gold mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-muted leading-relaxed font-sans mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3">
                Tone: <span className="text-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-widest font-sans transition-all duration-300 rounded',
                      selectedVariant === v
                        ? 'bg-gold text-charcoal'
                        : 'border border-border text-muted hover:border-gold hover:text-gold'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm text-ink font-medium font-sans min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="primary"
              size="full"
              className="rounded mb-4"
              onClick={() => addItem(product, selectedVariant, quantity)}
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <p className="text-center text-[11px] text-muted font-sans mb-10">
              Free shipping worldwide · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                <p><strong>Returns:</strong> {product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
