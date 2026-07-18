import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id || 0, 4);
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#B89778] underline">Return to shop</Link>
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

  const currentImage = product.images[selectedImageIndex] || product.images[0];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-1 text-sm tracking-[1px] text-[#6B665F] hover:text-[#2C2825] mb-8"
        >
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden mb-3">
              <img 
                src={currentImage} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? 'border-[#B89778]' 
                        : 'border-transparent hover:border-[#E8E4DE]'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] text-[#2C2825] mb-2">
              {product.name}
            </h1>
            
            <p className="text-2xl text-[#2C2825] mb-4">{formatPrice(product.price)}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(product.rating) ? 'fill-[#B89778] text-[#B89778]' : 'text-[#E8E4DE]'} 
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[2px] mb-3 text-[#2C2825]">TONE</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1px] border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#B89778] bg-[#B89778] text-white'
                        : 'border-[#E8E4DE] text-[#2C2825] hover:border-[#B89778]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] mb-3 text-[#2C2825]">QUANTITY</p>
              <div className="flex items-center border border-[#E8E4DE] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#6B665F] hover:text-[#2C2825] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-[#E8E4DE]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#6B665F] hover:text-[#2C2825] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full mb-3 tracking-[2px]" 
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
            <p className="text-center text-xs tracking-[1px] text-[#6B665F]">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E8E4DE] divide-y divide-[#E8E4DE]">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px]"
                >
                  DESCRIPTION
                  <span className="text-[#B89778]">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-6 text-[#6B665F] text-[15px] leading-relaxed pr-4">
                    {product.longDescription}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px]"
                >
                  MATERIALS & CARE
                  <span className="text-[#B89778]">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-6 text-[#6B665F] text-[15px] leading-relaxed pr-4 space-y-3">
                    <p>18K gold plating over sterling silver base.</p>
                    <p>Hypoallergenic and nickel-free.</p>
                    <p>To preserve finish: avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Polish gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px]"
                >
                  SHIPPING & RETURNS
                  <span className="text-[#B89778]">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-6 text-[#6B665F] text-[15px] leading-relaxed pr-4 space-y-3">
                    <p><strong>Free worldwide shipping</strong> on all orders. Delivery in 3–7 business days.</p>
                    <p>30-day returns for unworn items in original packaging. Return shipping is free within the US.</p>
                    <p>Questions? Email <a href="mailto:hello@velmora.co" className="underline">hello@velmora.co</a></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E8E4DE]">
            <h3 className="font-serif text-2xl tracking-[1px] text-[#2C2825] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {relatedProducts.map((p) => (
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
