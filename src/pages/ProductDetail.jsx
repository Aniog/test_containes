import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B6560] mb-4">Product not found</p>
          <Link to="/shop" className="text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordions = [
    { key: 'desc', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.details },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery.' },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#F0EBE3] overflow-hidden mb-3">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#B8976E]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B6560] ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-[#6B6560] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#6B6560] mb-3">TONE</p>
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
              <p className="text-xs tracking-[0.1em] text-[#6B6560] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#F0EBE3]">-</button>
                <span className="px-5 py-2.5 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#F0EBE3]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B6560] tracking-[0.05em]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
              {accordions.map((acc) => (
                <div key={acc.key}>
                  <button 
                    onClick={() => toggleAccordion(acc.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{acc.title}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6560] leading-relaxed ${activeAccordion === acc.key ? 'open' : ''}`}>
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5E0D8]">
            <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-8">YOU MAY ALSO LIKE</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="product-card group block">
                  <div className="aspect-[4/3.5] bg-[#F0EBE3] overflow-hidden">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="product-name text-sm tracking-[0.12em] mb-1">{item.name}</p>
                    <p className="text-sm text-[#6B6560]">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;