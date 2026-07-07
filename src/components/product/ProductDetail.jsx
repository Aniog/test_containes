import React, { useState } from 'react';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description + '. Each piece is carefully crafted with attention to detail, designed to be worn daily and treasured for years. The 18K gold plating provides a luxurious finish that resists tarnishing.',
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: '18K gold plated over recycled brass. Nickel-free and hypoallergenic. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express delivery: 2-4 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? 'border-[var(--velmora-gold)]'
                    : 'border-transparent hover:border-[var(--velmora-border)]'
                }`}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)]">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2">
            {product.category}
          </p>
          <h1 className="product-name text-2xl md:text-3xl mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-gold)] text-[var(--velmora-gold)]' : 'text-[var(--velmora-border)]'}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--velmora-text-muted)]">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="serif-heading text-2xl mb-6">${product.price}</p>

          {/* Variant selector */}
          <div className="mb-6">
            <p className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)] mb-3">
              Finish
            </p>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                    selectedVariant === variant
                      ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white'
                      : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-text)]'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)] mb-3">
              Quantity
            </p>
            <div className="flex items-center border border-[var(--velmora-border)] w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-6 text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="flex gap-3 mb-8">
            <button onClick={handleAddToCart} className="btn-primary flex-1">
              Add to Bag
            </button>
            <button className="p-3 border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors">
              <Heart size={18} />
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-[var(--velmora-border)]">
            {accordions.map((accordion) => (
              <div key={accordion.id} className="border-b border-[var(--velmora-border)]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs tracking-widest uppercase">{accordion.title}</span>
                  <span className={`transform transition-transform ${openAccordion === accordion.id ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openAccordion === accordion.id && (
                  <div className="pb-4">
                    <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                      {accordion.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
