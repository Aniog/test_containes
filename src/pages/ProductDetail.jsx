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
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) return <div className="pt-20 p-6">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20 pb-20 max-w-[1200px] mx-auto px-6">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#8B8178] hover:text-[#1C1C1C] mb-8"><ChevronLeft size={16} /> Back to Shop</Link>
      
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3.5] bg-[#F0EDE7] mb-3">
            <img src={product.image1} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image1, product.image2, product.image1, product.image2].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F0EDE7]"><img src={img} alt="" className="w-full h-full object-cover" /></div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-8">{product.name}</div>
          <div className="text-2xl mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#BFA46F]">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor" />)}</div>
            <span className="text-sm text-[#8B8178]">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="text-[#5C5650] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] text-[#8B8178] mb-3">FINISH</div>
            <div className="flex gap-3">
              {['Gold','Silver'].map(v => (
                <button key={v} onClick={() => setSelectedVariant(v)} className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}>{v}</button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-[#E5E2DC]">
              <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="px-4 py-3">-</button>
              <span className="px-5">{quantity}</span>
              <button onClick={() => setQuantity(quantity+1)} className="px-4 py-3">+</button>
            </div>
            <button onClick={handleAddToCart} className="btn-primary flex-1">Add to Cart</button>
          </div>
          <div className="text-xs text-[#8B8178] tracking-[0.05em]">Ships in 1-2 business days</div>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5E2DC]">
            {[
              { key: 'desc', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated brass. Wipe gently with a soft cloth. Avoid contact with perfumes and lotions. Store in a dry place.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. Items must be unworn with tags attached.' },
            ].map(acc => (
              <div key={acc.key}>
                <div className="accordion-header" onClick={() => toggleAccordion(acc.key)}>
                  <span className="text-sm tracking-[0.05em]">{acc.label}</span>
                  <span className="text-xl leading-none">{openAccordion === acc.key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content text-sm text-[#5C5650] leading-relaxed ${openAccordion === acc.key ? 'open' : ''}`}>
                  <div className="py-4 pr-8">{acc.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-24">
        <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-6">YOU MAY ALSO LIKE</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {related.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;