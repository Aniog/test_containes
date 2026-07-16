import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest-xl uppercase font-medium text-text-primary">{title}</span>
        {open ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm tracking-wider uppercase hover:text-gold-light transition-colors">
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
    <main ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary/70">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-surface rounded overflow-hidden">
              <img
                data-strk-img-id={product.images[activeImage]?.id || product.images[0].id}
                data-strk-img={`[${product.id}-long-desc] [product-detail-name] ${product.name} gold jewelry`}
                data-strk-img-ratio={product.images[activeImage]?.ratio || '4x3'}
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt || product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-gold/90 text-base text-[10px] tracking-wider uppercase font-semibold px-3 py-1.5">
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
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded overflow-hidden border-2 transition-colors duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-border hover:border-gold/50'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`${product.name} gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 id="product-detail-name" className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wider uppercase text-text-primary font-light">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'} />
                ))}
              </div>
              <span className="text-xs text-text-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl sm:text-3xl font-serif text-gold mt-4">${product.price}</p>

            {/* Description */}
            <p id={`${product.id}-long-desc`} className="text-sm text-text-muted leading-relaxed mt-5 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-widest-xl uppercase font-medium text-text-primary mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-medium border rounded transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border text-text-muted hover:border-gold/50 hover:text-text-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest-xl uppercase font-medium text-text-primary mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-3 text-sm text-text-primary min-w-[48px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold hover:bg-gold-light text-base font-medium text-sm tracking-widest-xl uppercase py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon size={14} className="text-gold" />
                  <span className="text-[11px] text-text-muted tracking-wider uppercase">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-text-primary/80">Materials:</strong> {product.materials}</p>
                <p><strong className="text-text-primary/80">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 lg:mt-28">
          <h2 className="font-serif text-2xl sm:text-3xl text-text-primary font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="relative aspect-[3/4] bg-surface rounded overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`${p.name} ${p.category} gold jewelry`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-wider uppercase text-text-primary group-hover:text-gold transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-sm text-gold mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
