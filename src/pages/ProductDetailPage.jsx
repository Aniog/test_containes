import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            style={i <= Math.round(rating)
              ? { color: '#C9A96E', fill: '#C9A96E' }
              : { color: '#D4C9B0', fill: 'none' }
            }
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-text-muted">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand/40">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest-md font-semibold text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-sand/30">
      <div className="mb-10">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3
              id={`related-${product.titleId}`}
              className="font-cormorant text-sm uppercase tracking-widest-sm font-medium text-velmora-obsidian group-hover:text-velmora-gold transition-colors duration-200"
            >
              {product.name}
            </h3>
            <p id={`related-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
              {product.subtitle}
            </p>
            <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-1.5">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: `pdp-alt-${product.imgId2}`, query: `[${product.titleId}] gold jewelry detail` },
    { imgId: `pdp-worn-${product.imgId}`, query: `[${product.titleId}] worn on model` },
  ];

  return (
    <div className="min-h-screen bg-velmora-linen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-velmora-sand/60 text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-text-muted capitalize">
            {product.category}
          </span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative overflow-hidden bg-velmora-cream flex-shrink-0 transition-all duration-200 ${
                    activeThumb === i
                      ? 'ring-1 ring-velmora-gold'
                      : 'ring-1 ring-transparent hover:ring-velmora-sand'
                  }`}
                  style={{ width: '64px', height: '80px' }}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${thumb.imgId}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-velmora-obsidian text-velmora-text-light font-manrope text-[10px] uppercase tracking-widest-sm px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-xs uppercase tracking-widest-md text-velmora-text-muted mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest-sm font-medium text-velmora-obsidian leading-tight mb-2"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-text-muted mb-4"
            >
              {product.subtitle}
            </p>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="my-5 border-t border-velmora-sand/30" />

            <p className="font-cormorant text-3xl font-light text-velmora-obsidian mb-6">
              ${product.price}
            </p>

            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-muted mb-3">
                  Finish: <span className="text-velmora-obsidian font-medium">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs uppercase tracking-widest-sm px-5 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                          : 'border-velmora-sand text-velmora-text-mid hover:border-velmora-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-sand/60 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs uppercase tracking-widest-md font-semibold py-4 transition-all duration-300 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-text-light hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-velmora-text-muted uppercase tracking-widest-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <ul className="space-y-2">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-velmora-gold mt-1 flex-shrink-0">—</span>
                      <span className="font-manrope text-sm text-velmora-text-mid">{d}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-3">
                  <strong className="text-velmora-obsidian font-medium">Materials:</strong> {product.materials}
                </p>
                <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed">
                  <strong className="text-velmora-obsidian font-medium">Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3 font-manrope text-sm text-velmora-text-mid leading-relaxed">
                  <p>Free worldwide shipping on all orders. Standard delivery 5–10 business days.</p>
                  <p>Express shipping available at checkout. Orders ship within 1–2 business days.</p>
                  <p>30-day hassle-free returns on unworn items in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
