import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/lib/CartContext';

function StarIcon({ filled }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? '#B8860B' : 'none'}
      stroke={filled ? '#B8860B' : '#E8E0D4'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-fg transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-fg leading-relaxed">
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
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-accent text-sm mt-4 inline-block underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-fg font-sans mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-product text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(product.rating)} />
                ))}
              </div>
              <span className="text-xs text-muted-fg font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            <p className="text-sm text-muted-fg leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-colors ${
                      selectedVariant === v
                        ? 'border-accent bg-accent text-cream'
                        : 'bg-transparent border-border text-charcoal hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-sans w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-accent text-cream py-4 text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent-hover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  Made with {product.material} over a hypoallergenic brass base. Nickel-free and safe for sensitive skin.
                </p>
                <p className="mt-2">
                  To maintain shine, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout.
                </p>
                <p className="mt-2">
                  30-day hassle-free returns. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-muted overflow-hidden mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-sans text-xs uppercase tracking-product text-charcoal font-medium">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-fg mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
