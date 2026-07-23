import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={i <= Math.round(rating)
              ? { fill: 'rgb(201,169,110)', color: 'rgb(201,169,110)' }
              : { fill: 'rgb(232,224,212)', color: 'rgb(232,224,212)' }
            }
          />
        ))}
      </div>
      <span className="font-sans text-xs" style={{ color: 'rgb(92,74,58)' }}>{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold">{title}</span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-umber" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-umber" />}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-sans text-sm text-umber leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== current.id).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-parchment border-t border-stone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl text-dusk font-light mb-10 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="aspect-[3/4] overflow-hidden bg-ivory mb-4">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`related-title-${product.id}`} className="font-serif text-xs uppercase tracking-widest text-dusk hover:text-gold transition-colors mb-1">
                  {product.name}
                </h3>
                <p id={`related-desc-${product.id}`} className="sr-only">{product.description}</p>
                <p className="font-sans text-sm font-semibold text-dusk">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    console.log('[PDP] Added to cart:', product.name, selectedVariant, quantity);
  };

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-alt-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry detail close up`, ratio: '3x4' },
    { id: `pdp-lifestyle-${product.imgId}`, query: `[pdp-title-${product.id}] jewelry worn on model`, ratio: '3x4' },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-6">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-umber hover:text-gold transition-colors uppercase tracking-widest">
            <ArrowLeft size={12} strokeWidth={2} />
            Shop
          </Link>
          <span className="text-stone">/</span>
          <span className="font-sans text-xs text-dusk uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={images[activeThumb].id}
                data-strk-img={images[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block bg-gold text-ivory font-sans text-[10px] uppercase tracking-widest px-3 py-1 font-semibold mb-4 self-start">
                {product.badge}
              </span>
            )}

            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-dusk font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-5">
              <span className="font-sans text-2xl font-semibold text-dusk">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="w-12 h-px bg-gold mb-6" />

            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-umber leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold mb-3">
                Tone: <span className="text-umber capitalize font-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-widest font-medium transition-all duration-200 capitalize ${
                      selectedVariant === v
                        ? 'bg-dusk text-ivory'
                        : 'border border-stone text-umber hover:border-dusk hover:text-dusk'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-stone w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-umber hover:text-dusk transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-dusk border-x border-stone">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-umber hover:text-dusk transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-ivory py-4 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors duration-300 mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-dusk text-dusk py-4 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-dusk hover:text-ivory transition-colors duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-stone">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-xs text-umber flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts current={product} />
    </div>
  );
}
