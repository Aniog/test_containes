import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-velmora-text-muted" />
        ) : (
          <ChevronDown size={16} className="text-velmora-text-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-text-muted leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function ProductInfo({ product, onAddToCart }) {
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, variant, quantity);
  };

  return (
    <div className="lg:py-4">
      <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
        {product.category}
      </p>
      <h1
        id={`${product.id}-pdp-name`}
        className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase text-velmora-text font-light mb-3"
      >
        {product.name}
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-text-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="font-serif text-2xl md:text-3xl text-velmora-gold mb-6">
        ${product.price}
      </p>

      <p className="text-sm text-velmora-text-muted leading-relaxed mb-8 max-w-lg">
        {product.description}
      </p>

      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-text mb-3">
          Tone: <span className="text-velmora-text-muted">{variant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2 text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                variant === v
                  ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-gold'
                  : 'border-velmora-border text-velmora-text-muted hover:border-velmora-gold/50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-text mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-velmora-border">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-sm text-velmora-text border-x border-velmora-border">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-velmora-gold text-velmora-bg text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-velmora-gold-light transition-colors duration-300 mb-8"
      >
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      <div className="grid grid-cols-3 gap-4 py-6 border-y border-velmora-border mb-8">
        {[
          { icon: Truck, label: 'Free Shipping' },
          { icon: RotateCcw, label: '30-Day Returns' },
          { icon: Shield, label: 'Hypoallergenic' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <Icon size={16} className="text-velmora-gold" strokeWidth={1.5} />
            <span className="text-[10px] text-velmora-text-muted text-center">{label}</span>
          </div>
        ))}
      </div>

      <div>
        <Accordion title="Description" defaultOpen>
          {product.longDescription}
        </Accordion>
        <Accordion title="Materials & Care">
          <strong className="text-velmora-text">Materials:</strong> {product.materials}
          <br /><br />
          <strong className="text-velmora-text">Care:</strong> {product.care}
        </Accordion>
        <Accordion title="Shipping & Returns">
          {product.shipping}
        </Accordion>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const related = useMemo(
    () => (product ? products.filter((p) => p.id !== product.id).slice(0, 4) : []),
    [product]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-text mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold text-sm underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (prod, variant, quantity) => {
    addItem(prod, variant, quantity);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-text-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>
      </div>

      {/* Product Section — render image gallery for ALL products, show only the active one */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            {products.map((p) => (
              <div key={p.id} className={p.id === product.id ? 'block' : 'hidden'}>
                <span id={`${p.id}-pdp-name`} className="sr-only">{p.name}</span>
                <div className="space-y-3">
                  <div className="aspect-[3/4] bg-velmora-surface border border-velmora-border overflow-hidden">
                    <img
                      data-strk-img-id={`pdp-main-${p.id}-7x3k`}
                      data-strk-img={`[${p.id}-pdp-name] ${p.imageQuery}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-velmora-surface border border-velmora-border overflow-hidden">
                      <img
                        data-strk-img-id={`pdp-thumb-a-${p.id}-4m9r`}
                        data-strk-img={`[${p.id}-pdp-name] ${p.imageQuery} detail closeup`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} detail 1`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-velmora-surface border border-velmora-border overflow-hidden">
                      <img
                        data-strk-img-id={`pdp-thumb-b-${p.id}-5n2s`}
                        data-strk-img={`[${p.id}-pdp-name] ${p.imageQuery} worn on skin`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} detail 2`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-velmora-surface border border-velmora-border overflow-hidden">
                      <img
                        data-strk-img-id={`pdp-thumb-c-${p.id}-6p1t`}
                        data-strk-img={`[${p.id}-pdp-name] ${p.imageQuery} lifestyle elegant`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} detail 3`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ProductInfo product={product} onAddToCart={handleAddToCart} />
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
              Complete Your Look
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
