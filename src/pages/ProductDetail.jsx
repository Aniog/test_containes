import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data: response } = await client
        .from('JewelryProducts')
        .select('*')
        .eq('id', id)
        .single();
      
      if (response?.data) {
        setProduct(response.data);
        const cat = response.data.data?.category;
        
        // Fetch recommendations
        const { data: recResponse } = await client
          .from('JewelryProducts')
          .select('*')
          .eq('category', cat)
          .neq('id', id)
          .limit(4);
        
        if (recResponse?.data?.list) {
          setRecommendations(recResponse.data.list);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, recommendations]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center font-serif text-2xl tracking-widest animate-pulse">Loading...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-serif text-2xl tracking-widest">Product Not Found</div>;
  }

  const data = product.data || {};
  const imageUrl = data.images?.[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#6B6B6B]">
          <a href="/">Home</a>
          <ChevronRight size={12} />
          <a href="/shop">Shop</a>
          <ChevronRight size={12} />
          <span className="text-[#1A1A1A]">{data.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
        {/* Left: Image Gallery */}
        <div className="flex gap-4">
          <div className="hidden md:flex flex-col gap-4 w-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-[#F5EFE6] relative overflow-hidden group cursor-pointer">
                 <img 
                  src={imageUrl} 
                  alt={`${data.name} ${i}`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-[#F5EFE6] overflow-hidden">
            <img 
              src={imageUrl} 
              alt={data.name}
              className="w-full h-full object-cover"
              data-strk-img-id={`detail-img-${id}`}
              data-strk-img={`[detail-title] [detail-cat] luxury gold jewelry detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <p id="detail-cat" className="text-xs tracking-[0.2em] font-medium uppercase text-[#6B6B6B] mb-4">{data.category}</p>
          <h1 id="detail-title" className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-[0.1em] mb-4">{data.name}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl font-light">{formatPrice(data.price)}</span>
            <div className="flex items-center gap-1 text-[#D4AF37]">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#6B6B6B] font-semibold">(12 REVIEWS)</span>
            </div>
          </div>

          <p className="text-[#6B6B6B] leading-relaxed mb-10 pb-10 border-b border-[#E5E5E5]">
            {data.description}
          </p>

          <div className="space-y-10">
            {/* Variant Selector */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Finish: {selectedVariant}</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-8 py-3 text-[10px] tracking-[0.2em] uppercase border transition-all",
                      selectedVariant === variant 
                        ? "border-[#1A1A1A] bg-[#1A1A1A] text-white" 
                        : "border-[#E5E5E5] text-[#1A1A1A] hover:border-[#1A1A1A]"
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Quantity</span>
              <div className="flex items-center border border-[#E5E5E5] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5EFE6] transition-colors"
                >
                  <Minus size={18} strokeWidth={1} />
                </button>
                <span className="w-16 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5EFE6] transition-colors"
                >
                  <Plus size={18} strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-[#1A1A1A] text-white py-5 text-xs tracking-[0.2em] font-medium uppercase hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3"
            >
              <ShoppingBag size={18} />
              Add to Bag
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col gap-4 pt-6">
              <div className="flex items-center gap-3 text-xs tracking-widest text-[#6B6B6B] uppercase">
                <Package size={16} strokeWidth={1.5} />
                Free shipping on orders over $75
              </div>
              <div className="flex items-center gap-3 text-xs tracking-widest text-[#6B6B6B] uppercase">
                <RefreshCw size={16} strokeWidth={1.5} />
                30-day easy returns
              </div>
              <div className="flex items-center gap-3 text-xs tracking-widest text-[#6B6B6B] uppercase">
                <Sparkles size={16} strokeWidth={1.5} />
                18K gold plated hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E5E5E5] pt-10">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((tab) => (
                <div key={tab} className="border-b border-[#E5E5E5]">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-6 text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] list-none">
                      {tab}
                      <Plus size={16} className="group-open:hidden" />
                      <Minus size={16} className="hidden group-open:block" />
                    </summary>
                    <div className="pb-8 text-sm text-[#6B6B6B] leading-relaxed">
                      {tab === 'Description' && (
                        <p>{data.description}</p>
                      )}
                      {tab === 'Materials & Care' && (
                        <ul className="list-disc list-inside space-y-2">
                          <li>18K Gold Plated over high-quality brass</li>
                          <li>Hand-set crystal accents</li>
                          <li>To preserve shine, avoid direct contact with water and perfumes</li>
                          <li>Store in the provided Velmora pouch</li>
                        </ul>
                      )}
                      {tab === 'Shipping & Returns' && (
                        <p>Standard worldwide shipping takes 3-7 business days. We offer a 30-day return window for all unused jewelry in original packaging.</p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pt-32 border-t border-[#E5E5E5]">
          <h2 className="text-2xl font-serif text-center mb-16 uppercase tracking-[0.1em]">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {recommendations.map((rec) => (
              <ProductCard key={rec.id} product={rec} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
