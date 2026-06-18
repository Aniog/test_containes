import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={12} className={i <= Math.round(rating) ? 'fill-star text-star' : 'text-linen fill-linen'} />
        ))}
      </div>
      <span className="font-manrope text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.1em] uppercase text-ink">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-muted leading-relaxed">{children}</p>
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
      <div className="mb-10">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
              <img
                id={product.titleId}
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p id={product.descId} className="sr-only">{product.shortDescription}</p>
            </div>
            <h3 className="font-cormorant text-sm uppercase tracking-widest2 text-ink font-medium group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <p className="font-manrope text-sm font-medium text-ink mt-0.5">${product.price}</p>
          </Link>
        ))}
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

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn model close up` },
    { id: `pdp-alt2-${product.imgId}-b`, query: `[pdp-title-${product.id}] jewelry detail texture` },
    { id: `pdp-alt3-${product.imgId}-c`, query: `[pdp-title-${product.id}] jewelry flat lay elegant` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-ghost hover:text-gold transition-colors">Home</Link>
          <span className="text-ghost text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-ghost hover:text-gold transition-colors">Shop</Link>
          <span className="text-ghost text-xs">/</span>
          <span className="font-manrope text-xs text-muted">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id}
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

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <p id={`pdp-title-${product.id}`} className="sr-only">{product.name}</p>
            <p id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>

            <div className="mb-2">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-gold">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>

            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 text-ink font-medium leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center justify-between mb-5">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="font-cormorant text-3xl font-light text-ink">${product.price}</span>
            </div>

            <div className="w-full h-px bg-linen mb-6" />

            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-ink mb-3">
                Finish: <span className="text-muted font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-manrope text-xs tracking-wider border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-linen text-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-manrope text-xs tracking-[0.14em] uppercase transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust icons */}
            <div className="flex items-center justify-between mt-6 py-5 border-t border-b border-linen">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  <span className="font-manrope text-[10px] tracking-wider uppercase text-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
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
