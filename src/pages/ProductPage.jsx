import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left"
      >
        <span className="text-sm tracking-[0.1em] uppercase font-medium text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-velmora-muted" />
        ) : (
          <ChevronDown size={16} className="text-velmora-muted" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold underline text-sm">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const imageThumbnails = [0, 1, 2, 3];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3 flex-shrink-0">
              {imageThumbnails.map(i => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 border transition-all ${
                    activeImage === i
                      ? 'border-velmora-gold'
                      : 'border-velmora-border hover:border-velmora-taupe'
                  }`}
                >
                  <div className={`w-full h-full ${
                    i === 0
                      ? 'bg-gradient-to-br from-velmora-warm to-velmora-sand'
                      : i === 1
                        ? 'bg-gradient-to-tl from-velmora-sand to-velmora-warm'
                        : i === 2
                          ? 'bg-gradient-to-r from-velmora-taupe/20 to-velmora-sand'
                          : 'bg-gradient-to-b from-velmora-warm to-velmora-taupe/30'
                  } flex items-center justify-center`}>
                    <span className="text-velmora-gold/40 text-xs">✦</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] relative overflow-hidden bg-velmora-sand/20">
              <div
                className="absolute inset-0"
                data-strk-img-id={`product-${product.id}-main-${activeImage}`}
                data-strk-img={`[${product.id}-name] gold jewelry product closeup`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              >
                <div className={`w-full h-full flex items-center justify-center ${
                  activeImage === 0
                    ? 'bg-gradient-to-br from-velmora-warm via-velmora-sand to-velmora-taupe/30'
                    : activeImage === 1
                      ? 'bg-gradient-to-tl from-velmora-sand via-velmora-warm to-velmora-gold/10'
                      : activeImage === 2
                        ? 'bg-gradient-to-r from-velmora-taupe/20 via-velmora-sand to-velmora-warm'
                        : 'bg-gradient-to-b from-velmora-warm via-velmora-gold/5 to-velmora-taupe/30'
                }`}>
                  <div className="text-center">
                    <span className="text-5xl text-velmora-gold/30 block mb-3">✦</span>
                    <span className="font-serif text-velmora-taupe/60 text-lg tracking-wide">{product.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
              {product.category}
            </p>
            <h1
              id={`${product.id}-name`}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.08em] uppercase text-velmora-charcoal mb-4"
            >
              {product.name}
            </h1>

            <p className="text-xl sm:text-2xl text-velmora-charcoal font-light mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="w-full h-[1px] bg-velmora-border mb-8" />

            {/* Color variant */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase font-medium transition-all border ${
                      selectedColor === color
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-charcoal hover:text-velmora-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-sm font-medium text-velmora-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, quantity)}
              className="w-full py-4 bg-velmora-charcoal text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-velmora-dark transition-colors duration-300"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-[11px] text-velmora-muted">
              <span>Free Shipping</span>
              <span className="w-1 h-1 bg-velmora-taupe rounded-full" />
              <span>30-Day Returns</span>
              <span className="w-1 h-1 bg-velmora-taupe rounded-full" />
              <span>Gift Ready</span>
            </div>

            <div className="mt-8 pt-6 border-t border-velmora-border space-y-0">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal">
              You May Also Like
            </h2>
            <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
