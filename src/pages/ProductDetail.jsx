import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsApi } from '../api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Minus, Plus, Star, ChevronDown, Share2, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [tone, setTone] = useState('gold');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    productsApi.get(slug).then(data => {
      setProduct(data);
      if (data) {
        productsApi.list().then(all => {
          setRelatedProducts(all.filter(p => p.id !== data.id).slice(0, 4));
        });
      }
    });
  }, [slug]);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);

  if (!product) return <div className="pt-40 pb-20 text-center font-serif text-2xl">Loading...</div>;

  const productData = product.data;

  // Static slugs for tracing
  const seedSlugs = [
    'vivid-aura-jewels',
    'majestic-flora-nectar',
    'golden-sphere-huggies',
    'amber-lace-earrings',
    'royal-heirloom-set'
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hidden hints for tracing */}
      <div className="hidden">
        {seedSlugs.map(s => (
          <div key={`pdp-hint-${s}`}>
            <img data-strk-img-id={`pdp-main-${s}`} data-strk-img="pdpMain" />
            {[1, 2, 3, 4].map(i => (
              <img key={i} data-strk-img-id={`pdp-thumb-${s}-${i}`} data-strk-img="pdpThumb" />
            ))}
            <img data-strk-img-id={`related-pd-${s}`} data-strk-img="related" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        {/* Left: Gallery Placeholder */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-[#E5E2DD] overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23E5E2DD'/%3E%3C/svg%3E"
              alt={productData.name}
              data-strk-img={`[pd-main-name] jewelry editorial model close-up`}
              data-strk-img-id={`pdp-main-${productData.slug}`}
              data-strk-img-width="1200"
              data-strk-img-ratio="3x4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-[#E5E2DD] overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23E5E2DD'/%3E%3C/svg%3E"
                  data-strk-img={`[pd-main-name] detail view ${i}`}
                  data-strk-img-id={`pdp-thumb-${productData.slug}-${i}`}
                  data-strk-img-width="300"
                  data-strk-img-ratio="1x1"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <div className="mb-10">
            <h1 id="pd-main-name" className="text-4xl font-serif tracking-widest uppercase mb-4 leading-tight">{productData.name}</h1>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-serif text-[#C5A059]">${productData.price}</p>
              <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    <Star size={14} fill="#C5A059" />
                    <span className="text-[10px] font-sans font-bold tracking-widest uppercase">{productData.rating || 5.0}</span>
                  </div>
                  <span className="text-[10px] text-[#A69B8F] font-sans tracking-widest uppercase">({productData.review_count || 12} Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-[#A69B8F] font-sans leading-relaxed mb-10 pb-10 border-b border-[#E5E2DD]">
            {productData.description}
          </p>

          <div className="space-y-10">
            {/* Tone Selector */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans mb-4 text-[#A69B8F]">Choose Tone</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTone('gold')}
                  className={cn(
                    "px-8 py-2 border text-[10px] font-sans uppercase tracking-widest transition-all",
                    tone === 'gold' ? "bg-[#1A150E] text-white border-[#1A150E]" : "border-[#E5E2DD] text-[#A69B8F] hover:border-[#1A150E]"
                  )}
                >
                  18K Gold
                </button>
                <button 
                  onClick={() => setTone('silver')}
                  className={cn(
                    "px-8 py-2 border text-[10px] font-sans uppercase tracking-widest transition-all",
                    tone === 'silver' ? "bg-[#1A150E] text-white border-[#1A150E]" : "border-[#E5E2DD] text-[#A69B8F] hover:border-[#1A150E]"
                  )}
                >
                  Sterling Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans mb-4 text-[#A69B8F]">Quantity</span>
              <div className="flex items-center border border-[#E5E2DD] w-32">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-[#E5E2DD] transition-colors"><Minus size={14} /></button>
                <span className="flex-1 text-center font-sans text-sm">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-[#E5E2DD] transition-colors"><Plus size={14} /></button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-[#1A150E] text-white py-5 font-sans uppercase tracking-[0.2em] text-xs hover:bg-[#C5A059] transition-all duration-500 shadow-xl"
              >
                Add to Bag — ${productData.price * quantity}
              </button>
              <button className="p-5 border border-[#E5E2DD] hover:border-[#1A150E] transition-colors">
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-10 pt-4 opacity-50 font-sans text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-2">Free Delivery</span>
                <span className="flex items-center gap-2">Secure Payment</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-20 border-t border-[#E5E2DD]">
            {[
              { id: 'description', title: 'Details' },
              { id: 'materials', title: 'Materials & Care' },
              { id: 'shipping', title: 'Shipping & Returns' }
            ].map((section) => (
              <div key={section.id} className="border-b border-[#E5E2DD]">
                <button 
                  onClick={() => setActiveTab(activeTab === section.id ? '' : section.id)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="font-serif text-lg tracking-widest uppercase">{section.title}</span>
                  <ChevronDown className={cn("transition-transform duration-300 transform", activeTab === section.id ? "rotate-180" : "")} size={18} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-500",
                  activeTab === section.id ? "max-h-96 pb-6" : "max-h-0"
                )}>
                  <p className="text-sm text-[#A69B8F] font-sans leading-relaxed">
                    {section.id === 'description' ? productData.description : 
                     section.id === 'materials' ? `Every ${productData.name} is meticulously handcrafted. Our ${productData.material} is designed to be water-resistant and hypoallergenic. To maintain its luster, avoid contact with heavy perfumes and store in your Velmora pouch.` :
                     "We offer free standard shipping worldwide on all orders. Returns are accepted within 30 days of delivery for a full refund or exchange. Items must be unworn and in original packaging."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <div className="flex items-center gap-8 mb-16">
            <h2 id="related-title" className="text-3xl font-serif tracking-widest uppercase shrink-0">Complements Well</h2>
            <div className="h-[0.5px] bg-[#E5E2DD] flex-1" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group">
              <Link to={`/product/${p.data.slug}`} className="relative aspect-[2/3] overflow-hidden bg-[#E5E2DD] mb-6 block">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'%3E%3Crect width='2' height='3' fill='%23E5E2DD'/%3E%3C/svg%3E"
                  alt={p.data.name}
                  data-strk-img={`[related-pd-${p.data.slug}-name] [related-title]`}
                  data-strk-img-id={`related-pd-${p.data.slug}`}
                  data-strk-img-width="400"
                  data-strk-img-ratio="2x3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <h3 id={`related-pd-${p.data.slug}-name`} className="font-serif text-sm tracking-widest uppercase mb-1">{p.data.name}</h3>
              <p className="font-serif text-[#C5A059]">${p.data.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
