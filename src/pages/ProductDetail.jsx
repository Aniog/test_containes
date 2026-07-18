import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import Accordion from '../components/ui/Accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pdp-container">
        <div className="empty-state">
          <h4>Product not found</h4>
          <p>The piece you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn btn-outline mt-4">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setQuantity(1);
  };

  const images = product.images || [];

  return (
    <div className="pdp-container">
      <div className="pdp-grid">
        {/* Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-main-image">
            <img 
              src={images[selectedImageIndex]} 
              alt={product.name}
            />
          </div>
          
          {images.length > 1 && (
            <div className="pdp-thumbnails">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`pdp-thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pdp-info">
          <h1 className="product-name" style={{ fontSize: '1.75rem' }}>{product.name}</h1>
          
          <div className="pdp-price">${product.price}</div>

          <div className="pdp-rating">
            <span className="stars">
              {'★'.repeat(Math.floor(product.rating))}
            </span>
            <span className="count">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="pdp-description">{product.shortDescription}</p>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div>
              <div className="variant-label">Tone</div>
              <div className="variant-pills">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="quantity-section">
            <div className="quantity-label">Quantity</div>
            <div className="quantity-control">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            className="btn btn-accent btn-full"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>

          <p style={{ fontSize: '0.75rem', color: '#6b635c', marginTop: '1rem', textAlign: 'center' }}>
            Free shipping on orders over $75
          </p>

          {/* Accordions */}
          <div style={{ marginTop: '2rem' }}>
            <Accordion title="Description" defaultOpen={true}>
              <p>{product.description}</p>
              <p style={{ marginTop: '0.75rem' }}>
                Each piece is hand-finished in small batches to ensure the highest quality.
              </p>
            </Accordion>

            <Accordion title="Materials & Care">
              <p><strong>Materials:</strong> {product.material}</p>
              <p style={{ marginTop: '0.5rem' }}>
                To maintain the beauty of your jewelry, avoid contact with water, 
                perfumes, and harsh chemicals. Store in a cool, dry place.
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Clean gently with a soft, dry cloth. Do not use abrasive cleaners.
              </p>
            </Accordion>

            <Accordion title="Shipping & Returns">
              <p>
                <strong>Shipping:</strong> Free worldwide shipping on all orders. 
                Please allow 3-5 business days for processing.
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>Returns:</strong> We offer a 30-day return policy for unworn items 
                in original packaging. Return shipping is free for exchanges.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h3>You May Also Like</h3>
          <div className="shop-grid">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
