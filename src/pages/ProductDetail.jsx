import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[#5C5752] mb-4">Product not found.</p>
        <Link to="/shop" className="text-[#B89778]">Return to Shop →</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const images = product.images || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back Link */}
      <Link to="/shop" className="inline-flex items-center text-sm text-[#5C5752] hover:text-[#1C1917] mb-8">
        <ChevronLeft size={16} className="mr-1" /> Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
        {/* Left: Gallery */}
        <div>
          <div className="gallery-main mb-3">
            <img 
              src={images[selectedImageIndex] || images[0]} 
              alt={product.name}
            />
          </div>
          
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`gallery-thumb ${selectedImageIndex === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="lg:pt-2">
          <h1 className="product-name text-3xl md:text-4xl tracking-[0.08em] mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1 text-sm text-[#5C5752]">
              <div className="flex text-[#B89778]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>{product.rating} ({product.reviewCount})</span>
            </div>
          </div>

          <p className="body-text text-[#5C5752] mb-8 pr-4">{product.description}</p>

          {/* Variant Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[#5C5752] mb-2">Tone</div>
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
          )}

          {/* Quantity */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.1em] uppercase text-[#5C5752] mb-2">Quantity</div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 border border-[#E5E0D8] flex items-center justify-center hover:border-[#B89778]"
              >
                −
              </button>
              <span className="w-8 text-center font-mono">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 border border-[#E5E0D8] flex items-center justify-center hover:border-[#B89778]"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            variant="primary" 
            className="w-full mb-3"
            onClick={handleAddToCart}
          >
            Add to Cart — ${product.price * quantity}
          </Button>
          <p className="text-center text-xs text-[#8A8178] tracking-[0.05em]">Free shipping • 30-day returns</p>

          {/* Accordions */}
          <div className="mt-10 divide-y divide-[#E5E0D8]">
            {/* Description */}
            <div>
              <button 
                onClick={() => toggleAccordion('description')}
                className="accordion-header"
              >
                Description
                <span className="text-lg leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.longDescription || product.description}
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
                <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content space-y-3">
                  <p>18K gold-plated brass with hypoallergenic posts and clasps.</p>
                  <p>To preserve the finish, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not worn. Clean gently with a soft cloth.</p>
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
                <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content space-y-3">
                  <p><strong>Free worldwide shipping</strong> on all orders. Ships from our atelier within 1–2 business days.</p>
                  <p>30-day returns for unworn items in original packaging. Return shipping is free within the US.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <div className="mt-20">
          <h3 className="text-sm tracking-[0.15em] uppercase text-[#5C5752] mb-6">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;