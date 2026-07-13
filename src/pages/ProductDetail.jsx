import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className="w-4 h-4"
            style={{
              fill: i <= Math.round(rating) ? '#C9A96E' : 'none',
              color: i <= Math.round(rating) ? '#C9A96E' : '#E8E0D4',
            }}
          />
        ))}
      </div>
      <span className="font-sans text-sm text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-semibold text-ink">{title}</span>
        <ChevronDown className={cn('w-4 h-4 text-muted transition-transform duration-300', open && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', open ? 'max-h-96 pb-5' : 'max-h-0')}>
        <div className="font-sans text-sm text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-muted">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm text-gold underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const imgIds = [
    { id: `${product.imgId}-detail-0`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId}-detail-1`, query: `[${product.titleId}] gold jewelry worn on model close up` },
    { id: `${product.imgId}-detail-2`, query: `[${product.titleId}] luxury jewelry flat lay` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <span className="text-linen">/</span>
          <Link to="/shop" className="font-sans text-xs text-muted hover:text-gold transition-colors">Shop</Link>
          <span className="text-linen">/</span>
          <span className="font-sans text-xs text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200',
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  )}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
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
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-obsidian text-ivory font-sans text-[10px] tracking-widest uppercase font-semibold px-3 py-1.5">
                  {product.badge}
                </div>
              )}
              <img
                data-strk-img-id={imgIds[activeImg].id}
                data-strk-img={imgIds[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <p id={product.titleId} className="sr-only">{product.name}</p>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-ink font-medium leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-ink mt-3">${product.price}</p>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="w-full h-px bg-linen my-6" />

            {/* Short description */}
            <p className="font-sans text-sm text-muted leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">
                Tone: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-5 py-2.5 font-sans text-xs tracking-widest uppercase font-semibold border transition-all duration-200',
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-muted border-linen hover:border-gold hover:text-gold'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-sans text-sm font-semibold text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart + wishlist */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlist(v => !v)}
                aria-label="Add to wishlist"
                className={cn(
                  'w-14 border flex items-center justify-center transition-all duration-200',
                  wishlist ? 'border-gold bg-gold/10 text-gold' : 'border-linen text-muted hover:border-gold hover:text-gold'
                )}
              >
                <Heart
                  className="w-4 h-4"
                  style={{ fill: wishlist ? '#C9A96E' : 'none', color: wishlist ? '#C9A96E' : 'currentColor' }}
                />
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] tracking-wide text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-ink">Materials:</strong> {product.material}</p>
                <p><strong className="text-ink">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-linen bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="font-serif text-xs tracking-widest uppercase text-ink font-medium group-hover:text-gold transition-colors">
                  {p.name}
                </p>
                <p id={`related-${p.id}-desc`} className="sr-only">{p.shortDescription}</p>
                <p className="font-sans text-sm text-muted mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
