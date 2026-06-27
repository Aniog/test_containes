import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            strokeWidth={1}
            className={s <= Math.round(rating) ? 'star-filled fill-gold' : 'star-empty'}
          />
        ))}
      </div>
      <span className="text-xs text-taupe" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-xs tracking-widest uppercase font-medium text-charcoal"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-taupe flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-taupe flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p
            className="text-sm text-taupe leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          className="text-3xl font-light text-charcoal mb-10 text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          You May Also Like
        </h2>
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                id={`related-${product.id}-title`}
                className="text-xs tracking-widest uppercase text-charcoal font-light group-hover:text-gold transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.12em' }}
              >
                {product.name}
              </h3>
              <p
                id={`related-${product.id}-desc`}
                className="text-xs text-taupe mt-0.5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {product.subtitle}
              </p>
              <p
                className="text-sm font-medium text-charcoal mt-1.5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                ${product.price}
              </p>
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
  const product = products.find((p) => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="text-taupe mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Product not found.</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]`, thumbId: `thumb-${product.imgId}` },
    { id: product.imgId2, query: `gold jewelry detail close-up [${product.titleId}]`, thumbId: `thumb-${product.imgId2}` },
    { id: `${product.imgId}-v3`, query: `[${product.titleId}] jewelry worn on model`, thumbId: `thumb-${product.imgId}-v3` },
    { id: `${product.imgId}-v4`, query: `[${product.titleId}] jewelry flat lay`, thumbId: `thumb-${product.imgId}-v4` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-cream min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-taupe hover:text-charcoal transition-colors"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-border">·</span>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-taupe hover:text-charcoal transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Shop
          </Link>
          <span className="text-border">·</span>
          <span className="text-xs tracking-widest uppercase text-charcoal" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {product.name}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-ivory aspect-[4/5]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-ivory aspect-square border transition-colors duration-200 ${activeImg === i ? 'border-charcoal' : 'border-border hover:border-taupe'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={img.thumbId}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span
                className="inline-block bg-charcoal text-cream text-[9px] tracking-widest uppercase px-2.5 py-1 mb-4 self-start"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              id={product.titleId}
              className="text-3xl md:text-4xl font-light text-charcoal tracking-widest uppercase leading-tight mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.12em' }}
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="text-sm text-taupe mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {product.subtitle}
            </p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p
              className="text-2xl font-medium text-charcoal mt-5 mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              ${product.price}
            </p>

            {/* Short description */}
            <p
              className="text-sm text-taupe leading-relaxed mb-8 border-t border-border pt-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p
                className="text-xs tracking-widest uppercase text-charcoal mb-3 font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Finish: <span className="text-taupe font-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p
                className="text-xs tracking-widest uppercase text-charcoal mb-3 font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Quantity
              </p>
              <div className="flex items-center gap-0 w-fit">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease"
                >
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                <span
                  className="w-12 text-center text-sm text-charcoal border-t border-b border-border h-8 flex items-center justify-center"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {quantity}
                </span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase"
                >
                  <ChevronUp size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal text-cream text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 hover:bg-espresso transition-colors duration-200 mb-3"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            <button
              className="w-full border border-border text-charcoal text-xs tracking-widest uppercase py-3.5 hover:border-charcoal transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-6 py-4 border-t border-border">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-widest uppercase text-taupe"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
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
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
