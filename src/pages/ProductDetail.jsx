import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return <div className="py-32 text-center">Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 aspect-[4/5] overflow-hidden bg-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 overflow-hidden ${
                    selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl uppercase tracking-[0.15em] font-medium">
                {product.name}
              </h1>
              <p className="font-serif text-3xl font-light mt-4">${product.price}</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-[#C9A96E]">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="text-sm text-[#9A8F87]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#9A8F87] leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div>
              <label className="block text-sm uppercase tracking-wider mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${
                      product.material === material
                        ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                        : 'border-[#E5DFD9] hover:border-[#C9A96E]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm uppercase tracking-wider mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#E5DFD9] flex items-center justify-center hover:border-[#C9A96E]"
                >
                  -
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#E5DFD9] flex items-center justify-center hover:border-[#C9A96E]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="w-full bg-[#C9A96E] text-white py-4 text-sm uppercase tracking-wider hover:bg-[#B8943E] transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-t border-[#E5DFD9]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === section ? null : section)}
                    className="w-full flex justify-between items-center py-4 text-left"
                  >
                    <span className="font-serif text-sm uppercase tracking-wider">{section}</span>
                    <span className="text-[#C9A96E]">
                      {activeAccordion === section ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === section && (
                    <div className="pb-4 text-sm text-[#9A8F87] leading-relaxed">
                      {section === 'Description' && (
                        <p>Our {product.name} is crafted with meticulous attention to detail, featuring {product.material.toLowerCase()} plating that maintains its luster over time. Perfect for everyday wear or special occasions.</p>
                      )}
                      {section === 'Materials & Care' && (
                        <div>
                          <p className="mb-2"><strong>Materials:</strong> 18K {product.material} plated, hypoallergenic</p>
                          <p><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a cool, dry place.</p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div>
                          <p className="mb-2">Free worldwide shipping on all orders.</p>
                          <p>30-day return policy. Items must be in original condition with packaging.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD9]">
          <h2 className="font-serif text-3xl font-light mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden bg-white mb-4">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg uppercase tracking-[0.15em] font-medium">
                    {related.name}
                  </h3>
                  <p className="font-serif text-xl font-light mt-2">${related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
