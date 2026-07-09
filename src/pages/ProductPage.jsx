import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={12} className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'} />
        ))}
      </div>
      <span className="font-sans text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-muted" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm font-light text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="border-t border-linen py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <article key={product.id} className="group">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addItem(product)}
                    className="w-full bg-obsidian text-parchment font-sans text-[10px] font-medium uppercase tracking-widest py-3 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={11} strokeWidth={1.5} />
                    Quick Add
                  </button>
                </div>
              </div>
              <Link to={`/product/${product.slug}`}>
                <h3 id={`related-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p id={`related-desc-${product.id}`} className="font-sans text-xs text-muted mt-1">{product.shortDescription}</p>
              <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveThumb(0);
    setQuantity(1);
    setSelectedVariant('gold');
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-alt-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn editorial` },
    { id: `pdp-detail-${product.imgId}`, query: `[pdp-title-${product.id}] jewelry detail close up` },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-[11px] text-whisper hover:text-gold transition-colors uppercase tracking-widest">Home</Link>
          <span className="text-whisper text-xs">/</span>
          <Link to="/shop" className="font-sans text-[11px] text-whisper hover:text-gold transition-colors uppercase tracking-widest">Shop</Link>
          <span className="text-whisper text-xs">/</span>
          <span className="font-sans text-[11px] text-muted uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`relative flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${thumb.id}`}
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
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-linen">
              <img
                data-strk-img-id={thumbImages[activeThumb].id}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                id={`pdp-main-img-${product.id}`}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Hidden text for image queries */}
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.map(tag => (
                <span key={tag} className="font-sans text-[9px] font-medium uppercase tracking-widest bg-linen text-muted px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-ink font-light leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <div className="mt-5 mb-6">
              <span className="font-sans text-2xl font-medium text-ink">${product.price}</span>
              <span className="font-sans text-xs text-whisper ml-2">Free shipping worldwide</span>
            </div>

            {/* Short description */}
            <p className="font-sans text-sm font-light text-muted leading-relaxed mb-8 border-t border-linen pt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink mb-3">
                Tone: <span className="text-muted capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-[11px] font-medium uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-parchment'
                        : 'border-linen text-muted hover:border-muted'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <ChevronUp size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-obsidian text-parchment font-sans text-[11px] font-medium uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-espresso transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border border-linen text-muted font-sans text-[11px] font-medium uppercase tracking-widest py-4 hover:border-obsidian hover:text-ink transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-linen grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Free Shipping', sub: 'Worldwide' },
                { label: '30-Day Returns', sub: 'Hassle-free' },
                { label: '18K Gold', sub: 'Hypoallergenic' },
              ].map(item => (
                <div key={item.label}>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-ink">{item.label}</p>
                  <p className="font-sans text-[10px] text-whisper mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-1">·</span>
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
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
