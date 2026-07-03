import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronLeft, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const accordions = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders.\n\n30-day returns for unworn items in original packaging.\n\nExpress shipping available at checkout.' }
  ];

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: 'var(--velmora-cream)' }}>
      {/* Breadcrumb */}
      <div className="velmora-container py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--velmora-gold)]"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Product Section */}
      <section className="velmora-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="relative overflow-hidden"
              style={{ aspectRatio: '3/4', backgroundColor: 'var(--velmora-sand)' }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Badges */}
              {product.isNew && (
                <span 
                  className="absolute top-4 left-4 px-4 py-2 text-xs uppercase tracking-wider font-medium"
                  style={{ backgroundColor: 'var(--velmora-charcoal)', color: 'white' }}
                >
                  New Arrival
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 flex-shrink-0 overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-[var(--velmora-gold)]' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: 'var(--velmora-sand)' }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="uppercase-tracking text-sm font-medium mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl">${product.price}</span>
                {product.comparePrice && (
                  <span className="text-lg line-through" style={{ color: 'var(--velmora-taupe)' }}>
                    ${product.comparePrice}
                  </span>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? 'var(--velmora-gold)' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'var(--velmora-gold)' : 'var(--velmora-taupe)'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--velmora-taupe)' }}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--velmora-walnut)' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider mb-3">Finish: {selectedVariant}</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'bg-[var(--velmora-charcoal)] text-white'
                        : 'border hover:border-[var(--velmora-charcoal)]'
                    }`}
                    style={{ borderColor: selectedVariant === variant ? 'var(--velmora-charcoal)' : 'var(--velmora-sand)' }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider mb-3">Quantity</p>
              <div className="flex items-center border w-fit" style={{ borderColor: 'var(--velmora-sand)' }}>
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 transition-colors hover:bg-[var(--velmora-sand)]"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 transition-colors hover:bg-[var(--velmora-sand)]"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-gold w-full mb-4 flex items-center justify-center gap-3"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Secondary Actions */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border text-sm uppercase tracking-wider transition-all hover:bg-[var(--velmora-sand)]"
                style={{ borderColor: 'var(--velmora-sand)' }}
              >
                <Heart size={16} strokeWidth={1.5} />
                Save
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border text-sm uppercase tracking-wider transition-all hover:bg-[var(--velmora-sand)]"
                style={{ borderColor: 'var(--velmora-sand)' }}
              >
                <Share2 size={16} strokeWidth={1.5} />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t" style={{ borderColor: 'var(--velmora-sand)' }}>
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b" style={{ borderColor: 'var(--velmora-sand)' }}>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-sm uppercase tracking-wider">{accordion.label}</span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`transform transition-transform ${activeAccordion === accordion.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      activeAccordion === accordion.id ? 'max-h-48 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--velmora-walnut)' }}>
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="velmora-section border-t" style={{ backgroundColor: 'var(--velmora-warm-white)', borderColor: 'var(--velmora-sand)' }}>
          <div className="velmora-container">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
