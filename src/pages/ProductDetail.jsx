import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-ink-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-ink-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-up">
          <div className="text-sm text-ink-muted font-sans leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug, product]);

  useEffect(() => {
    const cleanup1 = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    const cleanup2 = ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    return () => { cleanup1?.(); cleanup2?.(); };
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-20">
        <div className="text-center">
          <p className="font-serif text-3xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase font-sans text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const galleryImages = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]`, ratio: '3x4' },
    { imgId: product.imgId2, query: `gold jewelry worn model [${product.titleId}]`, ratio: '3x4' },
    { imgId: `${product.imgId}-detail`, query: `close up detail [${product.descId}] [${product.titleId}]`, ratio: '3x4' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <nav className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans text-ink-faint">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-muted">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 bg-cream overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-cream overflow-hidden relative">
              {galleryImages.map((img, i) => (
                <img
                  key={i}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pt-4">
            <p className="text-[10px] tracking-widest uppercase font-sans text-ink-faint mb-2">
              {product.categoryLabel}
            </p>

            <h1
              id={product.titleId}
              className="product-name text-2xl lg:text-3xl text-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    style={i < Math.floor(product.rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: '#E0D9D0', color: '#E0D9D0' }}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-obsidian mb-6">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="text-sm text-ink-muted font-sans leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <hr className="border-linen mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-widest uppercase font-sans text-ink-muted mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase font-sans transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-parchment border border-obsidian'
                        : 'bg-transparent text-ink-muted border border-linen hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase font-sans text-ink-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-cream transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center text-sm font-sans text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-cream transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-sans font-semibold transition-all duration-300 mb-3 ${
                added
                  ? 'bg-obsidian text-parchment'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full py-4 text-xs tracking-widest uppercase font-sans font-medium border border-linen text-ink-muted hover:border-obsidian hover:text-obsidian transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="text-[10px] tracking-widest uppercase font-sans text-ink-faint flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To keep your jewelry looking its best: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Standard delivery: 5–8 business days. Express available at checkout.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="border-t border-linen bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-obsidian mb-10 text-center" style={{ fontWeight: 300 }}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
