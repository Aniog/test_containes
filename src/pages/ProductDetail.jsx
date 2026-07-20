import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-warmGray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal">
          {title}
        </span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-warmGray-600 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const found = products.find((p) => p.slug === slug);
    setProduct(found);
    setSelectedColor('gold');
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-warmGray-400">Product not found.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const thumbnails = [
    { id: 'main', label: 'Front' },
    { id: 'side', label: 'Side' },
    { id: 'detail', label: 'Detail' },
    { id: 'lifestyle', label: 'Worn' },
  ];

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-warmGray-400">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3">
              {thumbnails.map((thumb, index) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(index)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    activeThumb === index ? 'border-gold-500' : 'border-warmGray-200 hover:border-warmGray-400'
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} - ${thumb.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-champagne rounded-sm overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <p className="text-label mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-charcoal uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-warmGray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-warmGray-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mt-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-warmGray-600 text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Divider */}
            <div className="divider my-6" />

            {/* Color selector */}
            {product.colors.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-warmGray-500 mb-3">
                  Tone: <span className="text-charcoal capitalize">{selectedColor}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2 text-xs font-sans font-medium tracking-wider uppercase border transition-all ${
                        selectedColor === color
                          ? 'border-gold-500 bg-gold-500 text-white'
                          : 'border-warmGray-300 text-warmGray-600 hover:border-gold-500'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-warmGray-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-warmGray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-warmGray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 py-3 text-sm font-medium border-x border-warmGray-300 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-warmGray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold py-4 flex items-center justify-center gap-3"
            >
              <ShoppingBag size={18} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-warmGray-200">
              <div className="text-center">
                <Truck size={20} className="mx-auto text-gold-500 mb-2" />
                <p className="text-[10px] text-warmGray-500 tracking-wider uppercase">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={20} className="mx-auto text-gold-500 mb-2" />
                <p className="text-[10px] text-warmGray-500 tracking-wider uppercase">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={20} className="mx-auto text-gold-500 mb-2" />
                <p className="text-[10px] text-warmGray-500 tracking-wider uppercase">1 Year Warranty</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.descriptionLong}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.material}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="divider mb-12" />
        <div className="text-center mb-10">
          <p className="text-label mb-3">You May Also Like</p>
          <h2 className="heading-serif text-2xl md:text-4xl text-charcoal">
            Complete Your Look
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
