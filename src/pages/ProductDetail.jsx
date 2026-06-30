import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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
            <div className="pb-5 text-sm text-muted leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
    if (product) setVariant(product.tone[0]);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const imageUrls = Array.from({ length: product.images }).map((_, i) =>
    `https://image.pollinations.ai/prompt/${encodeURIComponent(
      product.imageQuery + (i === 1 ? ' detail shot alternate angle' : '')
    )}?width=900&height=1200&nologo=true&seed=${i + 1}`
  );

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {imageUrls.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border transition-colors ${
                    selectedImage === i ? 'border-base' : 'border-hairline hover:border-muted'
                  }`}
                >
                  <img
                    src={url}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-cream overflow-hidden">
              <img
                src={imageUrls[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-muted text-sm">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium mb-3">
                Metal Tone: <span className="text-muted font-normal normal-case">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    onClick={() => setVariant(t)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                      variant === t
                        ? 'border-base bg-base text-white'
                        : 'border-hairline text-muted hover:border-base'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-cream transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 hover:bg-cream transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-gold text-white hover:bg-gold-hover'
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
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">{product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] bg-white overflow-hidden mb-3">
                  <img
                    src={`https://image.pollinations.ai/prompt/${encodeURIComponent(p.imageQuery)}?width=600&height=800&nologo=true&seed=1`}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-base mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-muted">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
