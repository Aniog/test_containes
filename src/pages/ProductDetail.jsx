import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

// Accordion component
const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-sans text-sm text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

// Related product card — uses a styled placeholder; no dynamic data-strk-img-id
// (the plugin cannot trace imgId through getRelatedProducts() at build time)
const RelatedCard = ({ product }) => (
  <Link to={`/product/${product.slug}`} className="group block">
    <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3 flex items-center justify-center">
      {/* Linen swatch with gold initial — swapped for real image when backend is wired */}
      <span className="font-serif text-5xl text-gold/40 select-none group-hover:text-gold/60 transition-colors duration-300">
        {product.name.charAt(0)}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-ink group-hover:text-gold transition-colors">
      {product.name}
    </p>
    <p id={product.descId} className="sr-only">{product.shortDescription}</p>
    <p className="font-sans text-sm text-muted mt-0.5">${product.price}</p>
  </Link>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductById(slug);
  const related = product ? getRelatedProducts(product.id) : [];

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: product.imgId, imgId2: `${product.imgId}-main` },
    { imgId: product.imgId2, imgId2: `${product.imgId2}-alt` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-parchment min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={12} />
            Back
          </button>
          <span className="text-divider">/</span>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-divider">/</span>
          <span className="font-sans text-xs tracking-widest uppercase text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={`pdp-main-${img.imgId}-${i}`}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {product.badge && (
                <span className="absolute top-4 left-4 font-sans text-[9px] tracking-widest uppercase bg-obsidian text-gold px-2.5 py-1 z-10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-linen flex-shrink-0 transition-all duration-200 ${
                    activeImg === i ? 'ring-1 ring-gold' : 'ring-1 ring-transparent hover:ring-divider'
                  }`}
                  style={{ width: '72px', height: '96px' }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="144"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                {product.category}
              </p>
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-ink mb-3"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                      className={i < Math.floor(product.rating) ? 'text-gold' : 'text-divider'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-serif text-3xl text-ink">${product.price}</p>
            </div>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-muted leading-relaxed mb-6 border-t border-divider pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-muted font-400 normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-sans text-xs tracking-widest uppercase transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-cream border border-obsidian'
                        : 'bg-transparent text-ink border border-divider hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors duration-200 mb-3 ${
                added
                  ? 'bg-obsidian text-gold'
                  : 'bg-gold text-obsidian hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-divider mt-2">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider uppercase text-muted">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To keep your piece looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Wipe gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>We offer hassle-free 30-day returns on unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-divider">
            <div className="text-center mb-10">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                Curated for You
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-300">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map(p => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
