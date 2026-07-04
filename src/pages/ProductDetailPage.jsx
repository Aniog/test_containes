import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={i <= Math.round(rating)
              ? { fill: '#C9A96E', color: '#C9A96E' }
              : { fill: 'none', color: '#D4C9B5' }
            }
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-sand/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark font-medium">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-velmora-sand/30">
      <div className="mb-10">
        <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-2">
          You May Also Like
        </p>
        <h3 className="font-cormorant text-3xl font-light text-velmora-text-dark">
          Complete the Look
        </h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-velmora-cream mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4
              id={`related-${product.titleId}`}
              className="font-cormorant text-sm uppercase tracking-wider text-velmora-text-dark group-hover:text-velmora-gold transition-colors duration-200"
            >
              {product.name}
            </h4>
            <p className="font-manrope text-sm text-velmora-text-mid mt-0.5">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImgIds = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry` },
    { id: `pdp-alt-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn model` },
    { id: `pdp-detail-${product.id}-c3d4`, query: `[pdp-title-${product.id}] jewelry detail close up` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-linen pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-text-dark uppercase tracking-wider">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {thumbImgIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id}
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={`pdp-active-${product.id}-${activeThumb}`}
                data-strk-img={thumbImgIds[activeThumb]?.query || `[pdp-title-${product.id}] gold jewelry`}
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
            {/* Badge */}
            {product.badge && (
              <span className="inline-block self-start bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-[0.12em] text-velmora-text-dark font-medium leading-tight mb-2"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-text-dark font-light mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-6 border-b border-velmora-sand/30 pb-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark mb-3 font-medium">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wider uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/50 text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark mb-3 font-medium">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-stone/40 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-text-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs tracking-widest uppercase py-4 transition-all duration-300 font-medium ${
                added
                  ? 'bg-velmora-stone text-velmora-text-light'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-4 py-4 border-t border-b border-velmora-sand/20">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-wider uppercase text-velmora-text-muted">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and chemicals. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery: 3–7 business days. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.
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
