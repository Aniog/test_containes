import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <span className="cursor-pointer hover:text-velmora-gold" onClick={() => navigate('/')}>Home</span>
        <ChevronRight size={14} />
        <span className="cursor-pointer hover:text-velmora-gold" onClick={() => navigate('/shop')}>Shop</span>
        <ChevronRight size={14} />
        <span className="text-velmora-charcoal">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left - Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src={selectedImage === 0 ? product.image : product.hoverImage}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedImage(0)}
              className={`w-20 h-20 border-2 transition-colors ${
                selectedImage === 0 ? 'border-velmora-gold' : 'border-transparent'
              }`}
            >
              <img src={product.image} alt="" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setSelectedImage(1)}
              className={`w-20 h-20 border-2 transition-colors ${
                selectedImage === 1 ? 'border-velmora-gold' : 'border-transparent'
              }`}
            >
              <img src={product.hoverImage} alt="" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h1 className="product-name mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="font-serif text-3xl mb-6">${product.price}</p>

          <p className="font-sans text-gray-700 mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="font-sans text-sm tracking-wider uppercase mb-3">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 border transition-all duration-300 ${
                    selectedVariant === variant
                      ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                      : 'border-velmora-border hover:border-velmora-gold'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="font-sans text-sm tracking-wider uppercase mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-serif text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full btn-gold flex items-center justify-center gap-2 mb-4"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="mt-8 space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} className="border-t border-velmora-border">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors"
                >
                  {section}
                  <span className={`transform transition-transform ${activeAccordion === section ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {activeAccordion === section && (
                  <div className="pb-4 text-sm text-gray-700">
                    {section === 'Description' && <p>{product.description}. Each piece is carefully crafted with attention to detail, ensuring you receive jewelry that exceeds your expectations.</p>}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2"><strong>Materials:</strong> {product.material}, hypoallergenic materials</p>
                        <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and chemicals. Store in a cool, dry place.</p>
                        <p>Clean gently with a soft jewelry cloth to maintain shine.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">Free shipping on orders over $50.</p>
                        <p className="mb-2">Standard delivery: 3-5 business days</p>
                        <p>30-day hassle-free returns. See our <Link to="/shipping" className="text-velmora-gold hover:underline">returns policy</Link> for details.</p>
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
        <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="product-card cursor-pointer block">
              <img src={related.image} alt={related.name} className="w-full aspect-square object-cover mb-4" />
              <h3 className="product-name text-center mb-2">{related.name}</h3>
              <p className="font-serif text-xl text-center">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
