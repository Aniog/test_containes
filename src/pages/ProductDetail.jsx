import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { Minus, Plus, ChevronRight, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-32 text-center font-serif text-2xl">Product not found</div>;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over 0. 30-day hassle-free returns.' }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 animate-in fade-in duration-700">
      <nav className="flex items-center gap-2 mb-12 text-[10px] uppercase tracking-widest text-brand-stone">
        <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-brand-charcoal font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-16 lg:gap-24 mb-32">
        {/* Left: Gallery */}
        <div className="flex-1 space-y-4">
          <div className="aspect-[3/4] overflow-hidden bg-brand-stone/5">
            <img 
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-name] jewelry detail gold luxury editorial model portrait`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              className="w-full h-full object-cover"
              alt={product.name}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="aspect-[3/4] overflow-hidden bg-brand-stone/5 cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name] jewelry ${idx} gold detail editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                    alt={`Thumbnail ${idx}`}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 max-w-md">
          <div className="mb-8">
            <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-light text-brand-stone">$${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />)}
                <span className="text-[10px] uppercase tracking-widest text-brand-stone ml-2">(48 Reviews)</span>
              </div>
            </div>
            <p className="text-brand-stone text-sm leading-relaxed font-light mb-8">
              A piece of quiet luxury for the modern woman. Meticulously designed to elevate any ensemble with a touch of timeless warmth.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-stone font-bold mb-4 block">Tone</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-8 py-3 uppercase tracking-widest text-[10px] border transition-all ${tone === t ? 'border-brand-charcoal bg-brand-charcoal text-white' : 'border-brand-stone/20 hover:border-brand-stone'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center border border-brand-stone/20">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:text-brand-gold transition-colors"
                ><Minus size={14} /></button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:text-brand-gold transition-colors"
                ><Plus size={14} /></button>
              </div>
              <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addToCart(product);
                  setQuantity(1);
                }}
                className="flex-1 bg-brand-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold transition-all duration-500 shadow-xl"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="border-t border-brand-stone/10 pt-8 space-y-4">
            {accordions.map(acc => (
              <div key={acc.id} className="border-b border-brand-stone/10 pb-4">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                  className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold py-2"
                >
                  {acc.title}
                  <Plus size={12} className={`transition-transform ${activeAccordion === acc.id ? 'rotate-45' : ''}`} />
                </button>
                {activeAccordion === acc.id && (
                  <div className="py-4 text-xs text-brand-stone leading-relaxed font-light animate-in fade-in slide-in-from-top-2 duration-300">
                    {acc.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested */}
      <section className="pt-24 border-t border-brand-stone/10">
        <h2 className="font-serif text-3xl uppercase tracking-widest text-center mb-16">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(item => (
            <div key={item.id} className="group">
               <Link to={`/product/${item.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-brand-stone/5 mb-4">
                  <img 
                    data-strk-img-id={`pdp-suggested-${item.id}`}
                    data-strk-img={`[suggested-item-name-${item.id}] gold jewelry luxury white`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt={item.name}
                  />
                </div>
                <h3 id={`suggested-item-name-${item.id}`} className="font-serif text-[11px] uppercase tracking-widest text-center mb-1 italic">{item.name}</h3>
                <p className="text-[10px] font-light text-brand-stone text-center tracking-widest">$${item.price}</p>
               </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
