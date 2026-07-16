import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS, CURRENCY } from '@/config';

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-black/5">
    <button
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-semibold"
    >
      <span>{title}</span>
      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-light">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, [product, activeImage]);

  if (!product) return <div className="pt-40 text-center font-serif py-40">Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center space-x-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-2.5 h-2.5" />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-2.5 h-2.5" />
          <span className="text-primary font-medium">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-28">
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto hide-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 md:w-24 aspect-[3/4] bg-muted flex-shrink-0 border transition-all duration-300 ${activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-muted overflow-hidden relative group">
              <img
                data-strk-img-id={`p-detail-main-${product.id}`}
                data-strk-img={`[p-detail-desc] [p-detail-name] closeup luxury`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 id="p-detail-name" className="text-3xl md:text-4xl font-serif tracking-[0.1em] mb-4 uppercase leading-tight font-medium">{product.name}</h1>
              <div className="flex items-center justify-between border-b border-black/5 pb-6">
                <p className="text-2xl font-serif text-accent">{CURRENCY}{product.price}</p>
                <div className="flex items-center space-x-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground ml-2">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p id="p-detail-desc" className="text-muted-foreground font-light leading-relaxed text-sm">
              {product.description}
            </p>

            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Finish: <span className="font-light text-muted-foreground">{variant}</span></span>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-10 py-3 text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 ${variant === v ? 'bg-primary text-white border-primary shadow-sm' : 'border-black/10 hover:border-black/30 text-muted-foreground'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-black/10 rounded-full px-5 py-2.5">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1 hover:opacity-50 transition-opacity"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="p-1 hover:opacity-50 transition-opacity"><Plus className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <button
                onClick={() => addToCart({ ...product, price: product.price })}
                className="w-full bg-primary text-white py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-md"
              >
                Add to Cart
              </button>
            </div>

            <div className="pt-6">
              <Accordion 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                Our {product.name} is a testament to quiet luxury. Carefully crafted with 18K gold plating over recycled brass, this piece is designed for longevity and daily wear. High-polish finish with hand-set crystal highlights.
              </Accordion>
              <Accordion 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Materials: 18K Gold Plated Brass or Sterling Silver. Lead and Nickel free. Hypoallergenic. To maintain the shine, avoid contact with perfumes, lotions, and water. Wipe with a soft cloth after wear.
              </Accordion>
              <Accordion 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                Free worldwide shipping on all orders over $100. Delivered in our signature FSC-certified jewelry box. 30-day returns accepted for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-black/5">
          <h2 className="text-2xl font-serif text-center mb-16 italic">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
