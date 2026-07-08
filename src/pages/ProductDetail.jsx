import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} className="text-ink-muted" /> : <ChevronDown size={14} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-manrope text-sm text-ink-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-manrope text-xs tracking-wide text-ink-muted hover:text-gold transition-colors duration-300"
        >
          <ArrowLeft size={13} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-cream overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={activeImg === 0 ? `pdp-main-${product.id}-a` : `pdp-alt-${product.id}-a`}
                data-strk-img={activeImg === 0
                  ? `[pdp-desc-${product.id}] [pdp-name-${product.id}]`
                  : `[pdp-name-${product.id}] gold jewelry worn model close up`
                }
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-20 aspect-square bg-cream overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === idx ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${idx + 1}`}
                    data-strk-img-id={idx === 0 ? `pdp-thumb1-${product.id}` : `pdp-thumb2-${product.id}`}
                    data-strk-img={idx === 0
                      ? `[pdp-name-${product.id}] gold jewelry`
                      : `[pdp-name-${product.id}] jewelry worn`
                    }
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-name-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.1em] text-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-linen'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian mb-5">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-ink-muted leading-relaxed mb-7 border-b border-linen pb-7"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants?.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-charcoal transition-colors duration-300 mb-3"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
            <button className="w-full border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-gold hover:text-obsidian transition-all duration-300">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-linen">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-wide text-ink-muted text-center">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-obsidian">Material:</strong> {product.material}</p>
                <p>To keep your Velmora piece looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="border-t border-linen pt-12 mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
