import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 pt-8">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#E5DFD3] mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#E5DFD3] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="text-[#C5A46E] fill-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.1em] text-xs mb-3 text-[#8B7355]">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
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
              <p className="uppercase tracking-[0.1em] text-xs mb-3 text-[#8B7355]">Quantity</p>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs tracking-wider text-[#6B665F]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated over brass. Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' }
              ].map(section => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger"
                  >
                    {section.label}
                    {openAccordion === section.key ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordion === section.key && (
                    <div className="py-6 text-[#6B665F] text-sm leading-relaxed pr-8">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <p className="uppercase tracking-[0.15em] text-sm text-[#8B7355] mb-8">You May Also Like</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] bg-[#E5DFD3] mb-4 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-wider mb-1">{p.name}</p>
                <p className="text-sm text-[#6B665F]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;