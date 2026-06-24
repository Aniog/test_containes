import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-gold/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-muted flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-velmora-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-muted leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { imgId: product.imgId, thumbId: `thumb-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { imgId: product.imgId2, thumbId: `thumb-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn close up` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[11px] text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text">{product.name}</span>
        </div>
      </div>

      {/* Hidden text for image queries */}
      <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
      <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden bg-velmora-blush">
              {images.map((img, i) => (
                <img
                  key={img.imgId}
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.thumbId}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 overflow-hidden bg-velmora-blush border-2 transition-all duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-gold/40'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={img.thumbId}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex gap-2">
              {product.tags?.includes('bestseller') && (
                <span className="text-[9px] font-semibold tracking-[0.15em] uppercase bg-velmora-gold text-velmora-obsidian px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="text-[9px] font-semibold tracking-[0.15em] uppercase bg-velmora-obsidian text-velmora-cream px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              className="text-2xl md:text-3xl font-medium tracking-[0.15em] uppercase text-velmora-text leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {product.name}
            </h1>

            {/* Rating + Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-gold/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-velmora-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <span className="text-xl font-medium text-velmora-text">${product.price}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-velmora-muted leading-relaxed border-t border-velmora-gold/20 pt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-text mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-gold/30 text-velmora-text hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-text mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-gold/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-text hover:bg-velmora-blush transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-text hover:bg-velmora-blush transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-cream'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-[11px] text-velmora-muted pt-2">
              <span>✦ Free shipping over $50</span>
              <span>✦ 30-day returns</span>
              <span>✦ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-text font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-text font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free standard shipping on orders over $50. Express shipping available at checkout.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-velmora-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2
            className="text-2xl md:text-3xl font-light text-velmora-text mb-10"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            You May Also Like
          </h2>
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
