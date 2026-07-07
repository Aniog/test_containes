import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import products from '@/data/products';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setActiveImage(0);
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-32 min-h-screen bg-brand-ivory text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-brand-gold underline">Return to Shop</Link>
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related products in same category, add from others
  if (relatedProducts.length < 4) {
    const more = products.filter(
      (p) => p.id !== product.id && !relatedProducts.find((r) => r.id === p.id)
    );
    relatedProducts.push(...more.slice(0, 4 - relatedProducts.length));
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription || product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: product.materials + '\n\n' + product.care,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24 min-h-screen bg-brand-ivory">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-brand-warm-gray font-sans">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-cream-dark overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-brand-cream-dark overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent hover:border-brand-cream-dark'
                  }`}
                >
                  <img
                    src={i === 0 ? product.imageUrl : (product.hoverImageUrl || product.imageUrl)}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-brand-gold/10 text-brand-gold text-[10px] tracking-[0.15em] uppercase font-sans px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name-text text-2xl lg:text-3xl text-brand-charcoal mb-3">
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-brand-charcoal mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-cream-dark fill-brand-cream-dark'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-brand-warm-gray font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-brand-warm-gray text-[15px] leading-relaxed mb-8">
              {product.description}
            </p>

            <hr className="hairline-divider mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-brand-charcoal font-sans font-semibold mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm font-sans tracking-[0.05em] transition-all ${
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-ivory'
                        : 'border border-brand-cream-dark text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.15em] uppercase text-brand-charcoal font-sans font-semibold mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-cream-dark">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-brand-charcoal hover:bg-brand-cream transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm text-brand-charcoal font-sans min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-brand-charcoal hover:bg-brand-cream transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-[0.15em] uppercase font-sans font-medium transition-colors ${
                addedFeedback
                  ? 'bg-brand-gold text-brand-ivory'
                  : 'bg-brand-charcoal text-brand-ivory hover:bg-brand-charcoal/90'
              }`}
            >
              {addedFeedback ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 text-brand-warm-gray">
              <span className="flex items-center gap-1.5 text-[11px] font-sans">
                <Truck size={13} strokeWidth={1.5} />
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-sans">
                <RotateCcw size={13} strokeWidth={1.5} />
                30-Day Returns
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-sans">
                <ShieldCheck size={13} strokeWidth={1.5} />
                Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-cream-dark">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-brand-cream-dark">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-[0.1em] uppercase text-brand-charcoal font-sans font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-brand-warm-gray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-brand-warm-gray leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <hr className="hairline-divider mb-12" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal font-light">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
