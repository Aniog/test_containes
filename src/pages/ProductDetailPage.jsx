import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-sand/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base tracking-wider uppercase text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-taupe" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-taupe" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-velmora-gold tracking-wider uppercase underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-taupe tracking-wider">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm mb-4">
              <img
                data-strk-img-id={`${product.imgIdPrimary}-detail`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry editorial close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    'aspect-square bg-velmora-cream overflow-hidden rounded-sm border-2 transition-colors',
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  )}
                >
                  {idx === 0 ? (
                    <img
                      data-strk-img-id={`${product.imgIdPrimary}-thumb-${idx}`}
                      data-strk-img={`[${product.titleId}] jewelry editorial detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      data-strk-img-id={`${product.imgIdSecondary}-thumb-${idx}`}
                      data-strk-img={`[${product.titleId}] jewelry worn close up detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-velmora-charcoal text-velmora-cream text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] uppercase text-velmora-charcoal mb-2">
              {product.name}
            </h1>

            <p className="text-sm text-velmora-taupe mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn('w-4 h-4', i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand')}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl sm:text-3xl text-velmora-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-sm text-velmora-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-velmora-taupe mb-3">
                Tone: <span className="text-velmora-charcoal capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={cn(
                      'px-5 py-2 text-xs tracking-wider uppercase border transition-all',
                      selectedVariant === v.id
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-sand/40 text-velmora-taupe hover:border-velmora-charcoal'
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-velmora-taupe mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-sand/40">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-velmora-cream py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-velmora-espresso transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordion details */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong>Material:</strong> {product.material}</p>
                <p className="mt-2">{product.careInstructions}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shippingInfo}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal tracking-wide">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm mb-3">
                <img
                  data-strk-img-id={`${p.imgIdPrimary}-related`}
                  data-strk-img={`[${p.descId}] [${p.titleId}] jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-charcoal mb-1">
                {p.name}
              </h3>
              <p className="text-sm text-velmora-charcoal font-serif">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
