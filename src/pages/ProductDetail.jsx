import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Toast from '../components/ui/Toast';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/shop" className="inline-flex items-center text-sm text-text-muted hover:text-text">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Shop
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div>
              <div className="aspect-[4/3.5] bg-surface-warm mb-3 overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImage === idx ? 'active' : ''}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="pt-2">
              <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-3">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-medium">${product.price}</span>
                <div className="flex items-center gap-1 text-sm">
                  <div className="stars flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-text-muted ml-1">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed mb-8 pr-4">{product.description}</p>

              {/* Variant Selector */}
              <div className="mb-6">
                <p className="text-xs tracking-[0.1em] text-text-muted mb-3">TONE</p>
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

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.1em] text-text-muted mb-3">QUANTITY</p>
                <div className="flex items-center border border-border w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 hover:bg-surface-warm"
                  >
                    −
                  </button>
                  <span className="px-6 py-2.5 text-sm border-x border-border">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 hover:bg-surface-warm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary w-full mb-4 text-sm tracking-[0.08em]"
              >
                ADD TO CART
              </button>
              <p className="text-center text-xs text-text-muted tracking-widest">FREE SHIPPING ON ALL ORDERS</p>

              {/* Accordions */}
              <div className="mt-10 divide-y divide-border border-t border-border">
                {/* Description */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('description')}
                    className="w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-widest">DESCRIPTION</span>
                    <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                    <p className="pb-6 text-sm leading-relaxed text-text-muted pr-4">{product.longDescription}</p>
                  </div>
                </div>

                {/* Materials & Care */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('materials')}
                    className="w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-widest">MATERIALS & CARE</span>
                    <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                    <div className="pb-6 text-sm leading-relaxed text-text-muted space-y-3 pr-4">
                      <p><span className="text-text">Materials:</span> {product.material}</p>
                      <p><span className="text-text">Care:</span> {product.care}</p>
                    </div>
                  </div>
                </div>

                {/* Shipping & Returns */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-widest">SHIPPING & RETURNS</span>
                    <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                    <div className="pb-6 text-sm leading-relaxed text-text-muted space-y-3 pr-4">
                      <p>Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
                      <p>30-day returns. Items must be unworn and in original packaging.</p>
                      <p>Questions? <a href="#contact" className="underline">Contact us</a>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <h3 className="serif text-2xl tracking-tight mb-8">You may also like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
};

export default ProductDetail;