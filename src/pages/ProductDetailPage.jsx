import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronRight, Star, Minus, Plus, Truck, RefreshCw } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="btn-primary mt-6">
          Back to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial }, quantity);
  };

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-12">
          <a href="/" className="hover:text-gold">Home</a>
          <ChevronRight size={14} />
          <a href="/shop" className="hover:text-gold">Shop</a>
          <ChevronRight size={14} />
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-warm-white mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              ${product.price}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description}. Beautifully crafted with attention to detail,
              this piece embodies the quiet luxury that Velmora is known for.
              Perfect for gifting or treating yourself.
            </p>

            {/* Material Selector */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-3 border transition-all ${
                      selectedMaterial === material
                        ? 'border-gold bg-gold/5 text-gold'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Shipping Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              <Truck size={18} />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RefreshCw size={18} />
              <span>30-day hassle-free returns</span>
            </div>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="accordion-item">
                  <button
                    onClick={() => toggleAccordion(section)}
                    className="accordion-trigger"
                  >
                    <span>{section}</span>
                    <span className={`transform transition-transform ${openAccordion === section ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  <div className={`accordion-content ${openAccordion === section ? 'open' : ''}`}>
                    <div className="text-gray-700 leading-relaxed">
                      {section === 'Description' && (
                        <p>
                          {product.name} - {product.description}. This exquisite piece is designed
                          for the modern woman who appreciates understated elegance. Each piece is
                          carefully crafted to ensure lasting beauty and comfort for everyday wear.
                        </p>
                      )}
                      {section === 'Materials & Care' && (
                        <div>
                          <p className="mb-3"><strong>Materials:</strong> 18K gold plated over brass, hypoallergenic</p>
                          <p className="mb-3"><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a cool, dry place.</p>
                          <p>Each piece comes beautifully packaged in our signature Velmora box.</p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div>
                          <p className="mb-3">Free standard shipping on all orders over $50. Express shipping available at checkout.</p>
                          <p>Not completely satisfied? Return within 30 days for a full refund. See our returns page for details.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 md:mt-32">
          <h2
            className="text-3xl font-light text-center mb-16"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-warm-white mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{product.name}</h3>
                <p style={{ fontFamily: 'var(--font-serif)' }}>${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
