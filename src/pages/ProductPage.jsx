import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink group-hover:text-gold transition-colors duration-300">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-ink-muted" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-ink-muted" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="font-sans text-sm text-ink-muted leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="border-t border-linen py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addItem(product)}
                    className="w-full bg-obsidian/90 text-cream font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
                  >
                    <ShoppingBag size={11} strokeWidth={1.5} />
                    Add to Cart
                  </button>
                </div>
              </div>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={`related-title-${product.id}`}
                  className="font-serif text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300"
                >
                  {product.name}
                </h3>
              </Link>
              <p id={`related-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
              <p className="font-sans text-sm text-ink-muted mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant(0);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink-muted mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-ink-faint hover:text-gold transition-colors duration-300">
            Home
          </Link>
          <span className="text-ink-faint text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-ink-faint hover:text-gold transition-colors duration-300">
            Shop
          </Link>
          <span className="text-ink-faint text-xs">/</span>
          <span className="font-sans text-xs text-ink-muted">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-linen">
              <img
                data-strk-img-id={activeImg === 0 ? `pdp-img-main-${product.id}` : `pdp-img-alt-${product.id}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-20 aspect-square overflow-hidden border-2 transition-colors duration-300 ${
                    activeImg === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-6">
            {/* Name & Price */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="bg-obsidian text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
                    New
                  </span>
                )}
              </div>
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-ink font-medium leading-tight"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      strokeWidth={0}
                      className={i < Math.floor(product.rating) ? 'fill-gold' : 'fill-linen'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-ink-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-sans text-2xl text-ink font-light mt-4">${product.price}</p>
            </div>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-ink-muted leading-relaxed border-t border-linen pt-5"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-3">
                Finish: <span className="text-ink">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`font-sans text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-gold bg-gold text-cream'
                        : 'border-linen text-ink-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-linen transition-colors"
                  aria-label="Decrease quantity"
                >
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-linen transition-colors"
                  aria-label="Increase quantity"
                >
                  <ChevronUp size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-sans text-xs tracking-widest uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-stone text-cream'
                  : 'bg-gold text-cream hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-1">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-ink-faint flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-2">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery: 3–7 business days. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.
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
