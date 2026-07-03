import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ChevronRight, Star } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, cartCount } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif-display text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#B8860B] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, selectedVariant }, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B6560] mb-8">
          <Link to="/" className="hover:text-[#B8860B]">Home</Link>
          <ChevronRight size={16} />
          <Link to="/shop" className="hover:text-[#B8860B]">Shop</Link>
          <ChevronRight size={16} />
          <span className="text-[#2A2520]">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-[#F8F5F0]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-[#B8860B]' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="product-name text-2xl md:text-3xl mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-[#B8860B] fill-[#B8860B]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-medium mb-6">${product.price}</p>
            
            <p className="text-[#6B6560] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm uppercase tracking-wider mb-3">Tone</label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 border rounded-full text-sm uppercase tracking-wider transition-colors ${
                        selectedVariant === variant
                          ? 'bg-[#2A2520] text-white border-[#2A2520]'
                          : 'bg-white text-[#2A2520] border-[#D4CFC8] hover:border-[#B8860B]'
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
              <label className="block text-sm uppercase tracking-wider mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[#D4CFC8] rounded hover:border-[#B8860B]"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[#D4CFC8] rounded hover:border-[#B8860B]"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#B8860B] text-white py-4 uppercase tracking-wider text-sm font-medium hover:bg-[#A0780A] transition-colors mb-6"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: product.care },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging.' },
              ].map((item, index) => (
                <div key={item.title} className="border-t border-[#D4CFC8]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium uppercase tracking-wider text-sm">{item.title}</span>
                    <Plus
                      size={20}
                      className={`transform transition-transform ${activeAccordion === index ? 'rotate-45' : ''}`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="pb-4 text-[#6B6560] leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="font-serif-display text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-[#F8F5F0]">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{related.name}</h3>
                <p className="text-[#6B6560] text-sm mb-1">{related.description}</p>
                <p className="font-medium">${related.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
