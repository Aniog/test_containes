import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Star, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setQuantity(1);
      setSelectedImage(0);
      setIsAdding(false);
      setIsAdded(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Product not found
          </h1>
          <button
            onClick={() => navigate('/collection')}
            className="text-velmora-gold hover:underline"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, product.variants[selectedVariant]?.name || 'Gold', quantity);

    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 500);
  };

  const currentVariant = product.variants[selectedVariant];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>
      </div>

      {/* Product Section */}
      <section className="max-w-[1280px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-sand/50 rounded-lg overflow-hidden">
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
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-sand'
                  }`}
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
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-charcoal text-white text-xs tracking-wide mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              className="text-product text-xl md:text-2xl text-velmora-espresso mb-2"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-espresso mb-3">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <Rating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            {/* Short Description */}
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-velmora-espresso mb-3">
                  Color: <span className="text-velmora-warm-gray">{currentVariant.name}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedVariant === index
                          ? 'border-velmora-gold shadow-gold'
                          : 'border-velmora-sand hover:border-velmora-warm-gray'
                      }`}
                      style={{ backgroundColor: variant.hex }}
                      title={variant.name}
                      aria-label={`Select ${variant.name} color`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-medium text-velmora-espresso mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-sand rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-sand/50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-sand/50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding || isAdded}
              className="w-full mb-4"
              size="lg"
            >
              {isAdded ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Added to Cart
                </span>
              ) : isAdding ? (
                'Adding...'
              ) : (
                'Add to Cart'
              )}
            </Button>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 text-xs text-velmora-warm-gray mt-6">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                30-Day Returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-velmora-espresso mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-velmora-espresso mb-1">Care Instructions</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-velmora-sand/30 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
