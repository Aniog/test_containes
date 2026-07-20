import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const VARIANTS = ['gold', 'silver'];

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-warm-gray-light/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-charcoal font-sans">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-warm-gray font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const related = products.filter(p => p.id !== product?.id && p.category === product?.category).slice(0, 4);
  const relatedContainerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setAdded(false);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedContainerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-charcoal">Product not found</p>
        <Link to="/shop" className="text-xs tracking-widest uppercase text-gold border-b border-gold font-sans">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { id: product.imgId, imgId2: product.imgId, label: 'Main view' },
    { id: product.imgId2, imgId2: product.imgId2, label: 'Alternate view' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    console.log('[ProductDetail] Added to cart:', product.id, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2 text-xs text-warm-gray font-sans">
          <Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-charcoal capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden bg-parchment">
              <img
                alt={product.name}
                data-strk-img-id={images[activeImg].imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 overflow-hidden bg-parchment flex-shrink-0 transition-all duration-200 ${
                    activeImg === i ? 'ring-1 ring-gold' : 'ring-1 ring-transparent hover:ring-warm-gray-light'
                  }`}
                  aria-label={img.label}
                >
                  <img
                    alt={img.label}
                    data-strk-img-id={`thumb-${img.imgId2}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs tracking-widest uppercase text-gold font-sans mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase text-charcoal leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    style={i < Math.floor(product.rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: 'none', color: '#C4B8A8' }}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-charcoal font-sans mt-4">${product.price}</p>

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm text-warm-gray font-sans leading-relaxed mt-5"
            >
              {product.description}
            </p>

            <div className="w-full h-px bg-warm-gray-light/30 my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-charcoal font-sans mb-3">
                Tone: <span className="text-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {VARIANTS.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase font-sans transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-ink text-parchment'
                        : 'border border-warm-gray-light/50 text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-charcoal font-sans mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-warm-gray-light/50 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-sans text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-medium font-sans transition-all duration-300 ${
                added
                  ? 'bg-charcoal text-parchment'
                  : 'bg-gold text-ink hover:bg-gold-light'
              }`}
            >
              {added ? '✦ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[11px] tracking-wide text-warm-gray font-sans flex items-center gap-1.5">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-parchment py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10">You May Also Like</h2>
            <div ref={relatedContainerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
