import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold hover:underline text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(id);

  const thumbnails = [
    { id: `${product.imageId}-1`, ratio: '3x4', width: 600 },
    { id: `${product.imageId}-2`, ratio: '3x4', width: 600 },
    { id: `${product.imageId}-3`, ratio: '3x4', width: 600 },
    { id: `${product.imageId}-4`, ratio: '3x4', width: 600 },
  ];

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'care',
      title: 'Materials & Care',
      content: product.care,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $75. Standard delivery takes 5-10 business days. Express shipping available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {thumbnails.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-parchment rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={thumb.ratio}
                    data-strk-img-width={thumb.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-parchment rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`${product.imageId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-medium">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso tracking-wide mt-2"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} />
              <span className="text-xs text-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-espresso mt-4">
              ${product.price}
            </p>

            <p className="mt-4 text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-stone font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase font-medium border transition-all ${
                      selectedVariant === v
                        ? 'bg-espresso text-cream border-espresso'
                        : 'bg-transparent text-espresso border-border hover:border-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-stone font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border rounded-sm w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-parchment transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-espresso" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-parchment transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-espresso" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, quantity, selectedVariant)}
              className="w-full mt-8 py-4 bg-espresso text-cream text-xs tracking-widest font-medium uppercase hover:bg-espresso-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] text-stone tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-espresso">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-stone leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-parchment py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-espresso font-light">
                You May Also Like
              </h2>
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-espresso hover:text-gold transition-colors"
              >
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
