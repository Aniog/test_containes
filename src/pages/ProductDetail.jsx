import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-lg mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => `$${price}`;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const handleQuantityChange = (newQty) => {
    if (newQty >= 1) setQuantity(newQty);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs tracking-[0.1em] text-[var(--color-text-muted)] hover:text-[var(--color-gold)] mb-8">
          <ArrowLeft size={14} /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="gallery-main mb-3">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`gallery-thumb ${selectedImageIndex === index ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl tracking-[0.12em] leading-tight mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-[var(--color-text-muted)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                Finish
              </div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                Quantity
              </div>
              <div className="qty-selector inline-flex">
                <button className="qty-btn" onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                <span className="qty-value">{quantity}</span>
                <button className="qty-btn" onClick={() => handleQuantityChange(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>

            <p className="text-center text-xs text-[var(--color-text-muted)] tracking-[0.1em]">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-1 border-t border-[var(--color-border)]">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  <li>• 18K gold plated brass or sterling silver base</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Delivery in 3–7 business days.</p>
                <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
            <h3 className="font-serif text-2xl mb-8 text-center">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
