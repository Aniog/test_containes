import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={13} className={i <= Math.round(rating) ? 'text-champagne fill-champagne' : 'text-stone/30'} />
        ))}
      </div>
      <span className="font-sans text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-champagne/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs uppercase tracking-[0.12em] font-medium text-charcoal group-hover:text-champagne transition-colors">
          {title}
        </span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      <div className={`overflow-hidden transition-all duration-350 ease-out ${open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <div className="font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const imgIds = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <nav className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-stone">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name-${product.id}] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment relative">
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[9px] uppercase tracking-widest font-semibold bg-champagne text-obsidian px-2.5 py-1.5">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-champagne mb-2">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-charcoal mb-3 leading-snug"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="my-5 flex items-baseline gap-3">
              <span className="font-sans text-2xl font-medium text-charcoal">${product.price}</span>
              <span className="font-sans text-xs text-stone/60">Free shipping worldwide</span>
            </div>

            <div className="w-full h-px bg-champagne/20 mb-6" />

            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-stone leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal font-medium mb-3">
                  Tone: <span className="text-champagne">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs uppercase tracking-widest font-medium px-5 py-2.5 border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'border-champagne bg-champagne text-obsidian'
                          : 'border-champagne/30 text-stone hover:border-champagne hover:text-charcoal'
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
              <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-champagne/30">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="flex-1 bg-champagne text-obsidian font-sans text-xs uppercase tracking-[0.15em] font-semibold py-4 flex items-center justify-center gap-2 hover:bg-champagne-dark transition-colors duration-300"
              >
                <ShoppingBag size={14} strokeWidth={2} />
                Add to Cart
              </button>
              <button
                aria-label="Save to wishlist"
                className="w-14 border border-champagne/30 text-stone hover:border-champagne hover:text-champagne transition-colors flex items-center justify-center"
              >
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 py-4 border-y border-champagne/15">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-stone/70">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-charcoal font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 border-t border-champagne/15">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3 relative">
                <img
                  data-strk-img-id={`related-${p.id}-img-${p.imgId}`}
                  data-strk-img={`[related-${p.id}-title] gold jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 id={`related-${p.id}-title`} className="font-serif text-sm uppercase tracking-widest text-charcoal group-hover:text-champagne transition-colors mb-1">
                {p.name}
              </h3>
              <p className="font-sans text-sm font-medium text-charcoal">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
