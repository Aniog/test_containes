import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-bg pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="gallery-main mb-3">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl tracking-[0.12em] mb-2 pr-4">
              {product.name}
            </div>
            
            <div className="price text-xl mb-3">${product.price}</div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="stars flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-gold" />
                ))}
              </div>
              <span className="text-sm text-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="body-text text-text-muted mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-text-muted mb-2">Tone</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
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
              <div className="text-xs tracking-[0.1em] uppercase text-text-muted mb-2">Quantity</div>
              <div className="qty-selector inline-flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-3"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-text-light tracking-wide">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>18K gold plating over hypoallergenic brass base</li>
                  <li>Premium faceted crystals</li>
                  <li>Nickel-free and lead-free</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Delivery in 3-7 business days for most destinations.</p>
                <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-6">
            <h3 className="text-xl tracking-[-0.01em]">You May Also Like</h3>
            <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-gold hidden md:block">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
