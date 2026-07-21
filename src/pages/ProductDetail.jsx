import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  const products = getProducts();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="text-gold-600 underline">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  // Mock additional images (in production, these would come from the product data)
  const productImages = [
    product.image,
    product.image,
    product.image
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      variant: selectedVariant,
      quantity: quantity
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 ${
                    selectedImage === index ? 'border-gold-600' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl font-serif tracking-widest uppercase mb-2">
              {product.name}
            </h1>
            <p className="text-2xl text-gold-600 mb-4">${product.price}</p>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold-600">★</span>
              ))}
              <span className="ml-2 text-sm text-gray-600">(24 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Tone</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={`px-6 py-2 border ${
                    selectedVariant === 'gold'
                      ? 'bg-gold-600 text-white border-gold-600'
                      : 'border-gray-300 hover:border-gold-600'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={`px-6 py-2 border ${
                    selectedVariant === 'silver'
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'border-gray-300 hover:border-gray-800'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold-600 text-white py-3 hover:bg-gold-700 transition-colors mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t">
              <details className="border-b">
                <summary className="py-4 cursor-pointer font-medium">Description</summary>
                <p className="pb-4 text-gray-700">
                  {product.description} Each piece is carefully crafted with attention to detail,
                  using high-quality materials that are designed to last. Our demi-fine jewelry
                  collection offers the perfect balance of luxury and accessibility.
                </p>
              </details>
              <details className="border-b">
                <summary className="py-4 cursor-pointer font-medium">Materials & Care</summary>
                <div className="pb-4 text-gray-700">
                  <p className="mb-2">• 18K Gold Plated</p>
                  <p className="mb-2">• Hypoallergenic</p>
                  <p className="mb-2">• Nickel-free</p>
                  <p>Avoid contact with perfumes, lotions, and water. Store in a cool, dry place.</p>
                </div>
              </details>
              <details className="border-b">
                <summary className="py-4 cursor-pointer font-medium">Shipping & Returns</summary>
                <div className="pb-4 text-gray-700">
                  <p className="mb-2">• Free worldwide shipping on all orders</p>
                  <p className="mb-2">• 30-day return policy</p>
                  <p>• Ships within 2-3 business days</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif tracking-widest uppercase text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <div key={related.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-serif tracking-wider uppercase mb-1">
                  {related.name}
                </h3>
                <p className="text-gold-600">${related.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
