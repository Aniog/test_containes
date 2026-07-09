import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-stone/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal">{title}</span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-mink flex-shrink-0" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-mink flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fadeInFast">
          <p className="font-manrope text-sm text-velmora-charcoal leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [product, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-velmora-ivory">
        <p className="font-cormorant text-2xl text-velmora-charcoal">Product not found</p>
        <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const galleryImages = [
    {
      id: `pdp-main-${product.id}`,
      query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`,
      label: 'Main',
    },
    {
      id: `pdp-worn-${product.id}`,
      query: `[pdp-title-${product.id}] gold jewelry worn model close up`,
      label: 'Worn',
    },
    {
      id: `pdp-detail-${product.id}`,
      query: `[pdp-title-${product.id}] gold jewelry detail texture close up`,
      label: 'Detail',
    },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-manrope text-xs text-velmora-mink hover:text-velmora-gold transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-velmora-stone/60">/</span>
          <Link to="/shop" className="font-manrope text-xs text-velmora-mink hover:text-velmora-gold transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-velmora-stone/60">/</span>
          <span className="font-manrope text-xs text-velmora-charcoal truncate max-w-[160px]">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                  aria-label={`View ${img.label} image`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={galleryImages[activeImg].id}
                data-strk-img={galleryImages[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Hidden text for image queries */}
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted((v) => !v)}
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 w-9 h-9 bg-velmora-ivory/80 backdrop-blur-sm flex items-center justify-center hover:bg-velmora-ivory transition-colors"
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  className={wishlisted ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-charcoal'}
                />
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-stone'}
                    strokeWidth={0.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-mink">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-velmora-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-manrope text-sm text-velmora-charcoal leading-relaxed mb-6 border-b border-velmora-stone/30 pb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-manrope text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone text-velmora-charcoal hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-stone/60 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-charcoal hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-charcoal hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-manrope text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 mb-3 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-ivory hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-2 mb-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-widest text-velmora-mink flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-stone/40">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-velmora-stone/30">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian mb-8 md:mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-cream aspect-portrait mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span id={`related-title-${p.id}`} className="sr-only">{p.name}</span>
                <span id={`related-desc-${p.id}`} className="sr-only">{p.shortDescription}</span>
              </div>
              <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian mb-1">{p.name}</p>
              <p className="font-manrope text-sm text-velmora-charcoal">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
