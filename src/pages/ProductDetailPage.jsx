import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, ChevronRight, Minus, Plus } from 'lucide-react';
import { getProductById, getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart } = useCart();

  const product = getProductById(id);
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== parseInt(id)).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:text-velmora-gold-dark">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 text-sm text-velmora-gray">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-velmora-black">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-velmora-cream rounded-lg">
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
                  className={`w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
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
              <h1 className="product-name text-3xl md:text-4xl mb-2">{product.name}</h1>
              <p className="font-sans text-velmora-gray mb-4">{product.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-current' : 'text-velmora-gray-light'}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-gray">({product.reviews} reviews)</span>
              </div>
              <p className="font-serif text-3xl">${product.price}</p>
            </div>

            {/* Variant Selector */}
            <div className="space-y-3">
              <p className="font-sans text-sm font-medium">Material</p>
              <div className="flex space-x-3">
                {['18K Gold Plated', 'Silver Plated'].map((material) => (
                  <button
                    key={material}
                    className={`px-6 py-2 border text-sm font-sans transition-colors ${
                      product.material === material
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-beige hover:border-velmora-gold'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <p className="font-sans text-sm font-medium">Quantity</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-velmora-beige">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-white py-4 font-sans text-sm tracking-wide uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-velmora-beige">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: '18K gold plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your Velmora piece, avoid contact with water, perfumes, and lotions. Store in a cool, dry place.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging and unworn condition.' }
              ].map((section) => (
                <div key={section.title} className="border-b border-velmora-beige pb-4">
                  <button
                    onClick={() => toggleAccordion(section.title)}
                    className="flex items-center justify-between w-full text-left font-sans text-sm font-medium uppercase tracking-wide"
                  >
                    {section.title}
                    <span className={`transform transition-transform ${activeAccordion === section.title ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {activeAccordion === section.title && (
                    <p className="mt-3 text-sm text-velmora-gray leading-relaxed">
                      {section.content}
                    </p>
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
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
