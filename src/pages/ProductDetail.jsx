import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ArrowLeft, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.14em] text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone-light transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-inter text-sm text-stone-warm leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);
  const related = products.filter(p => p.id !== id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  // Gallery image IDs for this product
  const galleryImgIds = product ? [
    { id: `pdp-main-${product.id}-a1`, query: `[${product.descId}] [${product.titleId}] gold jewelry product` },
    { id: `pdp-alt1-${product.id}-b2`, query: `[${product.titleId}] gold jewelry detail close-up` },
    { id: `pdp-alt2-${product.id}-c3`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `pdp-alt3-${product.id}-d4`, query: `[${product.titleId}] gold jewelry lifestyle` },
  ] : [];

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-[0.14em] text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-[0.12em] text-stone-light hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-stone-light/40">/</span>
          <Link to="/shop" className="font-inter text-[10px] uppercase tracking-[0.12em] text-stone-light hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-stone-light/40">/</span>
          <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImgIds.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-14 md:h-14 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-divider'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory aspect-square md:aspect-[4/5]">
              {galleryImgIds.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Wishlist */}
              <button className="absolute top-4 right-4 w-9 h-9 bg-ivory/80 backdrop-blur-sm flex items-center justify-center hover:bg-ivory transition-colors">
                <Heart className="w-4 h-4 text-stone-warm hover:text-gold transition-colors" />
              </button>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-charcoal leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}`} />
                ))}
              </div>
              <span className="font-inter text-xs text-stone-warm">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-stone-warm leading-relaxed mb-6 border-b border-divider pb-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-stone-light mb-3">
                Finish: <span className="text-charcoal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-[10px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-transparent text-stone-warm border-divider hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.14em] text-stone-light mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-warm hover:text-charcoal hover:bg-parchment transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-inter text-sm text-charcoal border-x border-divider">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-warm hover:text-charcoal hover:bg-parchment transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-inter text-[11px] uppercase tracking-[0.16em] py-4 transition-all duration-300 mb-3 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-gold text-obsidian hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-divider mt-2">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(item => (
                <span key={item} className="font-inter text-[9px] uppercase tracking-[0.1em] text-stone-light">
                  {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-charcoal font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-divider pt-14">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-2">You May Also Like</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide">
                Complete the Look
              </h2>
            </div>
            <Link to="/shop" className="font-inter text-[11px] uppercase tracking-[0.12em] text-stone-warm hover:text-gold transition-colors border-b border-stone-light/50 pb-0.5 hidden md:block">
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
