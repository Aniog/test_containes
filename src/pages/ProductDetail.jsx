import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            style={s <= Math.round(rating) ? { color: '#c49a45', fill: '#c49a45' } : { color: '#d6c5b0', fill: 'none' }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velvet-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-mink leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velvet-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-obsidian font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-velvet-100 mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span id={`related-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
              <p className="font-serif text-sm text-obsidian group-hover:text-gold transition-colors">{product.name}</p>
              <p className="font-sans text-sm text-stone mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-mink mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId,        query: `[pd-desc-${product.id}] [pd-title-${product.id}]`,                  label: 'Main' },
    { id: product.imgId2,       query: `[pd-title-${product.id}] gold jewelry worn model editorial`,         label: 'Worn' },
    { id: `${product.imgId}-c`, query: `[pd-desc-${product.id}] gold jewelry detail close up macro`,        label: 'Detail' },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Hidden text anchors for image queries */}
      <span id={`pd-title-${product.id}`} className="sr-only">{product.name}</span>
      <span id={`pd-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-mink">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Gallery */}
          <div className="space-y-3">
            {/* Main image — all 3 pre-rendered, only active is visible */}
            <div className="aspect-[4/5] overflow-hidden bg-velvet-100 relative">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} ${img.label}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  aria-label={`${product.name} view ${i + 1}`}
                  className={`aspect-square overflow-hidden bg-velvet-100 border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-velvet-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block font-sans text-[10px] tracking-widest uppercase bg-gold/10 text-gold px-3 py-1 mb-4 self-start">
                {product.badge}
              </span>
            )}

            <h1
              className="font-serif text-3xl md:text-4xl text-obsidian tracking-wide uppercase font-light leading-tight mb-2"
            >
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-obsidian mb-4">${product.price}</p>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <hr className="divider my-6" />

            <p className="font-sans text-sm text-mink leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-cream'
                        : 'border-velvet-300 text-mink hover:border-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:bg-velvet-100 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:bg-velvet-100 transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian text-cream font-sans text-xs tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-stone text-center mb-8">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
}
