import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, useStore } from '@/lib/store';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-velmora-stone">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-bold"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm font-light leading-relaxed text-velmora-charcoal/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-velmora-ivory min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {product.images.map((img, idx) => (
             <div key={idx} className="aspect-[3/4] bg-velmora-stone overflow-hidden">
                <img
                  data-strk-img-id={`pdb-img-${product.id}-${idx}`}
                  data-strk-img={`[pdb-title] jewelry editorial close-up ${idx === 0 ? 'product' : 'on model'}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  className="w-full h-full object-cover rounded-lg"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                />
             </div>
           ))}
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-widest font-bold text-velmora-gold mb-4">{product.category}</p>
          <h1 id="pdb-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl font-light">${product.price}</span>
            <div className="flex gap-1 ml-auto md:ml-0">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
               ))}
               <span className="text-[10px] uppercase tracking-widest font-bold ml-2 opacity-40">24 Reviews</span>
            </div>
          </div>

          <p className="text-sm font-light leading-relaxed text-velmora-charcoal/70 mb-10">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-4">Tone: {selectedTone}</p>
            <div className="flex gap-4">
              {['Gold', 'Silver'].map(tone => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={cn(
                    "px-8 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                    selectedTone === tone ? "bg-velmora-charcoal text-white border-velmora-charcoal" : "border-velmora-stone text-velmora-charcoal hover:border-velmora-gold"
                  )}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & CTA */}
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-velmora-stone px-4 py-3 gap-8">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4"/></button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4"/></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-velmora-gold transition-colors duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-velmora-stone">
            <Accordion title="Description">
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.details}
              <br /><br />
              To maintain the luster of your Velmora piece, avoid contact with perfumes, lotions, and water. Wipe gently with a soft cloth after wearing.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Enjoy complimentary worldwide shipping on orders over $50. We offer 30-day hassle-free returns on all unworn items in their original packaging.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 max-w-7xl mx-auto">
        <h2 className="text-2xl font-serif text-center mb-16 italic">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {products.filter(p => p.id !== id).slice(0, 4).map(p => (
             <div key={p.id}>
                <Link to={`/product/${p.id}`} className="group block">
                   <div className="aspect-[3/4] bg-velmora-stone overflow-hidden mb-4 rounded-md">
                      <img
                        data-strk-img-id={`rel-img-${p.id}`}
                        data-strk-img={`[rel-title-${p.id}] jewelry editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      />
                   </div>
                   <h3 id={`rel-title-${p.id}`} className="text-xs uppercase tracking-widest font-serif mb-1">{p.name}</h3>
                   <p className="text-sm font-light text-velmora-charcoal/60">${p.price}</p>
                </Link>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
