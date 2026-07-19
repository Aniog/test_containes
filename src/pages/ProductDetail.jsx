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
    <div className="border-t border-stone-light/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.12em] text-espresso">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-stone" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || null);
      setQuantity(1);
      setActiveImg(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug, product]);

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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-espresso mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-[0.12em] text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.tags?.some(t => product.tags?.includes(t)))).slice(0, 4);

  const thumbnails = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgId2, query: `[${product.titleId}] gold jewelry worn model` },
    { imgId: `${product.id}-detail-img-x1y2z3`, query: `[${product.titleId}] close up detail gold jewelry` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-inter text-xs text-stone hover:text-gold transition-colors">Home</Link>
          <span className="text-stone-light text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-stone hover:text-gold transition-colors">Shop</Link>
          <span className="text-stone-light text-xs">/</span>
          <span className="font-inter text-xs text-espresso uppercase tracking-[0.08em]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 h-20 md:w-20 md:h-24 overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    activeImg === i ? 'ring-1 ring-gold' : 'ring-1 ring-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`${thumb.imgId}-thumb`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`${thumbnails[activeImg].imgId}-main`}
                data-strk-img={thumbnails[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags?.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-[0.1em] text-stone border border-stone-light/50 px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-[0.1em] text-gold border border-gold/50 px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.12em] text-espresso mb-2"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-light'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-2xl font-medium text-espresso mb-5">${product.price}</p>

            {/* Short description */}
            <p className="font-inter text-sm text-stone leading-relaxed mb-6 border-t border-stone-light/20 pt-5">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-inter text-xs uppercase tracking-[0.12em] text-espresso mb-3">
                  Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs px-4 py-2 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-espresso bg-espresso text-ivory'
                          : 'border-stone-light/50 text-stone hover:border-espresso hover:text-espresso'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-inter text-xs uppercase tracking-[0.12em] text-espresso">Qty</p>
              <div className="flex items-center border border-stone-light/40">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-ivory font-inter text-xs uppercase tracking-[0.15em] py-4 flex items-center justify-center gap-3 hover:bg-gold-light transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-espresso text-espresso font-inter text-xs uppercase tracking-[0.12em] py-3.5 hover:bg-espresso hover:text-ivory transition-all duration-300 mb-6">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-stone-light/20">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-[0.1em] text-stone flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div ref={relatedRef} className="mt-16 md:mt-24 pt-12 border-t border-stone-light/20">
            <div className="text-center mb-10">
              <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Discover More</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso tracking-wide">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
