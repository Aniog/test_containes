import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/home/Bestsellers';

const StarRating = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-parchment fill-velmora-parchment'}
          strokeWidth={0}
        />
      ))}
    </div>
    <span className="font-manrope text-xs text-velmora-mist">{rating} ({count} reviews)</span>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-parchment">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-mist flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-mist flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-velmora-mist leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveThumb(0);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-linen pt-20">
        <p className="font-cormorant text-2xl text-velmora-mist">Product not found</p>
        <Link to="/shop" className="mt-4 font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackRelated = products.filter(p => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  const thumbImages = [
    { imgId: `pdp-main-${product.id}-a`, imgId2: product.imgId, label: 'Main view' },
    { imgId: `pdp-alt-${product.id}-b`, imgId2: product.imgId2, label: 'Alternate view' },
    { imgId: `pdp-detail-${product.id}-c`, imgId2: `pdp-detail-src-${product.id}`, label: 'Detail view' },
  ];

  return (
    <div className="min-h-screen bg-velmora-linen pt-16 md:pt-20 page-enter" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-manrope text-[10px] uppercase tracking-widest text-velmora-mist hover:text-velmora-gold transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-velmora-parchment">/</span>
          <Link to="/shop" className="font-manrope text-[10px] uppercase tracking-widest text-velmora-mist hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <span className="text-velmora-parchment">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-obsidian">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                  aria-label={thumb.label}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={thumb.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-velmora-parchment">
              <img
                data-strk-img-id={`pdp-hero-${product.id}-${activeThumb}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial dark background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.isBestseller && (
                <div className="absolute top-4 left-4">
                  <span className="bg-velmora-obsidian text-velmora-gold font-manrope text-[9px] uppercase tracking-widest px-2.5 py-1.5">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl font-medium uppercase tracking-widest text-velmora-obsidian leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-manrope text-2xl font-light text-velmora-obsidian mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="mt-2">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="hairline my-5" />

            {/* Short description */}
            <p id={product.descId} className="font-manrope text-sm text-velmora-mist leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-mist">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 font-manrope text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                        : 'border-velmora-parchment text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-velmora-parchment w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian hover:bg-velmora-parchment transition-colors"
                >
                  <Minus size={12} strokeWidth={2} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-manrope text-sm text-velmora-obsidian border-x border-velmora-parchment">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian hover:bg-velmora-parchment transition-colors"
                >
                  <Plus size={12} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-6 w-full py-4 font-manrope text-xs uppercase tracking-widest transition-all duration-200 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-cream hover:bg-velmora-charcoal'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-velmora-mist flex items-center gap-1">
                  <span className="text-velmora-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-obsidian font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-obsidian font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="hairline mb-10" />
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-obsidian tracking-wide">
                You May Also Like
              </h2>
              <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-velmora-mist hover:text-velmora-gold transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
