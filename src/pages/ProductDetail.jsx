import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronUp, Plus, Minus, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [expandedSection, setExpandedSection] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImg(0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, selectedImg]);

  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found</div>;

  const Accordion = ({ id, title, children }) => (
    <div className="border-t border-black/5">
      <button 
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full py-6 flex items-center justify-between group"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium group-hover:text-gold transition-colors">{title}</span>
        {expandedSection === id ? <ChevronUp className="w-4 h-4 opacity-40" /> : <ChevronDown className="w-4 h-4 opacity-40" />}
      </button>
      {expandedSection === id && (
         <motion.div 
           initial={{ height: 0, opacity: 0 }}
           animate={{ height: 'auto', opacity: 1 }}
           className="pb-8 overflow-hidden font-sans text-xs text-black/60 leading-loose uppercase tracking-widest italic"
         >
           {children}
         </motion.div>
      )}
    </div>
  );

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 md:gap-24 items-start">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
             {/* Thumbnails */}
             <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
                {product.images.map((img, idx) => (
                   <button 
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`aspect-[3/4] w-20 flex-shrink-0 bg-muted overflow-hidden transition-all border ${
                      selectedImg === idx ? 'border-gold' : 'border-black/5 hover:border-black/20'
                    }`}
                   >
                     <img 
                      data-strk-img-id={`thumb-${id}-${idx}`}
                      data-strk-img={img}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full object-cover"
                      alt=""
                     />
                   </button>
                ))}
             </div>
             {/* Main Image */}
             <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden rounded-sm relative group">
                <img 
                    data-strk-img-id={`main-detail-${id}-${selectedImg}`}
                    data-strk-img={product.images[selectedImg]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt={product.name}
                />
             </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col space-y-10 sticky top-32">
             <div>
                <div className="flex items-center gap-1 mb-6 text-gold">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                   <span className="text-[10px] font-sans text-black/40 uppercase tracking-[0.3em] ml-2 mt-1">4.9 / 5.0 (28 reviews)</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl tracking-[0.1em] uppercase mb-4">{product.name}</h1>
                <p className="font-serif text-2xl text-black/60 italic font-light">${product.price}</p>
             </div>

             <p className="font-sans text-sm text-black/60 leading-relaxed uppercase tracking-widest italic border-l border-gold pl-6 py-2">
                {product.description}
             </p>

             {/* Variant Selector */}
             <div className="space-y-6">
                <div>
                   <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/40 block mb-4 italic">Material Tone: {tone}</span>
                   <div className="flex gap-4">
                      {['Gold', 'Silver'].map(t => (
                        <button
                          key={t}
                          onClick={() => setTone(t)}
                          className={`px-8 py-3 text-[10px] uppercase tracking-widest transition-all rounded-full border ${
                            tone === t ? 'bg-carbon text-white border-carbon' : 'border-black/10 hover:border-black text-black/50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="pt-4">
                   <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/40 block mb-4 italic text-balance">Quantity</span>
                   <div className="flex items-center border border-black/10 rounded-full w-fit px-2 py-1">
                      <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:text-gold transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                      <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:text-gold transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>

             <button 
                onClick={() => addToCart(product, quantity)}
                className="w-full bg-gold text-white py-5 px-10 font-sans uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#C4A027] transition-all duration-500 shadow-xl shadow-gold/10"
             >
                Add to Bag — ${(product.price * quantity).toFixed(2)}
             </button>

             {/* Accordions */}
             <div className="pt-8 space-y-1">
                <Accordion id="description" title="Description">
                  {product.description}
                </Accordion>
                <Accordion id="materials" title="Materials & Care">
                   <ul className="space-y-2 list-disc pl-4">
                      {product.details.map((d, i) => <li key={i}>{d}</li>)}
                      <li>Keep away from harsh chemicals and saltwater</li>
                   </ul>
                </Accordion>
                <Accordion id="shipping" title="Shipping & Returns">
                   Enjoy free worldwide shipping on all orders over $75. We offer 30-day hassle-free returns. Each piece comes in our signature sustainable packaging.
                </Accordion>
             </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40 border-t border-black/5 pt-24">
           <div className="flex items-end justify-between mb-16">
              <div>
                 <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Complete the Look</p>
                 <h2 className="font-serif text-3xl md:text-4xl tracking-wide">You May Also Like</h2>
              </div>
              <Link to="/shop" className="font-sans text-[10px] uppercase tracking-widest border-b border-black/10 pb-1 flex items-center gap-3 pr-2 mb-2 group">
                 Shop All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {products.filter(p => p.id !== id).slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
