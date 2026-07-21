import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={13} className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-taupe-light'} strokeWidth={1} />
        ))}
      </div>
      <span className="font-sans text-xs text-taupe">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-taupe/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold">{title}</span>
        <ChevronDown size={16} className={`text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-taupe/20">
      <div className="text-center mb-10">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">Discover More</p>
        <h3 className="font-serif text-2xl md:text-3xl font-light text-obsidian">You May Also Like</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {related.map(p => (
          <div key={p.id} className="group">
            <Link to={`/product/${p.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-ivory-dark mb-3">
              <img
                alt={p.name}
                data-strk-img-id={`related-${p.imgIds.main}`}
                data-strk-img={`[${p.descId}] [${p.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p id={p.titleId} className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium mb-1">{p.name}</p>
            <p id={p.descId} className="font-sans text-xs text-taupe mb-2">{p.shortDesc}</p>
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm font-semibold text-obsidian">${p.price}</span>
              <button
                onClick={() => addItem(p)}
                className="font-sans text-[10px] tracking-widest uppercase text-gold hover:text-gold-dark transition-colors border-b border-gold/40 pb-0.5"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const thumbImgIds = [
    { id: product.imgIds.main, suffix: 'main' },
    { id: product.imgIds.thumb1, suffix: 't1' },
    { id: product.imgIds.thumb2, suffix: 't2' },
    { id: product.imgIds.hover, suffix: 'hover' },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-taupe hover:text-obsidian transition-colors">
            <ArrowLeft size={13} />
            Back to Shop
          </Link>
          <span className="text-taupe/40">/</span>
          <span className="font-sans text-xs text-taupe capitalize">{product.category}</span>
          <span className="text-taupe/40">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
          {/* Left: Gallery */}
          <div className="flex gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 w-16 md:w-20 flex-shrink-0">
              {thumbImgIds.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`relative aspect-square overflow-hidden bg-ivory-dark border-2 transition-colors ${activeThumb === i ? 'border-gold' : 'border-transparent hover:border-taupe/40'}`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${thumb.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry ${thumb.suffix}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-ivory-dark">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${thumbImgIds[activeThumb].id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2.5 py-1 font-semibold">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3 capitalize">{product.category}</p>
            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-obsidian leading-tight mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-sans text-2xl font-semibold text-obsidian">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <div className="w-10 h-px bg-gold mb-6" />
            <p id={product.descId} className="font-sans text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold mb-3">
                Finish: <span className="text-taupe font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-taupe/40 text-taupe hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold mb-3">Quantity</p>
              <div className="flex items-center border border-taupe/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="btn-outline w-full">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-taupe/20 grid grid-cols-2 gap-3">
              {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-sans text-xs text-taupe">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-obsidian">Materials:</strong> {product.material}</p>
                <p><strong className="text-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
