import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ChevronDown, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../cart/CartContext';
import ProductCard from '../components/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--divider)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif-upper text-xs tracking-widest-xl">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
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
            <div className="pb-5 text-sm text-[var(--stone)] leading-relaxed font-light">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-2">Product Not Found</h2>
          <Link to="/shop" className="text-sm text-[var(--gold)] underline underline-offset-4">
            Browse all jewelry
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.slug);

  const images = [
    product.image,
    product.hoverImage || product.image,
    `${product.image} detail closeup side view`,
    `${product.hoverImage || product.image} lifestyle on model`,
  ];

  const handleAdd = () => {
    addToCart(product, variant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24 bg-[var(--cream)]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[11px] text-[var(--warm-gray)] uppercase tracking-wider">
          <Link to="/" className="hover:text-[var(--ink)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--ink)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--stone)]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] bg-[var(--cream-dark)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(images[selectedImage])}?width=800&height=1000&nologo=true&seed=${slug}${selectedImage}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <button
                onClick={() => setSelectedImage((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedImage((i) => (i + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-[var(--ink)]' : 'border-transparent'}`}
                >
                  <img
                    src={`https://image.pollinations.ai/prompt/${encodeURIComponent(img)}?width=150&height=150&nologo=true&seed=${slug}${idx}`}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif-upper text-2xl md:text-3xl tracking-widest-xl mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-[var(--divider)]'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-[var(--stone)]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-xl font-medium mb-6">${product.price}</p>

            <p className="text-sm text-[var(--stone)] leading-relaxed font-light mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-serif-upper text-[11px] tracking-widest-xl mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border transition-colors ${variant === v ? 'border-[var(--ink)] bg-[var(--ink)] text-white' : 'border-[var(--divider)] text-[var(--stone)] hover:border-[var(--ink)]'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-serif-upper text-[11px] tracking-widest-xl mb-3">Quantity</p>
              <div className="inline-flex items-center border border-[var(--divider)]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 hover:bg-[var(--cream-dark)] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 hover:bg-[var(--cream-dark)] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-[var(--gold)] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[var(--gold-dark)] transition-colors mb-4"
            >
              Add to Cart
            </button>
            <p className="text-[11px] text-[var(--warm-gray)] text-center">
              Free worldwide shipping. 30-day returns.
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong className="text-[var(--ink)]">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-[var(--ink)]">Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>We offer free standard worldwide shipping on all orders. Express options available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-[var(--divider)] bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10 md:mb-14">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
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
