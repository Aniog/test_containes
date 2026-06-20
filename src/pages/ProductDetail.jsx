import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[1px] text-[#6B665C] hover:text-[#2C2A26] mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F5F2EB] rounded overflow-hidden mb-4">
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
                    className={`w-20 h-20 bg-[#F5F2EB] rounded overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#C5A46E]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[3px] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <p className="text-2xl font-medium">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[#6B665C]">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#6B665C] leading-relaxed mb-8">{product.description}</p>

            {/* VARIANT SELECTOR */}
            <div className="mb-6">
              <p className="text-xs tracking-[2px] text-[#6B665C] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`variant-pill px-6 py-2.5 text-sm border rounded-full tracking-[1px] ${
                      selectedVariant.id === variant.id 
                        ? 'active border-[#C5A46E]' 
                        : 'border-[#D4CFC4] text-[#2C2A26]'
                    } ${!variant.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#6B665C] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#D4CFC4] rounded w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F5F2EB] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-[#D4CFC4]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F5F2EB] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <Button 
              onClick={handleAddToCart}
              className="w-full h-14 text-sm tracking-[2px] mb-3"
            >
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#6B665C]">Free shipping on orders over $75</p>

            {/* ACCORDIONS */}
            <div className="mt-10 space-y-px">
              {/* Description */}
              <div className="border-t border-[#D4CFC4]">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-sm tracking-[1.5px]">DESCRIPTION</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <p className="pb-6 text-[#6B665C] leading-relaxed pr-4">{product.longDescription}</p>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-t border-[#D4CFC4]">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-sm tracking-[1.5px]">MATERIALS & CARE</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="pb-6 text-[#6B665C] leading-relaxed space-y-2 pr-4 text-sm">
                    <p>• 18K gold-plated brass</p>
                    <p>• Hypoallergenic posts and clasps</p>
                    <p>• Avoid contact with water, perfume, and lotions</p>
                    <p>• Store in a cool, dry place</p>
                    <p>• Clean gently with a soft cloth</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-[#D4CFC4] border-b">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-sm tracking-[1.5px]">SHIPPING & RETURNS</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="pb-6 text-[#6B665C] leading-relaxed space-y-2 pr-4 text-sm">
                    <p>• Free worldwide shipping on orders over $75</p>
                    <p>• Standard shipping: 5–10 business days</p>
                    <p>• Express shipping available at checkout</p>
                    <p>• 30-day returns on unworn items in original packaging</p>
                    <p>• Return shipping is free for exchanges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20">
          <p className="text-xs tracking-[3px] text-[#C5A46E] mb-6">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="product-card bg-white">
                  <div className="aspect-[4/3.5] bg-[#F5F2EB] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="product-name text-sm tracking-[2px] mb-1">{p.name}</p>
                    <p className="text-sm text-[#6B665C]">{formatPrice(p.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
