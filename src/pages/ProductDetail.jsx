import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', description: 'A delicate 18k gold vermeil ear cuff featuring a solitary cubic zirconia crystal. Designed to sit comfortably on the conch without piercing.', material: 'gold', image: 'https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?auto=format&fit=crop&q=80&w=800&h=1000', hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=1000', gallery: ['https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?auto=format&fit=crop&q=80&w=800&h=1000', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=1000', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=1000'] },
  // Adding just one full product for demo
];

const ProductDetail = () => {
  const { id } = useParams();
  // In a real app we'd fetch based on ID, using product 1 as fallback
  const product = products.find(p => p.id === id) || products[0];
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImage]);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div ref={containerRef} className="pt-8 pb-24 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4 h-[60vh] md:h-[80vh]">
          {/* Thumbnails (desktop left, mobile bottom) */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto w-full md:w-24 hide-scrollbar">
            {product.gallery.map((img, idx) => (
              <button 
                key={idx} 
                className={`flex-shrink-0 w-20 md:w-24 aspect-[3/4] overflow-hidden border-2 ${activeImage === idx ? 'border-primary' : 'border-transparent'} transition-colors`}
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  data-strk-img-id={`gallery-thumb-${idx}`}
                  data-strk-img={`[product-title] detail ${idx + 1}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-grow bg-muted order-1 md:order-2 h-full relative">
            <img 
              key={activeImage}
              data-strk-img-id={`gallery-main-${activeImage}`}
              data-strk-img={`[product-title] detail ${activeImage + 1}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 flex flex-col pt-4">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-primary">
               {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               <span className="text-sm text-muted-foreground ml-2">(12 Reviews)</span>
            </div>
            <h1 id="product-title" className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-tight">{product.name}</h1>
            <p className="text-2xl">${product.price}</p>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest font-medium mb-4">Select Finish</h3>
            <div className="flex gap-4">
              <button 
                className={`py-3 px-6 border text-sm font-medium tracking-widest uppercase transition-colors ${variant === 'gold' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                onClick={() => setVariant('gold')}
              >
                18k Gold
              </button>
              <button 
                className={`py-3 px-6 border text-sm font-medium tracking-widest uppercase transition-colors ${variant === 'silver' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                onClick={() => setVariant('silver')}
              >
                Silver
              </button>
            </div>
          </div>

          {/* Add to Cart logic */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-border">
              <button 
                className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={18} />
              </button>
              <span className="px-4 min-w-[3ch] text-center font-medium">{quantity}</span>
              <button 
                className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={18} />
              </button>
            </div>
            <button className="flex-grow bg-primary text-primary-foreground uppercase tracking-widest text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { id: 'description', title: 'Description', content: product.description },
              { id: 'materials', title: 'Materials & Care', content: 'Crafted from 925 sterling silver and thickly plated with 2.5 microns of 18k solid gold. To protect the plating, remove before swimming or showering. Clean gently with a soft cloth.' },
              { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. We accept returns within 30 days of purchase for unworn items in original packaging.' }
            ].map((section) => (
              <div key={section.id} className="border-b border-border">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors uppercase tracking-widest text-sm font-medium"
                  onClick={() => toggleAccordion(section.id)}
                >
                  {section.title}
                  {openAccordion === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openAccordion === section.id ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32">
         <h2 id="related-title" className="font-serif text-3xl mb-8 text-center md:text-left">You May Also Like</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer flex flex-col">
                <Link to="/shop" className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 block">
                  <img 
                    data-strk-img-id={`related-img-${i}`}
                    data-strk-img={`[related-item-title-${i}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                    alt="Related Product"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <h3 id={`related-item-title-${i}`} className="font-serif font-medium tracking-wider text-sm md:text-base leading-snug">ELEGANT PIECE {i}</h3>
                <p className="text-muted-foreground mt-1">${(30 + i * 12).toFixed(2)}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;