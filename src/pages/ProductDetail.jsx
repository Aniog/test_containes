import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus, HelpCircle, Truck, RefreshCw } from 'lucide-react';
import { products } from '@/api/products';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [selectedTone, setSelectedTone] = useState('Gold');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.ImageHelper) {
      window.ImageHelper.loadImages({}, containerRef.current);
    }
  }, [id]);

  if (!product) return <div className="pt-32 text-center font-serif text-2xl">Product not found.</div>;

  const handleAddToCart = () => {
    toast.success(`${product.name} added to your collection`);
  };

  const tones = ['Gold', 'Silver'];
  
  const accordions = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: `Crafted in ${product.materials}. To maintain its luster, avoid contact with perfumes, lotions, and water. Store in a cool, dry place.` 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free standard shipping on all orders. Returns are accepted within 30 days of delivery for a full refund or exchange.' 
    }
  ];

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar">
              {[...Array(4)].map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 md:w-24 aspect-[3/4] bg-muted overflow-hidden border transition-all ${selectedImage === idx ? 'border-accent' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${id}-${idx}`}
                    data-strk-img={`[pdp-name] jewelry piece close-up view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                    alt={`Thumbnail ${idx}`}
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-grow aspect-[3/4] bg-muted overflow-hidden">
                <img
                    data-strk-img-id={`pdp-main-${id}`}
                    data-strk-img="[pdp-name] jewelry piece main showpiece view"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                    alt={product.name}
                />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.1em]">{product.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-xl md:text-2xl font-serif text-accent">${product.price}</p>
                <div className="flex items-center space-x-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="text-accent" />)}
                   <span className="text-xs text-muted-foreground ml-2">(12 reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light">
               {product.description}
            </p>

            <div className="space-y-4">
               <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Tone: {selectedTone}</h3>
                  <div className="flex space-x-3">
                     {tones.map(tone => (
                        <button
                           key={tone}
                           onClick={() => setSelectedTone(tone)}
                           className={`px-8 py-3 text-xs uppercase tracking-widest font-medium border transition-all ${selectedTone === tone ? 'border-primary bg-primary text-white' : 'border-black/10 hover:border-primary'}`}
                        >
                           {tone}
                        </button>
                     ))}
                  </div>
               </div>
               
               <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Quantity</h3>
                  <div className="inline-flex items-center border border-black/10">
                     <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:text-accent disabled:opacity-30"
                        disabled={quantity === 1}
                     >
                        <Minus size={16} />
                     </button>
                     <span className="w-12 text-center font-medium">{quantity}</span>
                     <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:text-accent"
                     >
                        <Plus size={16} />
                     </button>
                  </div>
               </div>
            </div>

            <button 
               onClick={handleAddToCart}
               className="w-full bg-accent text-white py-5 uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all active:scale-[0.98]"
            >
               Add to Bag
            </button>

            {/* Accordions */}
            <div className="border-t border-black/5 pt-8 space-y-4">
               {accordions.map(acc => (
                  <div key={acc.id} className="border-b border-black/5 pb-4">
                     <button 
                        onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                        className="w-full flex justify-between items-center py-2"
                     >
                        <span className="text-xs uppercase tracking-widest font-bold">{acc.title}</span>
                        {activeAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                     </button>
                     {activeAccordion === acc.id && (
                        <div className="py-4 text-sm text-muted-foreground leading-relaxed font-light">
                           {acc.content}
                        </div>
                     )}
                  </div>
               ))}
            </div>

            {/* Trust Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="flex items-center space-x-3 text-xs text-muted-foreground uppercase tracking-widest">
                  <Truck size={16} className="text-accent" />
                  <span>Free Shipping</span>
               </div>
               <div className="flex items-center space-x-3 text-xs text-muted-foreground uppercase tracking-widest">
                  <RefreshCw size={16} className="text-accent" />
                  <span>30-Day Returns</span>
               </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32">
          <h2 className="text-2xl font-serif mb-12 uppercase tracking-widest text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {relatedProducts.map(p => (
               <ProductCard key={p.id} product={p} />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
