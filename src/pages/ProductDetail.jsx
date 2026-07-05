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
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
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
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="bg-cream py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-light text-obsidian mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-4">
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
              <h3
                id={`related-title-${product.id}`}
                className="font-serif text-sm font-medium uppercase tracking-widest text-obsidian mb-1"
              >
                {product.name}
              </h3>
              <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDesc}</p>
              <p className="font-sans text-sm font-semibold text-obsidian">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const imgIds = [
    { id: product.imgId, id2: `pdp-main-${product.id}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}`, query: `[pdp-title-${product.id}] gold jewelry worn on model close up` },
    { id: `${product.imgId}-3`, id2: `pdp-3-${product.id}`, query: `[pdp-title-${product.id}] gold jewelry detail texture` },
    { id: `${product.imgId}-4`, id2: `pdp-4-${product.id}`, query: `[pdp-title-${product.id}] gold jewelry flat lay` },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div ref={containerRef} className="bg-ivory pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={13} /> Back to Shop
          </Link>
        </div>

        {/* Main product section */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: Image gallery */}
            <div className="flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
                {imgIds.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-colors ${
                      activeImg === i ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`thumb-${img.id2}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
                {imgIds.map((img, i) => (
                  <img
                    key={i}
                    data-strk-img-id={img.id2}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                      activeImg === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col">
              {product.badge && (
                <span className="inline-block bg-gold text-obsidian font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 mb-4 self-start">
                  {product.badge}
                </span>
              )}

              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-3xl lg:text-4xl font-medium uppercase tracking-widest text-obsidian mb-3 leading-tight"
              >
                {product.name}
              </h1>

              <StarRating rating={product.rating} count={product.reviewCount} />

              <p className="font-sans text-2xl font-semibold text-obsidian mt-4 mb-5">
                ${product.price}
              </p>

              <p
                id={`pdp-desc-${product.id}`}
                className="font-sans text-sm text-stone leading-relaxed mb-8"
              >
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-3">
                  Finish: <span className="text-stone normal-case tracking-normal font-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2.5 border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'bg-obsidian text-ivory border-obsidian'
                          : 'bg-transparent text-stone border-linen hover:border-stone'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-3">
                  Quantity
                </p>
                <div className="flex items-center border border-linen w-fit">
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

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                className="w-full bg-gold text-obsidian font-sans text-xs font-semibold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 mb-3"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>

              <button className="w-full border border-obsidian text-obsidian font-sans text-xs font-semibold uppercase tracking-widest py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300">
                Buy It Now
              </button>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-linen">
                {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                  <span key={t} className="font-sans text-[11px] text-muted flex items-center gap-1">
                    <span className="text-gold">✦</span> {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description">
                  {product.description}
                </Accordion>
                <Accordion title="Materials & Care">
                  {product.materials}. {product.care}
                </Accordion>
                <Accordion title="Shipping & Returns">
                  {product.shipping}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </>
  );
}
