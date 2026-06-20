import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="bg-white">
      <div className="container pt-20 pb-4">
        <Link to="/shop" className="inline-flex items-center text-sm text-muted hover:text-accent">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>
      </div>

      <div className="product-detail">
        {/* Gallery */}
        <div>
          <div className="gallery-main">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
            />
          </div>
          <div className="gallery-thumbs">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`gallery-thumb ${selectedImage === idx ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`${product.name} view ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="product-price">${product.price}</div>

          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                />
              ))}
            </div>
            <span className="text-sm text-muted">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="body-text mb-6">{product.shortDescription}</p>

          {/* Variant Selector */}
          <div className="variant-selector">
            <div className="variant-label">TONE</div>
            <div className="variant-pills">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity-row">
            <span className="quantity-label">QUANTITY</span>
            <div className="quantity-input">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            className="btn btn-primary w-full mb-4"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
          </button>

          <p className="text-xs text-center text-muted">
            Free shipping • 30-day returns • Ships in 1-2 business days
          </p>

          {/* Accordions */}
          <div className="mt-8">
            {/* Description */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('description')}
              >
                DESCRIPTION
                <span>{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.description}
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('materials')}
              >
                MATERIALS & CARE
                <span>{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content">
                  <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
                  <p className="mb-2">To care for your jewelry:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Store in a cool, dry place away from direct sunlight</li>
                    <li>Avoid contact with perfumes, lotions, and harsh chemicals</li>
                    <li>Remove before swimming, showering, or exercising</li>
                    <li>Gently polish with a soft cloth to maintain shine</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('shipping')}
              >
                SHIPPING & RETURNS
                <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content">
                  <p className="mb-3"><strong>Shipping:</strong> Free worldwide on orders over $75. Standard delivery 5-10 business days.</p>
                  <p className="mb-3"><strong>Returns:</strong> 30 days from delivery. Items must be unworn and in original packaging.</p>
                  <p>For questions, please email <a href="mailto:hello@velmora.com" className="underline">hello@velmora.com</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="related-section">
          <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>You May Also Like</h3>
          <div className="related-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer mt-12">
        <div className="container">
          <div className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
