import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A7368] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] text-[#7A7368] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#F0EBE3] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-pointer border border-transparent hover:border-[#E5DFD3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-[#7A7368]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-[#5A5348] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#7A7368]">Tone</div>
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
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#7A7368]">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F0EBE3]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F0EBE3]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs tracking-[0.08em] text-[#7A7368]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#E5DFD3]">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: 'Our pieces are crafted from 18K gold plated brass with premium crystal embellishments. To maintain their beauty, avoid contact with water, perfume, and lotions. Store in the provided pouch when not in use.' },
                { title: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging. Please contact us for return authorization.' },
              ].map((section, idx) => (
                <div key={idx} className="border-b border-[#E5DFD3]">
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{section.title}</span>
                    <span className={`transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#5A5348] leading-relaxed ${openAccordion === idx ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
            <h3 className="heading-serif text-3xl mb-8 text-center">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
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