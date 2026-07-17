import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-mink/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs tracking-widest2 uppercase text-velvet group-hover:text-champagne transition-colors">
          {title}
        </span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-luxury ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ current }) {
  const related = products.filter(p => p.id !== current.id).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 border-t border-mink/30">
      <div className="mb-8">
        <p className="section-label mb-2">You May Also Like</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(p => (
          <Link key={p.id} to={`/product/${p.slug}`} className="group block">
            <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`related-${p.imgId}`}
                data-strk-img={`[related-${p.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
            </div>
            <span id={`related-${p.titleId}`} className="product-name text-xs block mb-1">{p.name}</span>
            <span className="font-sans text-sm font-semibold text-velvet">${p.price}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQty(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAdd = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `pdp-alt-${product.img2Id}`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `pdp-detail-${product.imgId}-d`, query: `[${product.titleId}] jewelry detail close-up` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-stone hover:text-champagne transition-colors">
            <ArrowLeft size={12} />
            Back to Shop
          </Link>
          <span className="text-mink/40 text-xs">/</span>
          <span className="font-sans text-xs text-stone/60">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 w-16 flex-shrink-0">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`thumb-${i}-${thumb.id}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb]?.query || `[${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-champagne text-velvet font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-velvet text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">New</span>
              )}
            </div>

            {/* Name */}
            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl tracking-widest2 uppercase text-velvet mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
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
              <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velvet mb-6">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">
                  Finish: <span className="text-velvet">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-champagne bg-champagne text-velvet'
                          : 'border-mink/40 text-stone hover:border-champagne hover:text-champagne'
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
              <p className="font-sans text-xs tracking-widest2 uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-mink/40 w-fit">
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

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary w-full text-center mb-3 transition-all ${added ? 'bg-gold' : ''}`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <p className="font-sans text-xs text-stone/60 text-center mb-8">
              Free shipping on orders over $50 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-b border-mink/30">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">Material: {product.material}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>· 18K gold plated over hypoallergenic brass</li>
                  <li>· Nickel-free, lead-free</li>
                  <li>· Avoid contact with water, perfume, and lotions</li>
                  <li>· Store in the provided pouch when not wearing</li>
                  <li>· Clean gently with a soft dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>· Free worldwide shipping on orders over $50</li>
                  <li>· Standard delivery: 5–8 business days</li>
                  <li>· Express delivery: 2–3 business days</li>
                  <li>· 30-day hassle-free returns</li>
                  <li>· Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts current={product} />
      </div>
    </div>
  );
}
