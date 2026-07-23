import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ImageGallery from '../components/product/ImageGallery';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/home/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl mb-4">Product not found</p>
            <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
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
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-3">{product.name}</p>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-1.5 text-[#B89778]">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-[#6B645C]">({product.reviewCount})</span>
            </div>

            <p className="text-[#6B645C] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.1em] text-xs text-[#6B645C] mb-3">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
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
              <p className="uppercase tracking-[0.1em] text-xs text-[#6B645C] mb-3">Quantity</p>
              <div className="qty-selector w-fit">
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
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B645C] tracking-wide">
              Ships in 1-2 business days
            </p>

            {/* Accordions */}
            <div className="mt-12 space-y-1">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
                <p className="mt-3">All pieces are 18K gold plated over solid brass. Hypoallergenic and nickel-free.</p>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
                <p className="mt-3">30-day returns accepted on unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#D9D2C7]">
            <h3 className="font-serif text-2xl tracking-[0.05em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;