import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
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
        <span className="font-manrope text-xs uppercase tracking-[0.14em] text-ink">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-ink-muted" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-ink-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-linen">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1.5 font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint hover:text-gold transition-colors">
            <ArrowLeft size={11} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-linen">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-muted capitalize">
            {product.category}
          </span>
          <span className="text-linen">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink truncate max-w-[160px]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-all duration-300 ${
                    activeImg === i ? 'border-gold' : 'border-linen hover:border-ink-faint'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[pdp-product-name] gold jewelry ${i === 0 ? 'product shot' : 'worn model'}`}
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
                data-strk-img-id={`pdp-main-active-${product.id}-${activeImg}`}
                data-strk-img={`[pdp-product-desc] [pdp-product-name] gold jewelry ${activeImg === 0 ? 'product editorial' : 'worn model close up'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-ink-faint mb-3 capitalize">
              {product.category}
            </p>

            <h1
              id="pdp-product-name"
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] font-medium text-ink leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-ink mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id="pdp-product-desc"
              className="font-manrope text-sm text-ink-muted leading-relaxed mt-5 pb-6 border-b border-linen"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-manrope text-[10px] uppercase tracking-[0.14em] text-ink-muted mb-3">
                  Tone: <span className="text-ink capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs uppercase tracking-[0.1em] px-5 py-2.5 border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-cream'
                          : 'border-linen text-ink-muted hover:border-ink-muted'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-manrope text-[10px] uppercase tracking-[0.14em] text-ink-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-cream font-manrope text-xs uppercase tracking-[0.16em] py-4 flex items-center justify-center gap-3 hover:bg-gold-dark transition-colors duration-300"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[9px] uppercase tracking-[0.1em] text-ink-faint">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-ink font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-ink font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div ref={relatedRef} className="border-t border-linen py-16 md:py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-10 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-cream mb-4">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-title-${p.id}] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-title-${p.id}`}
                  className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink group-hover:text-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p className="font-manrope text-sm font-medium text-ink mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
