import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={{
              fill: i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
              color: i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
            }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-ink-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm tracking-widest uppercase text-ink font-medium">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-ink-muted" /> : <ChevronDown size={16} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-ink-muted leading-relaxed">
          {children}
        </div>
      )}
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
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product.variants]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-detail`, query: `[${product.titleId}] gold jewelry detail close up` },
  ];

  return (
    <div className="bg-cream min-h-screen pt-16 lg:pt-20">
      <div ref={containerRef} className="section-container py-10 lg:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-ink-muted hover:text-gold transition-colors">
            <ArrowLeft size={13} />
            Back to Shop
          </Link>
          <span className="text-ink-faint">/</span>
          <span className="font-sans text-xs text-ink-faint capitalize">{product.category}</span>
          <span className="text-ink-faint">/</span>
          <span className="font-sans text-xs text-ink-faint">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment">
              <img
                data-strk-img-id={`${images[activeImg].id}-main`}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-cream px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-cream px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            <h1
              id={product.titleId}
              className="product-name text-2xl lg:text-3xl"
            >
              {product.name}
            </h1>

            <div className="flex items-center justify-between mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <p className="font-serif text-2xl text-ink">${product.price}</p>
            </div>

            <p
              id={product.descId}
              className="font-sans text-sm text-ink-muted leading-relaxed mt-4"
            >
              {product.description}
            </p>

            <div className="hairline my-6" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                  Tone: <span className="text-gold capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-cream'
                          : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
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
              <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-sm"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-ink-faint text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-gold mt-1">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 lg:mt-28">
          <div className="hairline mb-10" />
          <h2 className="font-serif text-2xl lg:text-3xl text-ink font-light mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-${p.titleId}`}
                  className="product-name text-xs group-hover:text-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-ink mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
