import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { useCart } from '@/hooks/useCart';
import { ChevronRight, ChevronDown, Plus, Minus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#E5E2DA]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest text-[#1C1C1C]"
      >
        <span>{title}</span>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm text-[#555555] font-sans leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data: response, error } = await client
        .from('Products')
        .select('*')
        .eq('id', id)
        .single();

      if (!error && response?.data) {
        setProduct(response.data);
      }
      setLoading(false);
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return null;
  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found.</div>;

  const fields = product.data || product;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#E5E2DA]">
               <img 
                 src={fields.image_url} 
                 alt={fields.name} 
                 className="w-full h-full object-cover" 
               />
            </div>
            {fields.hover_image_url && (
              <div className="aspect-[4/5] overflow-hidden bg-[#E5E2DA]">
                <img 
                  src={fields.hover_image_url} 
                  alt={`${fields.name} alternate view`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-4 text-[#1C1C1C]">
                {fields.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xl font-sans text-[#A68A56]">${fields.price}</span>
                <div className="flex items-center space-x-1 border-l border-[#E5E2DA] pl-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(fields.rating) ? "#A68A56" : "none"} className="text-[#A68A56]" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] ml-2">({fields.rating})</span>
                </div>
              </div>
              <p className="text-[#555555] font-sans leading-relaxed">
                {fields.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#888888] mb-4">Finish</span>
                <div className="flex space-x-4">
                  {['Gold', 'Silver'].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => setVariant(opt)}
                      className={`px-6 py-2 text-[10px] uppercase tracking-widest transition-all ${
                        variant === opt 
                          ? 'bg-[#1C1C1C] text-white' 
                          : 'border border-[#E5E2DA] text-[#555555] hover:border-[#A68A56]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#888888] mb-4">Quantity</span>
                <div className="inline-flex items-center border border-[#E5E2DA] px-4 py-2 space-x-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-[#888888] hover:text-[#1C1C1C]">
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-sans w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-[#888888] hover:text-[#1C1C1C]">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, quantity, variant)}
              className="w-full bg-[#A68A56] text-white py-5 text-xs font-sans font-medium uppercase tracking-[0.3em] hover:bg-[#8D7446] transition-all shadow-xl shadow-[#A68A56]/20 mb-12"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="border-t border-[#E5E2DA]">
              <Accordion title="Description">
                {fields.full_description}
              </Accordion>
              <Accordion title="Materials & Care">
                {fields.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                We offer free worldwide shipping on all orders over $75. Orders are processed within 1-2 business days. Returns are accepted within 30 days of delivery.
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
