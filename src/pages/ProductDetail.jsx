import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [product.image, product.imageSecondary];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
  };

  return (
    <div className="pt-20 max-w-6xl mx-auto px-6 pb-24">
      <Link to="/shop" className="inline-flex items-center text-sm tracking-[0.05em] text-[#6B665F] mb-8 hover:text-[#2C2825]">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3.2] bg-[#F5F2EB] mb-3 overflow-hidden">
            <img 
              src={images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-300" 
            />
            <button 
              onClick={() => setCurrentImage((currentImage + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex gap-3">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentImage(idx)}
                className={`w-20 h-16 overflow-hidden border-2 ${currentImage === idx ? 'border-[#B8976F]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-2">
          <h1 className="product-name text-3xl tracking-[0.12em] mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#B8976F] text-[#B8976F]" />)}
            </div>
            <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-light mb-8">${product.price}</p>

          <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

          {/* Variants */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B665F]">Tone</div>
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
            <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[#6B665F]">Quantity</div>
            <div className="inline-flex border border-[#E5DFD3]">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B665F] tracking-[0.05em]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.description },
              { key: 'care', label: 'Materials & Care', content: `Crafted from ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place.` },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns. Items must be unworn with original packaging.' },
            ].map(item => (
              <div key={item.key}>
                <button 
                  onClick={() => toggleAccordion(item.key)} 
                  className="accordion-header w-full text-left"
                >
                  {item.label}
                  <span className="text-xl leading-none">{openAccordion === item.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed pr-8 ${openAccordion === item.key ? 'open' : ''}`}>
                  <p className="py-4">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-24">
        <h3 className="heading-serif text-2xl tracking-[0.03em] mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/3.5] bg-[#F5F2EB] mb-3 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <p className="product-name text-sm tracking-[0.1em]">{p.name}</p>
              <p className="text-sm text-[#6B665F]">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}