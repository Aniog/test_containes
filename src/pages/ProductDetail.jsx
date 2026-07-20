import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal tracking-wide">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-surface overflow-hidden mb-3">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}-e1f2g3`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-surface overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h4i5j6`}
                    data-strk-img={`[pdp-${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-xl text-charcoal font-light">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 text-muted leading-relaxed text-sm"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-border text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">
                  Care: Avoid contact with water, perfume, and lotions. Store in the included
                  pouch when not wearing. Gently polish with a soft cloth to maintain shine.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Standard delivery 5-7 business days.
                  Express delivery 2-3 business days (additional fee applies).
                </p>
                <p className="mt-2">
                  30-day hassle-free returns. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} sectionId="related" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
