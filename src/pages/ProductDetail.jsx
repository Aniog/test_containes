import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, Truck, RotateCcw, CircleDot } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      const defaultV = product.variants.find(v => v.id === product.defaultVariant) || product.variants[0];
      setSelectedVariant(defaultV);
      setMainImage(0);
      setQuantity(1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen bg-warm-white">
        <p className="text-muted">Product not found.</p>
        <Link to="/shop" className="text-gold text-sm mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant, quantity);
    }
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'care', title: 'Materials & Care', content: product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-warm-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6 md:mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div>
            <div className="aspect-[4/5] bg-ivory overflow-hidden mb-3">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[mainImage]?.alt || product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`detail-main-${product.id}-${mainImage}`}
                data-strk-img={`[detail-desc-${product.id}] [detail-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 bg-ivory overflow-hidden border-2 transition-colors duration-200 ${
                    mainImage === idx ? 'border-gold' : 'border-transparent hover:border-champagne'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`detail-thumb-${product.id}-${idx}`}
                    data-strk-img={`[detail-desc-${product.id}] [detail-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">
              {product.category}
            </p>
            <h1
              id={`detail-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-ink mb-2"
            >
              {product.name}
            </h1>
            <p id={`detail-desc-${product.id}`} className="hidden">{product.shortDesc}</p>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-champagne'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-ink mb-6">${product.price}</p>

            <p className="text-muted text-sm leading-relaxed mb-6">
              {product.shortDesc}
            </p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-ink mb-3">Color</p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                        selectedVariant?.id === variant.id
                          ? 'border-gold bg-gold/10 text-ink'
                          : 'border-champagne text-muted hover:border-ink'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-ink/20"
                          style={{ backgroundColor: variant.color }}
                        />
                        {variant.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-champagne">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-ink py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-ink text-ink py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-ink hover:text-warm-white transition-all duration-300 flex items-center justify-center gap-2 mb-8">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>

            {/* Trust mini */}
            <div className="grid grid-cols-3 gap-4 py-5 border-t border-champagne">
              <div className="flex flex-col items-center text-center gap-1.5">
                <Truck className="w-4 h-4 text-gold" />
                <span className="text-[10px] text-muted tracking-wide">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-gold" />
                <span className="text-[10px] text-muted tracking-wide">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <CircleDot className="w-4 h-4 text-gold" />
                <span className="text-[10px] text-muted tracking-wide">18K Gold</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6 border-t border-champagne">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-champagne">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-[0.15em] uppercase font-medium">{acc.title}</span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-muted leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-champagne">
            <h2 className="font-serif text-2xl md:text-3xl text-ink text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden mb-3">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-desc-${p.id}] [related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                    />
                  </div>
                  <div className="text-center">
                    <h3
                      id={`related-name-${p.id}`}
                      className="font-serif text-xs tracking-[0.15em] uppercase text-ink group-hover:text-gold transition-colors"
                    >
                      {p.name}
                    </h3>
                    <p id={`related-desc-${p.id}`} className="hidden">{p.shortDesc}</p>
                    <p className="text-sm font-medium mt-1">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
