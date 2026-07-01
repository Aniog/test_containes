import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Heart, ChevronDown, ChevronLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-mist">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <div className="font-sans text-sm text-stone leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-stone">Product not found</p>
        <Link to="/shop" className="font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-cream transition-all duration-300">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter(p => product.relatedIds?.includes(p.id));

  const galleryImages = [
    { id: `pdp-main-${product.id}-a`, imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: `pdp-alt-${product.id}-b`, imgId: product.img2Id, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `pdp-detail-${product.id}-c`, imgId: `pdp-detail-${product.id}-c1d2`, query: `[${product.titleId}] gold jewelry detail close up` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === idx ? 'border-gold' : 'border-transparent hover:border-mist'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={img.imgId}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory relative">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-gold text-cream font-sans text-[10px] tracking-widest uppercase px-3 py-1">
                  {product.badge}
                </span>
              )}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={galleryImages[activeImg].imgId}
                data-strk-img={galleryImages[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-widest2 uppercase leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-mist'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl text-velvet">${product.price}</span>
              {product.originalPrice && (
                <span className="font-sans text-base text-stone line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="hairline mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">
                Finish: <span className="text-velvet">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-velvet text-cream border-velvet'
                        : 'border-mist text-stone hover:border-gold hover:text-gold'
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
              <div className="flex items-center border border-mist w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-velvet">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                  addedFeedback
                    ? 'bg-bark text-cream'
                    : 'bg-gold text-cream hover:bg-gold-light'
                }`}
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                {addedFeedback ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWishlisted(v => !v)}
                aria-label="Wishlist"
                className="w-14 border border-mist flex items-center justify-center hover:border-gold transition-colors duration-300"
              >
                <Heart
                  size={16}
                  strokeWidth={1.5}
                  className={wishlisted ? 'fill-gold text-gold' : 'text-stone'}
                />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: Truck, text: 'Free worldwide shipping on all orders' },
                { icon: RotateCcw, text: '30-day hassle-free returns' },
                { icon: Shield, text: '18K gold plated · Hypoallergenic' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  <span className="font-sans text-xs text-stone">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velvet">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velvet">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-mist bg-ivory py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
