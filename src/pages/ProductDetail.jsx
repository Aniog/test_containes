import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/lib/store';
import { toast } from 'sonner';
import { ChevronDown, Star, RefreshCw, Truck, ShieldCheck, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    // Re-scan images when product or selected image changes
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const handleAddToCart = () => {
    // Add logic for quantity loop
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    toast.success(`${product.name} Added to Bag`);
    setQuantity(1);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-none w-20 md:w-24 aspect-[3/4] bg-secondary border transition-all duration-500 ${selectedImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <img 
                  data-strk-img-id={`thumb-${product.id}-${idx}`}
                  data-strk-img={`[thumb-label-${product.id}-${idx}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
                <span id={`thumb-label-${product.id}-${idx}`} className="hidden">{img}</span>
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-secondary overflow-hidden group relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                data-strk-img-id={`main-img-${product.id}-${selectedImage}`}
                data-strk-img={`[main-img-label-${product.id}-${selectedImage}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </AnimatePresence>
            <span id={`main-img-label-${product.id}-${selectedImage}`} className="hidden">{product.images[selectedImage]}</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <nav className="mb-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex flex-wrap items-center">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2 opacity-30">/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">{product.category}</Link>
            <span className="mx-2 opacity-30">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <h1 id={`pdp-title-${product.id}`} className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <p className="font-sans text-2xl font-light">${product.price}</p>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5 translate-y-0.5">
              <Star className="w-3.5 h-3.5 fill-black" />
              <span className="text-[10px] uppercase tracking-widest font-sans font-medium">{product.rating} / 5</span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest ml-1">(12 Reviews)</span>
            </div>
          </div>

          <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10 max-w-md font-light">
            {product.description}
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">Finish</span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-10 py-3 text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 ${variant === v ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'border-border hover:border-muted-foreground hover:bg-secondary/50'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-4">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 text-sm font-sans w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-5 text-[11px] uppercase tracking-[0.3em] font-sans hover:bg-primary/90 transition-luxury shadow-xl active:scale-[0.98]"
            >
              Add to Bag
            </button>
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
              Free Shipping over $100 · Easy Returns
            </p>
          </div>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { id: 'description', title: 'Details & Story', content: product.description },
              { id: 'materials', title: 'Materials & Care', content: `Material: ${product.materials}. Care instructions: ${product.care}` },
              { id: 'shipping', title: 'Shipping & Returns', content: "Complimentary worldwide shipping on orders over $100. 30-day returns on all unused items. Each piece arrives in our signature eco-friendly gift box." }
            ].map((acc) => (
              <div key={acc.id} className="border-b border-border">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-sans group transition-all"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{acc.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 ease-in-out ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === acc.id ? 'auto' : 0, opacity: openAccordion === acc.id ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-sm text-muted-foreground leading-relaxed font-sans font-light">
                    {acc.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { icon: RefreshCw, label: "Recycled Metals" },
              { icon: Truck, label: "Global Delivery" },
              { icon: ShieldCheck, label: "Hypoallergenic" }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-sm border border-transparent hover:border-border transition-colors">
                <v.icon className="w-5 h-5 mb-3 stroke-[1px] text-muted-foreground" />
                <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-sans">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Row */}
      <section className="mt-40 px-6 md:px-12">
        <div className="flex items-center justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-serif text-3xl italic">Complements Your Style</h2>
          <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Shop All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>

  );
};

export default ProductDetail;
