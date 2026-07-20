import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-serif text-3xl text-charcoal-950 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionSections = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materials + '\n\n' + product.careInstructions,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-800">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-100 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`${product.images[activeImage].id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product detail`}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width={product.images[activeImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-gold-500' : 'border-transparent hover:border-brand-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-2">
              {product.category}
            </p>
            <h1 className="heading-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-950 font-light tracking-ultra-wide uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-brand-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-semibold text-charcoal-950">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-charcoal-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-charcoal-600 text-sm leading-relaxed mt-4">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-brand-200/60 my-6" />

            {/* Variant selector */}
            <div>
              <label className="text-xs tracking-ultra-wide uppercase text-charcoal-700 font-semibold mb-3 block">
                Tone: <span className="text-gold-600 capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 text-xs tracking-wide uppercase border rounded-sm transition-all duration-200 ${
                      selectedVariant === variant.id
                        ? 'bg-charcoal-950 text-brand-100 border-charcoal-950'
                        : variant.available
                        ? 'bg-transparent text-charcoal-700 border-charcoal-300 hover:border-charcoal-500'
                        : 'bg-brand-100 text-charcoal-400 border-brand-200 cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                    {!variant.available && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-ultra-wide uppercase text-charcoal-700 font-semibold mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-charcoal-300 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-100 transition-colors"
                >
                  <Minus className="w-4 h-4 text-charcoal-700" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-100 transition-colors"
                >
                  <Plus className="w-4 h-4 text-charcoal-700" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 py-4 bg-charcoal-950 text-brand-100 text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-charcoal-800 transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: ShieldCheck, text: 'Hypoallergenic' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5">
                  <badge.icon className="w-3.5 h-3.5 text-gold-600" />
                  <span className="text-[10px] tracking-wide uppercase text-charcoal-500">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-200/60">
              {accordionSections.map((section) => (
                <div key={section.id} className="border-b border-brand-200/60">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-ultra-wide uppercase text-charcoal-800 font-semibold">
                      {section.title}
                    </span>
                    {openAccordion === section.id ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === section.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-charcoal-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12">
            <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
              Complete Your Look
            </p>
            <h2 className="heading-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
