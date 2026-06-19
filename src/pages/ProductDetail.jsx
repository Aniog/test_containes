import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import strkImgConfig from '@/strk-img-config.json';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductGrid from '@/components/products/ProductGrid';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data, error } = await client.from('Product').select('*').eq('id', id).single();
      if (!error && data) {
        setProduct(data);
      } else {
        navigate('/shop');
      }
      setLoading(false);
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id, navigate]);

  useEffect(() => {
    if (product) {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (loading || !product) {
    return <div className="pt-40 text-center uppercase tracking-widest text-xs opacity-40 h-screen">Inviting the artisan...</div>;
  }

  const { data: fields } = product;

  const accordions = [
    { id: 'description', title: 'Description', content: fields.description || 'A timeless heirloom piece.' },
    { id: 'materials', title: 'Materials & Care', content: fields.material || '18K Gold Plated Brass. Keep away from water and oil.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. 30-day hassle-free returns.' },
  ];

  const handleAddToCart = () => {
    toast.success(`${fields.name} added to bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        {/* Left: Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  data-strk-img-id={`prod-detail-img-${product.id}-${i}`}
                  data-strk-img={`[prod-detail-title] gold jewelry luxury editorial shot ${i}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${fields.name} view ${i + 1}`}
                />
             </div>
           ))}
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <Link to="/shop" className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4 hover:text-foreground transition-colors flex items-center">
             <ArrowLeft className="w-3 h-3 mr-2" /> Back to Shop
          </Link>
          <h1 id="prod-detail-title" className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wider">{fields.name}</h1>
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-xl font-light italic">${fields.price}</span>
            <div className="h-4 w-[1px] bg-border" />
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(12 Reviews)</span>
            </div>
          </div>

          <p className="text-muted-foreground font-light leading-relaxed mb-10 italic">
            {fields.description}
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">Tone: {selectedTone}</span>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all",
                      selectedTone === tone ? "bg-foreground text-background" : "border border-border hover:border-foreground"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-12">
               <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">Quantity</span>
                  <div className="flex items-center border border-border">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-muted transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center text-sm font-light">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-muted transition-colors"><Plus className="w-4 h-4" /></button>
                  </div>
               </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-foreground text-background py-5 text-sm font-medium uppercase tracking-[0.3em] hover:opacity-90 transition-all transform active:scale-[0.98]"
          >
            Add to Bag
          </button>

          {/* Accordion */}
          <div className="mt-16 space-y-4 border-t border-border">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-border">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:opacity-60 transition-opacity">
                    {acc.title}
                  </span>
                  {activeAccordion === acc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-500",
                  activeAccordion === acc.id ? "max-h-96 pb-8" : "max-h-0"
                )}>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed whitespace-pre-line font-inter">
                    {acc.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-24 border-t border-border">
         <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
         <ProductGrid limit={5} category={fields.category} />
      </section>
    </div>
  );
};

export default ProductDetail;
