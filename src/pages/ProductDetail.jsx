import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
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

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-[#C5A26F]">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#E8E4DC] mb-3 overflow-hidden">
              <img src={product.image1} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image1, product.image2, product.image1, product.image2].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#E8E4DC] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#C5A26F]">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#C5A26F" />)}
              </div>
              <span className="text-sm text-[#5A5A5A]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-[#5A5A5A] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#5A5A5A]">Tone</div>
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
              <div className="uppercase tracking-[0.1em] text-xs mb-3 text-[#5A5A5A]">Quantity</div>
              <div className="flex items-center border border-[#E5E0D5] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#E8E4DC]">-</button>
                <span className="px-6 py-2.5 border-x border-[#E5E0D5]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#E8E4DC]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-gold w-full mb-4">Add to Cart</button>
            <p className="text-center text-xs text-[#5A5A5A] tracking-[0.05em]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D5]">
              {[
                { key: 'desc', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `${product.material}. Wipe gently with a soft cloth. Avoid contact with perfumes and lotions.` },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns. All pieces are hypoallergenic and nickel-free.' },
              ].map(({ key, title, content }) => (
                <div key={key}>
                  <button onClick={() => toggleAccordion(key)} className="accordion-header w-full text-left">
                    <span>{title}</span>
                    <span className="text-xl leading-none">{openAccordion === key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#5A5A5A] leading-relaxed ${openAccordion === key ? 'open' : ''}`}>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D5]">
          <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-8">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3.6] bg-[#E8E4DC] mb-3 overflow-hidden">
                  <img src={p.image1} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="product-name text-sm tracking-[0.1em] group-hover:text-[#C5A26F] transition-colors">{p.name}</div>
                <div className="text-sm text-[#5A5A5A] mt-0.5">${p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
