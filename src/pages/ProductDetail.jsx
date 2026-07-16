import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
      >
        <span className="font-sans text-sm font-medium text-brand-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-brand-graphite leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block font-sans text-sm text-brand-gold underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal transition-colors no-underline text-brand-muted">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors no-underline text-brand-muted">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-f1g2h3`}
                data-strk-img={`[pdp-${product.id}-title] [pdp-${product.id}-desc] gold jewelry product photo`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden cursor-pointer border border-transparent hover:border-brand-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-j4k5l6`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1 id={`pdp-${product.id}-title`} className="font-serif text-xl md:text-2xl uppercase tracking-product text-brand-charcoal font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 font-sans text-2xl text-brand-charcoal">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="mt-6 font-sans text-sm text-brand-graphite leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-wide-xl border cursor-pointer transition-colors ${
                      variant === v
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-sand text-brand-charcoal bg-transparent hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-muted mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand bg-transparent text-brand-charcoal hover:border-brand-charcoal transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand bg-transparent text-brand-charcoal hover:border-brand-charcoal transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full bg-brand-gold text-white py-4 font-sans text-sm uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">To maintain your jewelry's luster, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout.</p>
                <p className="mt-2">We offer hassle-free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] overflow-hidden bg-brand-ivory">
                  <img
                    data-strk-img-id={`related-${p.id}-m7n8o9`}
                    data-strk-img={`[related-${p.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`related-${p.id}-title`} className="mt-3 font-serif text-xs uppercase tracking-product text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-brand-muted">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
