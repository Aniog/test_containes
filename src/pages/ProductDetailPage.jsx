import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--velmora-border-light)]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest uppercase text-[var(--velmora-text)]">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-[var(--velmora-text-secondary)]" /> : <ChevronDown className="w-4 h-4 text-[var(--velmora-text-secondary)]" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--velmora-text-secondary)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(p => p.id !== productId && p.category === product?.category).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
    setAddedToCart(false);
  }, [productId]);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h2 className="serif-heading text-3xl text-[var(--velmora-text)] mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Hidden text elements for image queries */}
            <span id="product-detail-main-desc" className="sr-only">{product.description}</span>
            {product.images.map((img, idx) => (
              <span key={idx} id={`product-thumb-${idx}-desc`} className="sr-only">{img.alt}</span>
            ))}
            <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-detail-main`}
                data-strk-img={`[${product.id}-name] [product-detail-main-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-[var(--velmora-bg-secondary)] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[var(--velmora-gold)]' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.id}-name] [product-thumb-${idx}-desc]`}
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

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[var(--velmora-gold)] text-white text-[10px] tracking-widest uppercase mb-4">
                {product.badge}
              </span>
            )}
            <h1 id={`${product.id}-name`} className="product-name text-2xl md:text-3xl text-[var(--velmora-text)] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--velmora-gold)] text-[var(--velmora-gold)]' : 'text-[var(--velmora-border)]'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-secondary)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-2xl text-[var(--velmora-text)] mb-6">${product.price.toFixed(2)}</p>

            <p className="text-sm text-[var(--velmora-text-secondary)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)] hover:border-[var(--velmora-text)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--velmora-border)] w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mb-4 transition-all ${
                addedToCart ? 'bg-green-600' : ''
              }`}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="hairline-divider my-6" />

            {/* Accordions */}
            <div>
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Designed for everyday wear with lasting beauty.</p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <p>18K gold plated over hypoallergenic brass base. Nickel-free and lead-free.</p>
                <p className="mt-2">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-2xl md:text-3xl text-[var(--velmora-text)] text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
