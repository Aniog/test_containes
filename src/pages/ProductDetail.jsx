import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../data/CartContext';
import ProductCard from '../components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium tracking-[0.05em] uppercase text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-warm-gray" />
        ) : (
          <ChevronDown size={16} className="text-warm-gray" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-warm-gray leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const relatedProducts = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const thumbnails = [
    { id: product.imgId, query: `[pdp-title] [pdp-desc] ${product.image}` },
    { id: product.secondImgId, query: `[pdp-title] [pdp-desc] ${product.imageAlt} alternate view` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-warm-gray py-4 flex items-center gap-2">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 pb-16 md:pb-24">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-cream-dark overflow-hidden mb-3">
              {thumbnails.map((thumb, i) => (
                <img
                  key={thumb.id}
                  data-strk-img-id={thumb.id}
                  data-strk-img={thumb.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.imageAlt}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === i ? 'block' : 'hidden'
                  }`}
                />
              ))}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-cream-dark overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${thumb.id}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <span id="pdp-title" className="hidden">{product.name}</span>
            <span id="pdp-desc" className="hidden">{product.description}</span>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] uppercase text-charcoal mb-3">
              {product.name}
            </h1>

            <p className="text-lg font-medium text-charcoal mb-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="divider mb-6" />

            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-[0.1em] uppercase text-warm-gray font-medium mb-3 block">
                Tone
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-[0.1em] uppercase text-warm-gray font-medium mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-sm text-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full rounded-none mb-8">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust icons */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon size={14} className="text-gold" strokeWidth={1.5} />
                  <span className="text-xs text-warm-gray">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.longDescription}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
              <p><strong>Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="pb-16 md:pb-24 border-t border-border pt-12 md:pt-16">
            <div className="text-center mb-10">
              <h2 className="section-title text-xl md:text-2xl">You May Also Like</h2>
              <div className="hairline mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
