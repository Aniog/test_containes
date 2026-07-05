import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ShoppingBag, Heart, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-[0.1em] uppercase text-charcoal-900">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warm-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm text-warm-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl">Product not found</h2>
          <Link to="/shop" className="mt-4 inline-block text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-3">
            <div className="aspect-square bg-warm-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-warm-300" strokeWidth={1} />
              </div>
              <div
                className="absolute inset-0"
                data-strk-bg-id={`product-main-${product.id}`}
                data-strk-bg={`${product.name} gold jewelry product photography warm background`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="900"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-warm-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-warm-300" strokeWidth={1} />
                  </div>
                  <div
                    className="absolute inset-0"
                    data-strk-bg-id={`product-thumb-${product.id}-${i}`}
                    data-strk-bg={`${product.name} gold jewelry detail shot angle ${i}`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-28 md:self-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-warm-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider">{product.name}</h1>
            <p className="mt-3 text-xl font-medium">${product.price}</p>
            <p className="mt-5 text-sm text-warm-600 leading-relaxed">{product.description}</p>

            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs tracking-[0.15em] uppercase text-warm-500 mb-2">Tone</p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-warm-300 text-charcoal-900 hover:border-charcoal-900'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <p className="text-xs tracking-[0.15em] uppercase text-warm-500 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors ${
                  added
                    ? 'bg-gold-500 text-charcoal-950'
                    : 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button className="w-12 h-12 border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders over $50. Orders are processed within 1-2 business days 
                  and shipped via tracked courier. We offer 30-day hassle-free returns on unworn items in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-warm-100 relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-warm-300" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/10 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider truncate">{p.name}</h3>
                <p className="text-sm mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
