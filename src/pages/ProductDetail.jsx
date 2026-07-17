import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gold-200/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-ink-700">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-ink-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-ink-400" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-ink-500 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]?.id || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product?.id]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink-800 mb-4">Product Not Found</h1>
          <p className="text-ink-500 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-ink-400 font-sans tracking-wider">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-ink-700 overflow-hidden">
              <div
                data-strk-img-id={`pdp-${product.id}-gallery-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gold-300/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold-400/30" />
                  </div>
                </div>
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-ink-800 text-ivory-50 text-[10px] tracking-widest uppercase font-sans px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 bg-ink-700 overflow-hidden transition-all duration-300 ${
                    activeImage === i
                      ? 'ring-2 ring-gold-400 ring-offset-2 ring-offset-ivory-50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${img}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    className="w-full h-full bg-ink-600"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <p className="section-subtitle mb-2">{product.category}</p>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest-xl text-ink-800 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-2xl font-medium text-ink-800 mb-6">
              ${product.price}
            </p>

            <p className="font-sans text-ink-500 leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-ink-600 mb-3">
                Tone: <span className="text-ink-800">
                  {product.variants.find((v) => v.id === selectedVariant)?.label}
                </span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-ink-800 bg-ink-800 text-ivory-50'
                        : 'border-ink-300 text-ink-600 hover:border-ink-500'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: variant.color }}
                    />
                    <span className="font-sans text-xs tracking-wider uppercase">
                      {variant.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-ink-600 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ivory-200 transition-colors text-ink-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-ink-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ivory-200 transition-colors text-ink-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                addedFeedback
                  ? 'bg-green-700 text-white'
                  : 'btn-gold'
              }`}
            >
              {addedFeedback ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gold-200/60">
              <div className="flex items-center gap-2 text-ink-400">
                <Truck className="w-4 h-4" />
                <span className="text-xs">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-ink-400">
                <RotateCcw className="w-4 h-4" />
                <span className="text-xs">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-ink-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.details}</p>
                <p className="font-sans text-xs text-ink-400">
                  <strong>Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.
                </p>
                <p>
                  <strong>Returns:</strong> We offer a 30-day return policy. Items must be unworn, in original packaging. Return shipping is free for domestic orders.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="divider mb-12" />
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">You may also like</p>
            <h2 className="section-title">Complete the Look</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
