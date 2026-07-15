import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/common/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setQuantity(1);
      setActiveImage(0);
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) return null;

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description || "Indulge in the quiet luxury of this meticulously crafted piece. Designed to be a staple in your jewelry collection, it offers a perfect balance between contemporary style and timeless elegance."
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Base metal: High-quality jewelry brass or 925 Sterling Silver. \nPlating: Thick layers of 18K Gold. \nCare: To maintain the radiant finish, avoid contact with perfumes, lotions, and chlorinated water. Gently wipe with a soft cloth after wear.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Standard shipping: 3-5 business days. \nFree worldwide shipping on orders over $75. \nReturns: We accept returns within 30 days of purchase. Pieces must be in original, unworn condition with tags attached.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mb-12">
        <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-[#1A1A1A] font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Gallery */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 aspect-[3/4] bg-[#F4F1ED] overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-gold' : 'border-transparent opacity-60'}`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                  data-strk-img={`[pdp-title] jewelry view ${idx + 1}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 aspect-[3/4] bg-[#F4F1ED] overflow-hidden order-1 md:order-2">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-title] gold jewelry ${activeImage === 1 ? 'on model' : 'close up'}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif tracking-[0.1em] uppercase leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-serif tracking-widest">${product.price}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40">(42 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#E5E5E5]" />

          <p className="text-[#1A1A1A]/70 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Variants */}
          <div className="flex flex-col gap-4">
             <span className="text-[10px] uppercase tracking-widest font-bold">Finish</span>
             <div className="flex gap-3">
                <button className="px-6 py-3 border-2 border-gold text-[10px] uppercase tracking-[0.2em] font-bold">18K Gold Finish</button>
                <button className="px-6 py-3 border border-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A]/40 hover:border-gold/30 transition-colors">Sterling Silver</button>
             </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-12">
               <span className="text-[10px] uppercase tracking-widest font-bold">Quantity</span>
               <div className="flex items-center border border-[#E5E5E5] px-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-gold transition-colors"
                  >
                    <Plus size={16} />
                  </button>
               </div>
            </div>

            <Button 
               onClick={() => addToCart(product, quantity)}
               size="lg" 
               className="w-full bg-[#1A1A1A] text-white py-8 text-lg tracking-[0.3em] font-bold hover:bg-black"
            >
              ADD TO BAG
            </Button>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-2 gap-4 mt-4">
             <div className="bg-[#FAF9F6] p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] uppercase tracking-widest font-medium">In Stock & Ready to ship</span>
             </div>
             <div className="bg-[#FAF9F6] p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-[10px] uppercase tracking-widest font-medium">18K Gold Plated Finish</span>
             </div>
          </div>

          {/* Accordions */}
          <div className="flex flex-col mt-8">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-t border-[#E5E5E5] last:border-b">
                <button
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full flex items-center justify-between py-6 group"
                >
                  <span className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-gold transition-colors">{acc.title}</span>
                  {openAccordion === acc.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {openAccordion === acc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-sm text-[#1A1A1A]/70 leading-relaxed whitespace-pre-line font-light">
                        {acc.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40">
           <div className="flex flex-col gap-4 mb-16 text-center items-center">
              <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold">Complete the Look</p>
              <h2 className="text-3xl font-serif">You May Also Like</h2>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
           </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
