import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ChevronRight, Star } from 'lucide-react';
import products from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container-premium py-32 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-secondary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="container-premium py-8 md:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-charcoal-light mb-8">
        <Link to="/" className="hover:text-gold">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-gold">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
        {/* Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-[3/4] bg-cream mb-4 overflow-hidden">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 h-24 bg-cream overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl mb-4 tracking-widest uppercase">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}
                />
              ))}
            </div>
            <span className="text-sm text-charcoal-light">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="font-serif text-2xl mb-6">${product.price}</p>

          {/* Description */}
          <p className="text-charcoal-light leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border transition-colors ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10'
                        : 'border-border hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-serif text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`btn-primary w-full mb-4 ${isAdded ? 'bg-green-600 hover:bg-green-700' : ''}`}
          >
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Accordions */}
          <div className="mt-8 space-y-4">
            {/* Description Accordion */}
            <div className="border-t border-border">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-sans text-sm tracking-wider uppercase">Description</span>
                <span className={`transform transition-transform ${openAccordion === 'description' ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                <p className="pb-4 text-sm text-charcoal-light leading-relaxed">
                  {product.description} Made with 18K gold plating over high-quality brass,
                  our pieces are designed for everyday wear. Each piece undergoes rigorous
                  quality testing to ensure longevity and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Materials & Care Accordion */}
            <div className="border-t border-border">
              <button
                onClick={() => toggleAccordion('care')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-sans text-sm tracking-wider uppercase">Materials & Care</span>
                <span className={`transform transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <div className={`accordion-content ${openAccordion === 'care' ? 'open' : ''}`}>
                <div className="pb-4 text-sm text-charcoal-light leading-relaxed space-y-2">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p><strong>Care Instructions:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Avoid contact with water, perfume, and lotions</li>
                    <li>Store in a cool, dry place when not in use</li>
                    <li>Clean gently with a soft jewelry cloth</li>
                    <li>Remove before sleeping and exercising</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shipping & Returns Accordion */}
            <div className="border-t border-b border-border">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-sans text-sm tracking-wider uppercase">Shipping & Returns</span>
                <span className={`transform transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <div className="pb-4 text-sm text-charcoal-light leading-relaxed space-y-2">
                  <p><strong>Free Worldwide Shipping</strong> on all orders over $50.</p>
                  <p><strong>30-Day Returns:</strong> Not completely satisfied? Return within 30 days for a full refund.</p>
                  <p><strong>Processing Time:</strong> Orders are processed within 1-2 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="block group cursor-pointer"
              onClick={() => navigate(`/product/${product.slug}`)}
            >
              <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm tracking-widest uppercase mb-2">
                {product.name}
              </h3>
              <p className="text-charcoal-light text-sm">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
