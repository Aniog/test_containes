import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';
import { getProductById, getRelatedProducts, products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const related = getRelatedProducts(parseInt(id));

  if (!product) return <div className="pt-20 p-8">Product not found</div>;

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product }, selectedVariant);
  };

  return (
    <div className="pt-20 max-w-[1200px] mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-2 gap-12 pt-10">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-[#F5F2ED] mb-3 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F5F2ED] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#C5A26F] text-[#C5A26F]" />)}</div>
            <span className="text-sm text-[#8B7E6F]">{product.rating} · {product.reviews} reviews</span>
          </div>
          <div className="text-2xl mb-8">${product.price}</div>

          <p className="text-[#8B7E6F] leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] text-[#8B7E6F] mb-3">FINISH</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(v => (
                <button 
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] text-[#8B7E6F] mb-3">QUANTITY</div>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
              <span className="px-6 text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn-primary w-full mb-4">ADD TO CART</button>
          <p className="text-center text-xs text-[#8B7E6F]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5E0D8]">
            {[
              { key: 'desc', label: 'Description', content: product.details },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over sterling silver or brass. Wipe gently with a soft cloth. Avoid contact with perfumes and lotions. Store in a dry place.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
            ].map(item => (
              <div key={item.key}>
                <div className="accordion-header" onClick={() => toggleAccordion(item.key)}>
                  <span className="text-sm tracking-[0.08em]">{item.label}</span>
                  <ChevronDown size={16} className={openAccordion === item.key ? 'rotate-180' : ''} />
                </div>
                <div className={`accordion-content text-sm text-[#8B7E6F] ${openAccordion === item.key ? 'open' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
        <div className="flex justify-between items-end mb-8">
          <div className="font-serif text-3xl tracking-[-0.01em]">You May Also Like</div>
          <Link to="/shop" className="text-sm tracking-[0.08em]">SHOP ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;