import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            fill={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
            stroke={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-ink-faint">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} className="text-ink-muted" /> : <ChevronDown size={14} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-ink-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== current.id && (p.category === current.category || p.tags.some(t => current.tags.includes(t)))).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!related.length) return null;

  return (
    <section ref={containerRef} className="section-padding bg-parchment border-t border-linen">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Complete the Look</p>
          <h2 className="section-heading">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${p.titleId}`} className="product-name text-sm mb-1">{p.name}</h3>
              <span className="font-cormorant text-base font-medium text-ink">${p.price}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-cream min-h-screen" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="section-container pt-24 md:pt-28 pb-6">
        <Link to="/shop" className="flex items-center gap-2 font-manrope text-xs text-ink-faint hover:text-ink transition-colors">
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      {/* Main content */}
      <div className="section-container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}-${selectedImage}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry ${selectedImage === 1 ? 'worn model' : 'product flat lay'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative overflow-hidden bg-parchment flex-shrink-0 transition-all duration-200 ${
                    selectedImage === i ? 'ring-1 ring-gold' : 'ring-1 ring-linen hover:ring-gold/50'
                  }`}
                  style={{ width: 72, height: 90 }}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry ${i === 1 ? 'worn' : 'product'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
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
                <span className="bg-gold text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-obsidian text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">New</span>
              )}
            </div>

            <h1 id={`pdp-title-${product.id}`} className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 font-medium text-ink mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-cormorant text-2xl font-medium text-ink">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p id={`pdp-desc-${product.id}`} className="font-manrope text-sm text-ink-muted leading-relaxed mb-8 border-b border-linen pb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wide px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-linen text-ink-muted hover:border-gold hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs tracking-widest uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-cream'
                  : 'bg-gold text-cream hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 py-4 border-y border-linen">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-ink-faint tracking-wide">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">
                Free standard shipping on all orders. Express shipping available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging. Gift sets are final sale.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts current={product} />
    </div>
  );
}
