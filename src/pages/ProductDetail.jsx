import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={13}
            style={i <= Math.round(rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#D4C9B5' }}
          />
        ))}
      </div>
      <span className="text-xs text-velmora-mist font-sans">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-stone/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-velmora-ink font-sans">{title}</span>
        {open ? <ChevronUp size={14} className="text-velmora-mist" /> : <ChevronDown size={14} className="text-velmora-mist" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-mist font-sans leading-relaxed animate-fadeIn">
          {children}
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
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (relatedRef.current) ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-velmora-ink mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-gold font-sans border-b border-velmora-gold/40 pb-0.5">
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

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  const images = [
    { imgId: product.imgId, titleId: product.titleId, descId: product.descId },
    { imgId: product.imgId2, titleId: product.titleId, descId: product.descId },
  ];

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-mist font-sans">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-cream aspect-square">
              {images.map((img, idx) => (
                <img
                  key={img.imgId}
                  data-strk-img-id={img.imgId}
                  data-strk-img={`[${img.descId}] [${img.titleId}] gold jewelry product`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeImg === idx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-20 h-20 overflow-hidden bg-velmora-cream border-2 transition-colors ${activeImg === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${img.titleId}] gold jewelry`}
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

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-velmora-gold text-velmora-obsidian text-[9px] tracking-widest uppercase font-medium px-2 py-0.5 font-sans">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-velmora-charcoal text-velmora-white text-[9px] tracking-widest uppercase font-medium px-2 py-0.5 font-sans">
                  New
                </span>
              )}
            </div>

            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-medium tracking-[0.12em] uppercase text-velmora-ink mb-2"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-2xl font-semibold text-velmora-ink">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p
              id={product.descId}
              className="text-sm text-velmora-mist font-sans leading-relaxed mb-6 border-b border-velmora-stone/20 pb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-3 font-sans">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs tracking-wider uppercase font-medium font-sans border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-velmora-gold border-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/40 text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-3 font-sans">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-gold transition-colors border-r border-velmora-stone/30"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-ink font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-gold transition-colors border-l border-velmora-stone/30"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-[0.25em] uppercase font-medium font-sans transition-all duration-300 ${
                added
                  ? 'bg-velmora-charcoal text-velmora-gold border border-velmora-gold'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-velmora-mist font-sans">
              <span>✦ Free worldwide shipping</span>
              <span>✦ 30-day returns</span>
              <span>✦ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-ink">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-ink">Care:</strong> {product.care}</p>
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
      <div ref={relatedRef} className="bg-velmora-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink tracking-wide">
              You May Also Like
            </h2>
            <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="relative overflow-hidden bg-velmora-linen aspect-square mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-title-${p.id}`} className="font-serif text-xs tracking-[0.12em] uppercase font-medium text-velmora-ink">
                  {p.name}
                </p>
                <p id={`related-desc-${p.id}`} className="text-xs text-velmora-mist font-sans mt-0.5">{p.shortDescription}</p>
                <p className="text-sm font-semibold text-velmora-ink font-sans mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
