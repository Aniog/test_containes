import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[var(--color-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--color-soft-gray)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--color-soft-gray)]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--color-soft-gray)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif-display text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--color-gold)]'
                      : 'border-transparent hover:border-[var(--color-border)]'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
              {product.category}
            </p>
            <h1 className="product-name text-2xl md:text-3xl mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--color-star)] text-[var(--color-star)]'
                        : 'text-[var(--color-light-gray)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-soft-gray)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif-display text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-[var(--color-soft-gray)] leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wider uppercase mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-white'
                        : 'border-[var(--color-border)] text-[var(--color-soft-gray)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wider uppercase mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full btn-accent mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-center text-[var(--color-soft-gray)]">
              Free worldwide shipping on orders over $50
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.shortDescription}</p>
                <p className="mt-2">
                  Each piece is carefully crafted using premium materials and finished with 
                  18K gold plating for a luxurious look that lasts. Designed for everyday wear 
                  and special occasions alike.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Base: Sterling silver with 18K gold plating</p>
                <p className="mt-2">Care: Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on orders over $50. Standard delivery takes 5-10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="section-title text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-sm text-center">{related.name}</h3>
                <p className="text-center text-sm font-medium mt-1">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
