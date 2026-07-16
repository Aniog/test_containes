import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream-200 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-20 overflow-hidden border-2 transition-colors',
                    selectedImage === index
                      ? 'border-gold-500'
                      : 'border-transparent hover:border-cream-400'
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-xs font-sans tracking-ultra-wide uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-charcoal-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-cream-300 text-cream-300'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-900 mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-3">
                Tone: <span className="text-charcoal-900 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2 font-sans text-sm tracking-wide capitalize transition-all duration-200',
                      selectedVariant === variant
                        ? 'bg-gold-500 text-white'
                        : 'border border-charcoal-300 text-charcoal-700 hover:border-gold-400'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-200 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-sans text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 flex items-center justify-center gap-3 text-base"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream-300">
              <div className="text-center">
                <Truck className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-xs text-charcoal-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-xs text-charcoal-600">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                <p className="text-xs text-charcoal-600">1 Year Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl mx-auto">
          {/* Description Accordion */}
          <div className="border-t border-cream-300">
            <button
              onClick={() => toggleAccordion('description')}
              className="w-full flex items-center justify-between py-5 font-sans text-sm tracking-ultra-wide uppercase text-charcoal-800 hover:text-gold-600 transition-colors"
            >
              Description
              {openAccordion === 'description' ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {openAccordion === 'description' && (
              <div className="pb-6 text-sm text-charcoal-600 leading-relaxed">
                {product.longDescription}
              </div>
            )}
          </div>

          {/* Materials & Care */}
          <div className="border-t border-cream-300">
            <button
              onClick={() => toggleAccordion('materials')}
              className="w-full flex items-center justify-between py-5 font-sans text-sm tracking-ultra-wide uppercase text-charcoal-800 hover:text-gold-600 transition-colors"
            >
              Materials & Care
              {openAccordion === 'materials' ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {openAccordion === 'materials' && (
              <div className="pb-6 text-sm text-charcoal-600 leading-relaxed">
                <p className="mb-4">
                  <strong>Materials:</strong> 18K gold-plated brass, hypoallergenic, nickel-free
                </p>
                <p>{product.careInstructions}</p>
              </div>
            )}
          </div>

          {/* Shipping & Returns */}
          <div className="border-t border-b border-cream-300">
            <button
              onClick={() => toggleAccordion('shipping')}
              className="w-full flex items-center justify-between py-5 font-sans text-sm tracking-ultra-wide uppercase text-charcoal-800 hover:text-gold-600 transition-colors"
            >
              Shipping & Returns
              {openAccordion === 'shipping' ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {openAccordion === 'shipping' && (
              <div className="pb-6 text-sm text-charcoal-600 leading-relaxed">
                <ul className="space-y-2">
                  <li>• Free standard shipping on all orders worldwide</li>
                  <li>• Express shipping available at checkout</li>
                  <li>• 30-day return policy for unworn items</li>
                  <li>• Free return shipping on all domestic orders</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
                You May Also Like
              </p>
              <h2 className="section-title">Related Products</h2>
              <div className="divider mt-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
