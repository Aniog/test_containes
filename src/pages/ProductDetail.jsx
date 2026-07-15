import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, generateStars } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest font-medium text-charcoal">{title}</span>
        {open ? <ChevronUp size={16} className="text-stone-400" /> : <ChevronDown size={16} className="text-stone-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-stone-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [productId, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const stars = generateStars(product.rating);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-page py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="container-page pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                data-strk-img={`${product.name} ${product.description} luxury gold jewelry close up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === index ? 'border-gold' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${index}`}
                    data-strk-img={`${product.name} ${index === 0 ? 'front view' : 'worn on model'} gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-widest font-sans mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="text-product-name text-2xl md:text-3xl text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(stars.full)].map((_, i) => (
                  <Star key={`full-${i}`} size={14} className="fill-gold-light text-gold-light" />
                ))}
                {[...Array(stars.empty)].map((_, i) => (
                  <Star key={`empty-${i}`} size={14} className="text-stone-300" />
                ))}
              </div>
              <span className="text-sm text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-3 block">
                Tone: {selectedVariant}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm border rounded-full transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-stone-600 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-stone-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-stone-500 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-3 text-sm font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-stone-500 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-center py-4 text-base"
            >
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-200">
              <div className="text-center">
                <Truck size={20} className="mx-auto text-gold-muted mb-2" />
                <p className="text-xs text-stone-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={20} className="mx-auto text-gold-muted mb-2" />
                <p className="text-xs text-stone-500">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={20} className="mx-auto text-gold-muted mb-2" />
                <p className="text-xs text-stone-500">1 Year Warranty</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                <p>We offer 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-stone-200">
        <div className="container-page section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-2xl md:text-4xl text-charcoal">
              You May Also Like
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relProduct) => (
              <Link
                key={relProduct.id}
                to={`/product/${relProduct.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-stone-100 rounded overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${relProduct.id}`}
                    data-strk-img={`${relProduct.name} ${relProduct.description} gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-product-name text-xs text-charcoal group-hover:text-gold transition-colors">
                  {relProduct.name}
                </h3>
                <p className="text-sm font-medium text-charcoal mt-1">
                  {formatPrice(relProduct.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
