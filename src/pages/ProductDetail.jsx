import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-gold/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted flex-shrink-0" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-manrope text-sm text-velmora-text-mid leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (relatedRef.current) ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-velmora-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { id: product.imgId2, query: `[${product.titleId}] worn jewelry model close up` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] gold jewelry detail texture` },
    { id: `${product.imgId}-4`, query: `[${product.titleId}] gold jewelry flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-velmora-cream min-h-screen pt-16 md:pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-text-muted/40 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-text-muted/40 text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-text-mid">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-velmora-linen" style={{ aspectRatio: '3/4' }}>
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={activeImg !== i ? { position: 'absolute', pointerEvents: 'none' } : {}}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-velmora-obsidian text-velmora-gold font-manrope text-[9px] tracking-widest-sm uppercase px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] tracking-widest-sm uppercase px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest-sm text-velmora-obsidian leading-tight mb-2"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            <div className="hairline mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid mb-3">
                Finish: <span className="text-velmora-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-widest-sm uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                        : 'border-velmora-gold/30 text-velmora-text-mid hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-gold/20 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-manrope text-xs tracking-widest-md uppercase py-4 transition-all duration-300 mb-3 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-gold'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-velmora-obsidian/20 text-velmora-text-mid font-manrope text-xs tracking-widest-md uppercase py-4 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-widest-sm uppercase text-velmora-text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-velmora-gold rounded-full" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-obsidian">Material:</strong> {product.material}</p>
                <p><strong className="text-velmora-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-velmora-linen py-16 md:py-20" ref={relatedRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian mb-10 md:mb-12">
            You May Also Like
          </h2>
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
