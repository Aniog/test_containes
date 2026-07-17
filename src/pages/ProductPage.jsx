import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-cream-300/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none rounded-none px-0"
      >
        <span className="text-sm font-medium tracking-wider uppercase text-charcoal-800">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-charcoal-700" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-700" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-charcoal-700/80 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-xs tracking-ultra-wide uppercase text-gold-600 border-b border-gold-600 pb-1">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-700/60">
          <Link to="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-800">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-square overflow-hidden bg-warm-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors bg-transparent rounded-none p-0 ${
                    selectedImage === idx
                      ? 'border-gold-500'
                      : 'border-cream-300/50 hover:border-cream-400'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs text-charcoal-700/60 hover:text-charcoal-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Shop
            </Link>

            <h1 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase font-semibold text-charcoal-800 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-medium text-charcoal-800">
                ${product.price}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.round(product.rating)
                          ? 'fill-gold-500 text-gold-500'
                          : 'fill-cream-300 text-cream-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-charcoal-700/50">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-sm text-charcoal-700/80 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="w-full h-px bg-cream-300/50 mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase font-medium text-charcoal-800 mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase border transition-all rounded-none ${
                      selectedVariant === variant
                        ? 'bg-charcoal-800 text-cream-50 border-charcoal-800'
                        : 'bg-transparent text-charcoal-800 border-cream-400 hover:border-charcoal-800'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase font-medium text-charcoal-800 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-400">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-700 hover:bg-cream-200 transition-colors bg-transparent border-none rounded-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-charcoal-800 border-x border-cream-400">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal-700 hover:bg-cream-200 transition-colors bg-transparent border-none rounded-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-4 bg-charcoal-800 text-cream-50 text-xs tracking-ultra-wide uppercase font-semibold hover:bg-charcoal-900 transition-colors rounded-none border-none"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-center text-[11px] text-charcoal-700/50 mt-3">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5–10 business days.</p>
                <p className="mt-2">We offer a 30-day return policy. Items must be unworn and in original packaging. Contact hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 px-4 bg-warm-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-2 font-medium">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
