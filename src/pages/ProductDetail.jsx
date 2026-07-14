import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getProducts } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { useCartStore } from '@/lib/store';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState('description');
  const containerRef = useRef(null);
  
  const { addItem } = useCartStore();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setSelectedVariant(data.data.variants?.[0] || 'Gold');
        
        const allProducts = await getProducts();
        setRelated(allProducts.filter(p => p.id !== id && p.data.category === data.data.category).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  useEffect(() => {
    if (product) {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (loading) return <div className="h-screen flex items-center justify-center font-serif text-2xl italic animate-pulse">Loading treasure...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center font-serif text-2xl uppercase tracking-widest">Product not found.</div>;

  const { name, price, description, images, variants, details } = product.data;

  const Accordion = ({ title, id, content }) => (
    <div className="border-b border-border">
      <button 
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-sans hover:text-accent transition-colors"
      >
        {title}
        {expandedSection === id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-500",
          expandedSection === id ? "max-h-[500px] pb-6" : "max-h-0"
        )}
      >
        <p className="text-sm font-sans text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden">
               <img 
                src={images?.[0] || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"%3E%3C/svg%3E'} 
                alt={name}
                className="w-full h-full object-cover"
                data-strk-img-id={`detail-img-main`}
                data-strk-img={`[product-name] jewelry gold high-end editorial close up luxury spotlight`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="aspect-square bg-stone-100 overflow-hidden">
                    <img 
                      src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
                      className="w-full h-full object-cover"
                      data-strk-img-id={`detail-img-thumb-${i}`}
                      data-strk-img={`[product-name] close up texture detail gold jewelry lifestyle`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-accent">{product.data.category}</span>
              <h1 id="product-name" className="text-4xl md:text-5xl font-serif uppercase tracking-[0.1em]">{name}</h1>
              <p className="text-xl font-sans font-light">${price}</p>
            </div>

            <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-lg">
              {description}
            </p>

            <div className="space-y-8 pt-4">
               {/* Variant Selector */}
               {variants && variants.length > 0 && (
                 <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">Finish: {selectedVariant}</span>
                    <div className="flex gap-4">
                      {variants.map(v => (
                        <button 
                          key={v}
                          onClick={() => setSelectedVariant(v)}
                          className={cn(
                            "px-6 py-2 border transition-all text-[10px] uppercase tracking-widest",
                            selectedVariant === v ? "border-foreground bg-foreground text-white" : "border-border hover:border-foreground"
                          )}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                 </div>
               )}

               {/* Quantity */}
               <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">Quantity</span>
                  <div className="flex items-center border border-border w-fit">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-muted"><Minus size={16} /></button>
                    <span className="w-12 text-center text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-muted"><Plus size={16} /></button>
                  </div>
               </div>

               {/* Add to Cart */}
               <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addItem(product, selectedVariant);
                }}
                className="w-full bg-accent text-white py-5 uppercase tracking-[0.3em] text-sm font-medium hover:bg-foreground transition-all duration-300 transform hover:scale-[1.02]"
              >
                 Add to Cart
               </button>
            </div>

            {/* Accordions */}
            <div className="pt-8 space-y-2">
              <Accordion 
                id="description" 
                title="Description" 
                content={description}
              />
              <Accordion 
                id="materials" 
                title="Materials & Care" 
                content={details?.materials + " " + details?.care}
              />
              <Accordion 
                id="shipping" 
                title="Shipping & Returns" 
                content={details?.shipping || "Enjoy free worldwide shipping on all orders over $150. Returns are accepted within 30 days of delivery."}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="space-y-12">
            <h2 className="text-3xl font-serif text-center">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
