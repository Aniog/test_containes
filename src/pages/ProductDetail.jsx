import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            fill={i <= Math.round(rating) ? '#b8965a' : 'none'}
            className={i <= Math.round(rating) ? 'text-gold' : 'text-divider'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-charcoal-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-charcoal">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-charcoal-muted" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-charcoal-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-charcoal-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="product-card group flex-shrink-0 w-[200px] md:w-auto">
      <div className="relative overflow-hidden bg-cream-200 aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className="product-img-primary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className="product-img-secondary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-charcoal text-cream font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 id={product.titleId} className="font-serif text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h4>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <p className="font-sans text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl font-light text-charcoal">Product not found</p>
        <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold underline underline-offset-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, label: 'Main' },
    { id: product.imgId2, query: `[pdp-title-${product.id}] gold jewelry worn model`, label: 'Worn' },
    { id: `${product.imgId}-detail`, query: `[pdp-desc-${product.id}] gold jewelry detail close up`, label: 'Detail' },
    { id: `${product.imgId}-flat`, query: `[pdp-title-${product.id}] gold jewelry flat lay`, label: 'Flat lay' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-charcoal-muted hover:text-charcoal transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
          </button>
          <span className="font-sans text-xs text-charcoal-muted">/</span>
          <Link to="/shop" className="font-sans text-xs text-charcoal-muted hover:text-charcoal transition-colors">Shop</Link>
          <span className="font-sans text-xs text-charcoal-muted">/</span>
          <span className="font-sans text-xs text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scroll-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-300 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${img.id}-${product.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream-200 aspect-[3/4]">
              {/* Hidden text for image queries */}
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDesc}</span>

              {images.map((img, i) => (
                <img
                  key={img.id}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} ${img.label}`}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
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
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-charcoal text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-light text-charcoal mt-3">${product.price}</p>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-divider my-6" />

            {/* Short description */}
            <p className="font-sans text-sm text-charcoal-muted leading-relaxed">{product.shortDesc}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-5 py-2 border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-divider hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-cream-200 transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-cream-200 transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-charcoal text-cream font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors duration-300"
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                className="border border-divider text-charcoal font-sans text-xs tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2 hover:border-charcoal transition-colors duration-300"
                aria-label="Save to wishlist"
              >
                <Heart size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-charcoal-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-divider bg-cream-200 py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-8">You May Also Like</h2>
          <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto scroll-hide pb-4 md:pb-0">
            {related.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
