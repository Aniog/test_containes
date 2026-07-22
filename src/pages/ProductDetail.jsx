import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-warm-gold hover:underline text-sm">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(slug, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materialsCare },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shippingReturns },
  ];

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-xs text-stone">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal capitalize">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left — Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] bg-sand relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-stone uppercase tracking-widest">{product.name} — {activeImage + 1}</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-sand flex items-center justify-center border transition-colors ${
                    activeImage === i ? 'border-charcoal' : 'border-transparent hover:border-stone'
                  }`}
                >
                  <span className="text-[10px] text-stone uppercase tracking-wider">{i + 1}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:py-4"
          >
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-xl font-medium text-charcoal">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-stone line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-sm text-stone leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs text-stone uppercase tracking-wide mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-sand text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs text-stone uppercase tracking-wide mb-3">Quantity</p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-charcoal hover:bg-sand transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm text-charcoal min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-charcoal hover:bg-sand transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-sm font-medium tracking-widest uppercase transition-all ${
                  added
                    ? 'bg-charcoal text-white'
                    : 'bg-warm-gold text-white hover:opacity-90'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>
              <button
                className="px-4 border border-sand text-charcoal hover:border-charcoal transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-stone tracking-wide">
              <span>Free shipping over $50</span>
              <span>·</span>
              <span>30-day returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{item.title}</span>
                    {openAccordion === item.key ? (
                      <ChevronUp size={16} className="text-stone" />
                    ) : (
                      <ChevronDown size={16} className="text-stone" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pb-5"
                    >
                      <p className="text-sm text-stone leading-relaxed">{item.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-sand py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
