import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Share2, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import ProductCard from '@/components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold hover:text-velmora-gold transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pb-8 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  // Trigger image reload when products or id change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`${product.name} added to cart`);
    setIsCartOpen(true);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left: Gallery */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar">
              {[0, 1, 2].map((i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-cream border transition-all duration-300 flex-shrink-0 overflow-hidden",
                    activeImg === i ? "border-charcoal shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img 
                    data-strk-img-id={`prod-thumb-${id}-${i}`}
                    data-strk-img={`[pd-title] jewelry view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 aspect-[3/4] bg-cream relative group overflow-hidden">
               <img 
                data-strk-img-id={`prod-main-${id}`}
                data-strk-img={`[pd-title] [pd-desc] luxury jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
               <div className="absolute top-6 right-6 flex flex-col gap-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  <button className="bg-white/80 p-3 rounded-full hover:bg-velmora-gold hover:text-white shadow-sm transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white/80 p-3 rounded-full hover:bg-velmora-gold hover:text-white shadow-sm transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col lg:py-4">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">{product.category}</span>
              <h1 id="pd-title" className="text-3xl md:text-5xl font-serif uppercase tracking-widest leading-tight mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-medium tracking-wider">${product.price}.00</span>
                <div className="flex items-center gap-1 border-l border-border pl-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />)}
                  <span className="text-[10px] text-muted-foreground ml-1 uppercase tracking-widest">(12 Reviews)</span>
                </div>
              </div>
              <p id="pd-desc" className="text-muted-foreground leading-relaxed font-light mb-8">
                {product.description} A timeless piece designed to elevate your everyday. Hand-finished with meticulous attention to detail.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold block">Finish</span>
                <div className="flex gap-4">
                  {['Gold', 'Silver'].map((v) => (
                    <button 
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all duration-300",
                        variant === v ? "bg-charcoal text-white border-charcoal" : "border-border text-muted-foreground hover:border-charcoal hover:text-charcoal"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold block">Quantity</span>
                <div className="flex items-center border border-border w-max">
                   <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-cream transition-colors"
                   >
                     <Minus className="w-4 h-4" />
                   </button>
                   <span className="px-8 font-medium">{quantity}</span>
                   <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-cream transition-colors"
                   >
                     <Plus className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full py-5 bg-charcoal text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-velmora-gold transition-all duration-500 shadow-xl mb-12"
            >
              Add to Bag
            </button>

            <div className="space-y-2">
              <Accordion title="Details & Description">
                Crafted from high-quality recycled metals, our {product.name} embodies the essence of quiet luxury. 
                Whether worn alone or layered, it brings a sophisticated touch to any ensemble. 
                Designed for durability and timeless appeal.
              </Accordion>
              <Accordion title="Materials & Care">
                Our pieces are crafted in 18K Gold Plated Vermeil or Sterling Silver. 
                To maintain the luster, we recommend storing in the provided pouch and avoiding direct contact with water, perfumes, and lotions.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Complimentary worldwide shipping on all orders. Returns and exchanges are accepted within 30 days of delivery. 
                Pieces must be in original, unworn condition.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex justify-between items-baseline mb-12">
             <h2 className="text-2xl md:text-4xl font-serif">Complete the Look</h2>
             <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-charcoal pb-1">Shop All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
