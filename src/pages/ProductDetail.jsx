import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, Share2, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedFinish, setSelectedFinish] = useState('Gold');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-24 px-6 md:px-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-brand-stone overflow-hidden">
                <img 
                  data-strk-img-id={`pdp-img-${product.id}-${i}`}
                  data-strk-img={`${product.name} jewelry detail view ${i}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} detail ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/5 space-y-8 sticky top-32 h-fit">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest leading-tight">
                  {product.name}
                </h1>
                <button className="p-2 hover:text-brand-gold transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-xl font-medium">${product.price}</span>
                <div className="flex items-center text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="ml-2 text-[10px] text-black/40 uppercase tracking-widest">(12 Reviews)</span>
                </div>
              </div>
              
              <p className="text-sm font-light text-black/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <span className="text-xs uppercase tracking-widest font-bold">Finish: {selectedFinish}</span>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(finish => (
                  <button 
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      selectedFinish === finish ? "bg-brand-dark text-white border-brand-dark" : "border-black/10 hover:border-black"
                    )}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex space-x-4">
                <div className="flex items-center border px-4 py-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1"><Minus size={16} /></button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1"><Plus size={16} /></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-brand-dark text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-all duration-500 shadow-lg"
                >
                  Add to Bag
                </button>
              </div>
            </div>

            <div className="space-y-0 pt-8">
              {[
                { id: 'description', title: 'Details & Materials', content: product.materials },
                { id: 'care', title: 'Care Guide', content: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place." },
                { id: 'shipping', title: 'Shipping & Returns', content: "Free shipping on all orders over $75. 30-day effortless returns." }
              ].map((item) => (
                <div key={item.id} className="border-b">
                  <button 
                    onClick={() => setActiveTab(activeTab === item.id ? '' : item.id)}
                    className="w-full flex justify-between items-center py-5 group"
                  >
                    <span className="text-xs uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors">{item.title}</span>
                    <ChevronDown size={16} className={cn("transition-transform duration-300", activeTab === item.id ? "rotate-180" : "")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeTab === item.id ? "max-h-40 pb-5" : "max-h-0"
                  )}>
                    <p className="text-xs font-light text-black/60 leading-relaxed uppercase tracking-wider">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center pt-4">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                <Share2 size={14} />
                <span>Share this piece</span>
              </button>
            </div>
          </div>
        </div>

        <section className="mt-40 border-t pt-24">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">Complete the Look</span>
            <h2 className="text-4xl font-serif italic text-brand-dark">You may also like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
