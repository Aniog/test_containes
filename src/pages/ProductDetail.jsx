import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
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
            size={13}
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
            stroke={i <= Math.round(rating) ? 'none' : '#C9A96E'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-ink-faint">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian">
          {title}
        </span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-ink-muted" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="font-sans text-sm text-ink-muted leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="py-16 md:py-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl font-light text-obsidian mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${p.titleId}`} className="font-serif text-sm uppercase tracking-widest text-obsidian group-hover:text-gold transition-colors">
                {p.name}
              </p>
              <p className="font-sans text-sm text-ink-muted mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const imgIds = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-name-${product.id}] fine gold jewelry` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-name-${product.id}] gold jewelry detail close-up` },
    { id: `pdp-alt2-${product.imgId}b`, query: `[pdp-name-${product.id}] jewelry worn on model` },
    { id: `pdp-alt3-${product.imgId2}b`, query: `[pdp-name-${product.id}] jewelry flat lay` },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-ink-faint">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-muted">{product.name}</span>
        </nav>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              <img
                data-strk-img-id={imgIds[activeImg].id}
                data-strk-img={imgIds[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1 font-semibold">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[10px] tracking-widest uppercase bg-obsidian text-ivory px-2 py-1 font-semibold">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest font-light text-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-light text-obsidian mb-3">
              ${product.price}
            </p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            <hr className="divider my-5" />

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-ink-muted leading-relaxed mb-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian font-semibold'
                        : 'border-sand text-ink-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-linen transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-linen transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="flex-1 bg-obsidian text-ivory font-sans text-xs tracking-[0.2em] uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-300"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                className="w-12 h-12 border border-sand flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Save to wishlist"
              >
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] text-ink-faint flex items-center gap-1">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-b border-sand">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-obsidian">Materials:</strong> {product.material}<br /><br />
                <strong className="text-obsidian">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
