import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-yellow-600 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-yellow-600 transition-colors">
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Image Gallery */}
        <div>
          <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
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
                  selectedImage === index ? 'border-yellow-600' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-wide mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-600">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="font-serif text-2xl mb-8">${product.price}</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants && (
            <div className="mb-8">
              <h3 className="text-sm tracking-wide mb-4">Select Finish</h3>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-3 border text-sm tracking-wide transition-all ${
                      selectedVariant === index
                        ? 'border-yellow-600 bg-yellow-50'
                        : 'border-gray-300 hover:border-yellow-600'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-sm tracking-wide mb-4">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-yellow-600 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-serif text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-yellow-600 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 text-sm tracking-wide transition-colors duration-300 mb-12"
          >
            Add to Cart - ${((product.price * quantity) / 100).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="border-t border-gray-200">
            <Accordion title="Description" defaultOpen>
              <p className="text-gray-600 leading-relaxed py-4">
                {product.description}
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <div className="text-gray-600 leading-relaxed py-4">
                <p className="mb-2">• 18K Gold Plated</p>
                <p className="mb-2">• Hypoallergenic</p>
                <p className="mb-2">• Nickel-free</p>
                <p>• Avoid contact with perfumes and lotions</p>
              </div>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <div className="text-gray-600 leading-relaxed py-4">
                <p className="mb-2">• Free worldwide shipping on all orders</p>
                <p className="mb-2">• 30-day return policy</p>
                <p>• Ships within 1-2 business days</p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 lg:mt-32">
        <h2 className="font-serif text-3xl lg:text-4xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wide mb-2">
                  {relatedProduct.name}
                </h3>
                <p className="font-serif text-lg">${relatedProduct.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-lg">{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ProductDetail;
