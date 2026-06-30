import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian group-hover:text-gold transition-colors duration-200">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-text-muted" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-text-muted" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-manrope text-sm text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
      setAdded(false);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-[0.15em] uppercase text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const imgIds = [product.imgId, product.img2Id];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-manrope text-xs text-text-muted hover:text-gold transition-colors duration-200"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-cream overflow-hidden">
              <img
                data-strk-img-id={imgIds[activeImg]}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {imgIds.map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${imgId}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-[0.1em] uppercase px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-[0.1em] uppercase px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-manrope text-2xl font-medium text-obsidian mt-4 mb-5">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-text-secondary leading-relaxed mb-7 border-b border-linen pb-7"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-text-muted mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-linen text-text-secondary hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-gold text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-espresso'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-[0.1em] uppercase text-text-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-linen">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-obsidian">Material:</strong> {product.material}</p>
                <p>To keep your Velmora jewelry looking its best: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <RelatedProducts products={related} />
    </div>
  );
}

function RelatedProducts({ products: related }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-ivory aspect-square mb-3">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full bg-obsidian/90 text-ivory font-manrope text-[10px] tracking-[0.15em] uppercase py-2.5 hover:bg-obsidian transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                <h3 id={`related-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
                <p className="font-manrope text-xs font-medium text-obsidian mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
