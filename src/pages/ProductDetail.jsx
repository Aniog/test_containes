import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
      >
        <span className="text-sm font-medium text-charcoal uppercase tracking-wider">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
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
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-heading">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent text-sm no-underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted">
          <Link to="/" className="hover:text-accent no-underline text-muted">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent no-underline text-muted">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-ivory flex items-center justify-center">
              <span className="font-serif text-lg text-muted/50 italic text-center px-8">
                {product.name}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-ivory flex items-center justify-center cursor-pointer hover:ring-1 hover:ring-accent transition-all">
                  <span className="text-xs text-muted/40">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1 className="font-serif text-2xl md:text-3xl font-medium text-heading uppercase tracking-product">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif font-semibold text-heading mt-4">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-medium text-charcoal uppercase tracking-wider mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-colors rounded-none ${
                      selectedVariant === v
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-charcoal bg-transparent hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium text-charcoal uppercase tracking-wider mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors bg-transparent border-none"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors bg-transparent border-none"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-accent text-white text-sm font-medium uppercase tracking-wider hover:bg-accent-hover transition-colors border-none rounded-none"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
                <p className="mt-2">Material: {product.material}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivered in 5–7 business days.</p>
                <p className="mt-2">30-day returns — no questions asked. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-heading text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group no-underline">
                <div className="aspect-[3/4] bg-ivory flex items-center justify-center group-hover:bg-border/30 transition-colors">
                  <span className="text-sm text-muted/50 font-serif italic text-center px-4">
                    {p.name}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-sm font-medium text-heading uppercase tracking-product">
                  {p.name}
                </h3>
                <p className="text-sm text-charcoal mt-1">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
