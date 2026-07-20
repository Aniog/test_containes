import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-sans uppercase tracking-[0.1em] text-velmora-deep">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-warmgray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm text-velmora-warmgray leading-relaxed font-sans">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-deep">Product not found</h2>
          <Link to="/shop" className="text-sm text-velmora-bronze underline mt-2 inline-block">
            Browse our collection
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors duration-200 ${
                    selectedImage === idx ? 'border-velmora-deep' : 'border-velmora-sand hover:border-velmora-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.id}-subtitle] [${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-ivory overflow-hidden">
              <img
                data-strk-img-id={`main-${product.images[selectedImage].id}`}
                data-strk-img={`[${product.id}-subtitle] [${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-bronze mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-velmora-deep">
              {product.name}
            </h1>
            <p className="text-sm text-velmora-lightgray mt-1 font-sans">{product.subtitle}</p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warmgray font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-deep mt-5">${product.price}</p>

            <p className="text-sm text-velmora-warmgray mt-5 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mt-7">
                <p className="text-xs font-sans uppercase tracking-[0.1em] text-velmora-deep mb-3">
                  Tone
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs font-sans uppercase tracking-[0.08em] border transition-colors duration-200 ${
                        selectedVariant === variant
                          ? 'border-velmora-deep bg-velmora-deep text-white'
                          : 'border-velmora-sand text-velmora-deep hover:border-velmora-deep'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-xs font-sans uppercase tracking-[0.1em] text-velmora-deep mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-sand flex items-center justify-center hover:bg-velmora-ivory transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-12 h-10 border-t border-b border-velmora-sand flex items-center justify-center text-sm font-sans">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-sand flex items-center justify-center hover:bg-velmora-ivory transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-velmora-bronze text-white text-[13px] font-sans uppercase tracking-[0.1em] py-4 hover:bg-velmora-gold transition-colors duration-300"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-deep">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-deep">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  <strong className="text-velmora-deep">Shipping:</strong> Free worldwide shipping on all orders. 
                  Orders ship within 1-2 business days. Domestic delivery: 3-5 days. International: 7-14 days.
                </p>
                <p>
                  <strong className="text-velmora-deep">Returns:</strong> 30-day hassle-free returns. 
                  Items must be unworn and in original packaging. Exchanges available for different sizes or colors.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-velmora-sand bg-velmora-ivory">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-deep mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-cream overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[${p.id}-subtitle] [${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-[13px] uppercase tracking-[0.12em] text-velmora-deep">
                    {p.name}
                  </h3>
                  <p className="text-xs text-velmora-lightgray mt-0.5 font-sans">{p.subtitle}</p>
                  <p className="font-serif text-sm text-velmora-deep mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
