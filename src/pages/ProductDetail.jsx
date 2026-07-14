import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            strokeWidth={1}
            style={{
              color: s <= Math.round(rating) ? '#C9A96E' : '#E8DFD0',
              fill: s <= Math.round(rating) ? '#C9A96E' : 'none',
            }}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-sans tracking-widest uppercase font-medium text-obsidian">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-sm font-sans text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const related = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-display text-2xl text-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-xs font-sans tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, id2: `${product.imgId}-thumb` },
    { id: product.imgId2, id2: `${product.imgId2}-thumb` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 text-xs font-sans text-muted hover:text-gold transition-colors duration-200">
            <ArrowLeft size={12} />
            Shop
          </Link>
          <span className="text-xs text-whisper">/</span>
          <span className="text-xs font-sans text-muted capitalize">{product.category}</span>
          <span className="text-xs text-whisper">/</span>
          <span className="text-xs font-sans text-obsidian">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? 'border-gold' : 'border-sand hover:border-muted'}`}
                >
                  <img
                    data-strk-img-id={img.id2}
                    data-strk-img={`[${product.titleId}] gold jewelry thumbnail`}
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
            <div className="flex-1 overflow-hidden bg-linen aspect-[3/4]">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] font-sans tracking-widest uppercase bg-obsidian text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] font-sans tracking-widest uppercase bg-gold text-obsidian px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 id={product.titleId} className="product-name text-2xl lg:text-3xl text-obsidian mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-display text-3xl font-light text-obsidian mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="mb-6">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-muted leading-relaxed mb-8 border-b border-sand pb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans tracking-widest uppercase text-obsidian font-medium mb-3">
                Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans tracking-wide border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-sand text-muted hover:border-muted hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans tracking-widest uppercase text-obsidian font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-sans text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-gold text-obsidian text-xs tracking-widest uppercase font-sans font-semibold py-4 flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 mb-3"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button className="w-full border border-obsidian text-obsidian text-xs tracking-widest uppercase font-sans font-medium py-4 hover:bg-obsidian hover:text-ivory transition-all duration-300">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[10px] font-sans text-muted tracking-wide flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-obsidian">Materials:</strong> {product.materials}
                <br /><br />
                <strong className="text-obsidian">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 lg:mt-28">
          <div className="divider mb-12" />
          <h2 className="font-display text-3xl lg:text-4xl font-light text-obsidian mb-10 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="overflow-hidden bg-linen aspect-[3/4] mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="product-name text-xs text-obsidian mb-1">{p.name}</p>
                <p id={`related-${p.id}-desc`} className="sr-only">{p.shortDescription}</p>
                <p className="font-sans text-sm text-muted">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
