import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-sand/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-text-muted flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-text-muted flex-shrink-0" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-inter text-sm text-velmora-text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const galleryImages = [
    { id: `${product.imgId}-g1`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId}-g2`, query: `[${product.titleId}] gold jewelry worn close up detail` },
    { id: `${product.imgId}-g3`, query: `[${product.titleId}] fine jewelry editorial flat lay` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-inter text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-sand/50 text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-sand/50 text-xs">/</span>
          <span className="font-inter text-xs text-velmora-text-dark">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-linen relative">
              {galleryImages.map((img, i) => (
                <img
                  key={img.id}
                  alt={product.name}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-velmora-obsidian px-3 py-1.5">
                  <span className="font-inter text-[10px] uppercase tracking-widest text-velmora-gold">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-velmora-text-dark font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    style={{ fill: '#C9A96E', color: '#C9A96E' }}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-text-dark mb-5">
              ${product.price}
            </p>

            <div className="hairline mb-5" />

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-velmora-text-muted leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-3">
                Finish: <span className="text-velmora-text-muted normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-inter text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                        : 'border-velmora-sand/50 text-velmora-text-muted hover:border-velmora-obsidian hover:text-velmora-text-dark'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-sand/40 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-inter text-sm text-velmora-text-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-inter text-xs uppercase tracking-widest transition-all duration-200 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-cream hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust micro-copy */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <span className="font-inter text-[11px] text-velmora-text-muted">Free Shipping</span>
              <span className="text-velmora-sand/40">·</span>
              <span className="font-inter text-[11px] text-velmora-text-muted">30-Day Returns</span>
              <span className="text-velmora-sand/40">·</span>
              <span className="font-inter text-[11px] text-velmora-text-muted">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-sand/30">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-text-dark">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-text-dark">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-velmora-linen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark tracking-wide mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
