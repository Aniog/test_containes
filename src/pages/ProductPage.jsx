import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest text-espresso font-sans">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-mink font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQuantity(1);
    if (product) setSelectedVariant(product.variants?.[0] || 'Gold');
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (relatedRef.current) ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [related.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-mink">Product not found</p>
        <Link to="/shop" className="text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-detail`, query: `[${product.titleId}] close up detail gold jewelry` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone font-sans">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-14 md:h-18 overflow-hidden border-2 transition-colors duration-300 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream" style={{ aspectRatio: '3/4' }}>
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags?.includes('bestseller') && (
                <span className="text-[9px] uppercase tracking-widest text-stone font-sans border border-stone/30 px-2 py-1">Bestseller</span>
              )}
              {product.tags?.includes('new') && (
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans border border-gold/40 px-2 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-espresso font-normal leading-snug mb-1"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'} className={i < Math.floor(product.rating) ? 'text-gold' : 'text-stone/30'} strokeWidth={1} />
                ))}
              </div>
              <span className="text-xs text-stone font-sans">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-espresso mb-5">${product.price}</p>

            {/* Short description */}
            <p className="text-sm text-mink font-sans leading-relaxed mb-6 border-t border-stone/15 pt-5">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-widest text-stone font-sans mb-3">
                Tone: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans border transition-colors duration-300 ${
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
              <p className="text-[10px] uppercase tracking-widest text-stone font-sans mb-3">Quantity</p>
              <div className="flex items-center border border-stone/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="px-4 text-sm font-sans text-espresso min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-espresso py-4 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors duration-300 mb-3"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border border-espresso text-espresso py-4 text-xs uppercase tracking-widest font-sans hover:bg-espresso hover:text-ivory transition-colors duration-300">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-col gap-2.5 mt-6 pt-5 border-t border-stone/15">
              {[
                { icon: Truck, text: 'Free worldwide shipping on all orders' },
                { icon: RotateCcw, text: '30-day hassle-free returns' },
                { icon: Shield, text: 'Hypoallergenic · Nickel-free' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  <span className="text-xs text-stone font-sans">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-espresso font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-espresso font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div ref={relatedRef} className="mt-20 md:mt-28">
            <div className="border-t border-stone/15 pt-12 mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-espresso">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
