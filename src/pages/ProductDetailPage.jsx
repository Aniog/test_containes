import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            fill={s <= Math.round(rating) ? '#c9a96e' : 'none'}
            className={s <= Math.round(rating) ? 'text-champagne' : 'text-champagne-light'}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-stone-warm">({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-obsidian/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone-warm" /> : <ChevronDown size={14} className="text-stone-warm" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone-warm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(slug, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setAdded(false);
    setQty(1);
    if (product) setSelectedVariant(product.variants[0]);
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-16">
        <p className="font-serif text-2xl text-obsidian">Product not found</p>
        <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-champagne border-b border-champagne pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const galleryImages = [
    { id: `pdp-main-img-${product.id}-a1`, imgId: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]`, ratio: '3x4', width: '800' },
    { id: `pdp-alt1-img-${product.id}-b2`, imgId: `pdp-alt1-img-${product.id}-b2`, query: `[${product.titleId}] gold jewelry worn model`, ratio: '3x4', width: '800' },
    { id: `pdp-alt2-img-${product.id}-c3`, imgId: `pdp-alt2-img-${product.id}-c3`, query: `[${product.titleId}] jewelry detail close up`, ratio: '3x4', width: '800' },
    { id: `pdp-alt3-img-${product.id}-d4`, imgId: `pdp-alt3-img-${product.id}-d4`, query: `[${product.titleId}] gold jewelry flat lay`, ratio: '3x4', width: '800' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-ivory pt-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone-warm hover:text-obsidian transition-colors"
        >
          <ArrowLeft size={13} /> Back
        </button>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        {/* Hidden text for image queries */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.subtitle}</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover bg-parchment"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-parchment aspect-[3/4]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={galleryImages[activeImg].imgId}
                data-strk-img={galleryImages[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5 lg:pt-4">
            {product.badge && (
              <span className="self-start bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2.5 py-1">
                {product.badge}
              </span>
            )}

            <div>
              <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-obsidian font-medium leading-tight">
                {product.name}
              </h1>
              <p className="font-sans text-sm text-stone-warm mt-1">{product.subtitle}</p>
            </div>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="font-serif text-3xl text-obsidian">${product.price}</p>

            <p className="font-sans text-sm text-stone-warm leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Finish: <span className="text-stone-warm font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-obsidian/20 text-obsidian hover:border-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-obsidian/20 w-fit">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone-warm hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="font-sans text-sm text-obsidian w-8 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-stone-warm hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase transition-colors ${
                added
                  ? 'bg-champagne text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-obsidian-soft'
              }`}
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-2">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
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

        {/* Related products */}
        <div ref={relatedRef} className="mt-24">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">You May Also Like</p>
            <h2 className="font-serif text-3xl text-obsidian font-light">Complete the Look</h2>
            <div className="w-10 h-px bg-champagne mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
