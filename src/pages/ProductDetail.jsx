import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState('Gold');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-premium-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, material);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#8A8580]">
        <Link to="/" className="hover:text-[#C9A96E]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#C9A96E]">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-[#1A1A1A]">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square bg-[#F5F0EB] mb-4 overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-[#F5F0EB] overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
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

        {/* Right: Product Info */}
        <div>
          <h1 className="product-name text-[#1A1A1A] mb-4">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xl font-medium">${product.price}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#C9A96E]' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-[#8A8580] ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-[#8A8580] mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Material</label>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setMaterial(mat)}
                  className={`px-6 py-2 border transition-all ${
                    material === mat
                      ? 'border-[#C9A96E] bg-[#C9A96E] text-white'
                      : 'border-[#E8E4DF] hover:border-[#C9A96E]'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#C9A96E]"
              >
                -
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#C9A96E]"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="btn-premium-solid w-full mb-6"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {/* Description */}
            <details className="border-b border-[#E8E4DF] pb-4">
              <summary className="cursor-pointer font-medium py-2">Description</summary>
              <p className="text-sm text-[#8A8580] mt-2 leading-relaxed">
                {product.details}
              </p>
            </details>

            {/* Materials & Care */}
            <details className="border-b border-[#E8E4DF] pb-4">
              <summary className="cursor-pointer font-medium py-2">Materials & Care</summary>
              <div className="text-sm text-[#8A8580] mt-2 space-y-2">
                <p><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </div>
            </details>

            {/* Shipping & Returns */}
            <details className="border-b border-[#E8E4DF] pb-4">
              <summary className="cursor-pointer font-medium py-2">Shipping & Returns</summary>
              <div className="text-sm text-[#8A8580] mt-2 space-y-2">
                <p><strong>Shipping:</strong> Free worldwide shipping on all orders.</p>
                <p><strong>Returns:</strong> 30-day hassle-free returns. Item must be unworn and in original packaging.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-2xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block"
              >
                <div className="aspect-square bg-[#F5F0EB] mb-4 overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="product-name text-[#1A1A1A] mb-2">{related.name}</h3>
                <p className="text-sm text-[#8A8580]">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
