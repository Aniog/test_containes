import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
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
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-champagne">← Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 border-b border-mist">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal uppercase tracking-wider">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Accordions */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="max-w-2xl border-t border-mist">
          <Accordion title="Description" defaultOpen>
            <p className="font-sans text-sm text-stone leading-relaxed">{product.description}</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <div className="space-y-3">
              <p className="font-sans text-sm text-stone leading-relaxed"><strong className="text-charcoal font-medium">Materials:</strong> {product.materials}</p>
              <p className="font-sans text-sm text-stone leading-relaxed"><strong className="text-charcoal font-medium">Care:</strong> {product.care}</p>
            </div>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p className="font-sans text-sm text-stone leading-relaxed">{product.shipping}</p>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-parchment py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-2">You May Also Like</p>
            <h2 className="font-serif text-3xl text-charcoal font-light">Complete Your Look</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGallery({ product }) {
  const [activeImg, setActiveImg] = useState(0);
  const galleryRef = useRef(null);

  const images = [
    { id: `${product.imgId}-gallery-0`, imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId2}-gallery-1`, imgId: product.imgId2, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-gallery-2`, imgId: `${product.imgId}-alt2`, query: `[${product.titleId}] gold jewelry worn model` },
  ];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  return (
    <div ref={galleryRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveImg(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
              activeImg === i ? 'border-champagne' : 'border-transparent hover:border-mist'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.imgId}-${i}`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="120"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`View ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden relative">
        {images.map((img, i) => (
          <img
            key={img.id}
            data-strk-img-id={img.imgId}
            data-strk-img={img.query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`Product view ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
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
    <div className="flex flex-col">
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {product.tags.includes('bestseller') && (
          <span className="bg-champagne text-obsidian font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
            Bestseller
          </span>
        )}
        {product.tags.includes('new') && (
          <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
            New
          </span>
        )}
      </div>

      {/* Name */}
      <h1 id={product.titleId} className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-charcoal font-light leading-tight mb-3">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className={i < Math.floor(product.rating) ? 'text-champagne fill-champagne' : 'text-mist'} />
          ))}
        </div>
        <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <p className="font-serif text-3xl text-charcoal mb-6">${product.price}</p>

      {/* Short description */}
      <p id={product.descId} className="font-sans text-sm text-stone leading-relaxed mb-8 border-b border-mist pb-8">
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">
          Finish: <span className="text-stone font-normal normal-case tracking-normal">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`font-sans text-xs uppercase tracking-widest font-medium px-5 py-2.5 border transition-colors duration-200 ${
                selectedVariant === v
                  ? 'bg-champagne border-champagne text-obsidian'
                  : 'border-mist text-stone hover:border-champagne hover:text-champagne'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Quantity</p>
        <div className="flex items-center border border-mist w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors font-sans text-lg"
          >
            −
          </button>
          <span className="w-12 text-center font-sans text-sm text-charcoal">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors font-sans text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full font-sans text-xs uppercase tracking-widest font-semibold py-4 flex items-center justify-center gap-3 transition-colors duration-300 ${
          added
            ? 'bg-charcoal text-ivory'
            : 'bg-champagne text-obsidian hover:bg-champagne-dark'
        }`}
      >
        <ShoppingBag size={15} />
        {added ? 'Added to Cart ✓' : 'Add to Cart'}
      </button>

      {/* Trust signals */}
      <div className="mt-6 pt-6 border-t border-mist grid grid-cols-2 gap-3">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
          <div key={t} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-champagne flex-shrink-0" />
            <span className="font-sans text-xs text-stone">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-mist">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold">{title}</span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}
