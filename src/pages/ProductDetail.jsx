import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            strokeWidth={1}
            style={s <= Math.round(rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: 'none', color: '#E8E0D4' }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-medium text-ink">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-ivory py-3 font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-3">
        <p className="font-serif text-sm uppercase tracking-widest text-ink">{product.name}</p>
        <p className="font-sans text-sm text-muted mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-muted">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const thumbImages = [
    { id: product.imgId, img2Id: null },
    { id: product.img2Id, img2Id: null },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-whisper hover:text-gold transition-colors duration-300">Home</Link>
          <span className="text-whisper text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-whisper hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="text-whisper text-xs">/</span>
          <span className="font-sans text-xs text-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${thumb.id}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
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
            <div className="flex-1 relative overflow-hidden bg-parchment aspect-[3/4]">
              <img
                data-strk-img-id={activeThumb === 0 ? product.imgId : product.img2Id}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Back link mobile */}
            <Link
              to="/shop"
              className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors duration-300 mb-6 md:hidden"
            >
              <ArrowLeft size={12} strokeWidth={1.5} />
              Back to Shop
            </Link>

            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Product name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-ink font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl text-ink mt-3 font-light">${product.price}</p>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-stone my-6" />

            {/* Short description */}
            <p
              id={product.descId}
              className="font-sans text-sm text-muted leading-relaxed"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-stone text-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart + wishlist */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-sans text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  addedToCart
                    ? 'bg-obsidian text-ivory'
                    : 'bg-gold text-ivory hover:bg-gold-dark'
                }`}
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWishlist((v) => !v)}
                aria-label="Add to wishlist"
                className="w-14 h-14 border border-stone flex items-center justify-center hover:border-gold transition-colors duration-300"
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  style={wishlist ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: 'none', color: '#7A6E63' }}
                />
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span className="block">{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-stone mt-16 py-16 md:py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
