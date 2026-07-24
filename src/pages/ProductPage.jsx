import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  const related = useMemo(
    () => products.filter((p) => p.id !== productId).slice(0, 4),
    [productId]
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(() =>
    product ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brand-muted">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-surface overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-brand-surface overflow-hidden border transition-colors ${
                    selectedImage === i
                      ? 'border-brand-gold'
                      : 'border-transparent hover:border-white/20'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-6">
            <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-brand-cream mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-brand-muted mb-4">{product.tagline}</p>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl text-brand-cream">
                ${product.price}
              </span>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-brand-muted">
                  {product.reviews} reviews
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-soft leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-colors ${
                      selectedVariant?.id === variant.id
                        ? 'border-brand-gold text-brand-gold'
                        : 'border-white/10 text-brand-soft hover:border-white/30 hover:text-brand-cream'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-white/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-brand-gold text-brand-base text-sm font-semibold uppercase tracking-widest hover:bg-brand-goldLight transition-colors mb-10"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <Accordion title="Description">
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              {product.shipping}
            </Accordion>
            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-brand-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-cream text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}