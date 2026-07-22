import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/products';
import { useCart } from '@/lib/CartContext';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-neutral-100">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{title}</span>
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-neutral-500 text-sm leading-relaxed">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.imgId);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [selectedTone, setSelectedTone] = useState('Gold');
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imgId);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, selectedImage]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif mb-6">Product not found</h2>
        <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-black pb-1">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24 shrink-0">
               {[product.imgId, product.img2Id].map((img, i) => (
                 <button 
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "aspect-square w-20 md:w-full bg-neutral-100 flex-shrink-0 border transition-all",
                    selectedImage === img ? "border-black" : "border-transparent"
                  )}
                 >
                   <img 
                    data-strk-img-id={`thumb-${product.id}-${i}`}
                    data-strk-img={`${product.name} jewelry detail close-up ${i+1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i}`}
                   />
                 </button>
               ))}
            </div>
            <div className="flex-grow aspect-square bg-neutral-100 overflow-hidden relative">
               <motion.img 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                data-strk-img-id={`main-${product.id}-${selectedImage}`}
                data-strk-img={`${product.name} jewelry professional photography ${selectedTone} tone`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
               />
               <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                 {product.category}
               </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <h1 className="text-3xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-widest-plus mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-8">
              <span className="text-2xl font-light text-brand-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                ))}
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 ml-2">(24 Reviews)</span>
              </div>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-10 text-sm italic">
               "{product.description}"
            </p>

            {/* Tone Selector */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Metal Tone</p>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-all border",
                      selectedTone === tone ? "border-brand-charcoal bg-brand-charcoal text-white" : "border-neutral-200 text-neutral-400 hover:border-brand-charcoal"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-between border-y border-neutral-100 py-6">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Quantity</p>
                <div className="flex items-center gap-6 border border-neutral-200 px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-brand-gold transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-brand-gold transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-brand-charcoal text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-neutral-800 transition-colors"
              >
                Add to Cart — ${"$"}{product.price * quantity}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-auto">
              <Accordion 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                Our {product.name} is a testament to quiet luxury. Expertly crafted for the modern woman, 
                this piece features {product.material} over recycled brass. 
                Designed in our London studio with a focus on sculptural forms and timeless appeal.
              </Accordion>
              
              <Accordion 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <ul className="space-y-2 list-disc pl-4">
                  <li>Base Metal: Recycled Brass</li>
                  <li>Plating: 18K Yellow Gold</li>
                  <li>Hypoallergenic & Nickel-free</li>
                  <li>Avoid chemicals, water, and direct sunlight</li>
                  <li>Store in the provided Velmora pouch</li>
                </ul>
              </Accordion>

              <Accordion 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                Complimentary standard shipping on all orders. 
                Returns are accepted within 30 days of delivery. 
                Pieces must be in original, unworn condition with all packaging intact.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-20 border-t border-neutral-100">
            <SectionHeader title="You May Also Like" subtitle="Complete the Look" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
