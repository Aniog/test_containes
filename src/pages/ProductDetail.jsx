import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag, Heart, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [accordions, setAccordions] = useState({ desc: true, materials: false, shipping: false });
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen bg-cream">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-dark transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key) => {
    setAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-4 text-xs text-warmgray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-parchment rounded-sm flex items-center justify-center mb-4">
              <span className="text-xs text-warmgray uppercase tracking-widest">
                Image {selectedImage + 1} — {product.name}
              </span>
            </div>
            <div className="flex gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-parchment rounded-sm flex items-center justify-center border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-warmgray-muted'
                  }`}
                >
                  <span className="text-[10px] text-warmgray uppercase tracking-wider">{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest-xl uppercase text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-warmgray">({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">${product.price}</p>

            <p className="mt-6 text-warmgray text-sm leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase font-medium text-charcoal mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase font-medium border rounded-full transition-colors ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-warmgray-muted text-warmgray hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase font-medium text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-warmgray-muted">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-parchment transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-parchment transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 text-sm tracking-[0.15em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-charcoal-soft text-white'
                    : 'bg-gold text-white hover:bg-gold-dark'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="px-4 py-3.5 border border-warmgray-muted hover:border-charcoal transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            {/* Trust icons */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-warmgray tracking-wide">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> 1-Year Warranty
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 border-t border-warmgray-muted">
          {/* Description */}
          <div className="border-b border-warmgray-muted">
            <button
              onClick={() => toggleAccordion('desc')}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-xs tracking-widest uppercase font-medium text-charcoal">Description</span>
              {accordions.desc ? <ChevronUp className="w-4 h-4 text-warmgray" /> : <ChevronDown className="w-4 h-4 text-warmgray" />}
            </button>
            {accordions.desc && (
              <div className="pb-5 text-sm text-warmgray leading-relaxed max-w-2xl">
                {product.description}
              </div>
            )}
          </div>

          {/* Materials & Care */}
          <div className="border-b border-warmgray-muted">
            <button
              onClick={() => toggleAccordion('materials')}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-xs tracking-widest uppercase font-medium text-charcoal">Materials & Care</span>
              {accordions.materials ? <ChevronUp className="w-4 h-4 text-warmgray" /> : <ChevronDown className="w-4 h-4 text-warmgray" />}
            </button>
            {accordions.materials && (
              <div className="pb-5 text-sm text-warmgray leading-relaxed max-w-2xl space-y-2">
                <p><span className="text-charcoal font-medium">Materials:</span> {product.materials}</p>
                <p><span className="text-charcoal font-medium">Care:</span> {product.care}</p>
              </div>
            )}
          </div>

          {/* Shipping & Returns */}
          <div className="border-b border-warmgray-muted">
            <button
              onClick={() => toggleAccordion('shipping')}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-xs tracking-widest uppercase font-medium text-charcoal">Shipping & Returns</span>
              {accordions.shipping ? <ChevronUp className="w-4 h-4 text-warmgray" /> : <ChevronDown className="w-4 h-4 text-warmgray" />}
            </button>
            {accordions.shipping && (
              <div className="pb-5 text-sm text-warmgray leading-relaxed max-w-2xl space-y-2">
                <p>We offer free worldwide shipping on all orders. Orders are processed within 1-2 business days and delivered within 5-10 business days depending on your location.</p>
                <p>Not completely in love? We accept returns within 30 days of delivery for a full refund or exchange. Items must be unworn and in original packaging.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
