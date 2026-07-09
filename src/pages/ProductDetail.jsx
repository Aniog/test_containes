import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-semibold uppercase tracking-wider text-espresso-900">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-espresso-600" />
        ) : (
          <ChevronDown size={16} className="text-espresso-600" />
        )}
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          <div className="body-text text-sm leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setSelectedVariant(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-50">
        <div className="text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant].name, quantity);
  };

  return (
    <div className="min-h-screen bg-brand-50 pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-warm-500 font-sans">
          <Link to="/" className="hover:text-espresso-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso-800">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-brand-100 to-warm-200 rounded-sm overflow-hidden relative">
              <img
                src={product.images[activeImage]?.src}
                alt={product.images[activeImage]?.alt}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-espresso-950 text-warm-100 text-[10px] font-bold uppercase tracking-ultra-wide px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail row */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden border-2 transition-all',
                    activeImage === index
                      ? 'border-brand-500'
                      : 'border-brand-200 hover:border-brand-400'
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-ultra-wide text-espresso-950 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-current' : 'text-brand-200'}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-600 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="price-text text-2xl mb-6">{formatPrice(product.price)}</p>

            {/* Description */}
            <p className="body-text mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-800 mb-3">
                Tone: <span className="text-brand-600">{product.variants[selectedVariant].name}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(index)}
                    className={cn(
                      'flex items-center gap-2 px-5 py-2.5 border rounded-sm transition-all text-sm font-sans',
                      selectedVariant === index
                        ? 'border-brand-500 bg-brand-50 text-espresso-900'
                        : 'border-brand-200 hover:border-brand-400 text-espresso-700'
                    )}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-brand-200"
                      style={{ backgroundColor: variant.color }}
                    />
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-800 mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-brand-200 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-espresso-600 hover:text-espresso-950 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-sans text-sm font-semibold text-espresso-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-espresso-600 hover:text-espresso-950 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-xs text-warm-500 font-sans">
                  {product.stock < 20 ? `Only ${product.stock} left` : 'In stock'}
                </span>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-sm mb-3">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-brand-200 mt-4">
              <div className="flex items-center gap-1.5 text-warm-600">
                <Truck size={14} />
                <span className="text-xs font-sans">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-warm-600">
                <RotateCcw size={14} />
                <span className="text-xs font-sans">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-warm-600">
                <ShieldCheck size={14} />
                <span className="text-xs font-sans">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-espresso-900 mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-espresso-900 mb-1">Care Instructions</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-3">
              You May Also Like
            </p>
            <h2 className="heading-section">Complete Your Look</h2>
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
