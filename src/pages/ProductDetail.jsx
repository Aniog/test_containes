import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const related = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setAdded(false);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImg]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl font-light text-taupe">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-[0.14em] text-espresso mt-4 inline-block border-b border-espresso">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.img2Id, titleId: product.titleId, descId: product.descId, query: `[${product.titleId}] gold jewelry worn model close up` },
    { id: `${product.imgId}-detail`, titleId: product.titleId, descId: product.descId, query: `[${product.titleId}] gold jewelry detail texture` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-[0.12em] text-taupe hover:text-espresso transition-colors">
            <ArrowLeft size={11} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-divider">/</span>
          <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-taupe capitalize">{product.category}</span>
          <span className="text-divider">/</span>
          <span className="font-inter text-[10px] uppercase tracking-[0.12em] text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-espresso' : 'border-transparent hover:border-divider'
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-espresso font-light leading-tight mb-2"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDesc}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-taupe">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-espresso mb-6">${product.price}</p>

            {/* Short description */}
            <p className="font-inter text-sm text-taupe leading-relaxed mb-8 border-t border-divider pt-6">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-taupe mb-3">
                Tone: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-divider text-taupe hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-taupe mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-espresso transition-colors font-inter text-lg"
                >
                  −
                </button>
                <span className="w-10 text-center font-inter text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-espresso transition-colors font-inter text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                added
                  ? 'bg-gold text-espresso'
                  : 'bg-espresso text-ivory hover:bg-warm-brown'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-[0.12em] text-taupe flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-espresso">{acc.label}</span>
                    {openAccordion === acc.key
                      ? <ChevronUp size={14} strokeWidth={1.5} className="text-taupe" />
                      : <ChevronDown size={14} strokeWidth={1.5} className="text-taupe" />
                    }
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-5 animate-fadeIn">
                      <p className="font-inter text-sm text-taupe leading-relaxed whitespace-pre-line">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 border-t border-divider">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso tracking-wide mb-10">
              You May Also Like
            </h2>
            <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
