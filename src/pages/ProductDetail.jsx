import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      
      // Fetch Product
      const { data: response, error } = await client
        .from('Products')
        .select('*')
        .eq('id', id)
        .single();

      if (!error && response?.success) {
        setProduct(response.data);
        
        // Fetch Related
        const { data: relResponse } = await client
          .from('Products')
          .select('*')
          .neq('id', id)
          .limit(4);
        
        if (relResponse?.success) {
          setRelatedProducts(relResponse.data.list);
        }
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="min-h-screen pt-32 text-center font-serif italic">Discovering details...</div>;
  if (!product) return <div className="min-h-screen pt-32 text-center">Piece not found.</div>;

  const fields = product.data;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32">
        {/* Gallery */}
        <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto no-scrollbar">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "w-20 md:w-24 aspect-[3/4] bg-muted flex-none border transition-all",
                  activeImage === i ? "border-primary" : "border-transparent"
                )}
              >
                <img
                  alt={`${fields.name} preview ${i}`}
                  data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                  data-strk-img={`[pdp-title] jewelry gold ${i === 1 ? 'on model' : i === 2 ? 'lifestyle detail' : 'studio'}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden relative">
             <img
                alt={fields.name}
                data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                data-strk-img={`[pdp-title] jewelry gold ${activeImage === 1 ? 'on model' : activeImage === 2 ? 'lifestyle detail' : 'studio'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover animate-in fade-in duration-700"
              />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">(24 Reviews)</span>
             </div>
             <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">
              {fields.name}
            </h1>
            <p className="text-2xl font-serif italic">${fields.price}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {fields.description}. Designed for the effortless collector, this piece brings a warm luminosity to any ensemble. 18K Gold Plated over premium sterling silver for lasting brilliance.
          </p>

          {/* Variants */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">Material: {variant}</span>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "px-8 py-3 text-[10px] uppercase tracking-widest transition-all",
                    variant === v 
                      ? "bg-primary text-secondary border-primary" 
                      : "border border-border hover:border-primary"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-8">
               <div className="flex items-center border border-border p-1 bg-white">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
               </div>
               {fields.is_bestseller && (
                 <span className="text-[10px] px-3 py-1 bg-accent/10 text-accent uppercase tracking-widest border border-accent/20">
                   Bestseller
                 </span>
               )}
            </div>

            <button
               onClick={() => {
                 addToCart(fields, quantity, variant);
                 toast.success(`${fields.name} added to bag`);
               }}
               className="w-full py-5 bg-primary text-secondary uppercase tracking-[0.3em] font-medium text-xs hover:opacity-90 transition-opacity"
            >
              Add to Jewelry Box
            </button>
          </div>

          {/* Accordions */}
          <div className="space-y-4 border-t border-border pt-8">
            <Accordion title="Description">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Elevate your daily jewelry rotation with the {fields.name}. Hand-finished to ensure perfection, this piece features a delicate profile that's ideal for stacking or wearing solitaire.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
               <p className="text-sm text-muted-foreground leading-relaxed">
                Crafted in 18K Gold Vermeil: a thick layer of solid 18K gold on sterling silver. To maintain brilliance, avoid direct contact with perfumes and lotions. Clean gently with a soft polishing cloth.
              </p>
            </Accordion>
            <Accordion title="Shipping & Returns">
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Enjoy free standard worldwide shipping on orders over $75. We accept returns within 30 days of purchase for all pieces in original condition.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 border-t border-border">
         <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-5xl font-serif">You May Also Like</h2>
            <Link to="/shop" className="text-xs uppercase tracking-[0.3em] font-medium flex items-center space-x-2">
               <span>View All</span>
               <ArrowRight className="w-3 h-3" />
            </Link>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
               <Link key={p.id} to={`/product/${p.id}`} className="group space-y-6">
                  <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                      <img
                        alt={p.data.name}
                        data-strk-img-id={`related-${p.id}`}
                        data-strk-img={`aesthetic gold jewelry ${p.data.name}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-widest leading-relaxed">
                      {p.data.name}
                    </h3>
                    <p className="text-sm font-serif italic">${p.data.price}</p>
                  </div>
               </Link>
            ))}
         </div>
      </section>
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xs uppercase tracking-[0.3em] font-medium py-2"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pt-4 animate-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
