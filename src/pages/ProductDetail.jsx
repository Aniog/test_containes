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
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B635C]">Product not found.</p>
          <Link to="/shop" className="btn btn-primary mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = product.images || [];
  const currentImage = images[selectedImageIndex] || images[0];

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
        className={i < Math.floor(rating) ? 'fill-current' : ''} 
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20 bg-[#F8F5F1]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-sm tracking-[0.06em] uppercase text-[#6B635C] hover:text-[#1A1816] mb-8"
        >
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3.5] bg-white overflow-hidden mb-3">
              <img 
                src={currentImage} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? 'border-[#B89778]' 
                        : 'border-transparent hover:border-[#D9D2C8]'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-medium text-[#B89778]">${product.price}</span>
              <div className="flex items-center gap-1 text-[#B89778]">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-[#6B635C]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-6 text-[#6B635C] leading-relaxed">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <div className="text-xs tracking-[0.08em] uppercase text-[#6B635C] mb-3">Tone</div>
                <div className="flex gap-3">
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
            )}

            {/* QUANTITY */}
            <div className="mt-6">
              <div className="text-xs tracking-[0.08em] uppercase text-[#6B635C] mb-3">Quantity</div>
              <div className="flex items-center border border-[#D9D2C8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F1EDE6] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[#D9D2C8]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F1EDE6] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mt-8 text-base"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <p className="text-center text-xs text-[#6B635C] mt-3 tracking-wide">
              Ships in 1–2 business days
            </p>

            {/* ACCORDIONS */}
            <div className="mt-10 divide-y divide-[#D9D2C8]">
              {/* Description */}
              <div id="description">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full"
                >
                  <span>Description</span>
                  <span className="text-lg leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="accordion-content">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div id="care">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full"
                >
                  <span>Materials & Care</span>
                  <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="accordion-content space-y-3">
                    <p><span className="text-[#1A1816]">Material:</span> {product.material}</p>
                    <p><span className="text-[#1A1816]">Care:</span> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div id="shipping">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-content space-y-3 text-sm">
                    <p><span className="text-[#1A1816]">Shipping:</span> Free worldwide shipping on all orders. Delivered in 5–10 business days.</p>
                    <p><span className="text-[#1A1816]">Returns:</span> 30-day returns. Items must be unworn and in original packaging.</p>
                    <p><span className="text-[#1A1816]">Gift wrapping:</span> Complimentary on request. Add a note at checkout.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#D9D2C8]">
            <h3 className="heading-serif text-2xl mb-8">You May Also Like</h3>
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
