import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-wider uppercase text-cream">{title}</span>
        {open ? <ChevronUp size={16} className="text-cream-muted" /> : <ChevronDown size={16} className="text-cream-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-cream-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-cream mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-gold-outline text-xs">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      <div className="section-padding max-w-[1440px] mx-auto py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-cream-dim">
          <Link to="/" className="hover:text-cream transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-cream transition-colors">Collection</Link>
          <span className="mx-2">/</span>
          <span className="text-cream-muted">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-surface-2 rounded-sm overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id={`${product.images[activeImage].id}-main-k1l2m3`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry product`}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width={product.images[activeImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-gold text-base text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-divider'
                  }`}
                >
                  <div className="w-full h-full bg-surface-2 flex items-center justify-center">
                    <span className="text-[9px] text-cream-dim/40 font-serif uppercase">Velmora</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-cream mb-3" id={product.titleId}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.round(product.rating) ? 'text-gold' : 'text-cream-dim'}
                    strokeWidth={i < Math.round(product.rating) ? 0 : 1}
                  />
                ))}
              </div>
              <span className="text-sm text-cream-muted">{product.rating}</span>
              <span className="text-sm text-cream-dim">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-gold mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-cream-muted leading-relaxed mb-8" id={product.descId}>
              {product.description}
            </p>

            <div className="hairline-divider mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-ultra-wide uppercase text-cream-muted mb-3">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-wider uppercase rounded-sm transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-gold text-base'
                        : 'border border-divider text-cream-muted hover:border-gold/50 hover:text-cream'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-ultra-wide uppercase text-cream-muted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-divider rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-cream-muted hover:text-cream transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-12 flex items-center justify-center text-sm text-cream border-x border-divider">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-cream-muted hover:text-cream transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-gold w-full text-xs py-4 ${added ? 'bg-gold-light' : ''}`}
            >
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-6 text-cream-dim">
              <div className="flex items-center gap-1.5">
                <Truck size={13} />
                <span className="text-[11px]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw size={13} />
                <span className="text-[11px]">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={13} />
                <span className="text-[11px]">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-cream font-normal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-cream font-normal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <div className="hairline-divider mb-14" />
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Complete the Look</p>
            <h2 className="section-title text-3xl md:text-4xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
