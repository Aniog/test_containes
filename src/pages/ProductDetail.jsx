import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Truck, RefreshCw, Sparkles, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../api/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-3xl font-serif mb-8">Product not found</h1>
        <Link to="/shop">
          <Button variant="outline">Browse Collection</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-12">
           <Link to="/" className="hover:text-gold transition-colors">Home</Link>
           <ChevronRight className="w-3 h-3" />
           <Link to="/shop" className="hover:text-gold transition-colors">Jewelry</Link>
           <ChevronRight className="w-3 h-3" />
           <span className="text-charcoal/80">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            <div className="order-2 md:order-1 flex md:flex-col gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 md:w-24 aspect-[3/4] overflow-hidden border-b-2 transition-all ${activeImage === idx ? 'border-gold opacity-100' : 'border-transparent opacity-50'}`}
                >
                  <img
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pdp-thumb-${id}-${idx}`}
                    data-strk-img={`[product-title] gold jewelry editorial angle ${idx + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    alt={`${product.name} view ${idx + 1}`}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-taupe/5 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-1000"
                data-strk-img-id={`pdp-main-${id}-${activeImage}`}
                data-strk-img={`[product-title] ${product.category} gold jewelry editorial macro`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={product.name}
              />
              <div className="absolute top-6 left-6 flex space-x-3">
                 <span className="bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-widest px-4 py-2 font-bold shadow-sm">18K Vermeil</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 id="product-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center justify-between mb-8">
               <span className="text-2xl font-light tracking-wider">${product.price}</span>
               <div className="flex items-center space-x-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold border-b border-charcoal/10 pb-0.5 mt-0.5">24 Reviews</span>
               </div>
            </div>

            <p className="text-charcoal/70 font-light leading-relaxed mb-10 tracking-wide">
              {product.description}
            </p>

            <div className="space-y-10 mb-12">
               {/* Variant Selector */}
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 text-gold font-bold">Finish</h4>
                  <div className="flex space-x-4">
                     {['Gold', 'Silver'].map(v => (
                       <button
                         key={v}
                         onClick={() => setVariant(v)}
                         className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] border transition-all ${variant === v ? 'border-charcoal bg-charcoal text-white' : 'border-charcoal/10 text-charcoal/60 hover:border-charcoal/30'}`}
                       >
                         {v}
                       </button>
                     ))}
                  </div>
               </div>

               {/* Quantity */}
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 text-gold font-bold">Quantity</h4>
                  <div className="flex items-center w-32 border border-charcoal/10">
                    <button
                      className="p-3 hover:text-gold transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-grow text-center text-sm font-medium">{quantity}</span>
                    <button
                      className="p-3 hover:text-gold transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
               </div>

               <Button
                 onClick={() => {
                   addToCart(product, quantity, variant);
                   toast.success('Added to bag');
                 }}
                 className="w-full h-16 bg-charcoal text-white rounded-none uppercase tracking-[0.2em] text-sm hover:bg-gold transition-all shadow-lg active:scale-[0.98]"
               >
                 Add to Bag
               </Button>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-charcoal/10">
               <AccordionItem value="description">
                 <AccordionTrigger className="uppercase text-[11px] tracking-[0.2em] py-6 hover:no-underline font-bold">Materials & Care</AccordionTrigger>
                 <AccordionContent className="text-charcoal/60 font-light leading-loose text-sm italic">
                    <p className="mb-4">Materials: {product.materials}</p>
                    <p>To maintain longevity, we recommend removing your jewelry while swimming, exercising, or bathing. Keep away from harsh chemicals and store in the provided pouch.</p>
                 </AccordionContent>
               </AccordionItem>
               <AccordionItem value="shipping">
                 <AccordionTrigger className="uppercase text-[11px] tracking-[0.2em] py-6 hover:no-underline font-bold">Shipping & Returns</AccordionTrigger>
                 <AccordionContent className="text-charcoal/60 font-light text-sm">
                    <div className="flex items-start space-x-4 mb-4">
                       <Truck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                       <p>Free worldwide shipping on all orders over $75. Standard shipping: 3-5 business days.</p>
                    </div>
                    <div className="flex items-start space-x-4">
                       <RefreshCw className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                       <p>30-day hassle-free returns. Your satisfaction is our priority.</p>
                    </div>
                 </AccordionContent>
               </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* You May Also Like */}
        <div>
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-charcoal/10 pb-10">
              <h2 className="text-3xl md:text-4xl font-serif">Complete the Look</h2>
              <Link to="/shop" className="text-xs uppercase tracking-widest text-charcoal/40 hover:text-gold transition-colors flex items-center space-x-2 pb-0.5">
                 <span>View Collection</span>
                 <ChevronRight className="w-4 h-4" />
              </Link>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
             {relatedProducts.map((p) => (
               <div key={p.id} className="group flex flex-col">
                 <Link to={`/product/${p.id}`} className="relative aspect-[3/4] overflow-hidden bg-taupe/10 mb-6">
                   <img
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     data-strk-img-id={`related-${p.id}`}
                     data-strk-img={`[related-item-name-${p.id}] gold jewelry editorial product shot`}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="600"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                     alt={p.name}
                   />
                 </Link>
                 <div className="text-center">
                   <Link to={`/product/${p.id}`}>
                     <h3 id={`related-item-name-${p.id}`} className="font-serif uppercase text-[11px] tracking-[0.2em] mb-1 group-hover:text-gold transition-colors">
                       {p.name}
                     </h3>
                   </Link>
                   <p className="text-xs font-light text-charcoal/60 font-bold">${p.price}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
