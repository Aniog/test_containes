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

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Product Not Found</h2>
        <Link to="/shop" className="btn btn-gold-outline mt-6">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const incrementQty = () => setQuantity(q => Math.min(q + 1, 10));
  const decrementQty = () => setQuantity(q => Math.max(q - 1, 1));

  return (
    <div className="container section">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center text-sm text-text-muted hover:text-gold mb-8">
        <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO SHOP
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT: Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="gallery-thumbnails hidden sm:flex">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <div className="img-placeholder">
                  <span className="text-[9px]">{idx + 1}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="gallery-main">
              <div className="img-placeholder h-full">
                <div className="text-center">
                  <div className="text-xs tracking-[2px] mb-2 opacity-50">PRODUCT PHOTOGRAPHY</div>
                  <div className="font-serif text-lg">{product.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1 text-sm text-text-muted">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="star w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>{product.rating} ({product.reviewCount})</span>
            </div>
          </div>

          <p className="body-text body-muted mb-8 pr-4">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[2px] text-text-muted mb-3">TONE</div>
            <div className="flex flex-wrap">
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

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[2px] text-text-muted mb-3">QUANTITY</div>
            <div className="quantity-selector">
              <button className="quantity-btn" onClick={decrementQty}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={incrementQty}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary btn-full mb-3"
            disabled={!product.inStock}
          >
            {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
          </button>
          <p className="text-center text-xs text-text-muted tracking-widest">
            FREE SHIPPING • 30 DAY RETURNS
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-border">
            {/* Description */}
            <div className="accordion-item">
              <button 
                className="accordion-trigger"
                onClick={() => toggleAccordion('description')}
              >
                DESCRIPTION
                <span>{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                <div className="accordion-content-inner body-muted">
                  {product.longDescription}
                </div>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="accordion-item">
              <button 
                className="accordion-trigger"
                onClick={() => toggleAccordion('materials')}
              >
                MATERIALS & CARE
                <span>{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                <div className="accordion-content-inner body-muted">
                  <p className="mb-3">• 18K gold plated over hypoallergenic brass</p>
                  <p className="mb-3">• Cubic zirconia crystal accents (where applicable)</p>
                  <p className="mb-3">• Wipe gently with a soft, dry cloth</p>
                  <p>• Avoid contact with perfumes, lotions, and harsh chemicals</p>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="accordion-item">
              <button 
                className="accordion-trigger"
                onClick={() => toggleAccordion('shipping')}
              >
                SHIPPING & RETURNS
                <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <div className="accordion-content-inner body-muted">
                  <p className="mb-3"><strong>Shipping:</strong> Complimentary worldwide shipping on all orders. Ships within 1-2 business days.</p>
                  <p className="mb-3"><strong>Returns:</strong> 30-day returns for unworn items in original packaging.</p>
                  <p>Questions? Email <a href="mailto:hello@velmora.com" className="underline">hello@velmora.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <div className="mt-20 pt-12 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl">You May Also Like</h3>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-gold hidden sm:block">View All →</Link>
        </div>
        <div className="related-grid">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
