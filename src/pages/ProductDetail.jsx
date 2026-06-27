import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#C9A96E] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.description || 'Beautiful demi-fine jewelry piece crafted with 18k gold plating. Perfect for everyday wear or special occasions.'
    },
    {
      title: 'Materials & Care',
      content: '18k gold plated over high-quality brass. Hypoallergenic and nickel-free. To maintain shine, avoid contact with water, perfume, and lotions. Store in a cool, dry place.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging in unused condition.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F3F0] mb-4 overflow-hidden">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-[#F5F3F0] overflow-hidden border-2 ${
                      selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-4xl mb-4 tracking-wider uppercase">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-[#C9A96E]">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="text-sm text-[#9A9590]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl mb-6">${product.price}</p>
            
            <p className="text-[#9A9590] mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Material</label>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase transition-colors ${
                      selectedVariant === variant
                        ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                        : 'bg-white text-[#2C2C2C] border-[#E5E3E0] hover:border-[#C9A96E]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-[#E5E3E0]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-[#F5F3F0] transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 border-x border-[#E5E3E0]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-[#F5F3F0] transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#C9A96E] hover:bg-[#B8943E] text-white py-4 text-sm tracking-wider uppercase transition-colors mb-4"
            >
              <ShoppingBag size={18} className="inline mr-2" />
              Add to Cart
            </button>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 mb-8 text-sm text-[#9A9590]">
              <div className="flex items-center space-x-2">
                <Truck size={16} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw size={16} />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t">
              {accordions.map((accordion, index) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium">{accordion.title}</span>
                    <span className="text-[#C9A96E]">
                      {expandedAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedAccordion === index && (
                    <div className="pb-4 text-sm text-[#9A9590] leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <div key={related.id}>
                <Link to={`/product/${related.id}`}>
                  <div className="aspect-square bg-[#F5F3F0] mb-4 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{related.name}</h3>
                  <p className="font-serif text-lg">${related.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
