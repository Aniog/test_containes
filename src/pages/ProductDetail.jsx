import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
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
            className={s <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
          />
        ))}
      </div>
      <span className="text-xs text-velmora-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-velmora-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-muted leading-relaxed animate-fadeIn">
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
    <div ref={containerRef} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4
            id={`related-title-${product.id}`}
            className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-obsidian hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h4>
        </Link>
        <p id={`related-desc-${product.id}`} className="hidden text-xs text-velmora-muted">
          {product.shortDescription}
        </p>
        <p className="font-serif text-base font-light text-velmora-obsidian mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveThumb(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-velmora-ivory pt-20">
        <p className="font-serif text-2xl font-light text-velmora-muted">Product not found</p>
        <button
          onClick={() => navigate('/shop')}
          className="text-xs font-medium tracking-widest uppercase text-velmora-gold hover:underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const thumbImages = [
    { imgId: `pdp-thumb-0-${product.imgId}`, imgId2: product.imgId },
    { imgId: `pdp-thumb-1-${product.imgId2}`, imgId2: product.imgId2 },
    { imgId: `pdp-thumb-2-${product.imgId}-alt`, imgId2: `${product.imgId}-alt2` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[10px] font-medium tracking-[0.1em] uppercase text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-obsidian">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${i}-${product.id}-${thumb.imgId}`}
                    data-strk-img={`[pdp-product-desc] [pdp-product-title] gold jewelry detail`}
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
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={activeThumb === 0 ? product.imgId : activeThumb === 1 ? product.imgId2 : `${product.imgId}-alt`}
                data-strk-img={`[pdp-product-desc] [pdp-product-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Wishlist button */}
              <button
                onClick={() => setWishlist((v) => !v)}
                className="absolute top-4 right-4 w-9 h-9 bg-velmora-ivory/80 backdrop-blur-sm flex items-center justify-center hover:bg-velmora-ivory transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  className={wishlist ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-muted'}
                />
              </button>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id="pdp-product-title"
              className="font-serif text-2xl md:text-3xl font-medium tracking-[0.12em] uppercase text-velmora-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-serif text-2xl font-light text-velmora-obsidian mt-5 mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id="pdp-product-desc"
              className="text-sm text-velmora-muted leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-muted font-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={2} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-200 ${
                addedFeedback
                  ? 'bg-velmora-obsidian text-velmora-ivory'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-dark'
              }`}
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              {addedFeedback ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map((t) => (
                <span key={t} className="text-[10px] font-medium tracking-[0.1em] uppercase text-velmora-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-obsidian">Material:</strong> {product.material}</p>
                <p className="mb-2">To keep your Velmora jewelry looking its best:</p>
                <ul className="list-disc list-inside space-y-1 text-velmora-muted">
                  <li>Remove before swimming, showering, or exercising</li>
                  <li>Store in the provided pouch or box when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Avoid contact with perfume, lotions, and chemicals</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3"><strong className="text-velmora-obsidian">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express available at checkout.</p>
                <p><strong className="text-velmora-obsidian">Returns:</strong> We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="hairline mb-12" />
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-obsidian tracking-wide">
                You May Also Like
              </h2>
              <Link
                to="/shop"
                className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
