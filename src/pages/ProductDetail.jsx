import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(parseInt(id));
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F] mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary">BACK TO SHOP</Link>
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
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] text-[#6B665F] hover:text-[#2C2825] mb-8">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#E5DFD3] overflow-hidden mb-4">
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
                  className={`w-20 h-20 bg-[#E5DFD3] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#2C2825]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C5A46E" className="text-[#C5A46E]" />)}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <div className="text-2xl mb-8">${product.price}</div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] mb-3 text-[#6B665F]">TONE</div>
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
              <div className="text-xs tracking-[0.1em] mb-3 text-[#6B665F]">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: product.details },
                { key: 'care', label: 'MATERIALS & CARE', content: product.care },
                { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map(({ key, label, content }) => (
                <div key={key}>
                  <button 
                    onClick={() => toggleAccordion(key)}
                    className="accordion-trigger"
                  >
                    {label}
                    <span className="text-xl">{openAccordion === key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === key && (
                    <div className="pb-6 text-[#6B665F] text-sm leading-relaxed pr-8">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
          <h3 className="serif text-2xl tracking-wide mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;