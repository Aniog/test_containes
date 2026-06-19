import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e8e4df]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm tracking-wider uppercase text-[#1a1a1a]">{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="pb-4 text-sm text-[#6b6b6b] leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="velmora-heading text-2xl text-[#1a1a1a] mb-4">Product not found</h2>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .filter((p) => p.category === product.category || p.material === product.material)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#faf8f5] pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#6b6b6b] mb-8">
          <Link to="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#c9a96e] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#f5f0eb] mb-4 overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-detail-name-${product.id}] [product-detail-desc-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-[#f5f0eb] overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-[#c9a96e]' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-detail-name-${product.id}] [product-detail-desc-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1
              id={`product-detail-name-${product.id}`}
              className="velmora-product-name text-2xl md:text-3xl text-[#1a1a1a] mb-2"
            >
              {product.name}
            </h1>
            <p
              id={`product-detail-desc-${product.id}`}
              className="text-sm text-[#6b6b6b] mb-4"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#e8e4df]'}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6b6b6b]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="velmora-heading text-2xl text-[#1a1a1a] mb-6">${product.price}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs tracking-wider uppercase text-[#1a1a1a] block mb-3">
                Finish
              </span>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-[#faf8f5]'
                        : 'border-[#e8e4df] text-[#6b6b6b] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs tracking-wider uppercase text-[#1a1a1a] block mb-3">
                Quantity
              </span>
              <div className="flex items-center border border-[#e8e4df] w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#c9a96e] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#c9a96e] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="velmora-btn-gold w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-[#6b6b6b] text-center">
              Free shipping on orders over $75
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          <Accordion title="Description" defaultOpen>
            <p>{product.details}</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p>{product.materials}</p>
            <p className="mt-2">To keep your jewelry looking its best, store in a dry place and avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
            <p className="mt-2">We offer 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
          </Accordion>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-[#e8e4df]">
            <h2 className="velmora-heading text-2xl md:text-3xl text-[#1a1a1a] text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
