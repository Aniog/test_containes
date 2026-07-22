import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product) {
      const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];
      setSelectedVariant(defaultVariant.id);
    }
    setActiveImage(0);
    setQuantity(1);
    setAddedToCart(false);
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addItem(product, selectedVariant, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-velvet-600 font-sans">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const selectedVariantData = product.variants.find((v) => v.id === selectedVariant);

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="container-site py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-[11px] tracking-wider uppercase text-velvet-500 font-sans mb-8">
          <Link to="/" className="hover:text-velvet-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velvet-800 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velvet-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-4">
              <img
                alt={`${product.name} - view ${activeImage + 1}`}
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}-e2a7`}
                data-strk-img={`[pdp-name] demi-fine gold jewelry product`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-20 bg-velvet-100 rounded-sm overflow-hidden border transition-colors ${
                    activeImage === index ? 'border-velvet-950' : 'border-transparent hover:border-velvet-300'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${index}-f1b6`}
                    data-strk-img={`[pdp-name] jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold-600 font-sans font-medium mb-3">
              {product.category === 'necklaces' ? 'Necklace' : 'Earrings'}
            </p>
            <h1 id="pdp-name" className="product-name text-xl md:text-2xl text-velvet-950 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-velvet-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velvet-600 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-sans font-semibold text-velvet-950 mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed mb-6">
              {product.description}
            </p>

            <hr className="hairline-divider mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] tracking-widest uppercase text-velvet-700 font-sans font-medium mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.inStock && setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={`px-5 py-2.5 border text-xs tracking-wider uppercase font-sans font-medium transition-all rounded-sm ${
                      selectedVariant === variant.id
                        ? 'border-velvet-950 bg-velvet-950 text-white'
                        : variant.inStock
                          ? 'border-velvet-300 text-velvet-700 hover:border-velvet-950'
                          : 'border-velvet-200 text-velvet-300 cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.name}
                    {!variant.inStock && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-[11px] tracking-widest uppercase text-velvet-700 font-sans font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velvet-300 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-600 hover:text-velvet-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-sans font-medium text-velvet-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-600 hover:text-velvet-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariantData?.inStock}
              className={`w-full py-3.5 text-sm tracking-wider uppercase font-sans font-semibold transition-all duration-300 rounded-sm ${
                addedToCart
                  ? 'bg-green-700 text-white'
                  : selectedVariantData?.inStock
                    ? 'bg-gold-500 text-velvet-950 hover:bg-gold-600'
                    : 'bg-velvet-200 text-velvet-400 cursor-not-allowed'
              }`}
            >
              {!selectedVariantData?.inStock
                ? 'Sold Out'
                : addedToCart
                  ? 'Added to Cart!'
                  : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velvet-200">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velvet-200">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase text-velvet-800 font-sans font-medium">
                      {item.title}
                    </span>
                    {expandedAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-velvet-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velvet-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-velvet-50">
          <div className="container-site">
            <h2 className="section-heading text-2xl md:text-3xl text-velvet-950 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-3">
                    <img
                      alt={rp.name}
                      data-strk-img-id={`related-${rp.id}-c8d2`}
                      data-strk-img={`[related-name-${rp.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p id={`related-name-${rp.id}`} className="product-name text-xs text-velvet-900">
                    {rp.name}
                  </p>
                  <p className="text-sm font-sans font-medium text-velvet-900 mt-1">
                    ${rp.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
