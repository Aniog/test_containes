import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find(v => v.available) || product?.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-velmora-gold underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const availableVariants = product.variants.filter(v => v.available);

  return (
    <div className="min-h-screen bg-velmora-bg-light">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Back Link */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-8 hover:text-velmora-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className={`gallery-thumb ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium text-velmora-gold">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars text-base">★★★★★</div>
                <span className="text-velmora-taupe">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-velmora-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {availableVariants.length > 0 && (
              <div className="mb-8">
                <p className="text-xs tracking-[0.12em] uppercase text-velmora-taupe mb-3">Tone</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => variant.available && setSelectedVariant(variant)}
                      disabled={!variant.available}
                      className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''} ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      {variant.label}
                      {!variant.available && ' (Sold Out)'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.12em] uppercase text-velmora-taupe mb-3">Quantity</p>
              <div className="qty-selector inline-flex">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              onClick={handleAddToCart}
              className="w-full mb-3"
              disabled={!selectedVariant?.available}
            >
              {selectedVariant?.available ? 'Add to Cart' : 'Sold Out'}
            </Button>
            
            <p className="text-center text-xs text-velmora-taupe tracking-widest">
              FREE SHIPPING • 30 DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-12">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <p><span className="text-velmora-brown">Materials:</span> {product.material}</p>
                    <p><span className="text-velmora-brown">Care:</span> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3">
                    <p><span className="text-velmora-brown">Shipping:</span> Complimentary worldwide shipping on all orders. Delivered in 3–7 business days.</p>
                    <p><span className="text-velmora-brown">Returns:</span> 30-day returns accepted. Items must be unworn and in original packaging.</p>
                    <p><span className="text-velmora-brown">Gift Wrap:</span> Complimentary gift wrapping and handwritten note available at checkout.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;