import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';
import ProductCard from '../components/products/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-stone-200">
    <button 
      className="w-full py-6 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="serif-caps text-xs tracking-widest">{title}</span>
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
    <div className={cn(
      "overflow-hidden transition-all duration-300",
      isOpen ? "max-h-96 pb-6" : "max-h-0"
    )}>
      <div className="text-stone-500 text-sm leading-relaxed font-sans">
        {children}
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('Description');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await client
          .from('Products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setProduct(data);
        if (data?.data?.variants?.length > 0) {
          setSelectedVariant(data.data.variants[0]);
        }

        // Fetch recommendations
        const { data: recData } = await client
          .from('Products')
          .select('*')
          .neq('id', id)
          .limit(4);
        setRecommendations(recData?.list || []);

      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!isLoading && product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isLoading, product, recommendations]);

  if (isLoading) {
    return (
      <div className="pt-40 pb-24 max-w-7xl mx-auto px-6 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 aspect-[4/5] bg-stone-200" />
          <div className="lg:w-1/2 space-y-8">
            <div className="h-8 bg-stone-200 w-3/4" />
            <div className="h-4 bg-stone-200 w-1/4" />
            <div className="h-24 bg-stone-200 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <p className="font-serif italic text-stone-400">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const fields = product.data;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${fields.name} (${selectedVariant}) added to cart`);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6" ref={containerRef}>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: Images */}
        <div className="lg:w-[55%] space-y-4">
          <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
            <img 
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
               data-strk-img-id={`pdp-main-${id}`}
               data-strk-img={`[pdp-desc] [pdp-name] jewelry detail close up`}
               data-strk-img-ratio="4x5"
               data-strk-img-width="1200"
               alt={fields.name}
               className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-stone-100 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`pdp-thumb-${id}-${i}`}
                  data-strk-img={`[pdp-name] jewelry alternative view ${i}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-[45%] space-y-8">
          <div className="space-y-4">
            <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif text-stone-900 uppercase tracking-widest leading-tight">
              {fields.name}
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-serif text-stone-900">${fields.price.toFixed(2)}</p>
              <div className="flex items-center space-x-1 text-stone-900">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] text-stone-400 ml-2 serif-caps">(24 Reviews)</span>
              </div>
            </div>
          </div>

          <p id="pdp-desc" className="text-stone-500 font-sans leading-relaxed">
            {fields.description}
          </p>

          <div className="space-y-6">
            {fields.variants?.length > 0 && (
              <div className="space-y-3">
                <span className="serif-caps text-[10px] text-stone-400">Tone: {selectedVariant}</span>
                <div className="flex space-x-3">
                  {fields.variants.map((v) => (
                    <button 
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-8 py-2 text-xs border transition-all",
                        selectedVariant === v ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-500 hover:border-stone-900"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <span className="serif-caps text-[10px] text-stone-400">Quantity</span>
              <div className="flex items-center border border-stone-200 w-min px-4 py-2 space-x-8">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-stone-400 hover:text-stone-900"><Minus size={16} /></button>
                <span className="text-sm font-sans w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="text-stone-400 hover:text-stone-900"><Plus size={16} /></button>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full btn-primary py-5"
          >
            Add to Cart
          </button>

          <div className="pt-8 space-y-0">
            <Accordion 
              title="Description" 
              isOpen={openAccordion === 'Description'} 
              onClick={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}
            >
              Handcrafted with precision and care, our pieces are designed to be lived in. 
              The {fields.name} features a delicate balance of classic elegance and modern sensibility.
            </Accordion>
            <Accordion 
              title="Materials & Care" 
              isOpen={openAccordion === 'Materials'} 
              onClick={() => setOpenAccordion(openAccordion === 'Materials' ? '' : 'Materials')}
            >
              Our demi-fine jewelry is crafted from 18K Gold Plated Brass or Sterling Silver. 
              To maintain its luster, avoid contact with perfumes, lotions, and water. 
              Store in a cool, dry place.
            </Accordion>
            <Accordion 
              title="Shipping & Returns" 
              isOpen={openAccordion === 'Shipping'} 
              onClick={() => setOpenAccordion(openAccordion === 'Shipping' ? '' : 'Shipping')}
            >
              Complimentary worldwide shipping on all orders over $100. 
              Returns and exchanges are accepted within 30 days of delivery 
              for items in their original condition.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <section className="mt-32 pt-24 border-t border-stone-200">
        <h3 className="text-2xl font-serif text-center mb-16 italic">You may also like</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {recommendations.map((rec) => (
            <ProductCard key={rec.id} product={rec} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
