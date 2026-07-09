import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useProductBySlug } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--cream-dark)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-[0.1em] text-[var(--charcoal)]"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-[var(--charcoal)]/60 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage({ products }) {
  const { slug } = useParams();
  const { product, loading, error } = useProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setVariant('Gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [slug]);

  const allProducts = products.map((p) => p.data || p);
  const p = product || allProducts.find((pr) => pr.slug === slug);

  const related = allProducts
    .filter((pr) => pr.slug !== slug && pr.category === p?.category)
    .slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--cream)] pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !p) {
    return (
      <div className="min-h-screen bg-[var(--cream)] pt-24 flex flex-col items-center justify-center px-4">
        <p className="font-serif text-xl text-[var(--charcoal)]/60">Product not found.</p>
        <Link to="/shop" className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    p.image_url,
    p.hover_image_url || p.image_url,
    p.image_url,
    p.hover_image_url || p.image_url,
  ].filter(Boolean);

  const handleAddToCart = () => {
    addItem(p, variant, quantity);
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-[var(--charcoal)]/40">
          <Link to="/" className="hover:text-[var(--charcoal)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--charcoal)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--charcoal)]/60">{p.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 border overflow-hidden transition-all ${
                    selectedImage === i
                      ? 'border-[var(--charcoal)]'
                      : 'border-[var(--cream-dark)] hover:border-[var(--charcoal)]/40'
                  }`}
                >
                  <img src={img} alt={`${p.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-[var(--cream-dark)] overflow-hidden">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={images[selectedImage]}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-2">
              {p.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-[var(--charcoal)]">
              {p.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <span className="font-sans text-xl font-medium text-[var(--charcoal)]">
                ${p.price?.toFixed(2)}
              </span>
              {p.compare_at_price && p.compare_at_price > p.price && (
                <span className="text-sm text-[var(--charcoal)]/40 line-through">
                  ${p.compare_at_price.toFixed(2)}
                </span>
              )}
            </div>

            {p.rating > 0 && (
              <div className="flex items-center gap-2 mt-3">
                <StarRating rating={p.rating} size={14} />
                <span className="text-xs text-[var(--charcoal)]/40">
                  {p.rating} ({p.review_count} reviews)
                </span>
              </div>
            )}

            <p className="mt-6 text-sm text-[var(--charcoal)]/60 leading-relaxed">
              {p.short_description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)]/40 mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setVariant(t)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all ${
                      variant === t
                        ? 'border-[var(--charcoal)] bg-[var(--charcoal)] text-white'
                        : 'border-[var(--cream-dark)] text-[var(--charcoal)]/70 hover:border-[var(--charcoal)]/40'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)]/40 mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-[var(--cream-dark)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[var(--charcoal)]/60 hover:text-[var(--charcoal)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[var(--charcoal)]/60 hover:text-[var(--charcoal)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-[var(--charcoal)] text-white font-sans text-xs uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 hover:bg-[var(--gold)] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(p.price * quantity).toFixed(2)}
            </button>

            {/* Trust mini bar */}
            <div className="grid grid-cols-3 gap-4 mt-6 py-4 border-t border-[var(--cream-dark)]">
              <div className="flex flex-col items-center text-center gap-1">
                <Truck className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-[10px] uppercase tracking-wider text-[var(--charcoal)]/50">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <RotateCcw className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-[10px] uppercase tracking-wider text-[var(--charcoal)]/50">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-[10px] uppercase tracking-wider text-[var(--charcoal)]/50">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{p.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-4 space-y-1">
                  <li>18K gold plated over recycled brass</li>
                  <li>Hypoallergenic, nickel-free</li>
                  <li>Remove before showering, swimming, or exercising</li>
                  <li>Store in the provided pouch to prevent tarnishing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Orders ship within 1-2 business days</li>
                  <li>Delivery typically takes 5-10 business days</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn with original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[var(--cream-dark)]">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--charcoal)] mb-10 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((rp, i) => (
              <motion.div
                key={rp.slug || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={rp} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
