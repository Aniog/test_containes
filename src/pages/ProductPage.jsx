import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={14}
            fill={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
            stroke={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
          />
        ))}
      </div>
      <span className="font-sans text-sm text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm tracking-wider uppercase font-semibold text-ink">{title}</span>
        {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-sans text-sm text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="bg-parchment py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-ink font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden aspect-[3/4] bg-ivory mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-title-${product.id}`} className="font-serif text-sm tracking-wider uppercase text-ink group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p id={`related-desc-${product.id}`} className="font-sans text-xs text-muted mt-0.5">{product.shortDescription}</p>
              <p className="font-serif text-base text-ink mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setSelectedImg(0);
    window.scrollTo(0, 0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}`, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, id2: `pdp-alt-${product.id}`, titleId: product.titleId, descId: product.descId },
  ];

  return (
    <div className="bg-parchment min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden bg-ivory">
              <img
                data-strk-img-id={images[selectedImg].id}
                data-strk-img={`[${images[selectedImg].descId}] [${images[selectedImg].titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`relative w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImg === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-0.5 font-semibold">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-parchment px-2 py-0.5 font-semibold">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-ink font-light leading-tight mb-2"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-3xl text-ink mb-4">${product.price}</p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="w-full h-px bg-linen my-6" />

            {/* Short description */}
            <p id={product.descId} className="font-sans text-base text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-ink font-semibold mb-3">
                Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wider border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-parchment'
                        : 'border-linen text-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-ink font-semibold mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="flex-1 py-4 bg-obsidian text-parchment font-sans text-xs tracking-widest uppercase font-semibold hover:bg-espresso transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlist(v => !v)}
                aria-label="Add to wishlist"
                className={`w-14 border flex items-center justify-center transition-colors duration-200 ${
                  wishlist ? 'border-gold bg-gold/10 text-gold' : 'border-linen text-muted hover:border-gold hover:text-gold'
                }`}
              >
                <Heart size={18} className={wishlist ? 'fill-gold' : ''} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-xs text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-b border-linen">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-ink">Materials:</strong> {product.material}</p>
                <p><strong className="text-ink">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
