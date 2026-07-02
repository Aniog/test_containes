import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-muted hover:text-gold transition-colors">
            <ArrowLeft size={12} /> Shop
          </Link>
          <span className="text-sand">/</span>
          <span className="font-sans text-xs text-stone capitalize">{product.category}</span>
          <span className="text-sand">/</span>
          <span className="font-sans text-xs text-obsidian uppercase tracking-wider">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <hr className="divider max-w-7xl mx-auto" />

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-3">
            You May Also Like
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
            Complete the Look
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = [
    { id: product.imgId, id2: product.imgId2, query: `[${product.descId}] [${product.titleId}] gold jewelry editorial` },
    { id: product.imgId2, id2: product.imgId, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-3`, id2: product.imgId, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-4`, id2: product.imgId, query: `[${product.titleId}] gold jewelry lifestyle flat lay` },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
              activeIdx === i ? 'border-gold' : 'border-transparent hover:border-sand'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.id}`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="80"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`View ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square md:aspect-[4/5] overflow-hidden bg-linen">
        <img
          data-strk-img-id={`main-${images[activeIdx].id}`}
          data-strk-img={images[activeIdx].query}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Category */}
      <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
        {product.category}
      </p>

      {/* Name */}
      <h1
        id={product.titleId}
        className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-obsidian font-light leading-tight"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
              stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD0'}
            />
          ))}
        </div>
        <span className="font-sans text-sm text-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif text-3xl text-obsidian">${product.price}</p>

      <hr className="divider" />

      {/* Short description */}
      <p
        id={product.descId}
        className="font-sans text-sm text-stone leading-relaxed"
      >
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium mb-3">
          Finish: <span className="text-gold">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`font-sans text-xs tracking-wider uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${
                selectedVariant === v
                  ? 'bg-obsidian text-ivory border-obsidian'
                  : 'bg-transparent text-stone border-sand hover:border-obsidian hover:text-obsidian'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-sand w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="px-4 py-3 text-stone hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="px-5 font-sans text-sm text-obsidian min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="px-4 py-3 text-stone hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 font-sans text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-3 transition-all duration-300 ${
          added
            ? 'bg-obsidian text-ivory'
            : 'bg-gold text-ivory hover:bg-gold-dark'
        }`}
      >
        <ShoppingBag size={16} />
        {added ? 'Added to Cart!' : 'Add to Cart'}
      </button>

      {/* Trust signals */}
      <div className="flex flex-wrap gap-4 pt-2">
        {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
          <span key={t} className="font-sans text-[11px] tracking-wider text-muted flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gold inline-block" />
            {t}
          </span>
        ))}
      </div>

      <hr className="divider" />

      {/* Accordions */}
      <div className="flex flex-col gap-0">
        <Accordion title="Description" defaultOpen>
          <p className="font-sans text-sm text-stone leading-relaxed">{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="flex flex-col gap-3">
            <p className="font-sans text-sm text-stone leading-relaxed">
              <strong className="font-medium text-obsidian">Materials:</strong> {product.materials}
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed">
              <strong className="font-medium text-obsidian">Care:</strong> {product.care}
            </p>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p className="font-sans text-sm text-stone leading-relaxed">{product.shipping}</p>
        </Accordion>
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-medium text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
