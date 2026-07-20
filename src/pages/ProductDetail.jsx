import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ShoppingBag, Minus, Plus, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-charcoal-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans font-medium tracking-widest uppercase text-charcoal-800">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-charcoal-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || ''
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="font-serif text-xl">Product not found</p>
        <Link
          to="/shop"
          className="mt-4 text-xs font-sans font-medium tracking-widest uppercase text-gold-600 hover:text-gold-700"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  if (related.length < 4) {
    const others = products.filter(
      (p) => p.id !== product.id && !related.find((r) => r.id === p.id)
    );
    related.push(...others.slice(0, 4 - related.length));
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border overflow-hidden transition-colors ${
                    selectedImage === idx
                      ? 'border-charcoal-800'
                      : 'border-charcoal-200 hover:border-charcoal-400'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-cream-200 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block text-[10px] font-sans font-medium tracking-widest uppercase text-gold-600 bg-gold-50 px-2.5 py-1 mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase text-charcoal-900">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i <= Math.round(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="font-serif text-2xl mt-4 text-charcoal-800">
              ${product.price}
            </p>
            <p className="text-sm text-charcoal-600 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500 mb-2">
                  Metal Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs font-sans font-medium tracking-wider uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                          : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500 mb-2">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  className="w-9 h-9 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-medium w-6 text-center">
                  {quantity}
                </span>
                <button
                  className="w-9 h-9 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-charcoal-900 text-cream-50 py-4 flex items-center justify-center gap-3 text-xs font-sans font-medium tracking-widest uppercase hover:bg-charcoal-800 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  We offer free worldwide shipping on all orders. Standard
                  delivery takes 5-10 business days. Express shipping available
                  at checkout.
                </p>
                <p className="mt-2">
                  Not completely in love? Return any item within 30 days of
                  delivery for a full refund. Items must be unworn and in
                  original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-charcoal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
