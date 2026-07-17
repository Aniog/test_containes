import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEED_PRODUCTS } from '@/lib/seed-data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { Star, ChevronDown, ChevronRight, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-widest group-hover:text-accent transition-colors">{title}</span>
        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm text-muted-foreground leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = SEED_PRODUCTS.find(p => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [finish, setFinish] = useState('gold');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return (
    <div className="pt-48 pb-48 text-center italic">
      <p>Product not found.</p>
      <Link to="/shop" className="underline mt-4 block">Back to Shop</Link>
    </div>
  );

  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 sm:pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-12 overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-accent transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "flex-none w-20 aspect-[3/4] bg-secondary border-b-2 transition-luxury",
                  activeImg === i ? "border-accent" : "border-transparent"
                )}
              >
                <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-grow aspect-[3/4] bg-secondary overflow-hidden">
            <img 
              src={product.images[activeImg]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-luxury hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-2/5 space-y-10">
          <div className="space-y-4">
            <p className="text-xs text-accent uppercase tracking-widest font-medium">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-[0.1em]">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest ml-1">(24 Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-loose italic">
            {product.description}
          </p>

          <div className="hairline" />

          {/* Variant Selector */}
          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Select Finish</label>
             <div className="flex gap-4">
               {['gold', 'silver'].map(v => (
                 <button
                   key={v}
                   onClick={() => setFinish(v)}
                   className={cn(
                     "px-8 py-3 text-[10px] uppercase tracking-widest border transition-luxury",
                     finish === v ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-accent"
                   )}
                 >
                   {v === 'gold' ? '18K Gold Plated' : 'Sterling Silver'}
                 </button>
               ))}
             </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-border px-4 py-3 sm:py-0 h-14 bg-white">
                <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:text-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly 
                  className="w-12 text-center text-xs tracking-widest outline-none bg-transparent"
                />
                <button 
                   onClick={() => setQuantity(quantity + 1)}
                   className="p-2 hover:text-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => addToCart({ ...product, price: product.price, quantity })}
                className="flex-grow bg-accent text-white py-4 h-14 text-xs uppercase tracking-widest hover:bg-black transition-luxury"
              >
                Add to Cart
              </button>
            </div>
            
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              Complimentary luxury gift wrapping included
            </p>
          </div>

          {/* Accordions */}
          <div className="border-b border-border">
            <AccordionItem 
              title="Materials & Care" 
              content={product.materials + ". " + product.care} 
            />
            <AccordionItem 
              title="Shipping & Returns" 
              content={product.shipping} 
            />
            <AccordionItem 
              title="Gift Message" 
              content="All Velmora orders arrive in our signature cream heirloom box. You can add a personalized gift message at the final stage of checkout." 
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
          <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <div key={p.id} className="group space-y-4">
                <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] bg-secondary overflow-hidden">
                   <img 
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                   />
                </Link>
                <div className="text-center">
                    <Link to={`/product/${p.id}`}>
                        <h3 id={`related-name-${p.id}`} className="text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
                            {p.name}
                        </h3>
                    </Link>
                    <p className="text-xs font-light mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default ProductDetail;
