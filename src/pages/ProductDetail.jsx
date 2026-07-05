import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart, openCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = getProductBySlug(slug);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setSelectedVariant(product?.variants?.[0] || null);
    setAddedToCart(false);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-[var(--color-gold-primary)] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedToCart(true);
    
    // Reset button after animation
    setTimeout(() => {
      setAddedToCart(false);
      openCart();
    }, 1000);
  };

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price) => `$${price.toFixed(0)}`;

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[var(--color-gold-primary)] text-white text-xs tracking-wider mb-4">
                {product.badge.toUpperCase()}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-xl text-[var(--color-text-secondary)] mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--color-gold-primary)] text-[var(--color-gold-primary)]' : 'text-[var(--color-border-dark)]'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-sans text-[var(--color-text-primary)] mb-3">
                  Finish: <span className="font-medium">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-sm font-sans tracking-wider border transition-colors ${
                        selectedVariant === variant
                          ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white'
                          : 'border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-sans text-[var(--color-text-primary)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--color-bg-secondary)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-sans text-sm font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--color-bg-secondary)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 flex items-center justify-center gap-2 font-sans text-sm tracking-wider transition-all duration-300 ${
                addedToCart
                  ? 'bg-[var(--color-gold-primary)] text-white'
                  : 'bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-text-secondary)]'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Product Details Accordions */}
            <div className="mt-10">
              <ProductAccordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </ProductAccordion>
              <ProductAccordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </ProductAccordion>
              <ProductAccordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p><strong>Free Shipping:</strong> On all orders over $50</p>
                  <p><strong>Standard Delivery:</strong> 5-7 business days</p>
                  <p><strong>Express Delivery:</strong> 2-3 business days</p>
                  <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </div>
              </ProductAccordion>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
              You May Also Love
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
