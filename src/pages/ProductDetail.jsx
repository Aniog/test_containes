import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

const variants = ['Gold Tone', 'Silver Tone'];

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-mist/40">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors duration-300">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-warm-gray" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-warm-gray" />
        }
      </button>
      {open && (
        <div className="pb-6 font-sans text-sm text-velmora-warm-gray leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn on model` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-warm-gray hover:text-velmora-gold transition-colors duration-300"
        >
          <ArrowLeft size={12} strokeWidth={2} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 aspect-square bg-velmora-cream overflow-hidden border-2 transition-all duration-300 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-mist'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.map(tag => (
                <span key={tag} className="font-sans text-[9px] tracking-widest uppercase bg-velmora-gold/20 text-velmora-gold-dark px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-velmora-ink font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-mist/40'}
                    fill="currentColor"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velmora-ink mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-velmora-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">
                Finish: <span className="text-velmora-warm-gray normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-mist/60 text-velmora-warm-gray hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-mist/60 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-ink transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-velmora-ink">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-ink transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-xs tracking-widest uppercase py-5 transition-all duration-300 font-semibold ${
                added
                  ? 'bg-velmora-stone text-velmora-pale'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-velmora-warm-gray flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-velmora-gold mt-1">—</span>
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
      </div>

      {/* Related products */}
      <div className="bg-velmora-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-velmora-ink mb-10">
            You May Also Like
          </h2>
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
