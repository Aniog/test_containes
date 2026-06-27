import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Package, Shield, Truck } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import ProductCard from '@/components/home/ProductCard';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-vel-border">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs tracking-[0.15em] uppercase text-vel-deep font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-vel-taupe" />
        ) : (
          <ChevronDown className="w-4 h-4 text-vel-taupe" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-vel-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  );
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-vel-taupe text-sm mb-4">Product not found.</p>
          <Link
            to="/shop"
            className="text-vel-gold text-sm underline underline-offset-4"
          >
            Browse the collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const gradients = [
    'from-vel-deep/80 via-vel-deep/40 to-vel-gold/20',
    'from-vel-deep/70 via-vel-deep/50 to-vel-gold/30',
    'from-vel-deep/80 via-vel-deep/30 to-vel-gold/15',
  ];

  return (
    <main className="pt-20 md:pt-24 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs tracking-wide text-vel-muted">
          <Link to="/" className="hover:text-vel-deep transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop/${product.category.toLowerCase()}`}
            className="hover:text-vel-deep transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-vel-deep">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-vel-light rounded-sm overflow-hidden relative mb-4">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[activeImage % gradients.length]} transition-all duration-500`}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 120 160" className="w-32 text-vel-gold/30">
                  <ellipse cx="60" cy="55" rx="28" ry="38" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="60" cy="72" r="6" fill="currentColor" />
                  <line x1="60" y1="95" x2="60" y2="110" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`w-16 h-20 rounded-sm bg-vel-light overflow-hidden transition-all duration-200 ${
                    activeImage === i
                      ? 'ring-1 ring-vel-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImage(i)}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center`}
                  >
                    <div className="w-3 h-3 rounded-full bg-vel-gold/20" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-vel-deep leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-vel-deep mb-4">
              ${product.price}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-vel-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-vel-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && (
              <div className="mb-6">
                <p className="text-xs tracking-[0.1em] uppercase text-vel-muted mb-3">
                  {product.variantLabel || 'Tone'}
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      className={`px-6 py-2.5 text-sm rounded-sm border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-vel-deep bg-vel-deep text-white'
                          : 'border-vel-border text-vel-taupe hover:border-vel-deep'
                      }`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-vel-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-vel-border rounded-sm w-fit">
                <button
                  className="w-10 h-10 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 text-sm font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-vel-deep hover:bg-vel-gold text-white'
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-2"><strong className="text-vel-deep font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-vel-deep font-medium">Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-vel-border text-xs text-vel-muted">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1">
                <Package className="w-3.5 h-3.5" /> Gift Box Included
              </span>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 pt-16 border-t border-vel-border">
            <h2 className="font-serif text-2xl md:text-3xl text-vel-deep tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
