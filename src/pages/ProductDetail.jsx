import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const GOLD = '#C9A96E';
const EMPTY = '#E8E2D8';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            strokeWidth={1}
            style={{ fill: i <= Math.round(rating) ? GOLD : EMPTY, color: i <= Math.round(rating) ? GOLD : EMPTY }}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs font-semibold tracking-[0.1em] uppercase text-ink">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p id={product.titleId} className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-ink">
          <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-manrope text-sm font-medium text-ink mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [product.imgId, product.img2Id];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-[11px] text-muted hover:text-gold transition-colors">Home</Link>
          <span className="text-ghost text-[11px]">/</span>
          <Link to="/shop" className="font-manrope text-[11px] text-muted hover:text-gold transition-colors">Shop</Link>
          <span className="text-ghost text-[11px]">/</span>
          <span className="font-manrope text-[11px] text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen aspect-square md:aspect-[4/5]">
              <img
                data-strk-img-id={imgIds[activeImg]}
                data-strk-img={`[pdp-desc] [pdp-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {imgIds.map((id, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-linen border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-divider hover:border-muted'
                  }`}
                >
                  <img
                    data-strk-img-id={`${id}-thumb`}
                    data-strk-img={`[pdp-title] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[11px] font-medium tracking-[0.15em] uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id="pdp-title"
              className="font-cormorant text-3xl md:text-4xl font-medium tracking-[0.12em] uppercase text-ink leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-manrope text-2xl font-light text-ink mb-3">${product.price}</p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Divider */}
            <div className="w-full h-px bg-divider my-6" />

            {/* Short description */}
            <p id="pdp-desc" className="font-manrope text-sm text-muted leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[11px] font-semibold tracking-[0.1em] uppercase text-ink mb-3">
                Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian font-semibold'
                        : 'border-divider text-muted hover:border-gold hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-[11px] font-semibold tracking-[0.1em] uppercase text-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-manrope text-xs font-semibold tracking-[0.15em] uppercase py-4 transition-all duration-200 ${
                added
                  ? 'bg-stone text-cream'
                  : 'bg-obsidian text-cream hover:bg-charcoal'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[11px] text-muted flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-divider mt-8 mb-2" />

            {/* Accordions */}
            <Accordion title="Description">{product.description}</Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-divider mt-12 py-16 md:py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
