import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, renderStars, cn } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';

const variants = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-mist/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-[0.18em] text-velmora-charcoal font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-60 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const stars = renderStars(product.rating);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    openCart();
  };

  return (
    <main className="pt-20 md:pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto section-pad py-5">
        <nav className="flex items-center gap-2 text-xs text-velmora-stone">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1440px] mx-auto section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-velmora-cream rounded overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      'w-20 h-20 rounded overflow-hidden border-2 transition-colors',
                      selectedImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-mist'
                    )}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold text-[10px] uppercase tracking-[0.2em] font-sans font-medium px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.08em] text-velmora-black font-light">
              {product.name}
            </h1>
            <p className="text-sm text-velmora-stone mt-2">{product.subtitle}</p>

            {/* Price & rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="font-serif text-2xl text-velmora-black">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: stars.full }, (_, i) => (
                    <Star key={`f${i}`} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                  ))}
                  {stars.hasHalf && <Star className="w-3.5 h-3.5 fill-velmora-gold/50 text-velmora-gold" />}
                  {Array.from({ length: stars.empty }, (_, i) => (
                    <Star key={`e${i}`} className="w-3.5 h-3.5 text-velmora-mist" />
                  ))}
                </div>
                <span className="text-xs text-velmora-stone">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-velmora-charcoal/70 leading-relaxed mt-5 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-7">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-velmora-stone mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-sans transition-all duration-300',
                      selectedVariant === v.id
                        ? 'bg-velmora-charcoal text-velmora-ivory'
                        : 'border border-velmora-mist text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold'
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-velmora-mist rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-velmora-stone" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-velmora-stone" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-gold flex-1 text-center">
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Trust features */}
            <div className="mt-7 flex flex-wrap gap-6">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-velmora-stone">
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.details}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">
                  Free worldwide shipping on all orders. Standard delivery takes 5–10 business days.
                  Express shipping available at checkout.
                </p>
                <p>
                  Not in love? Return within 30 days for a full refund. Items must be unworn and
                  in original packaging. We provide a prepaid return label for all domestic orders.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mt-20 md:mt-28 bg-velmora-cream py-20">
        <div className="max-w-[1440px] mx-auto section-pad">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
              Complete the Look
            </p>
            <h2 className="heading-section text-2xl md:text-3xl">You May Also Like</h2>
            <div className="gold-divider mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
