import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/config';
import { useCart } from '@/lib/CartContext';
import { ChevronRight, Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-base-dark">
      <button 
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-sm uppercase tracking-widest">{title}</span>
        {isOpen ? <ChevronUp size={16} strokeWidth={1} /> : <ChevronDown size={16} strokeWidth={1} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-40 pb-4" : "max-h-0"
      )}>
        <p className="font-sans text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
          {content}
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const images = [product.image, product.hoverImage, product.image, product.hoverImage];

  const handleAddToCart = () => {
    addToCart({ ...product, tone }, quantity);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-base-dark flex-shrink-0 border transition-all overflow-hidden",
                    activeImage === idx ? "border-primary" : "border-transparent opacity-60"
                  )}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-base-dark overflow-hidden">
              <img 
                src={images[activeImage]} 
                alt={product.name}
                data-strk-img-id={`pdp-main-${id}`}
                data-strk-img={`[pdp-name] gold jewelry editorial photography`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="font-sans text-xl">${product.price}</p>
              <div className="flex items-center gap-1 border-l border-base-dark pl-4 text-accent">
                <Star size={14} className="fill-accent" />
                <span className="font-sans text-xs text-gray-500 uppercase tracking-widest">4.9 (24 Reviews)</span>
              </div>
            </div>

            <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8 uppercase tracking-wider">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8 mb-10">
              <div>
                <span className="font-serif text-xs uppercase tracking-widest block mb-4">Tone: {tone}</span>
                <div className="flex gap-4">
                  {['Gold', 'Silver'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setTone(t)}
                      className={cn(
                        "px-8 py-3 font-sans text-[10px] uppercase tracking-widest transition-all",
                        tone === t ? "bg-primary text-white" : "border border-base-dark hover:border-primary"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-serif text-xs uppercase tracking-widest block mb-4">Quantity</span>
                <div className="flex items-center border border-base-dark w-fit">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-4 hover:bg-base-dark transition-colors">
                    <Minus size={14} strokeWidth={1} />
                  </button>
                  <span className="w-12 text-center font-sans">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="p-4 hover:bg-base-dark transition-colors">
                    <Plus size={14} strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-5 font-sans text-xs uppercase tracking-[0.3em] hover:bg-opacity-90 transition-all mb-12 shadow-lg"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="space-y-0">
               <Accordion title="Details" content={product.details} />
               <Accordion title="Materials & Care" content="Our 18K Gold Plated pieces are designed to last. To maintain their luster, avoid contact with perfumes and perfumes. Clean with a soft lint-free cloth." />
               <Accordion title="Shipping & Returns" content="Free worldwide shipping on orders over $100. Unworn items can be returned within 30 days of purchase." />
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-32">
          <h2 className="font-serif text-2xl uppercase tracking-widest mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group text-center">
                 <div className="aspect-[3/4] bg-base-dark overflow-hidden mb-4">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                 </div>
                 <h3 className="font-serif text-sm uppercase tracking-widest group-hover:text-accent transition-colors">{p.name}</h3>
                 <p className="font-sans text-xs text-gray-500 mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
