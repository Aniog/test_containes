import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold-muted">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.14em] text-charcoal">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-stone-warm flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-stone-warm flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-inter text-sm text-charcoal leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function Stars({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={12}
            fill={i <= Math.round(rating) ? '#B8935A' : 'none'}
            stroke={i <= Math.round(rating) ? 'none' : '#C4B5A5'}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-stone-warm">{rating} ({count} reviews)</span>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [related.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl font-light text-stone-warm">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-inter text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-warmwhite transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { id: `${product.imgId}-t0`, queryId: `pdp-main-title-${product.id}`, descId: `pdp-main-desc-${product.id}` },
    { id: `${product.img2Id}-t1`, queryId: `pdp-main-title-${product.id}`, descId: `pdp-main-desc-${product.id}` },
    { id: `${product.imgId}-t2`, queryId: `pdp-main-title-${product.id}`, descId: `pdp-main-desc-${product.id}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    console.log('[PDP] Added to cart:', product.name, selectedVariant, quantity);
  };

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-inter text-[10px] uppercase tracking-[0.12em] text-stone-warm hover:text-gold transition-colors">
            <ArrowLeft size={10} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-stone-light text-[10px]">/</span>
          <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-charcoal">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${thumb.id}-thumb`}
                    data-strk-img={`[${thumb.descId}] [${thumb.queryId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-gold-muted/20" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={`${thumbImages[activeThumb].id}-main`}
                data-strk-img={`[pdp-main-desc-${product.id}] [pdp-main-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-main-title-${product.id}`} className="sr-only">{product.name}</span>
            <span id={`pdp-main-desc-${product.id}`} className="sr-only">{product.description}</span>

            <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink font-light leading-tight">
              {product.name}
            </h1>

            <div className="mt-3">
              <Stars rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="mt-4">
              <span className="font-cormorant text-3xl text-ink">${product.price}</span>
            </div>

            <div className="w-full h-px bg-gold-muted my-6" />

            <p className="font-inter text-sm text-charcoal leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-stone-warm mb-3">
                Tone: <span className="text-charcoal capitalize">{selectedVariant}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-[10px] uppercase tracking-[0.12em] px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-gold border-gold text-warmwhite'
                        : 'border-gold-muted text-stone-warm hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-stone-warm mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-gold-muted w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone-warm hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={1.5} />
                </button>
                <span className="font-inter text-sm text-charcoal w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone-warm hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-warmwhite font-inter text-[11px] uppercase tracking-[0.16em] py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="mt-3 w-full border border-gold-muted text-charcoal font-inter text-[11px] uppercase tracking-[0.16em] py-4 hover:border-gold hover:text-gold transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex items-center gap-6 flex-wrap">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] text-stone-warm flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-gold-muted">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 space-y-1">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-warmwhite py-16 md:py-20 mt-8 border-t border-gold-muted">
          <div ref={relatedRef} className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                Complete the Look
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide">
                You May Also Like
              </h2>
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
