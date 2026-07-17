import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-velmora-gold uppercase tracking-wider text-sm border-b border-velmora-gold"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedTone,
      quantity
    });
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-velmora-ivory">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-4">
        <button
          onClick={() => navigate('/shop')}
          className="text-sm text-velmora-graphite hover:text-velmora-charcoal transition-colors"
        >
          ← Back to Shop
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-velmora-cream">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-velmora-cream border-2 transition-colors ${
                      selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h1
                className="font-serif text-3xl lg:text-4xl uppercase tracking-wider text-velmora-charcoal mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {product.name}
              </h1>
              <p className="text-2xl text-velmora-charcoal font-light">
                ${product.price}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-mist'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-velmora-graphite">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-graphite leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="space-y-4">
              <div>
                <label className="text-sm uppercase tracking-wider text-velmora-charcoal mb-3 block">
                  Tone
                </label>
                <div className="flex space-x-3">
                  {['gold', 'silver'].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-6 py-2 border transition-colors uppercase text-sm tracking-wider ${
                        selectedTone === tone
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-gold/30 text-velmora-charcoal hover:border-velmora-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm uppercase tracking-wider text-velmora-charcoal mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl text-velmora-charcoal w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-velmora-gold/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-charcoal text-white uppercase tracking-wider text-sm hover:bg-velmora-charcoal/90 transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-8 border-t border-velmora-gold/20">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-b border-velmora-gold/20 pb-4">
                  <button
                    onClick={() => toggleAccordion(section)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-sm uppercase tracking-wider text-velmora-charcoal">
                      {section}
                    </span>
                    <svg
                      className={`w-4 h-4 text-velmora-gold transition-transform ${
                        activeAccordion === section ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === section && (
                    <div className="mt-4 text-sm text-velmora-graphite leading-relaxed">
                      {section === 'Description' && (
                        <p>{product.description} Each piece is carefully crafted with attention to detail, ensuring lasting beauty and comfort for everyday wear.</p>
                      )}
                      {section === 'Materials & Care' && (
                        <div className="space-y-2">
                          <p><strong>Materials:</strong> 18K gold plated over brass, hypoallergenic</p>
                          <p><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. Store in provided pouch when not wearing.</p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div className="space-y-2">
                          <p><strong>Shipping:</strong> Free worldwide shipping on all orders</p>
                          <p><strong>Returns:</strong> 30-day hassle-free returns</p>
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
        <div className="mt-20 pt-12 border-t border-velmora-gold/20">
          <h2
            className="font-serif text-3xl mb-8 text-velmora-charcoal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-velmora-charcoal mb-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-velmora-graphite">${relatedProduct.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
