import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const containerRef = useRef(null);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeTab, setActiveTab] = useState('description');
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    let cleanup = () => {};
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {});
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, [id]);

  if (!product) return <div className="pt-32 pb-24 text-center">Product not found.</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 lg:pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
         {/* Breadcrumbs */}
         <nav className="flex text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
         </nav>

         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
            {/* Gallery */}
            <div className="lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
               {/* Thumbnails */}
               <div className="flex md:flex-col gap-4 md:w-20 overflow-x-auto md:overflow-visible">
                 {[1, 2, 3, 4].map(idx => (
                    <div key={idx} className="w-20 aspect-[3/4] bg-muted shrink-0 cursor-pointer border border-transparent hover:border-border relative">
                       <img 
                          data-strk-img-id={`thumb-${product.imgId}-${idx}`}
                          data-strk-img={`[pdp-title-${product.id}] jewelry angle ${idx} warm`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt="Thumbnail"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                 ))}
               </div>
               
               {/* Main image */}
               <div className="flex-1 aspect-[3/4] bg-muted relative overflow-hidden">
                  <img 
                      data-strk-img-id={`main-${product.imgId}`}
                      data-strk-img={`[pdp-title-${product.id}] jewelry editorial main`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                  />
               </div>
            </div>

            {/* Details */}
            <div className="lg:w-1/2 flex flex-col pt-4">
               <h1 id={`pdp-title-${product.id}`} className="text-3xl lg:text-4xl tracking-widest uppercase mb-4">{product.name}</h1>
               <div className="font-serif text-2xl mb-4">${product.price}</div>
               
               <div className="flex items-center gap-2 mb-8 text-primary">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs tracking-widest text-muted-foreground ml-2 uppercase">(128 Reviews)</span>
               </div>

               <p className="font-sans font-light text-foreground/80 leading-relaxed mb-10">
                 {product.description}
               </p>

               <div className="mb-8">
                 <div className="text-xs uppercase tracking-widest mb-3">Metal</div>
                 <div className="flex gap-3">
                   <button 
                     onClick={() => setVariant('gold')}
                     className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${variant === 'gold' ? 'border-primary p-1' : 'border-transparent'}`}
                   >
                     <div className="w-full h-full bg-[#E5C158] rounded-full shadow-inner" />
                   </button>
                   <button 
                     onClick={() => setVariant('silver')}
                     className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${variant === 'silver' ? 'border-primary p-1' : 'border-transparent'}`}
                   >
                     <div className="w-full h-full bg-[#E0E0E0] rounded-full shadow-inner" />
                   </button>
                 </div>
               </div>

               <div className="flex gap-4 mb-10">
                 <div className="flex items-center border border-border px-4 max-w-[120px]">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 -ml-2 text-muted-foreground hover:text-foreground">
                      <Minus size={16} />
                    </button>
                    <span className="flex-1 text-center font-sans">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 -mr-2 text-muted-foreground hover:text-foreground">
                      <Plus size={16} />
                    </button>
                 </div>
                 <button 
                   onClick={() => addItem({ product, variant, quantity })}
                   className="flex-1 bg-foreground text-background py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-foreground/90 transition-colors"
                 >
                   Add to Cart — ${(product.price * quantity).toFixed(2)}
                 </button>
               </div>

               <div className="border-t border-border pt-8 mt-auto">
                 <div className="divide-y divide-border">
                   {[
                     { id: 'description', title: 'Details', content: 'Our pieces are handcrafted in small batches. Each piece features a thick vermeil of 18K solid gold on sterling silver.' },
                     { id: 'materials', title: 'Materials & Care', content: 'Avoid contact with water, perfume, and harsh chemicals. Store in a cool, dry place.' },
                     { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping. We accept returns within 30 days of purchase in unworn condition.' },
                   ].map(accordion => (
                     <div key={accordion.id} className="py-4">
                       <button 
                         className="flex justify-between items-center w-full uppercase tracking-widest text-xs py-2 hover:text-primary transition-colors"
                         onClick={() => setActiveTab(activeTab === accordion.id ? '' : accordion.id)}
                       >
                         {accordion.title}
                         <ChevronDown size={16} className={`transition-transform duration-300 ${activeTab === accordion.id ? 'rotate-180' : ''}`} />
                       </button>
                       <div className={`overflow-hidden transition-all duration-300 ${activeTab === accordion.id ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                         <p className="font-sans text-muted-foreground text-sm font-light leading-relaxed">{accordion.content}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

            </div>
         </div>

         {/* Related Products */}
         <div className="border-t border-border pt-24">
            <h2 className="text-3xl tracking-wide text-center mb-16">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(p => (
                <div key={p.id} className="group flex flex-col">
                  <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <img 
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[related-title-${p.id}] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`related-hover-${p.imgIdHover}`}
                      data-strk-img={`model wearing [related-title-${p.id}] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${p.name} worn`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  </Link>
                  <Link to={`/product/${p.id}`} className="flex flex-col flex-1 items-center text-center">
                    <h3 id={`related-title-${p.id}`} className="text-xs tracking-[0.15em] uppercase mb-2">{p.name}</h3>
                    <span className="font-serif italic text-muted-foreground text-sm mb-2">{p.material}</span>
                    <span className="font-serif">${p.price}</span>
                  </Link>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}
