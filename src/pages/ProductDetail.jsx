import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { PRODUCTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ProductCard';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-velmora-gold transition-colors">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-6" : "max-h-0")}>
        <div className="text-sm text-velmora-muted leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, selectedImage]);

  if (!product) return <div>Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-velmora-cream">
      <div className="flex flex-col lg:flex-row gap-16 mb-32">
        {/* Image Gallery */}
        <div className="lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-[600px] scrollbar-hide">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={cn(
                  "w-20 h-24 flex-shrink-0 bg-velmora-beige border transition-all duration-300",
                  selectedImage === idx ? "border-velmora-dark" : "border-transparent"
                )}
              >
                <img
                  data-strk-img-id={`gallery-thumb-${product.id}-${idx}`}
                  data-strk-img={`[product-name] jewelry detail ${idx}`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-velmora-beige overflow-hidden">
            <img
              data-strk-img-id={`gallery-main-${product.id}`}
              data-strk-img={`[product-name] jewelry luxury model close-up ${selectedImage}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover transition-smooth duration-700"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-2/5">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4 block font-semibold">{product.category}</span>
            <h1 id="product-name" className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-xl mb-4 leading-tight">{product.name}</h1>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
               <div className="flex gap-1 text-velmora-gold">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
               </div>
               <span className="text-[10px] uppercase tracking-widest opacity-60">(12 Reviews)</span>
            </div>
            <p className="text-xl md:text-2xl font-serif italic mb-8">${product.price}</p>
            <p className="text-sm text-velmora-muted leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
              {product.description}
            </p>
          </div>

          <div className="space-y-10 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">Select Tone: <span className="text-velmora-muted font-normal ml-2">{selectedTone}</span></span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-2 text-[10px] uppercase tracking-widest border rounded-full transition-all duration-300",
                      selectedTone === tone ? "bg-velmora-dark text-white border-velmora-dark" : "bg-white text-velmora-dark border-velmora-border hover:border-velmora-dark"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-6">
              <div className="flex-1">
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">Quantity</span>
                 <div className="flex items-center justify-between border border-velmora-border px-4 py-4 bg-white">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1 hover:text-velmora-gold transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-1 hover:text-velmora-gold transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                 </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-velmora-dark text-white py-5 text-xs uppercase tracking-widest font-bold hover:bg-velmora-gold transition-all duration-500 transform hover:-translate-y-1"
            >
              Add to Bag
            </button>
          </div>

          <div className="space-y-2">
            <Accordion title="Description">
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.details}. Always handle with care. To keep your jewelry looking its best, avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft, lint-free cloth.
            </Accordion>
            <Accordion title="Shipping & Returns">
              We offer free standard worldwide shipping on all orders. Returns are accepted within 30 days of purchase. Pieces must be in original condition with all packaging included.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-24 border-t border-velmora-border">
         <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 italic">You May Also Like</h2>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
         </div>
      </section>
    </div>
  );
};

export default ProductDetail;
