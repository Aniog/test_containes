import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

const accordions = [
  {
    id: 'description',
    label: 'Description',
    content: null, // filled from product
  },
  {
    id: 'materials',
    label: 'Materials & Care',
    content: `All Velmora pieces are crafted with 18K gold plating over sterling silver or brass. To keep your jewelry looking its best:\n\n• Remove before swimming, showering, or exercising\n• Store in the provided pouch or box\n• Clean gently with a soft, dry cloth\n• Avoid contact with perfume and lotions`,
  },
  {
    id: 'shipping',
    label: 'Shipping & Returns',
    content: `Free worldwide shipping on all orders.\n\nOrders are processed within 1–2 business days. Estimated delivery:\n• US: 3–5 business days\n• International: 7–14 business days\n\nWe offer free 30-day returns on all unworn items in original packaging. Simply contact us to initiate a return.`,
  },
];

function Accordion({ label, content, isOpen, onToggle }) {
  return (
    <div className="border-t border-stone-light">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm uppercase tracking-[0.1em] text-espresso">{label}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-stone transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ease-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-sans text-sm text-stone leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] ?? 'Gold Tone');
      setActiveThumb(0);
      setQuantity(1);
      setAdded(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeThumb]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-espresso mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-[0.12em] text-espresso border-b border-espresso pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, img2Id: null, label: 'Main view', query: `[${product.descId}] [${product.titleId}]` },
    { imgId: `pdp-alt1-${product.img2Id}`, img2Id: null, label: 'Alternate view', query: `[${product.titleId}] gold jewelry worn model editorial` },
    { imgId: `pdp-alt2-${product.imgId}-c`, img2Id: null, label: 'Detail view', query: `[${product.descId}] close up detail gold jewelry` },
    { imgId: `pdp-alt3-${product.img2Id}-d`, img2Id: null, label: 'Lifestyle view', query: `[${product.titleId}] gold jewelry lifestyle editorial warm` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const accordionItems = accordions.map((a) =>
    a.id === 'description' ? { ...a, content: product.description } : a
  );

  return (
    <div className="bg-ivory min-h-screen pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-stone hover:text-espresso transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-stone-light">/</span>
          <span className="font-sans text-xs text-espresso uppercase tracking-[0.08em]">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.imgId}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${
                    activeThumb === i ? 'border-espresso' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${thumb.imgId}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={thumb.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory-dark" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={`main-${thumbImages[activeThumb].imgId}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags?.includes('bestseller') && (
                <span className="absolute top-4 left-4 bg-gold text-espresso font-sans text-[9px] uppercase tracking-[0.12em] px-2.5 py-1.5">
                  Bestseller
                </span>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={product.titleId} className="sr-only">{product.name}</span>
            <span id={product.descId} className="sr-only">{product.shortDesc}</span>

            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-espresso uppercase tracking-[0.12em] leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    strokeWidth={i < Math.floor(product.rating) ? 0 : 1}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-stone-light'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-2xl font-medium text-espresso mb-5">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-stone leading-relaxed mb-6">
              {product.shortDesc}
            </p>

            <div className="w-full h-px bg-stone-light mb-6" />

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-espresso mb-3">
                  Tone: <span className="text-stone font-normal normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs px-5 py-2.5 border transition-colors duration-300 ${
                        selectedVariant === v
                          ? 'bg-espresso text-ivory border-espresso'
                          : 'border-stone-light text-stone hover:border-espresso hover:text-espresso'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-espresso mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="px-5 py-3 font-sans text-sm text-espresso border-x border-stone-light min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory font-sans text-xs uppercase tracking-[0.15em] py-4 hover:bg-espresso-light transition-colors duration-300 mb-3"
            >
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button className="w-full border border-stone-light text-espresso font-sans text-xs uppercase tracking-[0.12em] py-4 hover:border-espresso transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 pt-6 border-t border-stone-light space-y-2">
              {['Free worldwide shipping', '30-day returns', 'Hypoallergenic · 18K gold plated'].map((t) => (
                <p key={t} className="font-sans text-xs text-stone flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  {t}
                </p>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordionItems.map((item) => (
                <Accordion
                  key={item.id}
                  label={item.label}
                  content={item.content}
                  isOpen={openAccordion === item.id}
                  onToggle={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                />
              ))}
              <div className="border-t border-stone-light" />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-stone-light bg-ivory-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso tracking-wide mb-10">
            You May Also Like
          </h2>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
