import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { ChevronDown, ChevronRight, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:text-[#C5A059] transition-colors">{title}</span>
        <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm text-white/60 leading-relaxed font-light whitespace-pre-line">
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
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data: response } = await client.from('Product').select('*').eq('id', id).single();
      if (response?.success) {
        setProduct(response.data);
        setSelectedImage(response.data.data.image_url);
        
        // Fetch related
        const { data: relatedRes } = await client.from('Product').select('*').eq('category', response.data.data.category).limit(4);
        if (relatedRes?.success) {
          setRelatedProducts(relatedRes.data.list.filter(p => p.id !== id));
        }
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const containerRef = useRef(null);
  useEffect(() => {
    if (!loading && product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, product]);

  if (loading) return <div className="pt-32 min-h-screen text-center flex items-center justify-center">Loading treasure...</div>;
  if (!product) return <div className="pt-32 min-h-screen text-center flex flex-col items-center justify-center">
    <p className="font-serif italic text-xl mb-6">Product not found.</p>
    <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1">Back to Shop</Link>
  </div>;

  const data = product.data;

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 mb-12">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-white transition-colors">{data.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">{data.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
            {[data.image_url, data.hover_image_url].filter(Boolean).map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={cn(
                  "flex-shrink-0 w-20 aspect-[3/4] overflow-hidden bg-white/5 border transition-all duration-300",
                  selectedImage === img ? "border-[#C5A059]" : "border-transparent"
                )}
              >
                <img src={img} alt={data.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-white/5 overflow-hidden relative cursor-zoom-in">
             <motion.img 
               key={selectedImage}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               src={selectedImage} 
               alt={data.name} 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col pt-0 lg:pt-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-4">Demi-Fine Collection</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight uppercase tracking-wider">{data.name}</h1>
          
          <div className="flex items-center gap-6 mb-8">
            <span className="text-2xl font-light text-white/90">${data.price}</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />)}
              </div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">(48 Reviews)</span>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-10 font-light">
            {data.description || "A masterfully crafted piece designed to elevate your everyday look. Timeless elegance meets modern minimalism."}
          </p>

          {/* Variants */}
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Tone</h4>
            <div className="flex gap-3">
              {['gold', 'silver'].map(t => (
                <button 
                  key={t}
                  onClick={() => setVariant(t)}
                  className={cn(
                    "px-10 py-3 text-[10px] uppercase tracking-widest transition-all",
                    variant === t 
                      ? "bg-white/10 text-white border border-white/20" 
                      : "bg-transparent text-white/40 border border-transparent hover:border-white/10"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add */}
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center border border-white/10 self-start">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-4 hover:text-[#C5A059] transition-colors"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="p-4 hover:text-[#C5A059] transition-colors"
              >
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
            <button 
              onClick={() => {
                addToCart(product, quantity);
                toast.success(`${data.name} added to cart!`);
              }}
              className="w-full py-5 bg-[#C5A059] text-[#121212] uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#B38D48] transition-all transform hover:scale-[1.02]"
            >
              Add to Cart — ${data.price * quantity}
            </button>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-3 gap-4 mb-12 py-8 border-y border-white/5">
            <div className="flex flex-col items-center text-center gap-3">
              <Truck className="w-5 h-5 text-[#C5A059]" />
              <span className="text-[9px] uppercase tracking-widest text-white/40">Free Express Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <RefreshCw className="w-5 h-5 text-[#C5A059]" />
              <span className="text-[9px] uppercase tracking-widest text-white/40">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              <span className="text-[9px] uppercase tracking-widest text-white/40">2-Year Warranty</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="flex flex-col">
            <Accordion title="Description" content={data.details || "Refined, radiant, and ready for any occasion. This piece is part of our signature demi-fine collection."} />
            <Accordion title="Materials & Care" content={data.materials || "18K Gold Plated Brass. Avoid contact with perfumes, lotions and water to maintain luster."} />
            <Accordion title="Shipping & Returns" content="Complimentary express shipping on all orders over $75. Returns or exchanges within 30 days of delivery." />
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 pt-24 border-t border-white/5">
          <h2 className="text-3xl font-serif mb-16 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <div key={p.id} className="group flex flex-col items-center text-center">
                <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] w-full overflow-hidden bg-white/5 mb-6">
                  <img src={p.data.image_url} alt={p.data.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </Link>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-serif mb-2 group-hover:text-[#C5A059]">{p.data.name}</h3>
                <p className="text-sm font-light text-white/40">${p.data.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
