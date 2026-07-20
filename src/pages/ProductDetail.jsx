import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium text-stone-800">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-stone-400" />
        ) : (
          <ChevronDown size={16} className="text-stone-400" />
        )}
      </button>
      {open && <div className="pb-4 text-sm text-stone-600 leading-relaxed">{children}</div>}
    </div>
  );
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-stone-300'}
          />
        ))}
      </div>
      <span className="text-xs text-stone-500">{rating} ({count} reviews)</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-stone-900 mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-gold text-sm tracking-wider uppercase hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-stone-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-stone-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-champagne rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={product.imageQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imageQuery, product.imageQueryAlt, product.imageQuery, product.imageQueryAlt].map((q, i) => (
                <div key={i} className="aspect-square bg-champagne rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={q}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <Link to="/collection" className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors mb-6">
              <ArrowLeft size={14} />
              Back to Shop
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-stone-900 mb-3">
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="font-serif text-2xl text-stone-900 mt-4 mb-6">
              ${product.price}
            </p>

            <p className="text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-stone-800 mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase font-sans border transition-all ${
                      selectedVariant === variant
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-stone-800 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium text-stone-900 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-stone-900 hover:bg-gold text-white py-4 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/20"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 py-4 border-y border-stone-100">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((badge) => (
                <span key={badge} className="text-[10px] tracking-wider uppercase text-stone-400 font-sans">
                  {badge}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
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
      <div className="border-t border-stone-200 bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="aspect-[3/4] bg-champagne rounded-sm overflow-hidden">
                  <img
                    data-strk-img-id={`related-${rp.id}`}
                    data-strk-img={rp.imageQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif text-sm uppercase tracking-wider text-stone-900 mt-3 group-hover:text-gold transition-colors">
                  {rp.name}
                </p>
                <p className="text-sm text-stone-500 mt-0.5 font-sans">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
