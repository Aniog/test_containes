import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-ink-muted" /> : <ChevronDown size={16} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-ink-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Simulate multiple gallery images using the same product
  const galleryImgIds = [
    { id: `${product.imgId}-g1`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.hoverImgId}-g2`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-g3`, query: `[${product.titleId}] jewelry worn on model` },
  ];

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImgIds.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden aspect-[3/4] bg-parchment">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`${galleryImgIds[activeThumb].id}-main`}
                data-strk-img={galleryImgIds[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-obsidian font-sans text-[10px] tracking-widest uppercase px-2 py-1">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={product.titleId} className="sr-only">{product.name}</span>
            <span id={product.descId} className="sr-only">{product.shortDescription}</span>

            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-obsidian font-light leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-obsidian mt-4 font-light">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-sans text-sm text-ink-muted mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="w-full h-px bg-linen my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Tone: <span className="text-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 capitalize ${
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
            <div className="mt-5">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink-muted hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm text-obsidian w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-ink-muted hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="mt-6 w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-200 font-medium"
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] text-ink-muted flex items-center gap-1">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-obsidian">Materials:</strong> {product.materials}
                <br /><br />
                <strong className="text-obsidian">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
                <br /><br />
                We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div ref={relatedRef} className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors border-b border-ink-muted hover:border-gold pb-0.5 hidden md:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span id={`related-${p.id}-title`} className="sr-only">{p.name}</span>
                <span id={`related-${p.id}-desc`} className="sr-only">{p.shortDescription}</span>
                <p className="font-serif text-sm tracking-widest uppercase text-obsidian mt-3 leading-tight">
                  {p.name}
                </p>
                <p className="font-sans text-sm text-obsidian mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
