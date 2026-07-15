import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

const StarRating = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < Math.floor(rating) ? '#B8965A' : 'none'}
          stroke={i < Math.floor(rating) ? 'none' : '#B8965A'}
          strokeWidth={1.5}
        />
      ))}
    </div>
    <span className="font-inter text-xs text-warmgray">
      {rating} ({count} reviews)
    </span>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-charcoal">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-warmgray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-inter text-sm text-warmgray leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setAdded(false);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImg]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-ivory pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-3xl font-light text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs tracking-[0.15em] uppercase text-gold underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const galleryImages = product.galleryImgIds.map((imgId, i) => ({
    imgId,
    query: i === 0
      ? `[pdp-desc-${product.id}] [pdp-title-${product.id}]`
      : `[pdp-title-${product.id}] gold jewelry detail`,
  }));

  return (
    <main className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-warmgray hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-linen">·</span>
          <Link to="/shop" className="font-inter text-xs text-warmgray hover:text-charcoal transition-colors">
            Shop
          </Link>
          <span className="text-linen">·</span>
          <span className="font-inter text-xs text-charcoal truncate max-w-[160px]">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible hide-scrollbar">
              {galleryImages.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-charcoal' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream relative">
              {galleryImages.map((img, i) => (
                <img
                  key={img.imgId}
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-charcoal text-white font-inter text-[9px] font-medium tracking-[0.12em] uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
            <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>

            <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>

            <h1 className="font-inter text-sm font-medium tracking-[0.2em] uppercase text-charcoal mb-3 leading-relaxed">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-cormorant text-3xl font-light text-charcoal">
                ${product.price}
              </span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-inter text-sm text-warmgray leading-relaxed mb-6 border-t border-linen pt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-charcoal mb-3">
                Finish: <span className="text-warmgray font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-[0.1em] uppercase px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-warmgray border-linen hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warmgray hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={2} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warmgray hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-inter text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-gold text-white'
                  : 'bg-charcoal text-white hover:bg-gold'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            <p className="font-inter text-xs text-warmgray text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-charcoal font-medium">Materials:</strong> {product.material}
                <br /><br />
                <strong className="text-charcoal font-medium">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-linen bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-10">
            You May Also Like
          </h2>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
