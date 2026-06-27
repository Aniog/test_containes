import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../lib/CartContext';
import { toast } from 'sonner';
import { Plus, Minus, ChevronDown, ChevronUp, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedFinish, setSelectedFinish] = useState('18K Gold');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (response?.data) {
          setProduct(response.data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (loading) return <div className="h-screen flex items-center justify-center font-sans tracking-widest text-xs uppercase">Loading...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center font-serif text-2xl italic">Product not found.</div>;

  const productData = product.data;

  const accordions = [
    { 
      id: 'description', 
      title: 'Description', 
      content: productData.description || 'Elevate your daily ensemble with this meticulously crafted piece. Designed for versatility and timeless appeal.'
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: productData.material || 'Our jewelry is crafted in 18K Gold Plated Brass. To maintain its luster, avoid contact with water, perfumes, and lotions. Store in its original VELMORA pouch when not in use.'
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for any unworn pieces in their original packaging.'
    }
  ];

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 aspect-[4/5] bg-brand-cream overflow-hidden">
            <img 
              data-strk-img-id="pdp-hero"
              data-strk-img={`[pdp-name] gold jewelry lifestyle editorial close up`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={productData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-brand-cream overflow-hidden">
            <img 
              data-strk-img-id="pdp-alt-1"
              data-strk-img={`[pdp-name] gold jewelry detail macro`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={productData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-brand-cream overflow-hidden">
            <img 
              data-strk-img-id="pdp-alt-2"
              data-strk-img={`[pdp-name] gold jewelry on model neck/ear`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={productData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 space-y-8">
          <div className="space-y-4">
            <nav className="text-[10px] font-sans tracking-widest uppercase text-brand-slate space-x-2">
              <Link to="/" className="hover:text-brand-ebony transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-brand-ebony transition-colors">{productData.category}</Link>
            </nav>
            <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif tracking-widest uppercase">
              {productData.name}
            </h1>
            <div className="flex items-center space-x-4">
              <p className="text-xl font-sans font-medium">${productData.price}</p>
              <div className="flex items-center space-x-1 text-brand-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                <span className="text-[10px] text-brand-slate font-sans uppercase tracking-[0.1em] ml-2">(12 Reviews)</span>
              </div>
            </div>
            <p className="text-brand-slate text-sm font-sans leading-relaxed">
              {productData.description}
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-black/5">
            <div className="space-y-3">
              <label className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-brand-slate">Finish</label>
              <div className="flex space-x-3">
                {['18K Gold', 'Sterling Silver'].map(finish => (
                  <button 
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-6 py-2 border text-[10px] font-sans tracking-widest uppercase transition-all ${
                      selectedFinish === finish ? 'border-brand-ebony bg-brand-ebony text-white' : 'border-black/10 text-brand-slate hover:border-brand-ebony'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-brand-slate">Quantity</label>
              <div className="flex items-center space-x-6 border border-black/10 w-fit px-4 py-2">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-brand-gold transition-colors">
                  <Minus size={16} />
                </button>
                <span className="text-sm font-sans w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="hover:text-brand-gold transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                addToCart({ id: product.id, name: productData.name, price: productData.price, category: productData.category }, quantity);
                toast.success(`${productData.name} added to bag`, {
                  description: `${quantity} ${quantity > 1 ? 'items' : 'item'} with ${selectedFinish} finish added to your collection.`
                });
              }}
              className="w-full py-5 bg-brand-ebony text-white text-xs tracking-[0.3em] font-sans uppercase font-bold hover:bg-brand-ebony/90 transition-all rounded-sm shadow-xl shadow-black/5"
            >
              Add to Bag
            </button>

            <div className="flex justify-between pt-6 space-x-4">
              <div className="flex flex-col items-center text-center space-y-2 flex-1">
                <Truck size={20} className="text-brand-slate" strokeWidth={1} />
                <span className="text-[9px] font-sans tracking-widest uppercase text-brand-slate">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 flex-1">
                <RefreshCw size={20} className="text-brand-slate" strokeWidth={1} />
                <span className="text-[9px] font-sans tracking-widest uppercase text-brand-slate">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 flex-1">
                <ShieldCheck size={20} className="text-brand-slate" strokeWidth={1} />
                <span className="text-[9px] font-sans tracking-widest uppercase text-brand-slate">Authentic Gold</span>
              </div>
            </div>
          </div>

          <div className="space-y-0 pt-10">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-black/5">
                <button 
                  onClick={() => setActiveTab(activeTab === acc.id ? '' : acc.id)}
                  className="w-full flex justify-between items-center py-5 transition-all group"
                >
                  <span className="text-xs font-sans tracking-[0.2em] uppercase font-bold group-hover:text-brand-gold transition-colors">{acc.title}</span>
                  {activeTab === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {activeTab === acc.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-xs font-sans text-brand-slate leading-relaxed">
                        {acc.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
