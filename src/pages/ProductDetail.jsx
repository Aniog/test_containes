import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B6058] mb-4">Product not found</p>
          <Link to="/shop" className="text-sm tracking-[2px] hover:text-[#8B7355]">BACK TO SHOP →</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-[#F8F5F1] min-h-screen pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[1px] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#EDE8E0] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#EDE8E0] overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-[#8B7355] text-[#8B7355]' : 'text-[#D4C5B5]'} />
                ))}
              </div>
              <span className="text-sm text-[#6B6058]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#6B6058] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] mb-3">FINISH</p>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1px] border transition-all ${
                      selectedVariant === variant
                        ? 'bg-[#2C2522] text-white border-[#2C2522]'
                        : 'border-[#D4C5B5] hover:border-[#8B7355]'
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
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 border border-[#D4C5B5] hover:bg-[#EDE8E0]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 border border-[#D4C5B5] hover:bg-[#EDE8E0]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#8B7355] text-white text-sm tracking-[3px] hover:bg-[#6B5742] transition-colors mb-10"
            >
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="border-t border-[#D4C5B5] divide-y divide-[#D4C5B5]">
              {[
                { key: 'description', label: 'DESCRIPTION', content: product.details },
                { key: 'materials', label: 'MATERIALS & CARE', content: product.care },
                { key: 'shipping', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[2px]"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-6 text-[#6B6058] text-sm leading-relaxed pr-8">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#D4C5B5]">
          <p className="text-xs tracking-[3px] text-[#8B7355] mb-6">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-[4/3] bg-[#EDE8E0] mb-4 overflow-hidden">
                  <img src={related.images[0]} alt={related.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="font-serif text-sm tracking-[1px] mb-1">{related.name}</p>
                <p className="text-sm text-[#6B6058]">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;