import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus, Heart, Share2, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedFinish, setSelectedFinish] = useState('gold');

  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to bag`);
  };

  const AccordionItem = ({ title, content, id }) => {
    const [isOpen, setIsOpen] = useState(id === 'description');
    return (
      <div className="border-b border-border py-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between brand-title text-[10px] uppercase tracking-widest text-left"
        >
          {title}
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
        {isOpen && (
          <div className="mt-4 text-sm font-light leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="pt-24 min-h-screen pb-24" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-secondary overflow-hidden">
            <img
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-name] [pdp-desc] close up detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-secondary overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  data-strk-img={`[pdp-name] detail angle ${i}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt={`${product.name} detail ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-accent">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent" />
                ))}
              </div>
              <span className="text-[10px] brand-title uppercase tracking-widest text-muted-foreground">4.9 (42 Reviews)</span>
            </div>
            <h1 id="pdp-name" className="brand-title text-3xl md:text-4xl tracking-[0.2em]">{product.name}</h1>
            <p className="text-xl font-light">${product.price.toFixed(2)}</p>
            <p id="pdp-desc" className="text-muted-foreground font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="brand-title text-[10px] uppercase tracking-widest">Finish</h3>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((finish) => (
                <button
                  key={finish}
                  onClick={() => setSelectedFinish(finish.toLowerCase())}
                  className={cn(
                    "px-6 py-2 border text-xs brand-title uppercase tracking-widest transition-all",
                    selectedFinish === finish.toLowerCase() 
                      ? "border-primary bg-primary text-primary-foreground" 
                      : "border-border hover:border-primary"
                  )}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-12">
              <div className="flex items-center border border-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-light">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="text-muted-foreground hover:text-accent transition-colors flex items-center space-x-2 brand-title text-[10px] uppercase tracking-widest">
                <Heart className="w-4 h-4" />
                <span>Add to wishlist</span>
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-5 brand-title text-sm tracking-[0.2em] hover:bg-opacity-90 transition-all active:scale-[0.98]"
            >
              ADD TO BAG
            </button>
          </div>

          {/* UI Accordions */}
          <div className="pt-8 border-t border-border">
            <AccordionItem 
              id="description"
              title="Description" 
              content="Every piece of Velmora jewelry is hand-crafted with meticulous attention to detail. This design features high-quality 18K gold plating over recycled sterling silver, ensuring a luxurious finish that lasts. Perfect for sensitive skin and everyday wear." 
            />
            <AccordionItem 
              id="materials"
              title="Materials & Care" 
              content="Materials: 18K Gold Plated Sterling Silver, Cubic Zirconia. To maintain the shine of your demi-fine jewelry, avoid contact with perfumes, lotions, and water. Store in your Velmora pouch when not in use." 
            />
            <AccordionItem 
              id="shipping"
              title="Shipping & Returns" 
              content="Free worldwide shipping on all orders over $75. We offer 30-day hassle-free returns on all domestic orders. Jewelry must be unworn and in original packaging." 
            />
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-3 gap-4 pt-4">
             <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-5 h-5 text-muted-foreground stroke-[1px]" />
                <span className="brand-title text-[8px] uppercase tracking-widest text-muted-foreground">Fast Shipping</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-2">
                <RefreshCw className="w-5 h-5 text-muted-foreground stroke-[1px]" />
                <span className="brand-title text-[8px] uppercase tracking-widest text-muted-foreground">Easy Returns</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="w-5 h-5 text-muted-foreground stroke-[1px]" />
                <span className="brand-title text-[8px] uppercase tracking-widest text-muted-foreground">2 Year Warranty</span>
             </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="brand-title text-xl tracking-[0.2em] mb-12 border-b border-border pb-6">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col space-y-4">
                    <div className="aspect-[3/4] bg-secondary overflow-hidden">
                        <img
                             data-strk-img-id={`related-${p.id}`}
                             data-strk-img={`[related-name-${p.id}]`}
                             data-strk-img-ratio="3x4"
                             data-strk-img-width="400"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                             alt={p.name}
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-center">
                        <h3 id={`related-name-${p.id}`} className="brand-title text-[10px] uppercase tracking-widest">{p.name}</h3>
                        <p className="text-xs font-light text-muted-foreground mt-1">${p.price.toFixed(2)}</p>
                    </div>
                </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
