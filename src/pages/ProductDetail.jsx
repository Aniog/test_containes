import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const currentImage = product.images[selectedImageIndex];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const updateQuantity = (delta) => {
    const newQty = Math.max(1, Math.min(10, quantity + delta));
    setQuantity(newQty);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back Link */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="gallery-main mb-3">
            <img 
              src={currentImage.url} 
              alt={currentImage.alt}
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
              >
                <img src={img.url} alt={img.alt} />
              </button>
            ))}
            {/* Fill remaining slots with first image if needed */}
            {product.images.length < 4 && Array.from({ length: 4 - product.images.length }).map((_, idx) => (
              <div key={`empty-${idx}`} className="gallery-thumb opacity-50">
                <img src={product.images[0].url} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl md:text-4xl tracking-[0.15em] mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1.5 text-sm">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="star" fill="currentColor" />
                ))}
              </div>
              <span className="text-[#6B6058]">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <p className="text-[#6B6058] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="filter-label mb-3">Tone</div>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant);
                    // Switch to matching image
                    const imgIdx = product.images.findIndex(img => img.id === variant.id);
                    if (imgIdx >= 0) setSelectedImageIndex(imgIdx);
                  }}
                  className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="filter-label mb-3">Quantity</div>
            <div className="qty-selector inline-flex">
              <button onClick={() => updateQuantity(-1)} className="qty-btn" aria-label="Decrease">-</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={() => updateQuantity(1)} className="qty-btn" aria-label="Increase">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary btn-full mb-4"
          >
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B6058] tracking-wide">
            Free shipping • 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10 pt-6 border-t border-[#D4C9B9]">
            {/* Description */}
            <div>
              <button 
                onClick={() => toggleAccordion('description')}
                className="accordion-header"
              >
                Description
                <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.description} Each piece is hand-finished in our atelier and inspected for quality before shipping.
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div>
              <button 
                onClick={() => toggleAccordion('materials')}
                className="accordion-header"
              >
                Materials & Care
                <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content">
                  <p className="mb-3"><strong>Material:</strong> {product.material}</p>
                  <p className="mb-2">To care for your jewelry:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Store in a cool, dry place away from direct sunlight</li>
                    <li>Avoid contact with perfumes, lotions, and harsh chemicals</li>
                    <li>Remove before swimming or bathing</li>
                    <li>Clean gently with a soft, dry cloth</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div>
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="accordion-header"
              >
                Shipping & Returns
                <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content">
                  <p className="mb-3"><strong>Shipping:</strong> Complimentary worldwide shipping on all orders. Please allow 3-5 business days for processing.</p>
                  <p><strong>Returns:</strong> We offer 30-day returns on unworn items in original packaging. Contact us to initiate a return.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20 pt-12 border-t border-[#D4C9B9]">
        <h2 className="heading-serif text-2xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
