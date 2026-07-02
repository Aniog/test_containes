import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRow({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            fill={i < Math.floor(rating) ? '#C9A96E' : 'none'}
            stroke={i < Math.floor(rating) ? 'none' : '#D4CFC6'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-velmora-ash">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-mist/40">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-ash flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-ash flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="font-sans text-sm text-velmora-ash leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="py-20 md:py-24 border-t border-velmora-mist/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-obsidian font-light mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3">
                <h3
                  id={`related-${product.titleId}`}
                  className="font-serif text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold transition-colors"
                >
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-velmora-obsidian mt-1">${product.price}</p>
              </div>
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
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry` },
    { id: `pdp-alt1-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry worn model close up` },
    { id: `pdp-alt2-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry detail texture` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-velmora-ash hover:text-velmora-gold transition-colors">
            <ArrowLeft size={12} strokeWidth={2} />
            Back to Shop
          </Link>
          <span className="text-velmora-mist text-xs">/</span>
          <span className="font-sans text-xs text-velmora-ash uppercase tracking-wider">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id}
                    data-strk-img={thumb.query}
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
            <div className="flex-1 relative overflow-hidden bg-velmora-cream aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
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
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
              {product.category}
            </p>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian font-light leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRow rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="mt-5">
              <span className="font-serif text-3xl text-velmora-obsidian">${product.price}</span>
            </div>

            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-velmora-ash leading-relaxed mt-5 max-w-sm"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-ash">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-warm-white'
                        : 'border-velmora-mist text-velmora-ash hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-mist w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-ash hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={2} />
                </button>
                <span className="font-sans text-sm text-velmora-obsidian w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-velmora-ash hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-5 hover:bg-velmora-gold-light transition-all duration-300 font-medium"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="mt-5 flex items-center gap-6 flex-wrap">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] text-velmora-ash tracking-wide flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery: 3–7 business days. Returns accepted within 30 days of delivery for unworn items in original packaging.
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
