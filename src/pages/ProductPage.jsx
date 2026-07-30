import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/ui-extras/StarRating';
import ProductCard from '../components/product/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setSelectedImage(0);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading-2 text-velmora-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold underline underline-offset-4">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant].value, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordionItems = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-body-sm text-velmora-warm-gray">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-velmora-black capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-velmora-cream mb-3">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${selectedImage}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] ${product.variants[selectedVariant].value} jewelry product photo elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} — view ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              <span id={`pdp-name-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'}`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${index}`}
                    data-strk-img={`[pdp-name-${product.id}] jewelry detail angle ${index + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-gold/10 text-velmora-gold text-caption uppercase tracking-[0.1em] rounded-pill mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-heading-1 md:text-heading-1 text-velmora-black tracking-[0.06em] uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3 mb-4">
              <StarRating rating={product.rating} size={14} showCount count={product.reviewCount} />
            </div>

            <p className="font-serif text-heading-2 text-velmora-black mb-5">
              ${product.price}
            </p>

            <p className="text-body text-velmora-espresso leading-relaxed mb-8 max-w-[460px]">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="block text-body-sm text-velmora-warm-gray mb-3 uppercase tracking-[0.06em]">
                Tone: <span className="text-velmora-black font-medium">{product.variants[selectedVariant].name}</span>
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 text-body-sm font-medium tracking-[0.04em] uppercase rounded-pill border transition-all duration-300 ${
                      selectedVariant === index
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-sand hover:border-velmora-gold'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-body-sm text-velmora-warm-gray mb-3 uppercase tracking-[0.06em]">
                Quantity
              </label>
              <div className="inline-flex items-center border border-velmora-sand/50 rounded-pill">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-body font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.1em] uppercase rounded-pill hover:bg-velmora-gold-dark transition-colors duration-300 mb-6"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust perks */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-velmora-sand/30">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map((perk) => (
                <div key={perk.text} className="flex items-center gap-2">
                  <perk.icon size={14} strokeWidth={1.5} className="text-velmora-warm-gray" />
                  <span className="text-body-sm text-velmora-warm-gray">{perk.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-sand/30">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velmora-sand/30">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-body font-medium text-velmora-black uppercase tracking-[0.04em]">
                      {item.label}
                    </span>
                    <span className="text-velmora-warm-gray text-lg leading-none">
                      {openAccordion === item.key ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 animate-fade-in">
                      <p className="text-body-sm text-velmora-espresso leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 px-5 md:px-8 border-t border-velmora-sand/30">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-serif text-heading-2 text-velmora-black text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
