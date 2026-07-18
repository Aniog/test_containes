import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    content: (product) => product.longDescription,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (product) => (
      <div>
        <p className="mb-3">{product.care}</p>
        <ul className="list-disc list-inside space-y-1 text-velmora-muted">
          <li>18K Gold Plated Sterling Silver</li>
          <li>Hypoallergenic & Nickel-Free</li>
          <li>Tarnish Resistant</li>
          <li>Waterproof coating</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: () => (
      <div>
        <p className="mb-3">Free worldwide shipping on all orders.</p>
        <ul className="list-disc list-inside space-y-1 text-velmora-muted">
          <li>Standard shipping: 5-7 business days</li>
          <li>Express shipping: 2-3 business days</li>
          <li>30-day hassle-free returns</li>
          <li>Free return shipping label included</li>
        </ul>
      </div>
    ),
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addItem } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-4">
        <nav className="flex items-center gap-2 text-caption text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    'flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-all',
                    selectedImageIndex === index
                      ? 'border-velmora-gold'
                      : 'border-velmora-gold/10 hover:border-velmora-gold/30'
                  )}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${index}`}
                    data-strk-img={`[${product.titleId}] jewelry detail closeup`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square bg-velmora-warm-white overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main-${selectedImageIndex}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry product photo`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold text-caption uppercase tracking-wider px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-heading-1 md:text-display text-velmora-charcoal uppercase tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-heading-2 text-velmora-charcoal mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-muted/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-body-sm text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="divider mb-6" />

            {/* Description */}
            <p className="font-sans text-body text-velmora-muted leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Material tag */}
            <div className="inline-flex items-center gap-2 bg-velmora-warm-white px-4 py-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-velmora-gold" />
              <span className="font-sans text-caption uppercase tracking-wide text-velmora-charcoal">
                {product.material}
              </span>
            </div>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-charcoal mb-3 block">
                Tone: {selectedVariant}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 border font-sans text-caption uppercase tracking-wide transition-all',
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-cream'
                        : 'border-velmora-gold/20 text-velmora-charcoal hover:border-velmora-gold'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-charcoal mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-velmora-gold/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center font-sans text-body font-medium text-velmora-charcoal border-x border-velmora-gold/20">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Secondary actions */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-velmora-gold/10 text-velmora-muted hover:text-velmora-gold hover:border-velmora-gold/30 transition-all text-caption uppercase tracking-wide">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-velmora-gold/10 text-velmora-muted hover:text-velmora-gold hover:border-velmora-gold/30 transition-all text-caption uppercase tracking-wide">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-velmora-gold/10">
              <div className="text-center">
                <p className="font-sans text-caption uppercase tracking-wide text-velmora-gold">Free</p>
                <p className="font-sans text-caption text-velmora-muted">Shipping</p>
              </div>
              <div className="text-center">
                <p className="font-sans text-caption uppercase tracking-wide text-velmora-gold">30 Day</p>
                <p className="font-sans text-caption text-velmora-muted">Returns</p>
              </div>
              <div className="text-center">
                <p className="font-sans text-caption uppercase tracking-wide text-velmora-gold">18K</p>
                <p className="font-sans text-caption text-velmora-muted">Gold Plated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <div className="divider mb-8" />
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-velmora-gold/10">
              <button
                onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-sans text-body font-medium text-velmora-charcoal uppercase tracking-wide">
                  {item.title}
                </span>
                {activeAccordion === item.id ? (
                  <ChevronUp className="w-5 h-5 text-velmora-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-muted" />
                )}
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  activeAccordion === item.id ? 'max-h-[500px] pb-6' : 'max-h-0'
                )}
              >
                <div className="font-sans text-body text-velmora-muted leading-relaxed">
                  {typeof item.content === 'function' ? item.content(product) : item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-heading-2 text-velmora-charcoal">
              You May Also Like
            </h2>
            <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
