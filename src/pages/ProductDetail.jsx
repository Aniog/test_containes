import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink group-hover:text-gold transition-colors duration-300">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-cream aspect-[3/4] block">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`related-${product.descId}`} className="sr-only">{product.description}</span>
      </Link>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 className="font-serif text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300">
            {product.name}
          </h4>
        </Link>
        <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
        <button
          onClick={() => addItem(product)}
          className="mt-2 font-sans text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 flex items-center gap-1"
        >
          <ShoppingBag size={11} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant('gold');
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-300">
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

  const thumbnails = [
    { imgId: `pdp-thumb-0-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry product` },
    { imgId: `pdp-thumb-1-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn model` },
    { imgId: `pdp-thumb-2-${product.imgId}b`, query: `[pdp-title-${product.id}] gold jewelry detail close-up` },
    { imgId: `pdp-thumb-3-${product.imgId2}b`, query: `[pdp-title-${product.id}] gold jewelry lifestyle flat lay` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-subtle hover:text-gold transition-colors">Home</Link>
          <span className="text-subtle text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-subtle hover:text-gold transition-colors">Shop</Link>
          <span className="text-subtle text-xs">/</span>
          <span className="font-sans text-xs text-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-300 ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 font-sans text-[9px] tracking-widest uppercase bg-gold text-ivory px-2 py-1">
                  {product.badge}
                </span>
              )}
              <img
                data-strk-img-id={`pdp-main-${activeImg}-${product.imgId}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry ${activeImg > 0 ? 'worn model' : 'product editorial'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2 capitalize">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-ink font-light leading-tight mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              <p className="font-serif text-3xl font-light text-ink">${product.price}</p>
            </div>

            <div className="w-full h-px bg-linen mb-6" />

            {/* Description */}
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                  Tone: <span className="text-muted capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-ivory'
                          : 'border-linen text-muted hover:border-gold hover:text-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold hover:bg-cream transition-colors duration-300"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-ink border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold hover:bg-cream transition-colors duration-300"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-ink text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-subtle flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-linen">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.details} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">You May Also Like</h2>
              <Link
                to="/shop"
                className="hidden md:flex font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 items-center gap-2 group"
              >
                View All
                <span className="w-8 h-px bg-muted group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map(p => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
