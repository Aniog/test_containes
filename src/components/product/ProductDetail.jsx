import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import ProductCard from '../ui/ProductCard';
import Navigation from '../ui/Navigation';
import Footer from '../ui/Footer';
import CartDrawer from '../ui/CartDrawer';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div>
        <Navigation />
        <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
          <h2>Product not found</h2>
          <Link to="/shop" style={{ color: 'var(--color-gold)' }}>Back to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 5);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'} 
      />
    ));
  };

  return (
    <div>
      <Navigation />
      
      <div className="product-detail">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="product-gallery-main">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
            />
          </div>
          <div className="product-gallery-thumbs">
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`product-gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="product-price">${product.price}</div>
          
          <div className="product-rating">
            <span className="stars">{renderStars(product.rating)}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="product-description">{product.description}</p>

          {/* Variant Selector */}
          <div>
            <div className="variant-label">Tone</div>
            <div className="variant-pills">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity-selector">
            <label>Quantity</label>
            <div className="qty-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            variant="primary" 
            fullWidth 
            onClick={handleAddToCart}
            style={{ marginBottom: '1.5rem' }}
          >
            Add to Cart
          </Button>

          {/* Accordions */}
          <div style={{ marginTop: '2rem' }}>
            {/* Description */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('description')}
              >
                Description
                <span>{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.longDescription}
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('materials')}
              >
                Materials & Care
                <span>{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content">
                  <p>18K gold plating over sterling silver base. Hypoallergenic and nickel-free.</p>
                  <p style={{ marginTop: '0.5rem' }}>To care for your piece: avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.</p>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="accordion">
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion('shipping')}
              >
                Shipping & Returns
                <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content">
                  <p>Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                  <p style={{ marginTop: '0.5rem' }}>30-day returns. Items must be unworn and in original packaging.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="related-section">
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>You May Also Like</h3>
        <div className="related-grid">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;