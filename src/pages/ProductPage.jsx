import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Minus, Plus, Truck, RotateCcw, Shield, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wider uppercase text-walnut-900 hover:text-gold-700 transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-walnut-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-walnut-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbnails = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgIdAlt, query: `[${product.descId}] [${product.titleId}] worn jewelry model portrait` },
    { id: `${product.imgId}-detail`, query: `[${product.descId}] [${product.titleId}] jewelry detail close up macro` },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-cream-100 pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-walnut-400">
          <Link to="/" className="hover:text-walnut-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-walnut-700 transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-walnut-700">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
              {thumbnails.map((thumb, index) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(index)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-colors ${
                    activeThumb === index ? 'border-gold-600' : 'border-cream-300 hover:border-walnut-400'
                  }`}
                >
                  <img
                    data-strk-img-id={`${thumb.id}-thumb-pdp-${index}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-cream-200 overflow-hidden">
              <img
                data-strk-img-id={`${thumbnails[activeThumb].id}-pdp-main`}
                data-strk-img={thumbnails[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-600 mb-2">
              {product.category}
            </p>

            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl uppercase tracking-ultra-wide text-walnut-900 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size={16} showCount count={product.reviewCount} />
            </div>

            <p className="font-sans text-2xl text-walnut-900 mb-6">${product.price}</p>

            <p id={product.descId} className="font-sans text-sm text-walnut-600 leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-walnut-600 mb-3">
                Tone: <span className="text-walnut-900">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 font-sans text-xs tracking-wider uppercase border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-walnut-900 bg-walnut-900 text-cream-100'
                        : 'border-cream-400 text-walnut-600 hover:border-walnut-600'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-walnut-600 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-cream-400">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-walnut-600 hover:text-walnut-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-3 font-sans text-sm text-walnut-900 min-w-[40px] text-center border-x border-cream-400">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-walnut-600 hover:text-walnut-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'btn-primary'
              }`}
            >
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-cream-300">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-walnut-400" strokeWidth={1.5} />
                <span className="font-sans text-xs text-walnut-500">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-walnut-400" strokeWidth={1.5} />
                <span className="font-sans text-xs text-walnut-500">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-walnut-400" strokeWidth={1.5} />
                <span className="font-sans text-xs text-walnut-500">1-Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-walnut-800 mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-walnut-800 mb-1">Care</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                  <p>Express shipping (2-3 business days) available at checkout for $12.</p>
                  <p>We offer 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 border-t border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">You May Also Like</p>
            <h2 className="section-title">Related Pieces</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 10} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
