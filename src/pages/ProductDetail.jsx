import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice, generateStars } from '../lib/utils';
import ProductCard from '../components/products/ProductCard';

const defaultGallery = [
  { id: 'main', label: 'Front' },
  { id: 'side', label: 'Side' },
  { id: 'detail', label: 'Detail' },
  { id: 'worn', label: 'Worn' },
];

const accordions = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImageIndex(0);
      setOpenAccordions({});
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory pt-[72px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-h2 text-charcoal mb-4">Product Not Found</h1>
          <Link
            to="/collections"
            className="inline-block px-8 py-3.5 bg-gold text-white text-btn uppercase tracking-btn font-sans hover:bg-gold-dark transition-colors rounded-btn"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const stars = generateStars(product.rating);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description':
        return product.longDescription;
      case 'materials':
        return `${product.materials}\n\n${product.care}`;
      case 'shipping':
        return `${product.shipping}\n\n${product.returns}`;
      default:
        return '';
    }
  };

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant, quantity);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-[72px]">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs font-sans text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-[1280px] mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-sand rounded-sm overflow-hidden">
              <img
                alt={`${product.name} - ${defaultGallery[activeImageIndex].label} view`}
                data-strk-img-id={`${product.imgId}-${defaultGallery[activeImageIndex].id}`}
                data-strk-img={`[pdp-name] [pdp-desc] gold jewelry ${defaultGallery[activeImageIndex].label.toLowerCase()}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {defaultGallery.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square bg-sand rounded-sm overflow-hidden border-2 transition-colors duration-200 ${
                    activeImageIndex === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    alt={`${product.name} ${img.label}`}
                    data-strk-img-id={`${product.imgId}-thumb-${img.id}`}
                    data-strk-img={`[pdp-name] gold jewelry ${img.label.toLowerCase()}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-4">
            <p id="pdp-name" className="hidden">{product.name}</p>
            <p id="pdp-desc" className="hidden">{product.description}</p>

            <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 uppercase tracking-product font-medium">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(stars.full)].map((_, i) => (
                  <Star key={`full-${i}`} className="w-4 h-4 fill-gold text-gold" />
                ))}
                {[...Array(stars.empty)].map((_, i) => (
                  <Star key={`empty-${i}`} className="w-4 h-4 text-linen" />
                ))}
              </div>
              <span className="text-sm text-stone font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-stone font-sans text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-caption uppercase tracking-caption text-charcoal font-sans font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 border text-sm font-sans font-medium transition-all duration-200 rounded-btn ${
                      selectedVariant?.id === variant.id
                        ? 'border-gold bg-gold text-white'
                        : 'border-linen text-charcoal hover:border-gold'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-caption uppercase tracking-caption text-charcoal font-sans font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-linen rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-charcoal font-sans font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold text-white text-btn uppercase tracking-btn font-sans font-medium hover:bg-gold-dark transition-colors duration-200 rounded-btn mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="text-center text-xs text-stone font-sans">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12 border-t border-linen">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-linen">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-sm uppercase tracking-caption font-sans font-medium text-charcoal">
                      {acc.title}
                    </span>
                    {openAccordions[acc.key] ? (
                      <ChevronUp className="w-4 h-4 text-stone" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone" />
                    )}
                  </button>
                  {openAccordions[acc.key] && (
                    <div className="pb-5 text-stone font-sans text-sm leading-relaxed whitespace-pre-line">
                      {getAccordionContent(acc.key)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-section-mobile md:py-section bg-sand">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-charcoal">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
