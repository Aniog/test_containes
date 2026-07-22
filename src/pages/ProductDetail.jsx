import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variant || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop">
          <Button variant="outline">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant }, quantity);
  };

  const variants = ['gold', 'silver'];

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-charcoal-500 mb-8">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 overflow-hidden">
              <img
                data-strk-img-id={product.detailImgId}
                data-strk-img={`[${product.titleId}] [${product.descId}] Velmora ${product.name} ${selectedVariant} jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i - 1)}
                  className={`aspect-square bg-gray-100 border-2 transition-colors ${
                    activeImage === i - 1 ? 'border-gold-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80`}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold-400 text-gold-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1
                id={product.titleId}
                className="product-name text-2xl md:text-3xl mb-4"
              >
                {product.name}
              </h1>

              <p className="text-2xl font-serif text-gold-600 font-medium mb-6">
                ${product.price}
              </p>

              <p
                id={product.descId}
                className="text-charcoal-600 leading-relaxed mb-8"
              >
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Color: <span className="font-normal">{selectedVariant}</span></p>
              <div className="flex space-x-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal-800 bg-charcoal-800 text-white'
                        : 'border-gold-200 text-charcoal-600 hover:border-gold-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-gold-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="gold"
              size="lg"
              className="w-full tracking-widest mb-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="border-t border-gold-100 pt-8 mt-8 space-y-4">
              {/* Description */}
              <div className="border-b border-gold-100 pb-4">
                <h3 className="font-serif text-lg mb-3">Description</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {product.description} Crafted with precision and care, this piece embodies the essence of modern luxury. The {selectedVariant} finish complements any skin tone and occasion.
                </p>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-gold-100 pb-4">
                <h3 className="font-serif text-lg mb-3">Materials & Care</h3>
                <div className="text-sm text-charcoal-600 space-y-2">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="pb-4">
                <h3 className="font-serif text-lg mb-3">Shipping & Returns</h3>
                <div className="text-sm text-charcoal-600 space-y-2">
                  <p>Free worldwide shipping on all orders. Typically ships within 1-2 business days.</p>
                  <p>30-day return policy. Items must be unworn and in original packaging.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-gold-100">
            <h2 className="text-2xl md:text-3xl font-serif mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="group card"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      data-strk-img-id={related.relatedImgId}
                      data-strk-img={`[${related.titleId}] [${related.descId}] Velmora ${related.name}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="product-name text-sm mb-1">{related.name}</h3>
                    <p className="text-sm text-gold-600 font-semibold">
                      ${related.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;