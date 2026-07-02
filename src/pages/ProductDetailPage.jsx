import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            style={{
              color: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
              fill: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
            }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-ink-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink font-medium">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-ink-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-sans text-sm text-ink-muted leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link
      to={`/product/${product.slug}`}
      ref={containerRef}
      className="group block"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-cream">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p id={`related-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink">
          {product.name}
        </p>
        <p id={`related-desc-${product.id}`} className="font-sans text-xs text-ink-muted mt-0.5">
          {product.subtitle}
        </p>
        <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink-muted">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgSlots = [
    { id: `pdp-img1-${product.id}`, imgId: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-img2-${product.id}`, imgId: `pdp-detail-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry detail close up` },
    { id: `pdp-img3-${product.id}`, imgId: `pdp-worn-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry worn on model` },
    { id: `pdp-img4-${product.id}`, imgId: `pdp-flat-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry flat lay dark background` },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-ink-faint hover:text-gold transition-colors">Home</Link>
          <span className="text-ink-faint text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-ink-faint hover:text-gold transition-colors">Shop</Link>
          <span className="text-ink-faint text-xs">/</span>
          <span className="font-sans text-xs text-ink-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {imgSlots.map((slot, i) => (
                <button
                  key={slot.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${slot.imgId}`}
                    data-strk-img={slot.query}
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
            <div className="flex-1 relative overflow-hidden aspect-[3/4] bg-cream">
              {imgSlots.map((slot, i) => (
                <img
                  key={slot.id}
                  data-strk-img-id={slot.imgId}
                  data-strk-img={slot.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 img-zoom ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-obsidian text-parchment font-sans text-[9px] tracking-widest uppercase px-3 py-1.5 z-10">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-title-${product.id}`} className="sr-only">{product.name} {product.subtitle}</span>
            <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>

            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-ink font-light leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-ink-muted mt-1">{product.subtitle}</p>

            <div className="flex items-center gap-4 mt-4">
              <span className="font-sans text-2xl font-medium text-ink">${product.price}</span>
              {product.originalPrice && (
                <span className="font-sans text-base text-ink-faint line-through">${product.originalPrice}</span>
              )}
            </div>

            <div className="mt-2">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="w-full h-px bg-linen my-6" />

            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-3">
                  Tone: <span className="text-ink capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-obsidian'
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
              <p className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-6 w-full py-4 font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-parchment'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-wider uppercase text-ink-faint flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-linen mt-16 py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
