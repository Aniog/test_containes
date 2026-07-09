import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import products from './data-products.js';
import { useCart } from './cart-context.jsx';
import Bestsellers from './Bestsellers.jsx';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('details');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  useEffect(() => {
    if (!selectedVariant && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, selectedVariant]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-slate">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { id: 'details', label: 'Description', content: product.details },
    { id: 'care', label: 'Materials & Care', content: product.care },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-16 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-velmora-stone tracking-wider mb-8">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-sand mb-4 relative overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-${activeImg}`}
                data-strk-img={`[pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <span id={`pdp-name-${product.id}`} className="sr-only">{product.name}</span>

              {/* Arrows */}
              <button
                onClick={() => setActiveImg((i) => (i > 0 ? i - 1 : product.images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i < product.images.length - 1 ? i + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(idx)}
                  className={`w-16 h-20 bg-velmora-sand border-2 transition-colors ${
                    idx === activeImg ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase text-velmora-charcoal leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-2xl text-velmora-gold font-medium mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-none text-velmora-border'}`} />
              ))}
              <span className="text-sm text-velmora-stone ml-2">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-velmora-slate leading-relaxed text-sm mb-8">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase text-velmora-slate mb-3">Metal Tone</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                        selectedVariant === variant
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-border text-velmora-slate hover:border-velmora-charcoal'
                      }`}
                    >
                      {variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center text-velmora-slate hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-11 flex items-center justify-center text-velmora-slate hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-primary flex-1 gap-2">
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added!' : 'Add to Bag'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-velmora-slate hover:text-velmora-charcoal transition-colors"
                  >
                    {acc.label}
                    <span className="text-lg font-light">{openAccordion === acc.id ? '−' : '+'}</span>
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5 text-sm text-velmora-slate leading-relaxed animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-velmora-border mt-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <h3 className="font-serif text-2xl tracking-wide text-center mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 5)
              .map((p) => (
                <ProductMiniCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductMiniCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
        <img
          data-strk-img-id={`related-${product.id}`}
          data-strk-img={`[related-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`related-name-${product.id}`} className="sr-only">{product.name}</span>
      </div>
      <p className="font-serif text-[11px] tracking-[0.12em] uppercase text-velmora-charcoal mb-0.5">{product.name}</p>
      <p className="text-sm text-velmora-gold">${product.price}</p>
    </Link>
  );
}
