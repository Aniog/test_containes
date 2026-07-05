import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { ChevronDown, ChevronUp, Star, Minus, Plus, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="pt-32 text-center serif italic py-20">Product not found.</div>;
  }

  const images = [product.image, product.hoverImage, product.image, product.hoverImage]; // Mock gallery

  const handleAddToCart = () => {
    addToCart({ ...product, price: product.price }, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row md:space-x-4">
            <div className="order-2 md:order-1 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0 overflow-x-auto hide-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "flex-shrink-0 w-20 h-28 bg-secondary border transition-all",
                    selectedImage === idx ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 aspect-[3/4] bg-zinc-50 overflow-hidden relative">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl text-black mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest font-bold">
                <span className="text-lg font-light text-zinc-900">${product.price}</span>
                <span className="text-muted-foreground">|</span>
                <div className="flex items-center text-yellow-600">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  <span className="ml-2 text-muted-foreground font-normal">(24 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-serif italic text-lg">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Tone: {tone}</p>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      tone === t ? "border-black bg-black text-white" : "border-zinc-200 hover:border-black"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</p>
              <div className="flex items-center space-x-4 border border-zinc-200 w-fit px-2 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:bg-zinc-100"><Minus size={14} /></button>
                <span className="w-8 text-center text-xs">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:bg-zinc-100"><Plus size={14} /></button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all transform active:scale-[0.98]"
              >
                Add to Bag
              </button>
              <button className="border border-zinc-200 p-4 hover:bg-zinc-50 transition-colors">
                <Heart size={20} strokeWidth={1} />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-12 border-t">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold group-hover:opacity-60 transition-opacity">{acc.title}</span>
                    {activeAccordion === i ? <ChevronUp size={16} strokeWidth={1} /> : <ChevronDown size={16} strokeWidth={1} />}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    activeAccordion === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-xs text-muted-foreground leading-relaxed font-serif italic text-lg px-2">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">You May Also Like</h2>
            <div className="w-12 h-px bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
