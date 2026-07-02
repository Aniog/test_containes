import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[11px] tracking-widest uppercase text-ink font-medium">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-muted" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== current.id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [current.id]);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h3 className="font-serif text-2xl lg:text-3xl text-ink font-light mb-10">You may also like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group block">
              <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${p.titleId}`} className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium">
                {p.name}
              </p>
              <p className="font-serif text-sm text-muted mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQty(1);
      setActiveThumb(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-muted font-light mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-[11px] tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Simulate multiple gallery images using main + hover
  const galleryImgIds = [
    { id: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `pdp-alt2-${product.imgId}2`, query: `[${product.titleId}] gold jewelry detail closeup` },
    { id: `pdp-alt3-${product.imgId2}2`, query: `[${product.titleId}] gold jewelry lifestyle` },
  ];

  return (
    <div ref={containerRef} className="bg-warm-white min-h-screen pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-muted hover:text-gold transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
          </button>
          <span className="font-sans text-[10px] text-ghost">/</span>
          <Link to="/shop" className="font-sans text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="font-sans text-[10px] text-ghost">/</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {galleryImgIds.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-linen hover:border-muted'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream" style={{ aspectRatio: '3/4' }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={galleryImgIds[activeThumb].id}
                data-strk-img={galleryImgIds[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="bg-espresso text-warm-white font-sans text-[9px] tracking-widest uppercase px-3 py-1.5">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 id={product.titleId} className="font-serif text-3xl lg:text-4xl text-ink font-light tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#c9a96e' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#c9a96e'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-ink mb-5">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <hr className="divider mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium mb-3">
                Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-warm-white'
                        : 'border-linen text-muted hover:border-muted hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-warm-white font-sans text-[11px] tracking-widest uppercase py-4 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors duration-200 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-linen text-muted font-sans text-[11px] tracking-widest uppercase py-3.5 hover:border-gold hover:text-gold transition-colors duration-200">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-linen">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-sans text-[10px] text-muted">Free shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-sans text-[10px] text-muted">30-day returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-sans text-[10px] text-muted">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts current={product} />
    </div>
  );
}
