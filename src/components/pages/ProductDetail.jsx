import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="py-32 text-center">Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div>
            <div className="mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="product-name text-2xl mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold">
                  {i < Math.floor(product.rating) ? '★' : '☆'}
                </span>
              ))}
              <span className="text-sm text-soft-gray ml-2">({product.reviews} reviews)</span>
            </div>

            <p className="text-soft-gray mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider mb-4">Material</label>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setVariant(mat)}
                    className={`px-6 py-3 border transition-all ${
                      variant === mat 
                        ? 'border-charcoal bg-charcoal text-warm-white' 
                        : 'border-border hover:border-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider mb-4">Quantity</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full mb-12"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: '18K gold plated over brass. Hypoallergenic and nickel-free. To maintain shine, avoid contact with water, perfume, and cosmetics.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Returns are free and easy.' }
              ].map((accordion) => (
                <div key={accordion.title} className="border-b border-border">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === accordion.title ? null : accordion.title)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-wider">{accordion.title}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform ${expandedAccordion === accordion.title ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedAccordion === accordion.title && (
                    <p className="pb-4 text-soft-gray">{accordion.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={related.images[0]} 
                    alt={related.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{related.name}</h3>
                <p className="text-sm text-soft-gray">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
