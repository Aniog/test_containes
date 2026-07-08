import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-sans text-sm text-velmora-charcoal-light">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-300">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden bg-velmora-cream mb-4">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`gallery-thumbnail ${selectedImage === index ? 'active' : ''}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-product-name text-velmora-charcoal mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl font-medium text-velmora-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-charcoal-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-base text-velmora-charcoal-light leading-relaxed mb-8">
              {product.description}. Crafted with care using premium materials for everyday luxury.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="font-sans text-sm font-medium tracking-wide uppercase mb-3 block">
                Material
              </label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium tracking-wide uppercase mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-velmora-cream transition-colors duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 font-sans text-base min-w-[60px] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-velmora-cream transition-colors duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {[
                { 
                  title: 'Description', 
                  content: `${product.name} - ${product.description}. This exquisite piece embodies the Velmora philosophy of creating jewelry that's meant to be treasured. Crafted with 18K gold plating over high-quality base metals, it offers the perfect balance of luxury and accessibility.`
                },
                { 
                  title: 'Materials & Care', 
                  content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not worn.'
                },
                { 
                  title: 'Shipping & Returns', 
                  content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied, return your item in its original packaging for a full refund. See our shipping page for more details.'
                }
              ].map((section) => (
                <div key={section.title} className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(section.title)}
                    className="accordion-trigger"
                  >
                    <span>{section.title}</span>
                    <span className="text-velmora-gold">
                      {activeAccordion === section.title ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className="accordion-content"
                    style={{ 
                      maxHeight: activeAccordion === section.title ? '200px' : '0',
                      paddingBottom: activeAccordion === section.title ? '16px' : '0'
                    }}
                  >
                    <p className="font-sans text-sm text-velmora-charcoal-light leading-relaxed pr-8">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h2 className="font-serif text-3xl font-light tracking-wide mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden bg-velmora-cream mb-4">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="product-image w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-product-name text-velmora-charcoal mb-2">
                      {product.name}
                    </h3>
                    <p className="font-serif text-lg font-medium text-velmora-charcoal">
                      ${product.price}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
