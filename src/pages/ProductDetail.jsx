import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star, ChevronRight, ChevronDown, Heart, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState(product?.tone[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: "18K Gold plated over high-grade surgical steel. Hypoallergenic and nickel-free. Avoid contact with water, perfumes, and lotions to maintain it's brilliance." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Free worldwide shipping on all orders. Returns accepted within 30 days of delivery for unworn items in original packaging." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest-extra opacity-40 mb-12">
        <Link to="/" className="hover:opacity-100">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:opacity-100">Shop</Link>
        <ChevronRight size={10} />
        <span className="opacity-100 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Gallery */}
        <div className="lg:col-span-1 hidden lg:flex flex-col space-y-4">
          {product.images.map((img, i) => (
            <button 
              key={i}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "aspect-[3/4] border-2 transition-all overflow-hidden",
                selectedImage === i ? "border-[#1A1A1A]" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img 
                data-strk-img-id={`thumb-${product.id}-${i}`}
                data-strk-img={`[pd-title] jewelry detail shot ${i}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
                alt=""
              />
            </button>
          ))}
        </div>

        <div className="lg:col-span-6 bg-muted relative aspect-[3/4] overflow-hidden">
          <img 
            data-strk-img-id={`main-${product.id}`}
            data-strk-img={`[pd-title] jewelry editorial shot product image`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className="w-full h-full object-cover"
            alt={product.name}
          />
        </div>

        {/* Info */}
        <div className="lg:col-span-5 max-w-lg">
          <div className="mb-10 text-center lg:text-left">
             <span className="text-xs uppercase tracking-widest-extra text-accent mb-4 block font-semibold">{product.category}</span>
             <h1 id="pd-title" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-4 font-light">{product.name}</h1>
             <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <p className="text-2xl font-light">${product.price}</p>
                <div className="w-[1px] h-4 bg-border" />
                <div className="flex items-center gap-2">
                   <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                   </div>
                   <span className="text-[10px] uppercase tracking-widest opacity-50 font-medium">({product.reviews} Reviews)</span>
                </div>
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8 max-w-md">
                {product.description}
             </p>
          </div>

          <div className="space-y-10">
            {/* Tone Selector */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest-extra mb-4 font-bold opacity-60">Finish: {selectedTone}</h4>
              <div className="flex space-x-3">
                {product.tone.map(tone => (
                  <button 
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest font-semibold border transition-all",
                      selectedTone === tone ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-transparent text-[#1A1A1A] border-border hover:border-[#1A1A1A]"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col space-y-4">
               <div className="flex items-center border border-border w-fit">
                  <button 
                    className="p-4 hover:bg-muted transition-colors"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    className="p-4 hover:bg-muted transition-colors"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <Plus size={14} />
                  </button>
               </div>
               
               <div className="flex gap-4">
                  <button 
                    className="flex-grow bg-[#1A1A1A] text-white py-5 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-all duration-300 shadow-xl"
                    onClick={() => onAddToCart({ ...product, quantity, selectedTone })}
                  >
                    Add to Cart
                  </button>
                  <button className="px-6 border border-border hover:border-[#1A1A1A] transition-colors">
                    <Heart size={20} />
                  </button>
               </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-12">
               {accordions.map(acc => (
                 <div key={acc.id} className="border-b border-border">
                    <button 
                      className="w-full flex items-center justify-between py-6 text-[10px] uppercase tracking-widest-extra font-bold text-left group"
                      onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    >
                      {acc.title}
                      <ChevronDown size={14} className={cn("transition-transform duration-300", openAccordion === acc.id ? "rotate-180" : "")} />
                    </button>
                    {openAccordion === acc.id && (
                      <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-light">
                        {acc.content}
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32 pt-24 border-t border-border">
         <h2 className="text-3xl font-serif text-center mb-16 uppercase tracking-widest-extra font-light">Complete the Look</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 4).map(item => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                  <img 
                    data-strk-img-id={`rel-${item.id}`}
                    data-strk-img={`jewelry product editorial ${item.category}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={item.name}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-[10px] uppercase tracking-widest font-serif mb-2">{item.name}</h3>
                  <p className="text-xs font-light text-muted-foreground">${item.price}</p>
                </div>
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;
