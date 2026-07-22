import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/api/products';
import { Star, ChevronDown, ChevronUp, Plus, Minus, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="serif-uppercase text-xs tracking-widest">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="pb-6 text-sm text-stone font-light leading-relaxed animate-in fade-in duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');

  if (!product) return <div className="pt-40 text-center text-onyx font-serif text-2xl">Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`Added ${product.name} to cart`);
  };

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-pearl text-onyx">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
        <div className="lg:col-span-7 grid grid-cols-12 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
             {[1, 2, 3, 4].map(i => (
               <div key={i} className="aspect-[3/4] bg-stone-100 cursor-pointer hover:opacity-75 transition-opacity" />
             ))}
          </div>
          <div className="col-span-10 aspect-[3/4] bg-stone-200" />
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">{product.name}</h1>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-2">
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[10px] text-stone-500 serif-uppercase">(24 Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-stone leading-relaxed font-light">{product.description}</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] serif-uppercase tracking-widest text-stone">Metal Tone: {selectedTone}</span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 text-[10px] serif-uppercase tracking-widest border transition-all",
                      selectedTone === tone ? "bg-onyx text-pearl border-onyx" : "border-border hover:border-onyx"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center border border-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:text-gold transition-colors"
                >
                   <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:text-gold transition-colors"
                >
                   <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-onyx text-pearl py-4 serif-uppercase text-xs tracking-widest hover:bg-gold transition-all duration-300"
              >
                Add to Cart
              </button>
              <button className="p-4 border border-border hover:text-gold hover:border-gold transition-all">
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="pt-8">
            <Accordion title="Description">
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.materials}
              <p className="mt-4">
                To maintain the luster of your 18K gold plated pieces, avoid contact with perfumes, 
                lotions, and water. Store in a cool, dry place.
              </p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              {product.shipping}
            </Accordion>
          </div>
        </div>
      </div>

      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="text-center group">
              <Link to={`/product/${p.id}`}>
                <div className="aspect-[3/4] bg-stone-100 mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-stone-200" />
                </div>
                <h3 className="serif-uppercase text-[10px] tracking-widest mb-1 hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-stone text-xs">${p.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
