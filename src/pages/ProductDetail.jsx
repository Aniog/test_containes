import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6b6763] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
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

  const currentImages = product.images[selectedVariant];

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-[#b8976e]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#f5f3ef] mb-4 overflow-hidden">
              <img 
                src={currentImages.primary} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3.5] bg-[#f5f3ef] overflow-hidden">
                <img 
                  src={currentImages.secondary} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3.5] bg-[#f5f3ef] overflow-hidden">
                <img 
                  src={currentImages.primary} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#b8976e] text-[#b8976e]" : "text-[#e5e0d8]"} />
                ))}
              </div>
              <span className="text-sm text-[#6b6763]">{product.rating} · {product.reviewCount} reviews</span>
            </div>

            <p className="text-2xl font-medium mb-8">${product.price}</p>

            <p className="text-[#6b6763] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6b6763] uppercase mb-3">Finish</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`variant-pill ${selectedVariant === 'gold' ? 'active' : ''}`}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`variant-pill ${selectedVariant === 'silver' ? 'active' : ''}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6b6763] uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#e5e0d8] flex items-center justify-center hover:border-[#b8976e]"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#e5e0d8] flex items-center justify-center hover:border-[#b8976e]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4 py-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6b6763] tracking-[0.05em]">
              {product.inStock ? 'In stock and ready to ship' : 'Currently unavailable'}
            </p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#e5e0d8]">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="text-[#6b6763] leading-relaxed">{product.details}</p>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('care')}
                  className="accordion-header w-full text-left"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl">{openAccordion === 'care' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'care' ? 'open' : ''}`}>
                  <p className="text-[#6b6763] leading-relaxed">{product.care}</p>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <p className="text-[#6b6763] leading-relaxed">
                    Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. 
                    Items must be unworn with original packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <h3 className="font-serif text-3xl tracking-[-0.01em] mb-10 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;