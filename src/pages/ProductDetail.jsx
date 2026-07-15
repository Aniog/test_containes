import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container section text-center">
        <h1 className="serif text-2xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
        className={i < Math.floor(rating) ? 'text-velmora-gold' : 'text-velmora-border'}
      />
    ));
  };

  return (
    <div className="container section">
      {/* Back Link */}
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm tracking-widest mb-8 hover:text-velmora-gold-dark">
        <ChevronLeft size={16} /> BACK TO SHOP
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square bg-velmora-surface overflow-hidden mb-3">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImageIndex === index ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="pt-2">
          <div className="product-name text-2xl md:text-3xl tracking-wider mb-2">
            {product.name}
          </div>

          <div className="text-xl font-medium mb-4">${product.price}</div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-sm text-velmora-text-muted">
              {product.rating} · {product.reviewCount} reviews
            </span>
          </div>

          <p className="text-[15px] leading-relaxed text-velmora-text-muted mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[2px] uppercase text-velmora-text-muted mb-2">Tone</div>
            <div className="flex gap-2">
              {variants.map((variant) => (
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
            <div className="text-xs tracking-[2px] uppercase text-velmora-text-muted mb-2">Quantity</div>
            <div className="qty-selector inline-flex">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
                aria-label="Increase quantity"
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
          <p className="text-center text-xs text-velmora-text-muted tracking-widest">
            FREE SHIPPING ON ALL ORDERS
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-velmora-border">
            {/* Description */}
            <div>
              <button
                onClick={() => toggleAccordion('description')}
                className="accordion-header w-full"
              >
                <span>Description</span>
                <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.description}
                  <div className="mt-3 text-sm">{product.details}</div>
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div>
              <button
                onClick={() => toggleAccordion('materials')}
                className="accordion-header w-full"
              >
                <span>Materials & Care</span>
                <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content">
                  {product.care}
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div>
              <button
                onClick={() => toggleAccordion('shipping')}
                className="accordion-header w-full"
              >
                <span>Shipping & Returns</span>
                <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content space-y-2">
                  <p>Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                  <p>30-day returns. Items must be unworn and in original packaging.</p>
                  <p>Questions? Email us at hello@velmora.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-velmora-border">
          <div className="mb-8">
            <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">Curated for You</div>
            <h3 className="serif text-2xl">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
