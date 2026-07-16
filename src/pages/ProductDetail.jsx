import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import productsData from '@/data/products.json';
import ProductCard from '@/components/common/ProductCard';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group"
      >
        <span className="uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-[#C5A059] transition-colors">{title}</span>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="text-gray-500 text-sm leading-relaxed font-serif italic">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(product?.variants[0] || 'Gold');
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return <div className="pt-32 text-center h-screen">Product not found</div>;
  }

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-32">
          {/* Left: Image Gallery */}
          <div className="lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative aspect-[2/3] md:w-full flex-shrink-0 border transition-all duration-300",
                    activeImage === idx ? "border-[#C5A059]" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${product.id}-${idx}`}
                    data-strk-img={`[product-title] jewelry detail closeup shot ${idx}`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-grow aspect-[3/4] bg-gray-50 overflow-hidden relative">
              <img
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[product-title] gold jewelry editorial lifestyle shot professional`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
              />
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                 <span className="bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 text-black shadow-sm">
                   Ethically Sourced
                 </span>
                 <span className="bg-[#C5A059] text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 shadow-sm">
                   Bestseller
                 </span>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-[40%] flex flex-col">
            <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link to={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </nav>

            <h1 id="product-title" className="font-serif text-3xl md:text-5xl mb-4 uppercase tracking-[0.1em]">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-8">
               <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
               <div className="flex items-center space-x-2">
                  <div className="flex space-x-0.5 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4.5 ? "#C5A059" : "none"} />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">(24 Reviews)</span>
               </div>
            </div>

            <p className="text-gray-500 font-serif italic mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-10">
               <span className="block text-[10px] uppercase tracking-widest font-bold mb-4">Color: {variant}</span>
               <div className="flex gap-4">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                        variant === v 
                          ? "bg-black text-white border-black" 
                          : "bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black"
                      )}
                    >
                      {v}
                    </button>
                  ))}
               </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col space-y-4 mb-12">
               <div className="flex items-center border border-gray-100 w-fit px-4 py-3 space-x-6">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-[#C5A059]"><Minus size={16} /></button>
                  <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-[#C5A059]"><Plus size={16} /></button>
               </div>
               <button 
                 onClick={handleAddToCart}
                 className="w-full bg-[#1A1A1A] text-white py-5 px-8 uppercase tracking-[0.25em] text-xs font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl shadow-black/5"
               >
                 Add to Bag
               </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-100">
              <Accordion title="Description">
                 Each piece is designed with longevity in mind. Our demi-fine collection is crafted from 18K gold plated brass, ensuring a premium feel and lasting shine.
              </Accordion>
              <Accordion title="Materials & Care">
                 {product.materials}. {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                 Complimentary worldwide shipping on all orders over $75. 30-day hassle-free returns.
              </Accordion>
            </div>

            {/* Trust Mini-bar */}
            <div className="mt-12 bg-[#FBFBF9] p-6 grid grid-cols-3 gap-4 border border-gray-100">
               <div className="flex flex-col items-center text-center space-y-2">
                  <Truck size={16} className="text-[#C5A059]" />
                  <span className="text-[8px] uppercase tracking-widest font-bold">Free Global <br />Shipping</span>
               </div>
               <div className="flex flex-col items-center text-center space-y-2">
                  <RefreshCcw size={16} className="text-[#C5A059]" />
                  <span className="text-[8px] uppercase tracking-widest font-bold">30-Day Easy <br />Returns</span>
               </div>
               <div className="flex flex-col items-center text-center space-y-2">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <span className="text-[8px] uppercase tracking-widest font-bold">Gold-Plated <br />Tarnish-Free</span>
               </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-gray-100">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Complete the Set</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
