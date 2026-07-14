import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-velmora-charcoal-light mb-8">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <ChevronRight size={16} />
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <ChevronRight size={16} />
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 border-2 overflow-hidden ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl mb-4 tracking-wider uppercase">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl text-velmora-gold font-medium">${product.price}</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
              <span className="text-sm text-velmora-charcoal-light ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-velmora-charcoal-light mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <label className="block text-sm tracking-wide mb-3">Tone</label>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-3 border transition-colors ${
                    selectedVariant === variant
                      ? 'bg-velmora-gold text-white border-velmora-gold'
                      : 'bg-transparent text-velmora-charcoal border-velmora-gold hover:bg-velmora-gold/10'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm tracking-wide mb-3">Quantity</label>
            <div className="flex items-center w-36">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 border border-velmora-gold flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors"
              >
                <Minus size={16} />
              </button>
              <div className="flex-1 h-12 border-t border-b border-velmora-gold flex items-center justify-center">
                {quantity}
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 border border-velmora-gold flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white'
                : 'bg-velmora-gold hover:bg-velmora-gold-dark text-white'
            }`}
          >
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Accordions */}
          <div className="mt-12 space-y-4">
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} className="border-t border-velmora-gold/20">
                <button
                  onClick={() => toggleAccordion(section)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-serif text-lg">{section}</span>
                  <span className={`transform transition-transform ${activeAccordion === section ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {activeAccordion === section && (
                  <div className="pb-4 text-velmora-charcoal-light leading-relaxed">
                    {section === 'Description' && (
                      <p>Each {product.name} is carefully crafted with attention to detail, using premium materials to ensure lasting beauty and comfort.</p>
                    )}
                    {section === 'Materials & Care' && (
                      <div>
                        <p className="mb-2">• 18K Gold Plated</p>
                        <p className="mb-2">• Hypoallergenic</p>
                        <p className="mb-2">• Nickel-free</p>
                        <p className="mt-4">Care: Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place.</p>
                      </div>
                    )}
                    {section === 'Shipping & Returns' && (
                      <div>
                        <p className="mb-2">• Free worldwide shipping on orders over $50</p>
                        <p className="mb-2">• 30-day return policy</p>
                        <p>• Secure, gift-ready packaging</p>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group block">
              <div className="relative overflow-hidden bg-velmora-cream aspect-[4/5] mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-sm tracking-wider uppercase mb-2">
                {related.name}
              </h3>
              <p className="text-velmora-gold font-medium">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
