import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink">{title}</span>
        {open ? <ChevronUp size={16} className="text-velmora-muted flex-shrink-0" /> : <ChevronDown size={16} className="text-velmora-muted flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-muted font-sans leading-relaxed animate-fadeInFast">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink mb-10 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-stone aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                id={`related-${product.titleId}`}
                className="font-serif text-xs uppercase tracking-widest text-velmora-ink group-hover:text-velmora-gold transition-colors mb-1"
              >
                {product.name}
              </h3>
              <p className="text-sm font-sans font-semibold text-velmora-ink">${product.price}</p>
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
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setActiveImg(0);
    setQuantity(1);
    setSelectedVariant('Gold Tone');
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-xs uppercase tracking-widest text-velmora-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgSlots = [
    { imgId: `shop-${product.imgId}`, descId: `shop-${product.descId}`, titleId: `shop-${product.titleId}`, suffix: 'main' },
    { imgId: `shop-alt-${product.imgId2}`, descId: `shop-${product.descId}`, titleId: `shop-${product.titleId}`, suffix: 'alt' },
  ];

  return (
    <div className="bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-0">
        <nav className="flex items-center gap-2 mb-8 text-xs font-sans text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink uppercase tracking-wider">{product.name}</span>
        </nav>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden bg-velmora-stone aspect-[4/5]">
              {imgSlots.map((slot, idx) => (
                <img
                  key={idx}
                  data-strk-img-id={slot.imgId}
                  data-strk-img={`[${slot.descId}] [${slot.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === idx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {imgSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative overflow-hidden bg-velmora-stone aspect-square w-16 md:w-20 flex-shrink-0 border-2 transition-colors ${activeImg === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'}`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`${slot.imgId}-thumb`}
                    data-strk-img={`[${slot.titleId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] uppercase tracking-widest font-sans bg-velmora-obsidian text-white px-2.5 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] uppercase tracking-widest font-sans bg-velmora-gold text-velmora-obsidian px-2.5 py-1">New</span>
              )}
            </div>

            <h1
              id={`shop-${product.titleId}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest font-light text-velmora-ink mb-2"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-border'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-xs text-velmora-muted font-sans">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-sans text-2xl font-semibold text-velmora-ink mb-5">${product.price}</p>

            <p
              id={`shop-${product.descId}`}
              className="text-sm text-velmora-muted font-sans leading-relaxed mb-7"
            >
              {product.description}
            </p>

            <div className="divider mb-7" />

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-3">
                Finish: <span className="text-velmora-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest font-sans border transition-all duration-200 ${selectedVariant === v ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian font-semibold' : 'border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-7">
              <p className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center text-velmora-muted hover:text-velmora-gold hover:bg-velmora-stone transition-colors" aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-sans font-semibold text-velmora-ink">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="w-11 h-11 flex items-center justify-center text-velmora-muted hover:text-velmora-gold hover:bg-velmora-stone transition-colors" aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-semibold py-5 flex items-center justify-center gap-3 hover:bg-velmora-gold-dark transition-colors duration-200 mb-3"
            >
              <ShoppingBag size={16} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-velmora-border text-velmora-muted text-xs uppercase tracking-widest font-semibold py-4 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200">
              Add to Wishlist
            </button>

            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-velmora-border">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest font-sans text-velmora-muted text-center">{t}</span>
              ))}
            </div>

            <div className="mt-8">
              <Accordion title="Description"><p>{product.description}</p></Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-ink">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-ink">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
}
