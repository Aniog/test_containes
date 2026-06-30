import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-velvet group-hover:text-gold transition-colors duration-200">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-text-tertiary" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-text-tertiary" />
        }
      </button>
      {open && (
        <div className="pb-6 animate-fadeInFast">
          <p className="font-manrope text-sm text-text-secondary leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-cormorant text-3xl font-light text-velvet mb-10">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="aspect-portrait bg-cream overflow-hidden mb-3">
                <img
                  data-strk-img-id={`related-${product.imgIds.main}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.1em] text-velvet group-hover:text-gold transition-colors duration-200">
                {product.name}
              </p>
              <p id={product.descId} className="sr-only">{product.shortDescription}</p>
              <p className="font-cormorant text-base text-text-secondary mt-1">${product.price}</p>
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
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const thumbImgIds = [
    { id: product.imgIds.main, suffix: 'main' },
    { id: product.imgIds.thumb1, suffix: 't1' },
    { id: product.imgIds.thumb2, suffix: 't2' },
    { id: product.imgIds.thumb3, suffix: 't3' },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 font-manrope text-[11px] tracking-[0.1em] uppercase text-text-tertiary hover:text-gold transition-colors duration-200"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {thumbImgIds.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${thumb.id}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry detail`}
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
            <div className="flex-1 aspect-[3/4] bg-cream overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${thumbImgIds[activeThumb].id}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.1em] text-velvet font-medium mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velvet mb-6">${product.price}</p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-text-secondary leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-[0.14em] uppercase text-text-secondary mb-3">
                Tone: <span className="text-velvet">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-manrope text-[11px] tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velvet bg-velvet text-ivory'
                        : 'border-linen text-text-secondary hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-[10px] tracking-[0.14em] uppercase text-text-secondary mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-velvet transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velvet">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-velvet transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velvet text-ivory font-manrope text-[11px] tracking-[0.16em] uppercase py-4.5 py-[18px] flex items-center justify-center gap-3 hover:bg-gold hover:text-velvet transition-all duration-300 mb-3"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-linen text-text-secondary font-manrope text-[11px] tracking-[0.14em] uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-linen">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-[0.1em] uppercase text-text-tertiary flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
