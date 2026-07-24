import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    price: 42,
    description: 'Gold ear cuff with crystal accent. A delicate piece that adds sparkle to any outfit.',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver']
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    description: 'Multicolor floral crystal necklace. Features hand-set crystals in a beautiful floral pattern.',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'],
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    variants: ['Gold']
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const { addItem, toggleCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link to="/shop" className="mt-4 text-amber-600 hover:text-amber-700 transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant || product.variants[0], quantity);
    toggleCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/shop"
        className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-amber-600 transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span>Back to Shop</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-gray-100 overflow-hidden border-2 ${
                  selectedImage === index ? 'border-amber-600' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 
            className="text-3xl font-light mb-4 tracking-wider uppercase"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {product.name}
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-amber-600 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-3">Variant</label>
              <div className="flex space-x-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase transition-colors ${
                      selectedVariant === variant
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-gray-300 hover:border-amber-600'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-amber-600 text-white py-4 text-sm tracking-wider uppercase hover:bg-amber-700 transition-colors mb-8"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map(section => (
              <div key={section} className="border-t">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === section ? '' : section)}
                  className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase hover:text-amber-600 transition-colors"
                >
                  <span>{section}</span>
                  <span className="text-xs">{activeAccordion === section ? '−' : '+'}</span>
                </button>
                {activeAccordion === section && (
                  <div className="pb-4 text-sm text-gray-600">
                    {section === 'Description' && <p>{product.description}</p>}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                        <p>Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">Free worldwide shipping on all orders.</p>
                        <p>30-day return policy. Items must be returned in original packaging.</p>
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
        <h2 
          className="text-2xl font-light mb-8 text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm tracking-wider uppercase mb-2">{relatedProduct.name}</h3>
                <p className="text-gray-900 font-semibold">${relatedProduct.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
