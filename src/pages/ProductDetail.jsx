import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import StarRating from '@/components/product/StarRating';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-cream font-sans text-sm font-medium">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-luxury ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-muted font-sans text-sm leading-[1.8]">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, toggleDrawer } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(() => {
    if (!product) return null;
    return product.variants.find((v) => v.inStock)?.id || product.variants[0]?.id;
  });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base">
        <div className="text-center">
          <h1 className="font-serif text-cream text-2xl mb-2">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm font-sans hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant);
    if (variant?.inStock) {
      addItem(product, selectedVariant, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="bg-base min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-6">
        <nav className="flex items-center gap-2 text-subtle text-xs font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-muted">{product.name}</span>
        </nav>
      </div>

      {/* Product main */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery product={product} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:pt-4"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-cream text-lg font-sans">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-subtle text-base font-sans line-through">
                  ${product.compareAtPrice}
                </span>
              )}
            </div>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="text-muted font-sans text-sm leading-[1.8] mt-6 mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-widest text-muted font-sans mb-3">
                Metal
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest font-sans border transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-gold text-gold'
                        : 'border-white/10 text-muted hover:border-white/30'
                    } ${!variant.inStock ? 'opacity-40 cursor-not-allowed line-through' : ''}`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-muted font-sans mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-white/10 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-cream text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-sage text-base'
                  : 'bg-gold hover:bg-gold-hover text-base'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Bag
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><span className="text-cream font-medium">Materials:</span> {product.materials}</p>
                <p><span className="text-cream font-medium">Care:</span> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders over $50. Standard delivery 5–7 business days. Express delivery available at checkout.</p>
                <p>We offer 30-day hassle-free returns on all unworn items in original packaging. Return shipping is complimentary within the US.</p>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-white/5 py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="font-serif text-cream text-2xl mb-12 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
