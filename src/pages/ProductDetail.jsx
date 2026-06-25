import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const SVG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.15em] text-ink">{title}</span>
        {open ? (
          <ChevronUp size={14} className="text-bark flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-bark flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-bark leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState('main');
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-bark">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-widest text-bark hover:text-gold transition-colors"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square bg-warm-mist overflow-hidden">
              <img
                data-strk-img-id={activeImg === 'main' ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src={SVG_PLACEHOLDER}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {['main', 'alt'].map((imgKey) => (
                <button
                  key={imgKey}
                  onClick={() => setActiveImg(imgKey)}
                  className={`relative w-20 h-20 bg-warm-mist overflow-hidden border-2 transition-colors ${
                    activeImg === imgKey ? 'border-gold' : 'border-transparent hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={imgKey === 'main' ? `${product.imgId}-thumb` : `${product.imgId2}-thumb`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={SVG_PLACEHOLDER}
                    alt={`${product.name} view ${imgKey}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-ivory font-inter text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-charcoal text-ivory font-inter text-[9px] uppercase tracking-widest px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl font-medium uppercase tracking-[0.12em] text-charcoal leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone fill-stone'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-bark">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-charcoal mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-bark leading-relaxed mt-4 border-t border-stone pt-5"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-ink mb-3">
                Finish: <span className="text-bark">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-[10px] uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-stone text-bark hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-bark hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="font-inter text-sm text-ink w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-bark hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 font-inter text-[10px] uppercase tracking-[0.2em] transition-colors ${
                added
                  ? 'bg-gold text-ivory'
                  : 'bg-charcoal text-ivory hover:bg-ink'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[9px] uppercase tracking-widest text-bark flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and harsh chemicals. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 border-t border-stone mt-8">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
