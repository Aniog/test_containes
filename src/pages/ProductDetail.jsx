import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0]">
        <div className="text-center">
          <p className="mb-4">Product not found</p>
          <Link to="/shop" className="text-[#C5A26F]">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#EDE8DF] mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#EDE8DF] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl tracking-[3px] mb-3">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <span className="text-sm text-[#6B655C]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B655C] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[2px] mb-3">FINISH</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1.5px] border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#C5A26F] bg-[#C5A26F] text-[#1A1612]'
                        : 'border-[#EDE8DF] hover:border-[#C5A26F]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] mb-3">QUANTITY</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 border border-[#EDE8DF] hover:bg-[#EDE8DF]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 border border-[#EDE8DF] hover:bg-[#EDE8DF]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-3" size="lg">
              ADD TO CART
            </Button>
            <p className="text-center text-xs tracking-wide text-[#6B655C]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#EDE8DF]">
              {[
                { title: 'DESCRIPTION', content: product.details },
                { title: 'MATERIALS & CARE', content: '18K gold plated brass. Wipe gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
                { title: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on orders over $50. 30-day returns. Items must be unworn with original packaging.' },
              ].map((section, idx) => (
                <div key={idx} className="border-b border-[#EDE8DF]">
                  <button
                    onClick={() => toggleAccordion(section.title)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px]"
                  >
                    {section.title}
                    <span className="text-xl">{activeAccordion === section.title ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === section.title && (
                    <p className="pb-6 text-sm text-[#6B655C] leading-relaxed pr-8">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <p className="text-xs tracking-[3px] text-[#C5A26F] mb-6">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#EDE8DF] mb-3 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-serif text-sm tracking-[1px]">{p.name}</p>
                <p className="text-sm text-[#6B655C]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;