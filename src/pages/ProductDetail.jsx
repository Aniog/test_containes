import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gold/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-warm-gray transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-warm-gray leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];

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
      setAdded(false);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-cormorant text-2xl text-charcoal">Product not found</p>
        <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const galleryImages = [
    { id: `pdp-main-${product.id}`, imgId: `pdp-img-main-${product.id}-aa1`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-alt1-${product.id}`, imgId: `pdp-img-alt1-${product.id}-bb2`, query: `[pdp-title-${product.id}] gold jewelry worn close up`, ratio: '3x4' },
    { id: `pdp-alt2-${product.id}`, imgId: `pdp-img-alt2-${product.id}-cc3`, query: `[pdp-title-${product.id}] fine jewelry detail`, ratio: '3x4' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-warm-gray hover:text-gold transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-warm-gray/40 text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-warm-gray hover:text-gold transition-colors">Shop</Link>
          <span className="text-warm-gray/40 text-xs">/</span>
          <span className="font-inter text-xs text-charcoal uppercase tracking-wider">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-16 md:w-20 aspect-[3/4] overflow-hidden flex-shrink-0 border transition-colors ${
                    activeImg === idx ? 'border-gold' : 'border-transparent hover:border-gold/40'
                  }`}
                >
                  <img
                    data-strk-img-id={img.imgId}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-cream">
              {galleryImages.map((img, idx) => (
                <img
                  key={img.id + '-main'}
                  data-strk-img-id={`${img.imgId}-lg`}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-3">
              {product.tags?.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-widest bg-gold text-white px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-obsidian leading-tight mb-2"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#C9A96E4D'}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-warm-gray leading-relaxed mb-6"
            >
              {product.shortDescription}
            </p>

            <div className="divider-gold mb-6" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">
                  Tone: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex items-center gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                        selectedVariant === v
                          ? 'bg-obsidian text-ivory border-obsidian'
                          : 'bg-transparent text-charcoal border-gold/30 hover:border-gold'
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
              <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-3">Quantity</p>
              <div className="flex items-center border border-gold/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-inter text-xs uppercase tracking-widest transition-colors duration-300 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-obsidian text-ivory hover:bg-charcoal'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <Icon size={14} strokeWidth={1.5} className="text-gold" />
                  <span className="font-inter text-[9px] uppercase tracking-wider text-warm-gray">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  imageSlot={
                    <>
                      <img
                        data-strk-img-id={p.imgId}
                        data-strk-img={`[${p.descId}] [${p.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                      />
                      <img
                        data-strk-img-id={p.img2Id}
                        data-strk-img={`[${p.titleId}] gold jewelry worn model`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} alternate view`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                      />
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
