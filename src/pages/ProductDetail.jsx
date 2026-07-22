import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-light">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-espresso">{title}</span>
        {open
          ? <ChevronUp size={14} className="text-stone flex-shrink-0" />
          : <ChevronDown size={14} className="text-stone flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const related = products.filter(p => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    setActiveImg(0);
    setSelectedVariant(product?.variants?.[0] || 'Gold Tone');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-cormorant text-2xl text-stone">Product not found</p>
        <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5">
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

  // Build gallery: main + gallery images
  const galleryImages = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]`, ratio: '3x4', width: 800 },
    ...product.galleryImgIds.map(g => ({
      id: g.id,
      query: `[${product.titleId}] gold jewelry detail`,
      ratio: g.ratio,
      width: g.width,
    })),
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Hidden text for image queries */}
      <span id={product.titleId} className="sr-only">{product.name}</span>
      <span id={product.descId} className="sr-only">{product.shortDescription}</span>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs uppercase tracking-widest text-stone hover:text-espresso transition-colors"
          >
            <ArrowLeft size={12} />
            Back
          </button>
          <span className="text-stone-light">/</span>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-stone hover:text-espresso transition-colors">
            Shop
          </Link>
          <span className="text-stone-light">/</span>
          <span className="font-inter text-xs uppercase tracking-widest text-espresso">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-14 md:h-18 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream-dark relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`${galleryImages[activeImg]?.id}-main`}
                data-strk-img={galleryImages[activeImg]?.query || `[${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.tags?.includes('bestseller') && (
                  <span className="bg-gold text-cream font-inter text-[9px] uppercase tracking-widest px-2 py-1">
                    Bestseller
                  </span>
                )}
                {product.tags?.includes('gift') && (
                  <span className="bg-espresso text-cream font-inter text-[9px] uppercase tracking-widest px-2 py-1">
                    Gift Ready
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso leading-tight mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-light'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-cormorant text-3xl text-espresso mb-6">
              ${product.price}
            </p>

            <p className="font-inter text-sm text-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-espresso text-cream border-espresso'
                        : 'bg-transparent text-stone border-stone-light hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="font-inter text-sm text-espresso w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-inter text-xs uppercase tracking-widest py-4 transition-all duration-300 ${
                added
                  ? 'bg-espresso-light text-cream'
                  : 'bg-gold text-cream hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 py-4 border-t border-stone-light/50">
              <span className="font-inter text-xs text-stone/70">Free Shipping</span>
              <span className="text-stone-light">·</span>
              <span className="font-inter text-xs text-stone/70">30-Day Returns</span>
              <span className="text-stone-light">·</span>
              <span className="font-inter text-xs text-stone/70">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-6 border-t border-stone-light">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span className="block">{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="hairline mb-12" />
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-inter text-xs uppercase tracking-widest text-stone border-b border-stone-light pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
