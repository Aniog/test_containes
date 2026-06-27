import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brand-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm text-brand-dark">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-brand-body font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-dark">Product not found</h1>
        <Link to="/collection" className="mt-4 inline-block text-brand-gold font-sans text-sm">
          Back to collection
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-divider overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-brand-divider overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb1-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-brand-divider overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb2-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry on model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} on model`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-brand-divider overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb3-${product.id}`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry packaging luxury`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} packaging`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="py-4">
            <h1
              id={`pdp-${product.id}-title`}
              className="font-sans text-xs tracking-[0.2em] uppercase text-brand-dark mb-2"
            >
              {product.name}
            </h1>
            <p className="font-serif text-3xl text-brand-dark mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-divider'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p id={`pdp-${product.id}-desc`} className="text-sm text-brand-body font-sans leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 font-sans text-xs tracking-wider uppercase border transition-colors ${
                      variant === v
                        ? 'border-brand-dark bg-brand-dark text-white'
                        : 'border-brand-divider text-brand-dark hover:border-brand-dark'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-muted mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-brand-divider flex items-center justify-center hover:border-brand-dark transition-colors"
                >
                  <Minus className="w-4 h-4 text-brand-dark" />
                </button>
                <span className="font-sans text-sm text-brand-dark w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-brand-divider flex items-center justify-center hover:border-brand-dark transition-colors"
                >
                  <Plus className="w-4 h-4 text-brand-dark" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full bg-brand-gold text-white font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-gold-hover transition-colors mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-brand-divider">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">Care: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–7 business days.</p>
                <p className="mt-2">30-day returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-brand-divider">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-dark text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-brand-divider overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}-${product.id}`}
                    data-strk-img={`[rel-${p.id}-desc] [rel-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`rel-${p.id}-title`} className="font-sans text-xs tracking-[0.15em] uppercase text-brand-dark">{p.name}</h3>
                <p id={`rel-${p.id}-desc`} className="text-sm text-brand-dark mt-1 font-sans">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
