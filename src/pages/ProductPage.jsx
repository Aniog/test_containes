import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
} from '../data/products';

/* ─── Accordion item ─── */
function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left text-sm font-medium text-velmora-charcoal tracking-wide"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-5 text-velmora-warm text-[13px] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage({ slug, navigate }) {
  const product = getProductBySlug(slug);
  const related  = product ? getRelatedProducts(slug) : [];
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [qty, setQty] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-[60vh]">
        <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product not found</h1>
        <button
          onClick={() => navigate('/shop')}
          className="text-velmora-gold underline text-sm bg-transparent border-none"
        >
          Back to shop
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product, product.variants[selectedVariant]);
    }
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 page-enter">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Breadcrumb / back */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center gap-1.5 text-velmora-muted hover:text-velmora-gold text-xs uppercase tracking-[0.1em] mb-8 bg-transparent border-none p-0 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </button>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* ─── Left: Gallery ─── */}
          <div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={`${product.imgId}-detail`}
                data-strk-img={product.searchQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.imgAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
                    i === 0 ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-gold/40'
                  } bg-velmora-cream`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-gold/10 flex items-center justify-center">
                    <span className="text-velmora-gold/30 text-xs font-serif">V</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Info ─── */}
          <div className="py-2 md:py-6">
            <p className="text-velmora-gold text-xs tracking-[0.2em] uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-[2.2rem] text-velmora-charcoal uppercase-wide leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={15} />
              <span className="text-sm text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-velmora-charcoal mb-5">
              {formatPrice(product.price)}
            </p>

            <p className="text-velmora-warm text-[14px] leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant pills */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.1em] text-velmora-muted mb-2 font-medium">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2 rounded-full text-xs tracking-[0.08em] uppercase font-medium transition-all duration-200 ${
                      i === selectedVariant
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border border-velmora-charcoal/25 hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.1em] text-velmora-muted mb-2 font-medium">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-charcoal/15 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-white hover:bg-velmora-cream transition-colors border-none text-velmora-charcoal"
                  aria-label="Decrease"
                >
                  <Minus size={15} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-velmora-charcoal">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white hover:bg-velmora-cream transition-colors border-none text-velmora-charcoal"
                  aria-label="Increase"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full h-13 bg-velmora-gold hover:bg-velmora-gold-light text-white text-xs tracking-[0.15em] uppercase font-medium rounded-lg transition-colors border-none mb-4"
              style={{ height: '52px' }}
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>

            {/* Accordion details */}
            <div className="mt-6">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* ─── Related Products ─── */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28 pt-12 border-t border-velmora-charcoal/10">
            <div className="text-center mb-10">
              <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-2">
                You May Also Like
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal">
                Complete Your Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} navigate={navigate} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
