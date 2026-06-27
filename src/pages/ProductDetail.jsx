import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

// Per-product gallery — static IDs so the image plugin can resolve them
function ProductGallery({ product, activeImg, setActiveImg }) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {[
          { imgId: `${product.imgId}-thumb`, mainId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
          { imgId: `${product.imgId2}-thumb`, mainId: product.imgId2, query: `[${product.titleId}] gold jewelry worn model editorial` },
          { imgId: `${product.imgId3}-thumb`, mainId: product.imgId3, query: `[${product.titleId}] gold jewelry detail close up macro` },
        ].map((img, i) => (
          <button
            key={img.imgId}
            onClick={() => setActiveImg(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
              activeImg === i ? 'border-gold' : 'border-transparent'
            }`}
          >
            <img
              data-strk-img-id={img.imgId}
              data-strk-img={img.query}
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
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} view 1`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} view 2`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img
          data-strk-img-id={product.imgId3}
          data-strk-img={`[${product.titleId}] gold jewelry detail close up macro`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} view 3`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === 2 ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}

// Related product card with static IDs
function RelatedCard({ p }) {
  return (
    <Link to={`/product/${p.slug}`} className="group">
      <div className="aspect-[3/4] overflow-hidden bg-linen mb-3 relative">
        <img
          data-strk-img-id={`related-${p.imgId}`}
          data-strk-img={`[${p.descId}] [${p.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 id={p.titleId} className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian group-hover:text-gold transition-colors">
        {p.name}
      </h3>
      <p id={p.descId} className="sr-only">{p.shortDescription}</p>
      <p className="font-manrope text-sm text-muted mt-1">${p.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-manrope text-xs text-muted hover:text-gold transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-border">·</span>
          <span className="font-manrope text-xs text-whisper uppercase tracking-wide">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <ProductGallery product={product} activeImg={activeImg} setActiveImg={setActiveImg} />

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
              {product.category}
            </p>

            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-cormorant text-3xl text-obsidian mb-5">${product.price}</p>

            <p
              id={product.descId}
              className="font-manrope text-sm text-muted leading-relaxed mb-6 border-t border-border pt-5"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-muted mb-2.5">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 font-manrope text-xs tracking-wide border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-border text-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-muted mb-2.5">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-manrope text-xs tracking-[0.14em] uppercase font-medium flex items-center justify-center gap-2.5 transition-all duration-300 ${
                added
                  ? 'bg-obsidian/80 text-ivory cursor-default'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            <div className="flex items-center justify-center gap-6 mt-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-whisper tracking-wide">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-obsidian font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="mt-20 md:mt-28 border-t border-border pt-14">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <RelatedCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
