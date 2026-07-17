import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/product/ProductCard';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline border-velmora-light/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-body-sm uppercase tracking-[0.1em] text-velmora-charcoal font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-body-sm text-velmora-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <h1 className="font-serif text-heading-lg text-velmora-charcoal mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-secondary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-20">
      {/* Breadcrumb */}
      <div className="container-narrow py-5">
        <nav className="flex items-center gap-2 text-caption font-sans text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="container-narrow pb-16 md:pb-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
                    activeImage === index
                      ? 'border-velmora-gold'
                      : 'border-velmora-light/30 hover:border-velmora-light'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${index}`}
                    data-strk-img={`[${product.id}-title] jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={activeImage === 0 ? product.imgId : product.imgIdAlt}
                data-strk-img={`[${product.id}-desc] [${product.id}-title] fine jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-400"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center py-4 md:py-8">
            {/* Text refs */}
            <span id={`${product.id}-title`} className="sr-only">{product.name}</span>
            <span id={`${product.id}-desc`} className="sr-only">{product.description}</span>

            {product.badge && (
              <span className="inline-block self-start bg-velmora-charcoal text-velmora-white text-[10px] font-sans uppercase tracking-[0.15em] px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-velmora-charcoal text-heading-md md:text-heading-lg">
              {product.name}
            </h1>

            <p className="font-serif text-heading-sm text-velmora-gold mt-2">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-body-sm text-velmora-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-body text-velmora-gray mt-5 leading-relaxed">
              {product.description}
            </p>

            <div className="hairline-divider my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-caption uppercase tracking-[0.1em] text-velmora-muted mb-3">
                Tone: <span className="text-velmora-charcoal font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-caption uppercase tracking-[0.1em] font-sans transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-velmora-white'
                        : 'border border-velmora-light/40 text-velmora-gray hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-caption uppercase tracking-[0.1em] text-velmora-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-light/40">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-body font-sans text-velmora-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full py-5">
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <span className="text-caption text-velmora-muted font-sans">Free Shipping</span>
              <span className="text-velmora-light/40">|</span>
              <span className="text-caption text-velmora-muted font-sans">30-Day Returns</span>
              <span className="text-velmora-light/40">|</span>
              <span className="text-caption text-velmora-muted font-sans">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p className="mb-3">{product.shipping}</p>
                <p>{product.returns}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-velmora-cream border-t border-hairline border-velmora-light/30">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-5">
                <span className="w-10 h-hairline bg-velmora-gold" />
                <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
                  Discover More
                </span>
                <span className="w-10 h-hairline bg-velmora-gold" />
              </div>
              <h2 className="heading-section text-velmora-charcoal">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
