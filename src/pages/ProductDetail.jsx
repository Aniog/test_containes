import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/common/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-wider uppercase text-obsidian">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-stone-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-stone-600 leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const relatedProducts = products.filter(p => product.relatedIds?.includes(p.id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
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

  const images = [
    { id: product.imgId, id2: `${product.imgId}-main`, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, id2: `${product.imgId2}-alt`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-3`, id2: `${product.imgId}-3-alt`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-4`, id2: `${product.imgId}-4-alt`, query: `[${product.titleId}] gold jewelry lifestyle` },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-xs text-stone-400 hover:text-obsidian transition-colors">Home</Link>
          <span className="text-stone-300 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-stone-400 hover:text-obsidian transition-colors">Shop</Link>
          <span className="text-stone-300 text-xs">/</span>
          <span className="font-manrope text-xs text-stone-600">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb-${i}`}
                    data-strk-img={img.query}
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-stone-100 relative">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={`${img.id}-main-${i}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Hidden text for image queries */}
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.shortDesc}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4">
              {product.tags?.map(tag => (
                <span key={tag} className="font-manrope text-[10px] tracking-wider uppercase bg-stone-100 text-stone-500 px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="font-cormorant text-3xl lg:text-4xl uppercase tracking-product text-obsidian font-medium leading-tight">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-4">
              <span className="font-cormorant text-3xl font-light text-obsidian">${product.price}</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                      stroke={i < Math.floor(product.rating) ? 'none' : '#D4C9B8'}
                    />
                  ))}
                </div>
                <span className="font-manrope text-xs text-stone-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="h-px bg-stone-200 my-6" />

            {/* Description */}
            <p className="font-manrope text-sm text-stone-600 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-manrope text-xs tracking-wider uppercase text-stone-500 mb-3">
                  Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs tracking-wider uppercase px-5 py-2.5 border transition-colors duration-200 capitalize ${
                        selectedVariant === v
                          ? 'border-obsidian bg-obsidian text-ivory'
                          : 'border-stone-300 text-stone-600 hover:border-obsidian hover:text-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-manrope text-xs tracking-wider uppercase text-stone-500 mb-3">Quantity</p>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 font-manrope text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${
                added
                  ? 'bg-stone-700 text-ivory'
                  : 'bg-champagne text-obsidian hover:bg-champagne-dark'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex items-center justify-center gap-6">
              <span className="font-manrope text-xs text-stone-400">Free Shipping</span>
              <span className="w-px h-3 bg-stone-200" />
              <span className="font-manrope text-xs text-stone-400">30-Day Returns</span>
              <span className="w-px h-3 bg-stone-200" />
              <span className="font-manrope text-xs text-stone-400">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone-200">
              <Accordion title="Description">{product.details}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2 font-medium text-obsidian">{product.materials}</span>
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {relatedProducts.length > 0 && (
        <div className="bg-stone-100 py-16 lg:py-20">
          <div ref={relatedRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
