import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-charcoal-100" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-100" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-charcoal-100 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-400 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <main className="pt-20 md:pt-24 bg-cream-50 min-h-screen" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto section-padding py-4">
        <nav className="flex items-center gap-2 text-[11px] text-charcoal-50">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-200">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name] jewelry product detail photo`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-cream-200 cursor-pointer transition-all duration-200 ${
                    i === 1 ? 'ring-2 ring-gold-500' : 'hover:ring-1 hover:ring-cream-300'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name] jewelry product angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col lg:py-4">
            <h1
              id="pdp-name"
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest-xl text-charcoal-400 mb-3"
            >
              {product.name}
            </h1>

            <p className="text-xl font-sans text-gold-600 font-medium mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-cream-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-50">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-charcoal-100 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            <div className="w-full h-px bg-cream-300 mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 mb-3">
                Tone: <span className="text-charcoal-400">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs font-medium uppercase tracking-widest-xl font-sans transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-charcoal-400 text-cream-50'
                        : 'border border-charcoal-100 text-charcoal-200 hover:border-charcoal-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-100 hover:text-charcoal-400 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-400">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-100 hover:text-charcoal-400 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-gold w-full text-center mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-[11px] text-charcoal-50 text-center mb-8">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-t border-cream-300">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.details}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="text-center mb-12">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-400 tracking-wide">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
