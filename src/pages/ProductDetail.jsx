import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Star, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../hooks/useCart';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-wide">{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-stone leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(slug, 4);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedTone(product?.tone?.[0] || 'gold');
    setQuantity(1);
    setMainImage(0);
    setAdded(false);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-3">Product Not Found</h1>
          <Link to="/collection" className="text-sm text-gold underline">
            Browse our collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedTone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imageUrls = Array.from({ length: product.images }, (_, i) =>
    `https://placehold.co/800x1000/2a1f1a/d4b87a?text=${encodeURIComponent(product.name)}+${i + 1}`
  );

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-warm overflow-hidden">
              <img
                src={imageUrls[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {imageUrls.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    mainImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={url} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} size={13} />
              <span className="text-xs text-stone">{product.reviews} reviews</span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase font-medium">
              {product.name}
            </h1>
            <p className="mt-2 text-xl font-light">${product.price}</p>

            <p className="mt-5 text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mt-6">
                <p className="text-xs tracking-widest uppercase font-medium mb-3">
                  Tone: <span className="capitalize">{selectedTone}</span>
                </p>
                <div className="flex gap-2">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-4 py-2 text-xs tracking-wider uppercase border transition-all ${
                        selectedTone === tone
                          ? 'border-charcoal bg-charcoal text-cream'
                          : 'border-divider hover:border-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-divider">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-warm transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-warm transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-charcoal text-cream hover:bg-gold'
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-stone">
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-gold" />
                Free shipping over $50
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-gold" />
                30-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-gold" />
                Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-divider py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10 md:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
