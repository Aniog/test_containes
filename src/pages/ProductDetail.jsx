import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-velmora-gold hover:underline"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-velmora-gold">Home</button>
        <ChevronRight size={14} />
        <button onClick={() => navigate('/shop')} className="hover:text-velmora-gold">Shop</button>
        <ChevronRight size={14} />
        <span className="text-velmora-charcoal">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden bg-velmora-cream mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden border-2 ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-serif text-4xl uppercase tracking-wider mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="font-serif text-3xl mb-6">${product.price}</p>

          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <label className="block text-sm font-sans uppercase tracking-wider mb-3">Material</label>
            <div className="flex gap-3">
              <button className="px-6 py-2 border-2 border-velmora-gold bg-velmora-gold text-white text-sm uppercase tracking-wider">
                Gold
              </button>
              <button className="px-6 py-2 border-2 border-velmora-nude hover:border-velmora-gold text-sm uppercase tracking-wider transition-colors">
                Silver
              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-sans uppercase tracking-wider mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-nude hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-nude hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-gold text-white py-4 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold-dark transition-colors mb-8"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} className="border-t border-velmora-nude">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-serif text-lg">{section}</span>
                  <span className={`transform transition-transform ${activeAccordion === section ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {activeAccordion === section && (
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    {section === 'Description' && (
                      <p>{product.description}. Each piece is carefully crafted with attention to detail, using premium materials that ensure longevity and comfort for everyday wear.</p>
                    )}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2"><strong>Materials:</strong> 18K Gold Plated, Hypoallergenic</p>
                        <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in a cool, dry place.</p>
                        <p>Clean gently with a soft jewelry cloth to maintain shine.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">Free worldwide shipping on all orders.</p>
                        <p className="mb-2">30-day return policy. Items must be unworn and in original packaging.</p>
                        <p>Returns are processed within 5-7 business days.</p>
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
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <button
              key={related.id}
              onClick={() => navigate(`/product/${related.id}`)}
              className="group text-left"
            >
              <div className="aspect-square overflow-hidden bg-velmora-cream mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{related.name}</h3>
              <p className="font-serif text-lg">${related.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
