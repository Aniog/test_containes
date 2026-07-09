import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/data/CartContext';
import { formatPrice } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal">{title}</span>
        <ChevronDown
          size={16}
          className={`text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:text-gold-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-ivory rounded-sm overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.slug}-img-i9j0`}
                data-strk-img={`[pdp-${product.slug}-name] gold jewelry editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-ivory rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.slug}-${idx}-k1l2`}
                    data-strk-img={`[pdp-${product.slug}-name] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={`pdp-${product.slug}-name`}
              className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-product"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">{formatPrice(product.price)}</p>

            <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs font-medium text-charcoal uppercase tracking-wider mb-2">Tone</p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-border text-muted hover:border-gold/50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium text-charcoal uppercase tracking-wider mb-2">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-muted hover:text-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2.5 text-sm font-medium text-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-muted hover:text-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold hover:bg-gold-dark text-cream py-4 text-sm font-medium uppercase tracking-wider transition-colors duration-200"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days available at checkout.</p>
                <p className="mt-2">30-day returns on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-ivory rounded-sm overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.slug}-img-m3n4`}
                    data-strk-img={`[related-${p.slug}-name] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-${p.slug}-name`}
                  className="font-serif text-xs text-charcoal uppercase tracking-product"
                >
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
