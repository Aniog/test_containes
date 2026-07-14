import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-outline mt-6">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-8 pb-16">
      <div className="container">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-[#8a8178] hover:text-[#b89778] mb-8">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
              />
            </div>
            {product.images.length > 1 && (
              <div className="product-gallery-thumbs">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`product-gallery-thumb ${selectedImage === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-[#b89778]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="text-xs text-[#8a8178] ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="body-text mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="caption mb-3">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                    disabled={!variant.available}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="caption mb-3">Quantity</div>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#8a8178]">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-trigger"
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

              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-trigger"
                >
                  Materials & Care
                  <span>{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content">
                    <p className="mb-3">• 18K gold-plated brass</p>
                    <p className="mb-3">• Hypoallergenic and nickel-free</p>
                    <p className="mb-3">• Hand-set crystals</p>
                    <p className="mt-4">To care for your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-trigger"
                >
                  Shipping & Returns
                  <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content">
                    <p className="mb-3">• Free worldwide shipping on orders over $50</p>
                    <p className="mb-3">• Standard delivery: 5-10 business days</p>
                    <p className="mb-3">• Express shipping available at checkout</p>
                    <p className="mt-4">30-day returns. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-center mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
