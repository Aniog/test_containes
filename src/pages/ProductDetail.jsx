import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const images = [
    { id: product.imgId, altId: product.img2Id },
    { id: product.img2Id, altId: product.imgId },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 font-manrope text-xs text-muted hover:text-gold transition-colors duration-200"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-thumb-${i}-${product.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-main-${activeImg}-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Hidden text refs */}
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.shortDesc}</span>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl font-medium tracking-[0.12em] uppercase text-obsidian leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8 border-t border-linen pt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian mb-3">
                Tone: <span className="text-muted capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-[0.1em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-parchment'
                        : 'border-linen text-muted hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, qty)}
              className="w-full bg-obsidian text-parchment font-manrope text-xs tracking-[0.18em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-espresso transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            <button className="w-full border border-linen text-muted font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 pt-6 border-t border-linen flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-[0.1em] uppercase text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-1.5">·</span>
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

        {/* You may also like */}
        <div ref={relatedRef} className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian tracking-wide">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-manrope text-xs tracking-[0.12em] uppercase text-muted border-b border-muted pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group flex flex-col">
                <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-3">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span id={`related-${p.id}-title`} className="sr-only">{p.name}</span>
                  <span id={`related-${p.id}-desc`} className="sr-only">{p.shortDesc}</span>
                </div>
                <h3 className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-obsidian group-hover:text-gold transition-colors duration-200">
                  {p.name}
                </h3>
                <p className="font-manrope text-sm text-muted mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
