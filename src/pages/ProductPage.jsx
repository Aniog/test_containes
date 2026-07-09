import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [product.imgId, product.imgId2];
  const imgIds2 = [`${product.imgId}-t1`, `${product.imgId2}-t2`];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-mist hover:text-gold transition-colors duration-300">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-whisper text-xs">/</span>
          <span className="font-sans text-xs text-whisper capitalize">{product.category}</span>
          <span className="text-whisper text-xs">/</span>
          <span className="font-sans text-xs text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {[product.imgId, product.imgId2].map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
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
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              {[product.imgId, product.imgId2].map((imgId, i) => (
                <img
                  key={i}
                  data-strk-img-id={`${imgId}-main-${i}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl font-light tracking-product uppercase text-ink mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'} />
                ))}
              </div>
              <span className="font-sans text-xs text-mist">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-3xl font-light text-ink mb-6">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-mist leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-mist font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs font-medium tracking-wider uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-linen text-mist hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs font-medium tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-xs font-medium tracking-widest uppercase py-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-stone text-cream'
                  : 'bg-gold text-cream hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 pt-6 border-t border-linen grid grid-cols-2 gap-3">
              {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                  <span className="font-sans text-xs text-mist">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-linen">
              <Accordion title="Description" defaultOpen>
                <p className="font-sans text-sm text-mist leading-relaxed">{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="font-sans text-sm text-mist leading-relaxed">{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="font-sans text-sm text-mist leading-relaxed">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-medium tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-mist" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-mist" />}
      </button>
      {open && (
        <div className="pb-5">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ products: relatedProducts }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl font-light text-ink mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <div key={product.id} className="product-card group cursor-pointer">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
                  <img
                    className="product-img-primary absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                  />
                  <img
                    className="product-img-secondary absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`related-${product.imgId2}`}
                    data-strk-img={`[related-${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full bg-obsidian/90 text-cream font-sans text-[10px] font-medium tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
                    >
                      <ShoppingBag size={12} strokeWidth={1.5} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <h3 id={`related-${product.titleId}`} className="font-sans text-[11px] font-medium tracking-product uppercase text-ink mb-1">{product.name}</h3>
              <p className="font-serif text-base font-light text-ink">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
