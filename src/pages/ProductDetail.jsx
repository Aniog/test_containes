import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedTone);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: ${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders over $50. Standard delivery takes 5–10 business days. Express shipping available at checkout.\n\nWe offer hassle-free 30-day returns. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 bg-velmora-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-stone">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-charcoal capitalize">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-velmora-parchment overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={`[product-${product.id}-name] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                data-strk-img-id={`product-main-${product.id}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Navigation arrows (mobile) */}
              <button
                onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center lg:hidden"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center lg:hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="hidden lg:flex gap-3">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-velmora-parchment overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={`[product-${product.id}-name] gold jewelry view ${idx + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    data-strk-img-id={`product-thumb-${product.id}-${idx}`}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-2xl font-medium text-velmora-charcoal">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-velmora-sand line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone Selector */}
            {product.toneOptions.length > 1 && (
              <div className="mb-6">
                <label className="block font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-3">
                  Metal Tone
                </label>
                <div className="flex gap-3">
                  {product.toneOptions.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2.5 font-sans text-xs font-medium tracking-widest-lg uppercase border transition-all ${
                        selectedTone === tone
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-parchment transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-parchment transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-linen">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-linen">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-stone leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-velmora-linen py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal font-light mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velmora-parchment overflow-hidden mb-3">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={`[related-${p.id}-name] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      data-strk-img-id={`related-${p.id}`}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p id={`related-${p.id}-name`} className="hidden">{p.name}</p>
                  <h3 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-1">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-stone">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}