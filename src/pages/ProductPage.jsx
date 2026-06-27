import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProduct, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-sans tracking-wider uppercase text-dark-900">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-muted font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const related = getRelatedProducts(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant('gold');
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-24 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-dark-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 text-sm font-sans tracking-wider uppercase hover:text-gold-500">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const gradients = {
    earrings: 'from-amber-900/80 to-stone-900',
    necklaces: 'from-rose-900/60 to-stone-900',
    huggies: 'from-yellow-900/60 to-stone-900',
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 sm:pt-24 min-h-screen bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8 text-xs font-sans text-muted">
          <Link to="/" className="hover:text-dark-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-dark-900 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-dark-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-warm-200 overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[product.category] || gradients.earrings}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-serif text-gold-300/50 text-4xl sm:text-5xl italic tracking-wide">
                      {product.name.split(' ')[0]}
                    </span>
                    <div className="w-16 h-px bg-gold-400/30 mx-auto mt-3" />
                    <span className="block text-gold-400/30 text-xs font-sans tracking-[0.2em] uppercase mt-3">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-warm-200 cursor-pointer border-2 transition-colors ${
                    i === 0 ? 'border-gold-500' : 'border-transparent hover:border-warm-300'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${gradients[product.category] || gradients.earrings} opacity-${i === 0 ? '100' : '60'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-dark-900 tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-warm-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-dark-900 mb-5">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-muted font-sans leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-[0.15em] uppercase font-sans text-dark-900 mb-3 block">
                Tone
              </label>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-5 py-2.5 text-sm font-sans tracking-wider transition-all ${
                      selectedVariant === v.value
                        ? 'bg-dark-900 text-cream'
                        : 'border border-warm-300 text-dark-700 hover:border-dark-900'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-[0.15em] uppercase font-sans text-dark-900 mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-warm-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted hover:text-dark-900 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-sans text-dark-900 tabular-nums min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted hover:text-dark-900 transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 btn-premium ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-dark-900 text-cream hover:bg-dark-700'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-warm-200">
              <div className="text-center">
                <Truck className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-[10px] text-muted font-sans tracking-wide uppercase">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-[10px] text-muted font-sans tracking-wide uppercase">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-[10px] text-muted font-sans tracking-wide uppercase">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-warm-200">
            <h2 className="font-serif text-2xl sm:text-3xl text-dark-900 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i + 5} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
