import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice, cn } from '../lib/utils';
import ProductCard from '../components/products/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream-300/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-body font-medium text-charcoal uppercase tracking-wide">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-taupe" />
        ) : (
          <ChevronDown className="w-4 h-4 text-taupe" />
        )}
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();

  const product = products.find((p) => p.slug === slug);

  // Load images when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setSelectedVariant('Gold');
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [product, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
        <div className="text-center">
          <h1 className="font-serif text-headline text-charcoal mb-4">Product Not Found</h1>
          <p className="font-sans text-body text-taupe mb-6">The product you're looking for doesn't exist.</p>
          <Link
            to="/shop"
            className="inline-flex px-6 py-3 bg-charcoal text-cream-100 font-sans text-caption uppercase tracking-ultra-wide rounded"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-100 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <nav className="font-sans text-caption text-taupe" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-cream-200 rounded-lg overflow-hidden">
              <img
                data-strk-img-id={`${product.id}-detail-${selectedImage}`}
                data-strk-img={`[${product.id}-detail-title] [${product.id}-detail-desc] elegant gold jewelry close-up product detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden border-2 transition-all duration-200',
                    selectedImage === i ? 'border-gold' : 'border-cream-300/50 hover:border-cream-400'
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.id}-detail-title] jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 font-sans text-caption uppercase tracking-ultra-wide rounded mb-4">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1
              id={`${product.id}-detail-title`}
              className="font-serif text-headline md:text-display text-charcoal tracking-ultra-wide mb-2"
            >
              {product.name}
            </h1>

            {/* Hidden description for image interpolation */}
            <span id={`${product.id}-detail-desc`} className="hidden">
              {product.shortDescription}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3.5 h-3.5',
                      i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-cream-300'
                    )}
                  />
                ))}
              </div>
              <span className="font-sans text-caption text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-section text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-body text-charcoal-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-3">
                Tone: <span className="font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-5 py-2 rounded-full font-sans text-caption uppercase tracking-ultra-wide transition-all duration-200',
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream-100'
                        : 'bg-transparent border border-cream-400 text-charcoal hover:border-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-caption uppercase tracking-ultra-wide text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-400 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-body text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart + Wishlist */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-charcoal hover:bg-charcoal-light text-cream-100 font-sans text-caption uppercase tracking-ultra-wide transition-colors duration-300 rounded"
              >
                Add to Bag — {formatPrice(product.price * quantity)}
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={cn(
                  'p-4 border rounded transition-all duration-200',
                  wishlist ? 'border-gold bg-gold-50 text-gold' : 'border-cream-400 text-charcoal/60 hover:border-charcoal hover:text-charcoal'
                )}
                aria-label={wishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={cn('w-5 h-5', wishlist && 'fill-gold')} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-cream-300/50">
              <div className="flex items-center gap-2 text-taupe">
                <Truck className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-sans text-caption">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-sans text-caption">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <Shield className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-sans text-caption">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p className="font-sans text-body text-charcoal-muted leading-relaxed">
                  {product.description}
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  {Object.entries(product.details).map(([key, value]) => (
                    <li key={key} className="font-sans text-body text-charcoal-muted">
                      <span className="font-medium text-charcoal capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                      {value}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="font-sans text-body text-charcoal-muted space-y-2">
                  <p><strong className="text-charcoal">Free shipping</strong> on all orders worldwide.</p>
                  <p><strong className="text-charcoal">Standard delivery:</strong> 5–10 business days.</p>
                  <p><strong className="text-charcoal">Express delivery:</strong> 2–4 business days (+$12).</p>
                  <p><strong className="text-charcoal">Returns:</strong> 30-day hassle-free returns. Items must be unworn with original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-cream-300/40 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="font-serif text-headline md:text-section text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
