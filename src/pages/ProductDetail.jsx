import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs uppercase tracking-[0.12em] font-medium text-obsidian group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-sans text-sm text-obsidian/70 leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="border-t border-gold/15 pt-16 mt-16">
      <h2 className="font-serif text-3xl font-light text-obsidian tracking-wide mb-10">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-obsidian/90 text-warm-white font-sans text-[10px] uppercase tracking-[0.1em] py-3 flex items-center justify-center gap-1.5 hover:bg-gold hover:text-obsidian transition-colors"
                >
                  <ShoppingBag size={12} /> Quick Add
                </button>
              </div>
            </div>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={`related-${product.titleId}`}
                className="font-serif text-sm uppercase tracking-[0.1em] text-obsidian hover:text-gold transition-colors"
              >
                {product.name}
              </h3>
            </Link>
            <p className="font-sans text-sm font-medium text-obsidian mt-1">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbIds = [
    { imgId: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry` },
    { imgId: `pdp-alt1-${product.imgId2}`, query: `gold jewelry close-up detail ${product.category}` },
    { imgId: `pdp-alt2-${product.imgId}b`, query: `gold jewelry worn model ${product.category} lifestyle` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-stone hover:text-gold transition-colors">Home</Link>
          <span className="text-stone/40 text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-stone hover:text-gold transition-colors">Shop</Link>
          <span className="text-stone/40 text-xs">/</span>
          <span className="font-sans text-xs text-obsidian/60">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-gold/40'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
                    data-strk-img={thumb.query}
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
            <div className="flex-1 aspect-square md:aspect-[4/5] overflow-hidden bg-cream relative">
              {thumbIds.map((thumb, i) => (
                <img
                  key={i}
                  data-strk-img-id={`pdp-large-${i}-${product.imgId}`}
                  data-strk-img={thumb.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl font-light uppercase tracking-[0.12em] text-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} size={13} />
              <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-obsidian/70 leading-relaxed mb-7 border-t border-gold/10 pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-obsidian/60 mb-3">
                Finish: <span className="text-obsidian font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-warm-white border-obsidian'
                        : 'bg-transparent text-obsidian border-gold/30 hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-obsidian/60 mb-3">Quantity</p>
              <div className="flex items-center border border-gold/20 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-cream transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-cream transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-warm-white'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={15} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-gold/10">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-[0.1em] text-stone">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
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

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
