import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/lib/CartContext';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown, Share2, Heart, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data: response } = await client
        .from('JewelryProduct')
        .select('*')
        .eq('id', id)
        .single();
      
      if (response?.data) {
        const prodData = { id: response.data.id, ...response.data.data };
        setProduct(prodData);
        
        // Fetch related
        const { data: relResponse } = await client
          .from('JewelryProduct')
          .select('*')
          .eq('category', prodData.category)
          .neq('id', id)
          .limit(4);
        
        if (relResponse?.data?.list) {
          setRelated(relResponse.data.list.map(i => ({ id: i.id, ...i.data })));
        }
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, related]);

  if (!product) return <div className="h-screen bg-white" />;

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Gallery Mockup */}
          <div className="lg:col-span-1 hidden lg:flex flex-col space-y-4">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="aspect-[3/4] bg-[#F9F8F6] cursor-pointer border border-transparent hover:border-[#1A1A1A]">
                  <img
                    data-strk-img-id={`gallery-thumb-${id}-${i}`}
                    data-strk-img={`[product-title] angle ${i+1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
               </div>
             ))}
          </div>
          
          <div className="lg:col-span-6 aspect-[3/4] bg-[#F9F8F6]">
              <img
                data-strk-img-id={`product-main-${id}`}
                data-strk-img={`[product-title] focus on details luxury dark background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#9D8C70] mb-4 block">{product.category}</span>
              <h1 id="product-title" className="text-4xl md:text-5xl font-serif uppercase tracking-luxury text-[#1A1A1A] mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-sans">${product.price}</span>
                <div className="flex items-center space-x-1 border-l border-[#E5E5E5] pl-6">
                  <Star className="w-3 h-3 fill-[#9D8C70] text-[#9D8C70]" />
                  <span className="text-xs font-sans text-muted-foreground">4.9 (128 reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              <div>
                <span className="text-[10px] uppercase tracking-luxury mb-4 block">Finish: <span className="text-[#1A1A1A] font-semibold">{selectedTone}</span></span>
                <div className="flex space-x-3">
                  {product.tone?.map(tone => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-luxury border transition-all",
                        selectedTone === tone ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-[#E5E5E5] text-muted-foreground hover:border-[#1A1A1A]"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-luxury mb-4 block">Quantity</span>
                <div className="flex items-center border border-[#E5E5E5] w-fit">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-4 hover:bg-[#F9F8F6]"><Minus className="w-4 h-4" /></button>
                  <span className="px-6 text-sm font-sans w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="p-4 hover:bg-[#F9F8F6]"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col space-y-4 mb-16">
              <button
                onClick={() => addToCart(product, quantity, selectedTone)}
                className="w-full bg-[#1A1A1A] text-white py-6 uppercase text-xs tracking-luxury hover:opacity-90 active:scale-[0.98] transition-all shadow-xl"
              >
                Add to Cart
              </button>
              <div className="flex space-x-4">
                 <button className="flex-1 border border-[#E5E5E5] py-4 text-[10px] uppercase tracking-luxury flex items-center justify-center space-x-2 hover:bg-[#F9F8F6] transition-colors">
                    <Heart className="w-3 h-3" />
                    <span>Wishlist</span>
                 </button>
                 <button className="flex-1 border border-[#E5E5E5] py-4 text-[10px] uppercase tracking-luxury flex items-center justify-center space-x-2 hover:bg-[#F9F8F6] transition-colors">
                    <Share2 className="w-3 h-3" />
                    <span>Share</span>
                 </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E5E5E5]">
              {[
                { id: 'description', title: 'Details', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: product.materials },
                { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
              ].map((acc) => (
                <div key={acc.id} className="border-b border-[#E5E5E5]">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full py-5 flex justify-between items-center group"
                  >
                    <span className="text-[10px] uppercase tracking-luxury text-[#1A1A1A]">{acc.title}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeAccordion === acc.id ? "rotate-180" : "")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === acc.id ? "max-h-48 pb-8" : "max-h-0"
                  )}>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Icons */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#E5E5E5] pt-12">
               <div className="flex flex-col items-center text-center">
                  <Truck className="w-5 h-5 text-[#9D8C70] mb-3" />
                  <span className="text-[10px] uppercase tracking-widest leading-tight">Free Express Shipping</span>
               </div>
               <div className="flex flex-col items-center text-center">
                  <RefreshCw className="w-5 h-5 text-[#9D8C70] mb-3" />
                  <span className="text-[10px] uppercase tracking-widest leading-tight">Plastic Free Packaging</span>
               </div>
               <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 text-[#9D8C70] mb-3" />
                  <span className="text-[10px] uppercase tracking-widest leading-tight">Lifetime Warranty</span>
               </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="border-t border-[#E5E5E5] pt-24">
            <h2 className="text-3xl font-serif mb-16 text-center italic">Complete the Look</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {related.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
