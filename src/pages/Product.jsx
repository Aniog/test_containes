import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ChevronRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import { useCart } from '@/lib/cart';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-ivory rounded-sm overflow-hidden">
        <img
          data-strk-img-id={`${product.images[activeIndex]}-main`}
          data-strk-img={`${product.searchTerms} jewelry product photo detail closeup`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {product.images.map((img, index) => (
          <button
            key={img}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-16 h-16 lg:w-20 lg:h-20 rounded-sm overflow-hidden border-2 transition-colors',
              activeIndex === index ? 'border-gold' : 'border-transparent hover:border-champagne'
            )}
          >
            <img
              data-strk-img-id={`${img}-thumb`}
              data-strk-img={`${product.searchTerms} jewelry angle ${index + 1}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              alt={`${product.name} angle ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-champagne">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-sm font-medium uppercase tracking-wider text-charcoal">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-warm-gray group-hover:text-gold transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-90" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-sm text-slate leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
  };

  return (
    <main className="pt-20 lg:pt-24 pb-16 lg:pb-24">
      {/* Breadcrumb */}
      <div className="container-wide section-padding mb-6 lg:mb-8">
        <nav className="flex items-center gap-2 text-xs text-warm-gray font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-gold transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product content */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery product={product} />
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="space-y-6">
              {/* Name & Price */}
              <div>
                <h1 className="font-serif text-2xl lg:text-3xl uppercase tracking-ultra-wide text-charcoal">
                  {product.name}
                </h1>
                <p className="font-serif text-2xl text-gold mt-2">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < Math.floor(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-champagne'
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-warm-gray">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate leading-relaxed">
                {product.description}
              </p>

              <div className="hairline-divider" />

              {/* Tone selector */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-charcoal mb-3">
                  Tone: <span className="text-warm-gray capitalize">{selectedTone}</span>
                </p>
                <div className="flex gap-2">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        'px-6 py-2.5 text-xs font-sans uppercase tracking-wider border transition-all duration-300',
                        selectedTone === tone
                          ? 'border-gold bg-gold text-white'
                          : 'border-champagne text-charcoal hover:border-gold'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-charcoal mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-champagne">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-sans font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full text-base py-4"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { icon: Truck, label: 'Free Shipping' },
                  { icon: RotateCcw, label: '30-Day Returns' },
                  { icon: ShieldCheck, label: 'Hypoallergenic' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                    <item.icon className="w-4 h-4 text-gold" />
                    <span className="text-[10px] text-warm-gray uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hairline-divider" />

              {/* Accordions */}
              <div>
                <ProductAccordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                </ProductAccordion>
                <ProductAccordion title="Materials & Care">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-charcoal mb-1">Materials</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        {product.materials.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal mb-1">Care Instructions</p>
                      <p>{product.care}</p>
                    </div>
                  </div>
                </ProductAccordion>
                <ProductAccordion title="Shipping & Returns">
                  <div className="space-y-2">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
                    <p><strong>Returns:</strong> We offer a 30-day return policy. Items must be unworn and in original packaging. Return shipping is free for domestic orders.</p>
                  </div>
                </ProductAccordion>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-16 lg:mt-24 bg-ivory py-16 lg:py-20">
          <div className="container-wide section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="section-subtitle mb-3">You May Also Like</p>
              <h2 className="section-title">Complete Your Look</h2>
              <div className="w-16 h-px bg-gold mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
