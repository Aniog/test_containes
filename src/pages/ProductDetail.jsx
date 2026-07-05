import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-parchment">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-[0.12em] text-ink font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-mist flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-mist flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-xs text-mist leading-relaxed">{children}</p>
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
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Generate gallery image IDs
  const galleryImages = [
    { id: `pdp-main-${product.id}-a`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry` },
    { id: `pdp-main-${product.id}-b`, query: `[pdp-title-${product.id}] gold jewelry worn model close up` },
    { id: `pdp-main-${product.id}-c`, query: `[pdp-title-${product.id}] gold jewelry detail texture` },
    { id: `pdp-main-${product.id}-d`, query: `[pdp-title-${product.id}] gold jewelry flat lay` },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-manrope text-xs text-mist hover:text-gold transition-colors duration-200">
            <ArrowLeft size={12} />
            Shop
          </Link>
          <span className="text-parchment">/</span>
          <span className="font-manrope text-xs text-whisper capitalize">{product.category}</span>
          <span className="text-parchment">/</span>
          <span className="font-manrope text-xs text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square md:aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id={galleryImages[activeThumb].id}
                data-strk-img={galleryImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-obsidian text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink font-medium mb-2"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-ink font-medium mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-mist leading-relaxed mb-6 border-b border-parchment pb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="font-manrope text-[10px] uppercase tracking-[0.15em] text-mist mb-3">
                Finish: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-parchment text-mist hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] uppercase tracking-[0.15em] text-mist mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-ivory font-manrope text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold-dark transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-ink text-ink font-manrope text-xs uppercase tracking-[0.15em] py-4 hover:bg-ink hover:text-ivory transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-mist flex items-center gap-1">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-parchment">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span className="block">{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 border-t border-parchment">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
