import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const accordionId = `accordion-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="border-t border-velmora-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-trigger`}
      >
        <span className="font-sans text-sm font-semibold tracking-product uppercase text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-muted" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-muted" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div
          id={`${accordionId}-content`}
          role="region"
          aria-labelledby={`${accordionId}-trigger`}
          className="pb-4"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  // Reset state when product changes
  useEffect(() => {
    setSelectedTone(product?.tone?.[0] || 'Gold');
    setQuantity(1);
    setActiveImage(0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-xl text-velmora-muted">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-velmora-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-velmora-charcoal" aria-current="page">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3x4] overflow-hidden bg-velmora-divider/30 mb-3">
              <img
                data-strk-img-id={`${product.imgId}-main-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2" role="tablist" aria-label="Product image gallery">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                  role="tab"
                  aria-selected={activeImage === idx}
                  aria-label={`View ${idx + 1} of ${product.images.length}`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-velmora-charcoal"
            >
              {product.name}
            </h1>

            <p
              id={product.descId}
              className="mt-2 font-serif text-base text-velmora-muted italic"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5" aria-label={`Rating: ${product.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'fill-velmora-divider text-velmora-divider'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-sans font-medium text-velmora-charcoal">
              ${product.price}
            </p>

            <div className="w-full h-px bg-velmora-divider my-6" aria-hidden="true" />

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal mb-3">
                Tone: {selectedTone}
              </p>
              <div className="flex gap-2" role="radiogroup" aria-label="Select tone">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs font-sans font-semibold tracking-product uppercase border transition-colors duration-200 ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-divider text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                    role="radio"
                    aria-checked={selectedTone === tone}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-sans text-velmora-charcoal w-8 text-center" aria-live="polite" aria-label={`Quantity: ${quantity}`}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold-hover transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              Add to Bag — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p className="font-sans text-sm text-velmora-muted leading-relaxed">
                  The {product.name} is a stunning piece from our demi-fine collection.
                  {product.description}. Each piece is carefully crafted with attention to detail,
                  ensuring a luxurious feel at an accessible price point. Perfect for everyday wear
                  or as a thoughtful gift.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <div className="font-sans text-sm text-velmora-muted leading-relaxed space-y-2">
                  <p><strong className="text-velmora-charcoal">Material:</strong> {product.material} over brass base</p>
                  <p><strong className="text-velmora-charcoal">Stones:</strong> Premium cubic zirconia crystals</p>
                  <p><strong className="text-velmora-charcoal">Hypoallergenic:</strong> Yes — nickel and lead free</p>
                  <p><strong className="text-velmora-charcoal">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Gently wipe with a soft cloth after wear.</p>
                </div>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <div className="font-sans text-sm text-velmora-muted leading-relaxed space-y-2">
                  <p><strong className="text-velmora-charcoal">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express available at checkout.</p>
                  <p><strong className="text-velmora-charcoal">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Gift wrapping is non-refundable.</p>
                  <p><strong className="text-velmora-charcoal">Packaging:</strong> Arrives in our signature Velmora box, ready for gifting.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-velmora-divider">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal font-light tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group" aria-label={`${rp.name} — $${rp.price}`}>
                <div className="aspect-[3x4] overflow-hidden bg-velmora-divider/30 mb-3">
                  <img
                    data-strk-img-id={`${rp.imgId}-related`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-product text-velmora-charcoal">
                  {rp.name}
                </h3>
                <p className="text-sm font-sans text-velmora-muted mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
