import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
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
            strokeWidth={1}
            color={i <= Math.round(rating) ? '#C9A96E' : '#E8DFD0'}
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
          />
        ))}
      </div>
      <span className="text-xs text-velmora-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-ink">{title}</span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-muted" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-muted" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-muted leading-relaxed animate-fade-in">
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
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-sand">
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-2">
          Complete the Look
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink tracking-wide">
          You May Also Like
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 id={`related-${product.titleId}`} className="font-serif text-sm font-medium tracking-[0.1em] uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors">
              {product.name}
            </h4>
            <p className="text-sm font-medium text-velmora-muted mt-0.5">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [slug, activeThumb]);

  useEffect(() => {
    setActiveThumb(0);
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-velmora-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-xs font-medium tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { imgId: `pdp-alt1-${product.imgId2}`, query: `[${product.titleId}] gold jewelry detail close up` },
    { imgId: `pdp-alt2-${product.imgId}b`, query: `[${product.titleId}] gold jewelry worn on model` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 md:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-velmora-sand">/</span>
          <Link to="/shop" className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <span className="text-velmora-sand">/</span>
          <span className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-subtle">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-velmora-linen flex-shrink-0 transition-all duration-200 ${
                    activeThumb === i ? 'ring-1 ring-velmora-gold' : 'ring-1 ring-transparent hover:ring-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
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
            <div className="flex-1 relative overflow-hidden bg-velmora-linen aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-medium tracking-[0.12em] uppercase text-velmora-ink leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-ink mt-4 mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p id={product.descId} className="text-sm text-velmora-muted leading-relaxed mb-7 border-b border-velmora-sand pb-7">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-ink mb-3">
                Finish: <span className="text-velmora-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-gold hover:bg-velmora-linen transition-colors border-r border-velmora-sand"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-gold hover:bg-velmora-linen transition-colors border-l border-velmora-sand"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                added
                  ? 'bg-velmora-stone text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t border-velmora-sand">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="text-[11px] text-velmora-subtle tracking-wide">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-ink font-medium">Materials:</strong> {product.material}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
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
