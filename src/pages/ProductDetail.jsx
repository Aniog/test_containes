import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={{ fill: i <= Math.round(rating) ? '#C9A96E' : '#D4C9B5', color: i <= Math.round(rating) ? '#C9A96E' : '#D4C9B5' }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-button uppercase text-obsidian font-medium">{title}</span>
        {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
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
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: `pdp-main-${product.id}-img1`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-main-${product.id}-img2`, query: `[pdp-title-${product.id}] gold jewelry detail close up` },
    { id: `pdp-main-${product.id}-img3`, query: `[pdp-title-${product.id}] jewelry worn model editorial` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-muted hover:text-gold transition-colors">
            <ArrowLeft size={12} />
            Back to Shop
          </Link>
          <span className="text-sand">/</span>
          <span className="font-sans text-xs text-muted capitalize">{product.category}</span>
          <span className="text-sand">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-obsidian font-sans text-[9px] tracking-button uppercase px-2.5 py-1 font-medium">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('gift') && (
                  <span className="bg-obsidian text-parchment font-sans text-[9px] tracking-button uppercase px-2.5 py-1">
                    Gift Ready
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-title-${product.id}`} className="hidden">{product.name}</span>
            <span id={`pdp-desc-${product.id}`} className="hidden">{product.shortDescription}</span>

            <p className="font-sans text-xs tracking-button uppercase text-gold mb-2 capitalize">
              {product.category}
            </p>
            <h1 className="font-sans text-sm md:text-base tracking-product uppercase text-obsidian font-medium mb-3 leading-relaxed">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-serif text-3xl text-obsidian">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="hairline mb-5" />

            <p className="font-sans text-sm text-stone leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-button uppercase text-obsidian mb-3">
                Tone: <span className="text-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-button uppercase px-4 py-2 border transition-all duration-200 capitalize ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-sand text-stone hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-button uppercase text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-gold text-obsidian font-sans text-xs tracking-button uppercase py-4 hover:bg-gold-light transition-colors duration-200 font-medium mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className="w-full border border-obsidian text-obsidian font-sans text-xs tracking-button uppercase py-4 hover:bg-obsidian hover:text-parchment transition-all duration-200">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-sand">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-button uppercase text-muted flex items-center gap-1">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description} Each piece is thoughtfully designed and quality-checked before shipping.
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}. {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping} We offer hassle-free 30-day returns on all unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div ref={relatedRef} className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-button uppercase text-gold mb-2">Discover More</p>
            <h2 className="font-serif text-2xl md:text-3xl text-obsidian font-light">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-linen mb-3 relative">
                  <img
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="font-sans text-[11px] tracking-product uppercase text-obsidian font-medium mb-1">
                  {p.name}
                </p>
                <span className="font-serif text-base text-obsidian">${p.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
