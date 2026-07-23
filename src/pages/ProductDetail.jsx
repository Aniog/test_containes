import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';
import StarRating from '../components/StarRating';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addToCart, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-outline mt-6">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add without auto-opening drawer to avoid overlay intercepting the click
    addToCart(product, selectedVariant, quantity, false);
    // Open drawer after click completes
    setTimeout(() => {
      openCart();
    }, 150);
  };

  // Placeholder images
  const images = [
    `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=900&fit=crop`,
    `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=900&fit=crop`,
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="container">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#2C2825] mb-8">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F2ED] mb-3 overflow-hidden">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 bg-[#F5F2ED] overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-[#B8976E]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl mb-2 tracking-[0.08em]">
              {product.name}
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-sm text-[#6B6560]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="body-text text-[#6B6560] mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-3">Tone</div>
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
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-3">Quantity</div>
              <div className="qty-selector">
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
              className="btn btn-primary btn-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#9A9289]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12 space-y-1">
              <Accordion title="Description" defaultOpen={true}>
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                <p className="mt-3">30-day returns. Items must be unworn and in original packaging.</p>
                <p className="mt-3">For questions, email <a href="mailto:hello@velmora.co" className="underline">hello@velmora.co</a></p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD6]">
          <div className="flex items-end justify-between mb-8">
            <h3>You May Also Like</h3>
            <Link to="/shop" className="text-sm text-[#B8976E] hidden md:block">View All →</Link>
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
