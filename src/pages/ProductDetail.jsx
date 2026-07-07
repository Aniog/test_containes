import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'}
            strokeWidth={0}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-parchment">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-sans text-ink">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-muted leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="product-card group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          data-strk-img-id={`related-alt-${product.imgId2}`}
          data-strk-img={`[related-title-${product.id}] fine jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
      </Link>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 id={`related-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors">
            {product.name}
          </h4>
        </Link>
        <p id={`related-desc-${product.id}`} className="text-xs font-sans text-muted mt-0.5">{product.subtitle}</p>
        <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-ink mb-4">Product not found</p>
          <button onClick={() => navigate('/shop')} className="text-xs uppercase tracking-widest font-sans text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry product` },
    { imgId: `pdp-alt1-${product.imgId2}`, query: `[pdp-title-${product.id}] fine jewelry worn model` },
    { imgId: `pdp-alt2-${product.imgId}b`, query: `[pdp-title-${product.id}] gold jewelry detail close up` },
    { imgId: `pdp-alt3-${product.imgId2}b`, query: `[pdp-title-${product.id}] jewelry lifestyle flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-surface min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2 text-[11px] font-sans text-whisper uppercase tracking-widest">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-ivory text-[10px] uppercase tracking-widest font-sans px-3 py-1.5">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans text-gold mb-2">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-2xl md:text-3xl uppercase tracking-widest font-light text-ink leading-tight mb-3"
              >
                {product.name}
              </h1>
              <p className="text-sm font-sans text-muted mb-4">{product.subtitle}</p>
              <StarRating rating={product.rating} count={product.reviewCount} />
              <div className="flex items-center gap-3 mt-4">
                <span className="font-sans text-2xl font-medium text-ink">${product.price}</span>
                {product.originalPrice && (
                  <span className="font-sans text-base text-whisper line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="h-px bg-parchment mb-6" />

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm font-sans text-muted leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest font-sans text-ink mb-3">
                  Tone: <span className="text-gold">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-ivory'
                          : 'border-parchment text-muted hover:border-ink hover:text-ink'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-sans text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-sans flex items-center justify-center gap-2 transition-colors duration-200 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-dark'
              }`}
            >
              {added ? (
                <>
                  <Check size={14} strokeWidth={2} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  Add to Cart
                </>
              )}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest font-sans text-whisper">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-parchment bg-surface-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
