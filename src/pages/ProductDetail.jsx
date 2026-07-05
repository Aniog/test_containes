import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F]">Product not found.</p>
          <Link to="/shop" className="text-sm tracking-widest mt-4 inline-block hover:text-[#C5A46E]">Back to Shop →</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-widest text-[#6B665F] hover:text-[#C5A46E] mb-8">
          <ChevronLeft size={16} className="mr-1" /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#F5F2ED] overflow-hidden mb-3">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-16 bg-[#F5F2ED] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#C5A46E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <h1 className="product-name text-3xl tracking-[0.06em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#C5A46E] fill-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} · {product.reviewCount} reviews</span>
            </div>

            <p className="text-2xl font-medium mb-6">{formatPrice(product.price)}</p>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B665F] mb-3">Quantity</p>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#F5F2ED] transition-colors"
                >
                  −
                </button>
                <span className="px-5 py-2.5 text-sm border-x border-[#E5DFD6]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#F5F2ED] transition-colors"
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
            <p className="text-center text-xs text-[#6B665F]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-[#E5DFD6]">
              <div>
                <button 
                  onClick={() => toggleAccordion('desc')}
                  className="accordion-header w-full text-left"
                >
                  <span>Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'desc' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === 'desc' ? 'open' : ''}`}>
                  {product.longDescription}
                </div>
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span>Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <p className="mb-2"><strong>Materials:</strong> {product.material}</p>
                  <p>{product.care}</p>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span>Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <h3 className="heading-serif text-2xl mb-8">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
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
