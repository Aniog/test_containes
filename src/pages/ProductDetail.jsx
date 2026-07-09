import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(s => (
          <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? 'text-gold' : 'text-stone/30'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-sans text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-[0.15em] text-espresso">{title}</span>
        <ChevronDown
          size={14}
          className={`text-stone transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-espresso">Product not found</p>
        <Link to="/shop" className="font-sans text-xs uppercase tracking-[0.12em] text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Two image slots: primary and secondary
  const imageSlots = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, titleId: product.titleId, descId: product.descId },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 font-sans text-[11px] text-stone hover:text-espresso transition-colors">
            <ChevronLeft size={12} />
            Back
          </button>
          <span className="text-stone/30 text-xs">/</span>
          <Link to="/shop" className="font-sans text-[11px] text-stone hover:text-espresso transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-stone/30 text-xs">/</span>
          <span className="font-sans text-[11px] text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imageSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-espresso' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${slot.id}-thumb-${i}`}
                    data-strk-img={`[${slot.descId}] [${slot.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment relative">
              <img
                data-strk-img-id={imageSlots[activeImg].id}
                data-strk-img={`[${imageSlots[activeImg].descId}] [${imageSlots[activeImg].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col justify-start pt-2">
            {/* Hidden text for image queries */}
            <span id={product.titleId} className="sr-only">{product.name}</span>
            <span id={product.descId} className="sr-only">{product.description}</span>

            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-3 capitalize">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-espresso font-light leading-tight mb-3">
              {product.name}
            </h1>

            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-sans text-2xl font-medium text-espresso mb-5">
              {formatPrice(product.price)}
            </p>

            <p className="font-sans text-sm text-stone leading-relaxed mb-7">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-3">
                Tone: <span className="text-espresso capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-[0.1em] px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-espresso text-ivory border-espresso'
                        : 'bg-transparent text-stone border-stone/30 hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-stone/20 w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-espresso">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory font-sans text-xs uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors duration-200 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            <button className="w-full border border-stone/30 text-espresso font-sans text-xs uppercase tracking-[0.15em] py-3.5 hover:border-espresso transition-colors duration-200 mb-8">
              Buy It Now
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-stone/10 mb-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-stone">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.details} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-stone/10 pt-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-title-${p.id}`} className="font-serif text-sm uppercase tracking-[0.1em] text-espresso group-hover:text-gold transition-colors">
                  {p.name}
                </p>
                <p id={`related-desc-${p.id}`} className="font-sans text-[11px] text-stone mt-1">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
