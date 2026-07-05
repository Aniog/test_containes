import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A7F75] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = product.images[selectedVariant.toLowerCase()] || product.images.gold;
  const imageArray = [images.primary, images.secondary];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] text-[#8A7F75] hover:text-[#2C2522] mb-8">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F4EDE4] mb-4 overflow-hidden">
              <img 
                src={imageArray[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {imageArray.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 bg-[#F4EDE4] overflow-hidden border-2 transition-all ${selectedImageIndex === idx ? 'border-[#C5A26F]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-8">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-[#C5A26F]">${product.price}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-[#C5A26F] text-[#C5A26F]" : "text-[#E5DDD3]"} />
                  ))}
                </div>
                <span className="text-[#8A7F75]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#5C524C] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] mb-3 text-[#C5A26F]">FINISH</div>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setSelectedImageIndex(0);
                    }}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] mb-3 text-[#C5A26F]">QUANTITY</div>
              <div className="flex items-center border border-[#E5DDD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F4EDE4]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DDD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F4EDE4]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#8A7F75] tracking-[0.1em]">FREE SHIPPING • 30-DAY RETURNS</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DDD3]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: product.details },
                { key: 'care', label: 'MATERIALS & CARE', content: product.care },
                { key: 'ship', label: 'SHIPPING & RETURNS', content: `${product.shipping} ${product.returns}` }
              ].map(item => (
                <div key={item.key}>
                  <button 
                    onClick={() => toggleAccordion(item.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span className="text-sm tracking-[0.1em]">{item.label}</span>
                    <span className="text-xl text-[#C5A26F]">{activeAccordion === item.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#5C524C] leading-relaxed ${activeAccordion === item.key ? 'open' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DDD3]">
            <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-3">YOU MAY ALSO LIKE</div>
            <h3 className="serif text-3xl tracking-[0.05em] mb-10">Complete the Look</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;