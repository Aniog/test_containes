import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { getProducts } from '@/api/products';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Truck, ShieldCheck, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [variant, setVariant] = useState('gold');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        const found = allProducts.find(p => p.slug === slug);
        setProduct(found);
        setRelatedProducts(allProducts.filter(p => p.slug !== slug && p.category === found?.category).slice(0, 4));
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!loading && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, slug]);

  const toggleAccordion = (id) => setOpenAccordion(openAccordion === id ? null : id);

  if (loading) return <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center font-serif italic uppercase tracking-widest">Loading...</div>;
  if (!product) return <div className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center gap-6"><p className="font-serif text-2xl">Product not found</p><Link to="/shop" className="text-xs tracking-widest uppercase border-b border-[#1A1A1A]">Back to Shop</Link></div>;

  const images = product.images || [];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      <CartDrawer />

      <main className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 lg:w-24">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] flex-shrink-0 w-20 md:w-full border-b-2 transition-luxury ${activeImage === idx ? 'border-[#C5A059]' : 'border-transparent opacity-60'}`}
                >
                   <img 
                    data-strk-img={`[pdp-title] thumbnail ${idx}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${idx}`}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-grow aspect-[3/4] bg-[#F5F5F3] overflow-hidden">
               <img 
                data-strk-img={`[pdp-title] view ${activeImage}`}
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                alt={product.name}
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-10">
            <div className="space-y-4">
               <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">{product.category}</p>
               <h1 id="pdp-title" className="text-4xl sm:text-5xl font-serif tracking-[0.1em] uppercase leading-tight">{product.name}</h1>
               <div className="flex items-center gap-6">
                 <p className="text-2xl font-light text-[#1A1A1A]">${product.price}</p>
                 <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#717171]">(4.9/5)</span>
                 </div>
               </div>
            </div>

            <p className="text-[#717171] leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="space-y-6">
              {/* Variant Selector */}
              <div className="space-y-3">
                 <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Finish: <span className="text-[#717171] font-normal">{variant === 'gold' ? '18K Gold Vermeil' : '925 Sterling Silver'}</span></p>
                 <div className="flex gap-3">
                    {['gold', 'silver'].map(v => (
                      <button 
                        key={v}
                        onClick={() => setVariant(v)}
                        className={`px-6 py-2 text-[10px] uppercase tracking-widest border transition-luxury ${variant === v ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' : 'border-[#E5E5E5] text-[#717171] hover:border-[#1A1A1A]'}`}
                      >
                        {v}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <div className="flex items-center justify-between border border-[#E5E5E5] px-4 py-2 sm:w-32">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1"><Minus className="w-4 h-4" /></button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-1"><Plus className="w-4 h-4" /></button>
                 </div>
                 <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-grow bg-[#1A1A1A] text-white py-4 tracking-widest text-xs font-bold uppercase hover:bg-opacity-90 transition-luxury shadow-lg shadow-black/5"
                 >
                   Add to Cart
                 </button>
                 <button className="p-4 border border-[#E5E5E5] hover:bg-[#1A1A1A] hover:text-white transition-luxury">
                    <Heart className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E5E5E5] pt-1 pt-6 space-y-1">
              {[
                { id: 'description', title: 'The Detail', content: product.description },
                { id: 'details', title: 'Materials & Care', content: product.details || '18K Gold Vermeil: A thick 18K gold layer on sterling silver. Our materials are hypoallergenic and crafted to last.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping on orders over $100. Returns are accepted within 30 days of delivery.' }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-[#E5E5E5] overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex justify-between items-center py-5 text-[11px] uppercase tracking-widest font-bold"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <AnimatePresence>
                    {openAccordion === acc.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-6"
                      >
                        <p className="text-sm text-[#717171] leading-relaxed">{acc.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-6 text-[10px] uppercase tracking-widest font-bold text-[#717171]">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#C5A059]" />
                Free Shipping
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                Two-Year Warranty
              </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {relatedProducts.length > 0 && (
          <section className="mt-40">
            <h2 className="text-3xl font-serif text-center mb-16">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </main>

      {/* Footer repeated or abstracted */}
      <footer className="py-24 px-6 border-t border-[#E5E5E5] bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
            <h3 className="font-serif text-2xl tracking-[0.3em] font-medium">VELMORA</h3>
            <div className="flex justify-center gap-12 text-[11px] uppercase tracking-widest font-bold">
               <Link to="/shop" className="hover:text-[#C5A059]">Shop All</Link>
               <Link to="/about" className="hover:text-[#C5A059]">About</Link>
               <Link to="/journal" className="hover:text-[#C5A059]">Journal</Link>
               <Link to="/contact" className="hover:text-[#C5A059]">Contact</Link>
            </div>
            <p className="text-[10px] text-[#717171] uppercase tracking-[0.1em] pt-8">© 2026 Velmora Fine Jewelry.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
