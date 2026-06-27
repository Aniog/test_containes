import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ChevronDown, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, openDrawer } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-secondary">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    openDrawer();
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/shop" className="back-link">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="product-details-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="product-main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="product-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#c9a96e' : 'none'}
                    stroke="#c9a96e"
                  />
                ))}
              </div>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="product-description">{product.description}</p>

            {/* Variant Selector */}
            <div className="variant-selector">
              <label className="variant-label">Tone</label>
              <div className="variant-options">
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
              <label className="quantity-label">Quantity</label>
              <div className="quantity-input">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  <Minus size={16} />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="product-accordions">
              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion('description')}
                >
                  <span>Description</span>
                  <ChevronDown
                    size={18}
                    className={`accordion-icon ${activeAccordion === 'description' ? 'open' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${activeAccordion === 'description' ? 'open' : ''}`}>
                  <div className="accordion-body">
                    <p>Each Velmora piece is crafted with intention and care. Our demi-fine jewelry uses 18K gold plating over a base of recycled brass, ensuring both beauty and sustainability.</p>
                    <p>The {product.name} features premium materials and expert craftsmanship, designed to be worn every day and treasured for years to come.</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion('materials')}
                >
                  <span>Materials & Care</span>
                  <ChevronDown
                    size={18}
                    className={`accordion-icon ${activeAccordion === 'materials' ? 'open' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${activeAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="accordion-body">
                    <h4>Materials</h4>
                    <ul>
                      <li>18K Gold Plated</li>
                      <li>Recycled Brass Base</li>
                      <li>Hypoallergenic</li>
                      <li>Nickel-Free</li>
                    </ul>
                    <h4>Care Instructions</h4>
                    <ul>
                      <li>Remove before showering or swimming</li>
                      <li>Avoid contact with perfumes and lotions</li>
                      <li>Store in a cool, dry place</li>
                      <li>Clean gently with a soft cloth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion('shipping')}
                >
                  <span>Shipping & Returns</span>
                  <ChevronDown
                    size={18}
                    className={`accordion-icon ${activeAccordion === 'shipping' ? 'open' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${activeAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="accordion-body">
                    <h4>Shipping</h4>
                    <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express options available at checkout.</p>
                    <h4>Returns</h4>
                    <p>We offer a 30-day return policy. Items must be in original condition with packaging. Return shipping is free for domestic orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="related-products">
          <h2 className="related-title">You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="related-product">
                <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPage;