import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-dark">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-text-primary">{title}</span>
        {open ? <ChevronUp size={14} className="text-text-muted" /> : <ChevronDown size={14} className="text-text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-text-secondary font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Stable image IDs derived from product id — thumbnails use product imgId directly
  const thumb0ImgId = product.imgId;
  const thumb1ImgId = product.imgId2;

  return (
    <main className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 font-sans text-xs text-text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              <button
                onClick={() => setActiveImg(0)}
                className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${activeImg === 0 ? 'border-gold' : 'border-transparent'}`}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 1`}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[pdp-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImg(1)}
                className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${activeImg === 1 ? 'border-gold' : 'border-transparent'}`}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 2`}
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Main image — both always in DOM, toggled by opacity */}
            <div className="flex-1 relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === 0 ? 'opacity-100' : 'opacity-0'}`}
              />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} alternate`}
                data-strk-img-id={product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === 1 ? 'opacity-100' : 'opacity-0'}`}
              />
              {product.tags?.includes('bestseller') && (
                <span className="absolute top-4 left-4 bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1 z-10">
                  Bestseller
                </span>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
              {product.category}
            </p>

            <h1 id={`pdp-name-${product.id}`} className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-text-primary font-light mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-taupe-light'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-3xl text-text-primary mb-5">${product.price}</p>

            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-text-secondary font-light leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="w-full h-px bg-ivory-dark mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-text-muted mb-3">
                Finish: <span className="text-text-primary">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-text-secondary border-ivory-dark hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-text-muted mb-3">Quantity</p>
              <div className="flex items-center border border-ivory-dark w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-text-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 transition-all duration-400 ${
                added
                  ? 'bg-gold-dark text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-obsidian-soft'
              }`}
            >
              {added ? (
                <>
                  <Check size={14} />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="font-medium text-text-primary">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-text-primary">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-ivory-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Discover More</p>
            <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-light">You May Also Like</h2>
          </div>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

