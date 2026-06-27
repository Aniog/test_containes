import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '@/api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn, formatPrice } from '@/lib/utils';
import { Star, ChevronDown, ChevronUp, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import ProductCard from '@/components/shop/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');
  const containerRef = useRef(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const p = await fetchProductById(id);
        setProduct(p);
        setSelectedVariant(p.data.variants?.[0] || 'Gold Tone');
        
        const rel = await fetchProducts({ category: p.data.category });
        setRelated(rel.filter(item => item.id !== id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, product, activeImageIdx]);

  if (loading) return (
    <div className="pt-40 container mx-auto px-6 h-screen animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-[4/5] bg-stone/20" />
        <div className="space-y-8">
          <div className="h-10 bg-stone/20 w-3/4" />
          <div className="h-6 bg-stone/20 w-1/4" />
          <div className="h-24 bg-stone/20 w-full" />
        </div>
      </div>
    </div>
  );

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const data = product.data;
  const images = data.images || [];

  const handleAddToCart = () => {
    addItem(product, selectedVariant);
    toast.success(`${data.name} added to bag`);
  };

  const Accordion = ({ title, id, children }) => (
    <div className="border-b border-stone">
      <button 
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full py-6 flex justify-between items-center group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium transition-colors group-hover:text-gold">{title}</span>
        {expandedSection === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {expandedSection === id && (
        <div className="pb-8 animate-in fade-in slide-in-from-top-2">
          <p className="text-sm text-muted leading-relaxed font-light">{children}</p>
        </div>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 w-20">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={cn(
                    "aspect-[3/4] bg-stone/10 overflow-hidden border transition-colors",
                    activeImageIdx === idx ? "border-gold" : "border-transparent"
                  )}
                >
                  <img 
                    data-strk-img-id={`p-thumb-${idx}`}
                    data-strk-img={img}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${data.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-stone/10 overflow-hidden">
              <img 
                key={activeImageIdx}
                data-strk-img-id={`main-p-img-${activeImageIdx}`}
                data-strk-img={images[activeImageIdx]}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={data.name}
                className="w-full h-full object-cover animate-in fade-in duration-700"
              />
            </div>

            {/* Mobile Thumbnails */}
            <div className="flex md:hidden space-x-4 overflow-x-auto pb-4 no-scrollbar">
               {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] flex-none bg-stone/10 overflow-hidden border",
                    activeImageIdx === idx ? "border-gold" : "border-transparent"
                  )}
                >
                   <img 
                    data-strk-img-id={`p-thumb-mob-${idx}`}
                    data-strk-img={img}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                 <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{data.category}</p>
                 <div className="flex items-center space-x-1 text-gold">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] tracking-widest text-muted">(4.9)</span>
                 </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight uppercase">{data.name}</h1>
              <p className="text-2xl font-light">{formatPrice(data.price)}</p>
            </div>

            <p className="text-base text-muted leading-relaxed font-light">
              {data.description}
            </p>

            {/* Variants */}
            {data.variants && data.variants.length > 0 && (
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium">Tone: <span className="text-muted font-normal">{selectedVariant}</span></p>
                <div className="flex space-x-3">
                  {data.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-all",
                        selectedVariant === variant 
                          ? "bg-accent text-white" 
                          : "border border-stone text-muted hover:border-accent"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-6 pt-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-accent text-white py-5 uppercase tracking-[0.3em] text-sm hover:bg-black transition-all shadow-lg flex items-center justify-center space-x-3"
              >
                <ShoppingBag size={18} className="stroke-1" />
                <span>Add to Bag</span>
              </button>
              
              <div className="flex items-center justify-center space-x-8 text-[10px] uppercase tracking-[0.2em] text-muted py-4 border-y border-stone">
                <span className="flex items-center space-x-2"><span>Free Shipping</span></span>
                <span className="flex items-center space-x-2"><span>30-Day Returns</span></span>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion title="Description" id="description">
                {data.description} Our jewelry is specifically designed for long-lasting wear and layered styling.
              </Accordion>
              <Accordion title="Materials & Care" id="materials">
                {data.materials} 
                <br /><br />
                To keep your jewelry looking its best, avoid contact with perfumes, lotions, and water. Store in a cool, dry place when not in use.
              </Accordion>
              <Accordion title="Shipping & Returns" id="shipping">
                We offer free worldwide shipping on all orders over $100. Standard shipping takes 3-5 business days. 
                <br /><br />
                Unworn pieces in original packaging can be returned within 30 days of purchase for a full refund.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="space-y-12">
            <h2 className="text-3xl font-serif text-center uppercase tracking-widest">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
