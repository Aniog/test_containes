import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-warm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base md:text-lg text-velmora-base">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-velmora-stone" /> : <ChevronDown className="w-4 h-4 text-velmora-stone" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center container-velmora">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold text-sm mt-4 inline-block hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const images = Array.from({ length: product.images }, (_, i) => i);

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-white min-h-screen">
      <div className="container-velmora">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velmora-stone mb-6 md:mb-10">
          <Link to="/" className="hover:text-velmora-base transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-base transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-base">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-velmora-surfaceAlt overflow-hidden mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-velmora-cream to-velmora-warm flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-velmora-gold/20" />
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-velmora-base text-[10px] tracking-ultra uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`relative w-20 h-20 bg-velmora-surfaceAlt overflow-hidden transition-all ${
                    mainImage === i ? 'ring-1 ring-velmora-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-velmora-cream to-velmora-warm flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-velmora-gold/20" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:py-4"
          >
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-base">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-velmora-muted text-sm">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl md:text-3xl mt-5 text-velmora-base">${product.price}</p>

            <p className="text-sm text-velmora-stone mt-5 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs tracking-ultra uppercase text-velmora-stone mb-3">Tone</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2.5 text-sm tracking-wide border transition-all ${
                        selectedVariant === variant
                          ? 'border-velmora-base bg-velmora-base text-white'
                          : 'border-velmora-warm text-velmora-base hover:border-velmora-base'
                      }`}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-ultra uppercase text-velmora-stone mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-warm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="flex-1 py-4 bg-velmora-base text-white text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
              >
                Add to Bag
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`px-5 border transition-colors ${
                  wishlist
                    ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-gold'
                    : 'border-velmora-warm text-velmora-base hover:border-velmora-base'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlist ? 'fill-velmora-gold' : ''}`} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs text-velmora-stone">
              <span>Free shipping over $50</span>
              <span className="hidden md:inline">&middot;</span>
              <span>30-day returns</span>
              <span className="hidden md:inline">&middot;</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-base mb-8 md:mb-12">
              You May Also Like
            </h2>
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
