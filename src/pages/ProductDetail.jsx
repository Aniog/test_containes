import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet">{title}</span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant(product.variants[0]);
    setQty(1);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const images = [
    { id: `pdp-main-${product.id}-a`, imgId: `pdp-img1-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-hover-${product.id}-b`, imgId: `pdp-img2-${product.img2Id}`, query: `[pdp-title-${product.id}] gold jewelry worn model`, ratio: '3x4' },
    { id: `pdp-detail-${product.id}-c`, imgId: `pdp-img3-${product.id}-detail`, query: `[pdp-desc-${product.id}] gold jewelry detail close up`, ratio: '3x4' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-stone hover:text-champagne transition-colors">
            <ArrowLeft size={12} />
            Back to Shop
          </Link>
          <span className="text-blush">/</span>
          <span className="font-sans text-xs text-stone capitalize">{product.category}</span>
          <span className="text-blush">/</span>
          <span className="font-sans text-xs text-velvet">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={img.imgId}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id={images[activeImg].imgId + '-main'}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-champagne text-velvet px-2 py-0.5">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-velvet text-ivory px-2 py-0.5">New</span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl text-velvet uppercase tracking-widest font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'} className={i < Math.floor(product.rating) ? 'text-champagne' : 'text-blush'} />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velvet mb-6">${product.price}</p>

            {/* Short desc */}
            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet mb-3">
                Tone: <span className="text-champagne capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velvet bg-velvet text-ivory'
                        : 'border-blush text-stone hover:border-velvet hover:text-velvet'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet mb-3">Quantity</p>
              <div className="flex items-center border border-blush w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-velvet">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, qty)}
              className="w-full bg-velvet text-ivory font-sans text-xs tracking-widest uppercase py-5 hover:bg-champagne hover:text-velvet transition-all duration-300 mb-3"
            >
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-stone text-center mb-8">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-champagne mt-1">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>We offer free worldwide shipping on all orders. Standard delivery takes 3–7 business days. Express options available at checkout.</p>
                <p className="mt-2">Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-blush">
        <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
