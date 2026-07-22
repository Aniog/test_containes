import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gray-600 hover:text-gray-900">
          Return to Shop
        </Link>
      </div>
    );
  }

  function handleAddToCart() {
    addToCart(product, quantity, selectedVariant);
  }

  function toggleAccordion(section) {
    setActiveAccordion(activeAccordion === section ? null : section);
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl tracking-wider uppercase mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-2xl font-serif mb-6">${product.price}</p>
          
          <p className="text-gray-600 mb-8">{product.description}</p>

          {product.variants && (
            <div className="mb-6">
              <h3 className="text-sm tracking-wider uppercase mb-3">Variant</h3>
              <div className="flex space-x-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase transition-colors ${
                      selectedVariant === variant
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm tracking-wider uppercase mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-gray-900"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-gray-900"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-900 text-white py-4 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors mb-8"
          >
            Add to Cart
          </button>

          <div className="space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map(section => (
              <div key={section} className="border-t border-gray-200">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase"
                >
                  {section}
                  {activeAccordion === section ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === section && (
                  <div className="pb-4 text-sm text-gray-600">
                    {section === 'Description' && (
                      <p>Our {product.name} is crafted with attention to detail, featuring premium materials and timeless design. Perfect for everyday wear or special occasions.</p>
                    )}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2">18K Gold Plated over high-quality brass</p>
                        <p className="mb-2">Hypoallergenic and nickel-free</p>
                        <p>To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in a cool, dry place.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">Free worldwide shipping on all orders</p>
                        <p className="mb-2">30-day return policy</p>
                        <p>Orders ship within 1-2 business days</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-3xl tracking-wider uppercase text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map(related => (
            <Link key={related.id} to={`/product/${related.id}`} className="group cursor-pointer block">
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg tracking-wider uppercase">{related.name}</h3>
              <p className="text-gray-600">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
