import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-charcoal-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-charcoal-50 overflow-hidden">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={product.images[activeImage].id}
                data-strk-img={`[${product.id}-detail-name] [${product.id}-detail-desc] gold jewelry closeup elegant`}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-24 bg-charcoal-50 overflow-hidden transition-all duration-300 ${
                      idx === activeImage ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={`[${product.id}-detail-name] gold jewelry ${img.alt}`}
                      data-strk-img-ratio={img.ratio}
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="lg:py-4">
            {/* Hidden text for image search */}
            <span id={`${product.id}-detail-name`} className="hidden">{product.name}</span>
            <span id={`${product.id}-detail-desc`} className="hidden">{product.description}</span>

            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-sans text-xs tracking-ultra-wide uppercase mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl text-charcoal uppercase tracking-ultra-wide font-light mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-charcoal-200'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl text-charcoal">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-charcoal-300 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="font-sans text-charcoal-500 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="hairline-divider mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 font-sans text-sm tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-white'
                        : 'border border-charcoal-200 text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-400 hover:text-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-400 hover:text-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button onClick={handleAddToCart} className="w-full btn-primary py-4 text-base mb-6">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust icons */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-charcoal-100">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-5 h-5 text-gold mx-auto mb-1" />
                  <span className="font-sans text-[10px] tracking-wider uppercase text-charcoal-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-charcoal-100">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-sm tracking-wider uppercase text-charcoal">
                      {acc.title}
                    </span>
                    {expandedAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-400" />
                    )}
                  </button>
                  {expandedAccordion === acc.id && (
                    <div className="pb-5 animate-fade-in">
                      <p className="font-sans text-sm text-charcoal-500 leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-cream-200 border-t border-charcoal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading text-2xl md:text-3xl">You May Also Like</h2>
              <div className="w-16 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
