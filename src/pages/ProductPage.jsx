import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const raf = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [id]);

  if (!product) {
    return (
      <main className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-3xl text-champagne mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold text-sm">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-3"><strong className="text-champagne">Materials:</strong> {product.material}</p>
          <p><strong className="text-champagne">Care Instructions:</strong> {product.care}</p>
        </>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 lg:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-champagne/60">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-[3/4] bg-espresso border border-divider overflow-hidden">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] jewelry on dark background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-espresso border cursor-pointer transition-all duration-200 ${
                    i === 0 ? 'border-gold' : 'border-divider hover:border-muted'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted/40 text-xs">{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p id={`product-name-${product.id}`} className="sr-only">{product.name}</p>
            <p id={`product-desc-${product.id}`} className="sr-only">{product.description}</p>

            <p className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-light mb-3">
              {product.category === 'sets' ? 'Gift Set' : product.category}
            </p>

            <h1 className="font-product-name text-2xl sm:text-3xl lg:text-4xl text-champagne mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-champagne mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-champagne/60 font-sans font-light leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wider uppercase text-champagne/70 font-sans mb-3 block">
                Tone: <span className="text-champagne">{selectedVariant}</span>
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-divider text-champagne/60 hover:border-muted'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wider uppercase text-champagne/70 font-sans mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-divider">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-champagne transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm text-champagne font-sans">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-champagne transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold hover:bg-gold-light text-velvet text-xs tracking-[0.2em] uppercase font-sans font-medium py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 mb-6"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-divider">
              <div className="text-center">
                <Truck size={16} className="mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <span className="text-[10px] text-muted tracking-wider uppercase">Free Shipping</span>
              </div>
              <div className="text-center">
                <RotateCcw size={16} className="mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <span className="text-[10px] text-muted tracking-wider uppercase">30-Day Returns</span>
              </div>
              <div className="text-center">
                <Shield size={16} className="mx-auto text-gold mb-1.5" strokeWidth={1.5} />
                <span className="text-[10px] text-muted tracking-wider uppercase">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.key} className="border-b border-divider">
                  <button
                    onClick={() => toggleAccordion(accordion.key)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className="text-sm text-champagne/80 font-sans font-light tracking-wide group-hover:text-champagne transition-colors">
                      {accordion.title}
                    </span>
                    {activeAccordion === accordion.key ? (
                      <ChevronUp size={16} className="text-muted" />
                    ) : (
                      <ChevronDown size={16} className="text-muted" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-champagne/50 font-sans font-light leading-relaxed">
                      {accordion.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-champagne">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {relatedProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
