import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const accordionItems = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug, activeImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink-700 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant].name, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description': return product.longDescription;
      case 'materials': return `${product.materials}\n\nCare Instructions: ${product.care}`;
      case 'shipping': return `${product.shipping}\n\n${product.returns}`;
      default: return '';
    }
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="section-padding py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-ink-300 font-sans">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-500">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product photo elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-cream-200 overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-gold-500' : 'border-transparent hover:border-ink-200'}`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.id}-name] gold jewelry detail view ${idx + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] font-sans font-semibold tracking-ultra-wide uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide uppercase text-ink-800 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-ink-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-300">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-gold-600 mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-ink-400 leading-relaxed mb-8 text-sm">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-ink-500 mb-3">
                Tone: {product.variants[selectedVariant].name}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-5 py-2.5 border text-sm font-sans tracking-wide transition-all ${selectedVariant === idx ? 'border-ink-700 bg-ink-700 text-cream-50' : 'border-ink-200 text-ink-500 hover:border-ink-400'}`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-ink-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink-500 hover:text-ink-700 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-ink-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink-500 hover:text-ink-700 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold py-4 text-base mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-ink-100/40 mb-8">
              <div className="flex items-center gap-1.5 text-ink-300">
                <Truck className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wide">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-ink-300">
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wide">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-ink-300">
                <Shield className="w-3.5 h-3.5" />
                <span className="text-[11px] tracking-wide">1-Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {accordionItems.map(({ key, title }) => (
                <div key={key} className="border-b border-ink-100/40">
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-ink-600">
                      {title}
                    </span>
                    {openAccordion === key ? (
                      <ChevronUp className="w-4 h-4 text-ink-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-400" />
                    )}
                  </button>
                  {openAccordion === key && (
                    <div className="pb-4 text-sm text-ink-400 leading-relaxed whitespace-pre-line animate-fade-in">
                      {getAccordionContent(key)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="section-padding section-padding-y border-t border-ink-100/30">
        <h2 className="section-title mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
