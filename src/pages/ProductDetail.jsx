import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            style={{ fill: s <= Math.round(rating) ? '#B8935A' : 'transparent', color: s <= Math.round(rating) ? '#B8935A' : '#EDE8DF' }}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-mink">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-parchment">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-mink leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
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

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-mink mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-main`, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, id2: `${product.imgId2}-pdp-alt`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-pdp-3`, id2: `${product.imgId}-pdp-3`, query: `[${product.titleId}] gold jewelry worn lifestyle` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 font-inter text-[10px] uppercase tracking-widest text-mink hover:text-charcoal transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-parchment">/</span>
          <span className="font-inter text-[10px] uppercase tracking-widest text-charcoal">
            {product.name}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-charcoal' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id2}-thumb`}
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
            <div className="flex-1 relative overflow-hidden bg-parchment" style={{ aspectRatio: '3/4' }}>
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={`${img.id2}-main`}
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
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-charcoal text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-gold text-white px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.15em] text-charcoal font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-inter text-2xl text-charcoal mb-4">${product.price}</p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="w-full h-px bg-parchment my-6" />

            {/* Short description */}
            <p id={product.descId} className="font-inter text-sm text-mink leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-inter text-[10px] uppercase tracking-widest text-mink mb-3">
                  Finish: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs px-5 py-2.5 border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'bg-transparent text-charcoal border-parchment hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] uppercase tracking-widest text-mink mb-3">Quantity</p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-mink hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={1.5} />
                </button>
                <span className="font-inter text-sm text-charcoal w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-mink hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs uppercase tracking-widest py-5 transition-colors duration-300 ${
                added
                  ? 'bg-gold text-white'
                  : 'bg-charcoal text-ivory hover:bg-gold'
              }`}
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            <p className="font-inter text-[10px] text-mink text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 md:mt-28 border-t border-parchment pt-16">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
