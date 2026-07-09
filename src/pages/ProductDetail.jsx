import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    setActiveImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [slug, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading-1 text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.longDescription || product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <main className="bg-surface-cream pt-20 md:pt-24" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="flex items-center gap-2 text-caption text-charcoal-muted">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-100 mb-3 overflow-hidden">
              {product.images[activeImage] && (
                <img
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`${product.images[activeImage].id}-detail`}
                  data-strk-img={`${product.name} ${product.category} gold jewelry product photo`}
                  data-strk-img-ratio={product.images[activeImage].ratio}
                  data-strk-img-width={product.images[activeImage].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-brand-100 overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-brand-300'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`${product.name} ${product.category} jewelry view`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-2">
              {product.category}
            </p>

            <h1 className="font-serif text-heading-1 md:text-display text-charcoal tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-brand-300'}
                  />
                ))}
              </div>
              <span className="text-caption text-charcoal-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-heading-2 text-charcoal mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-body text-charcoal-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 border font-sans text-caption uppercase tracking-wide transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-brand-300 text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-charcoal-muted hover:text-charcoal transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 py-2.5 font-sans text-body font-medium text-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-charcoal-muted hover:text-charcoal transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-xs mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-brand-200 mb-8">
              <div className="flex items-center gap-1.5 text-charcoal-muted">
                <Truck size={14} strokeWidth={1.5} />
                <span className="text-caption">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal-muted">
                <RotateCcw size={14} strokeWidth={1.5} />
                <span className="text-caption">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal-muted">
                <Shield size={14} strokeWidth={1.5} />
                <span className="text-caption">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-brand-200">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-brand-200">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal">
                      {acc.label}
                    </span>
                    {openAccordion === acc.key ? (
                      <ChevronUp size={16} className="text-charcoal-muted" />
                    ) : (
                      <ChevronDown size={16} className="text-charcoal-muted" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-body text-charcoal-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-surface-warm border-t border-brand-200">
          <div className="section-padding">
            <h2 className="font-serif text-heading-2 text-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(item => (
                <Link key={item.id} to={`/product/${item.slug}`} className="group">
                  <div className="aspect-[3/4] bg-brand-100 overflow-hidden mb-3">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      data-strk-img-id={`${item.id}-related`}
                      data-strk-img={`${item.name} ${item.category} gold jewelry`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <p className="font-serif text-sm tracking-wide uppercase text-charcoal group-hover:text-gold-dark transition-colors duration-300 text-center">
                    {item.name}
                  </p>
                  <p className="text-body text-charcoal font-medium text-center mt-0.5">
                    ${item.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
