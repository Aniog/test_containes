import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../hooks/useCart';
import { Star, Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/shop/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductById(slug);
  const relatedProducts = getRelatedProducts(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || 'gold');
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-600">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <div
                  key={image.id}
                  className="aspect-square rounded-lg overflow-hidden bg-neutral-100 cursor-pointer hover:ring-2 hover:ring-brand-500 transition-all"
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-400 text-brand-400'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-neutral-500 text-sm">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-serif font-semibold text-neutral-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-neutral-400 line-through text-lg">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
                Color
              </h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 rounded-full border-2 font-medium capitalize transition-all ${
                      selectedColor === color
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium text-neutral-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-3"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-100">
              <div className="text-center">
                <Truck className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">Hypoallergenic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 border-t border-neutral-100 pt-8">
          <div className="max-w-3xl mx-auto">
            {/* Description Accordion */}
            <div className="border-b border-neutral-100">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <h3 className="font-serif font-semibold text-neutral-900 text-lg">
                  Description
                </h3>
                <span className="text-neutral-400">
                  {activeAccordion === 'description' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'description' && (
                <div className="pb-4 text-neutral-600 leading-relaxed">
                  {product.longDescription}
                </div>
              )}
            </div>

            {/* Materials & Care Accordion */}
            <div className="border-b border-neutral-100">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <h3 className="font-serif font-semibold text-neutral-900 text-lg">
                  Materials & Care
                </h3>
                <span className="text-neutral-400">
                  {activeAccordion === 'materials' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'materials' && (
                <div className="pb-4 text-neutral-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Material:</strong> {product.material}
                  </p>
                  <p className="mb-4">
                    <strong>Care Instructions:</strong> {product.careInstructions}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns Accordion */}
            <div className="border-b border-neutral-100">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <h3 className="font-serif font-semibold text-neutral-900 text-lg">
                  Shipping & Returns
                </h3>
                <span className="text-neutral-400">
                  {activeAccordion === 'shipping' ? '−' : '+'}
                </span>
              </button>
              {activeAccordion === 'shipping' && (
                <div className="pb-4 text-neutral-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Shipping:</strong> We offer free worldwide shipping on all orders. 
                    Standard delivery takes 5-7 business days. Express shipping is available 
                    for an additional fee.
                  </p>
                  <p className="mb-4">
                    <strong>Returns:</strong> We accept returns within 30 days of delivery. 
                    Items must be in their original condition with all tags attached. 
                    Return shipping is free for domestic orders.
                  </p>
                  <p>
                    <strong>Exchanges:</strong> We offer free exchanges for different sizes 
                    or colors within 30 days of delivery.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-neutral-100 pt-8">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}