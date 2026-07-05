import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/shop')}
            className="text-gold hover:underline"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-stone mb-8">
        <button onClick={() => navigate('/')} className="hover:text-gold">Home</button>
        <ChevronRight size={14} />
        <button onClick={() => navigate('/shop')} className="hover:text-gold">Shop</button>
        <ChevronRight size={14} />
        <span className="text-charcoal">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-cream overflow-hidden">
            <img 
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x800/F5F0EB/1A1A1A?text=' + product.name.replace(/ /g, '+');
              }}
            />
          </div>
          
          {/* Thumbnail Row */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-cream overflow-hidden border-2 ${
                  selectedImage === index ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`View ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/80x80/F5F0EB/1A1A1A?text=' + (index + 1);
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl uppercase tracking-wider mb-2">{product.name}</h1>
            <p className="text-2xl font-light">${product.price}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-stone">({product.reviews} reviews)</span>
          </div>

          <p className="text-charcoal-light leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="space-y-3">
            <label className="text-sm font-medium tracking-wide">Tone</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 border text-sm tracking-wide uppercase ${
                    selectedVariant === variant
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'bg-transparent text-charcoal border-stone hover:border-charcoal'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="text-sm font-medium tracking-wide">Quantity</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-cream transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-cream transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gold hover:bg-gold-dark text-white py-4 text-sm tracking-widest uppercase transition-all duration-300"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} className="border-b pb-4">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-medium tracking-wide uppercase text-sm">{section}</span>
                  <span className={`transform transition-transform ${expandedAccordion === section ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                {expandedAccordion === section && (
                  <div className="mt-4 text-sm text-charcoal-light leading-relaxed">
                    {section === 'Description' && (
                      <p>
                        {product.name} is crafted with meticulous attention to detail. 
                        This exquisite piece features {product.description.toLowerCase()}. 
                        Perfect for everyday wear or special occasions, it embodies the 
                        Velmora philosophy of creating jewelry that's meant to be treasured.
                      </p>
                    )}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2"><strong>Materials:</strong> 18K Gold Plated over high-quality brass. Hypoallergenic.</p>
                        <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place.</p>
                        <p><strong>Warranty:</strong> 1-year warranty against manufacturing defects.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. 5-7 business days.</p>
                        <p className="mb-2"><strong>Returns:</strong> 30-day return policy. Item must be unworn and in original packaging.</p>
                        <p><strong>Exchanges:</strong> Free size exchanges within 30 days.</p>
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
      <div className="border-t pt-12">
        <h2 className="font-serif text-3xl text-center mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <button
              key={related.id}
              onClick={() => navigate(`/product/${related.id}`)}
              className="group text-left"
            >
              <div className="aspect-square bg-cream overflow-hidden mb-4">
                <img 
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x800/F5F0EB/1A1A1A?text=' + related.name.replace(/ /g, '+');
                  }}
                />
              </div>
              <h3 className="font-serif text-lg uppercase tracking-wide mb-1">{related.name}</h3>
              <p className="text-stone text-sm mb-2">{related.description}</p>
              <p className="font-medium">${related.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
