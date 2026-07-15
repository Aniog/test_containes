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
            className="w-3.5 h-3.5"
            style={i <= Math.round(rating)
              ? { fill: '#C9A96E', color: '#C9A96E' }
              : { fill: 'none', color: '#E8E0D5' }
            }
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-text-muted">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-text-muted flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-velmora-text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-velmora-text-muted leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-cormorant text-3xl font-light text-velmora-obsidian mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {related.map(product => (
            <div key={product.id} className="product-card group cursor-pointer">
              <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
                <img
                  className="product-image-primary absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                />
                <img
                  className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`related-alt-${product.imgId2}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product); }}
                    className="w-full font-manrope text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </Link>
              <div className="pt-3">
                <h3 id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-[0.1em] text-velmora-obsidian font-medium">
                  {product.name}
                </h3>
                <p id={`related-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
                  {product.shortDescription}
                </p>
                <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-1">${product.price}</p>
              </div>
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
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  // Reset state when product changes
  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
  }, [product.id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id, activeThumb]);

  const thumbImages = [
    { id: product.imgId, id2: `pdp-thumb-0-${product.id}` },
    { id: product.imgId2, id2: `pdp-thumb-1-${product.id}` },
    { id: `pdp-extra-${product.id}-a`, id2: `pdp-thumb-2-${product.id}` },
    { id: `pdp-extra-${product.id}-b`, id2: `pdp-thumb-3-${product.id}` },
  ];

  return (
    <div className="bg-velmora-ivory min-h-screen pt-16 lg:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">
            Home
          </Link>
          <span className="text-velmora-border">/</span>
          <Link to="/shop" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <span className="text-velmora-border">/</span>
          <span className="font-manrope text-xs text-velmora-obsidian">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id2}
                    data-strk-img={`[${product.titleId}] ${product.shortDescription} gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover bg-velmora-cream"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeThumb}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div
                  className="absolute top-4 left-4 font-manrope text-[10px] tracking-widest uppercase px-3 py-1.5"
                  style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
                >
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & Price */}
            <div className="mb-5">
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl lg:text-4xl uppercase tracking-[0.12em] text-velmora-obsidian font-medium leading-tight mb-3"
              >
                {product.name}
              </h1>
              <div className="flex items-center justify-between gap-4">
                <StarRating rating={product.rating} count={product.reviewCount} />
                <span className="font-cormorant text-2xl font-medium text-velmora-obsidian">
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-velmora-border mb-5" />

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-text-muted leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-muted mb-3">
                Tone: <span className="text-velmora-obsidian capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className="px-5 py-2 rounded-full font-manrope text-xs tracking-widest uppercase border transition-all duration-200"
                    style={
                      selectedVariant === v
                        ? { backgroundColor: '#1A1614', color: '#FAF7F2', borderColor: '#1A1614' }
                        : { backgroundColor: 'transparent', color: '#6B5E54', borderColor: '#E8E0D5' }
                    }
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full font-manrope text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 transition-colors mb-3"
              style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2C2420'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1A1614'; }}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-velmora-border text-velmora-text-muted font-manrope text-xs tracking-widest uppercase py-3.5 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-colors mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[11px] tracking-wide text-velmora-text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.materials}<br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping} Free returns within 30 days of delivery.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
