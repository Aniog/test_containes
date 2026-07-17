import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '../lib/products';
import { useCart } from '../lib/CartContext';
import { toast } from 'sonner';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import ProductGrid from '../components/shop/ProductGrid';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="py-40 text-center font-serif text-2xl">Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, selectedTone, quantity });
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `Materials: ${product.materials}. Care: ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. 30-day returns on all unused items.' },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
        {/* Left: Gallery */}
        <div className="space-y-4">
           <div className="aspect-[3/4] overflow-hidden bg-gray-50 border">
              <img
                data-strk-img-id={`pdp-main-img-${product.id}`}
                data-strk-img={`[pdp-title] jewelry portrait close up studio lighting`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
           </div>
           <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-gray-50 border">
                  <img
                    data-strk-img-id={`pdp-thumb-${i}-${product.id}`}
                    data-strk-img={`[pdp-title] detail view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                     className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-luxury cursor-pointer"
                  />
                </div>
              ))}
           </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div className="space-y-4 border-b pb-8">
            <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif uppercase tracking-jewelry leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4">
              <p className="text-2xl text-gray-800">${product.price.toFixed(2)}</p>
              <div className="flex items-center text-accent space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-2">(12 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Tone Selector */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold">Select Tone: <span className="text-gray-400 ml-2">{selectedTone}</span></span>
              <div className="flex space-x-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest transition-luxury border",
                      selectedTone === tone ? "bg-black text-white border-black" : "bg-white text-black border-gray-200 hover:border-black"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-widest font-bold">Quantity</span>
               <div className="flex items-center space-x-6 border w-fit px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-accent"><Minus size={16} /></button>
                  <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-accent"><Plus size={16} /></button>
               </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-[#1A1A1A] text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-neutral-800 transition-luxury"
            >
              Add to Cart
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-xs uppercase tracking-widest font-bold transition-luxury group-hover:text-accent">{acc.title}</span>
                  {activeAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeAccordion === acc.id ? "max-h-96 pb-6" : "max-h-0"
                )}>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {acc.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-gray-50/50 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 italic">Complete the Look</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
