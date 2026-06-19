import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm tracking-widest uppercase text-ink-900">{title}</span>
        <ChevronDown
          size={16}
          className={cn('text-ink-400 transition-transform duration-300', open && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-500 ease-luxury',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-sm text-ink-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ excludeId }) {
  const related = products.filter((p) => p.id !== excludeId).slice(0, 4);
  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-ink-100 rounded-sm">
                <img
                  src={product.images[0]}
                  alt={product.displayName}
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-serif text-xs tracking-widest uppercase text-ink-900 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-700">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-ink-500">
        Product not found
      </div>
    );
  }

  return (
    <main className="bg-cream-50 pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-ink-400">
          <Link to="/" className="hover:text-ink-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-700">{product.displayName}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-sm border-2 transition-colors',
                    selectedImage === idx ? 'border-gold-500' : 'border-transparent'
                  )}
                >
                  <img src={img} alt={`${product.displayName} ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm bg-ink-100">
              <img
                src={product.images[selectedImage]}
                alt={product.displayName}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase text-ink-900">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-ink-400">{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 font-serif text-2xl text-ink-900">{formatPrice(product.price)}</p>
            <p className="mt-5 text-sm text-ink-600 leading-relaxed">{product.description}</p>

            {/* Variant */}
            <div className="mt-7">
              <p className="text-xs tracking-widest uppercase text-ink-500 font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2 text-xs tracking-widest uppercase font-medium border rounded-sm transition-all duration-300',
                      variant === v
                        ? 'border-ink-900 bg-ink-900 text-cream-50'
                        : 'border-ink-200 text-ink-700 hover:border-ink-400'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-xs tracking-widest uppercase text-ink-500 font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-ink-200 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 hover:bg-ink-100 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium text-ink-900 min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 hover:bg-ink-100 transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => addItem(product, variant, quantity)}
                className="flex-1 bg-ink-900 text-cream-50 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-ink-800 transition-colors rounded-sm"
              >
                Add to Cart
              </button>
              <button
                className="px-4 border border-ink-200 text-ink-700 hover:border-ink-400 transition-colors rounded-sm"
                aria-label="Add to wishlist"
              >
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-wider uppercase text-ink-400">
              <span>{product.material}</span>
              <span>Hypoallergenic</span>
              <span>Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          <Accordion title="Description">
            <p>{product.description}</p>
            <p className="mt-3">
              Each piece is designed in-house and undergoes rigorous quality control before reaching you. 
              We partner with certified artisans who share our commitment to detail and durability.
            </p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p>{product.care}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>18K gold plating over brass</li>
              <li>Lead-free and nickel-free</li>
              <li>Water-resistant (not waterproof)</li>
              <li>Store in a cool, dry place</li>
            </ul>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p>{product.shipping}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Free standard shipping worldwide</li>
              <li>Express shipping available at checkout</li>
              <li>30-day hassle-free returns</li>
              <li>Items must be unworn with original packaging</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <RelatedProducts excludeId={product.id} />
    </main>
  );
}
