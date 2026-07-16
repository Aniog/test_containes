import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/ProductCard';
import { Plus, Minus, Star, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-accent/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-velmora-accent transition-colors">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 pb-6" : "max-h-0")}>
        <div className="text-sm text-velmora-muted leading-relaxed uppercase tracking-wider">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetchProductBySlug(slug)
      .then(data => {
        setProduct(data);
        setActiveImage(0);
        setSelectedOption(data.data.options?.[0] || 'Gold');
        return fetchProducts({ category: data.data.category });
      })
      .then(results => {
        setRelated(results.filter(p => p.data.slug !== slug).slice(0, 4));
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(console.error);
  }, [slug]);

  if (loading || !product) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-velmora-accent" />
      </div>
    );
  }

  const data = product.data;
  const images = [data.main_image, data.hover_image, ...(data.gallery || [])].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOption);
    toast.success(`Added ${data.name} to bag`);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Gallery Section */}
          <div className="lg:w-3/5 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "w-20 h-24 flex-shrink-0 bg-gray-50 border-2 transition-colors",
                    activeImage === i ? "border-velmora-accent" : "border-transparent"
                  )}
                >
                  <img src={img} alt={`${data.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-1 aspect-[3/4] bg-gray-50 overflow-hidden">
               <img src={images[activeImage]} alt={data.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-2/5 flex flex-col">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-velmora-muted mb-6">
                <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
                <span>/</span>
                <span className="text-velmora-dark font-bold">{data.category}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.1em] uppercase mb-4 leading-tight">{data.name}</h1>
            
            <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-medium tracking-wide">${data.price}</span>
                <div className="flex items-center gap-2">
                    <div className="flex text-velmora-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-velmora-muted">(24 Reviews)</span>
                </div>
            </div>

            <p className="text-sm text-velmora-muted leading-relaxed mb-10">
                {data.description}
            </p>

            <div className="flex flex-col gap-8 mb-10">
                {data.options && data.options.length > 0 && (
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Metal Finish</h3>
                        <div className="flex gap-4">
                            {data.options.map(opt => (
                                <button 
                                    key={opt}
                                    onClick={() => setSelectedOption(opt)}
                                    className={cn(
                                        "flex-1 py-3 px-4 border text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative overflow-hidden",
                                        selectedOption === opt 
                                            ? "border-velmora-dark bg-velmora-dark text-white" 
                                            : "border-velmora-accent/30 text-velmora-muted hover:border-velmora-dark"
                                    )}
                                >
                                    {selectedOption === opt && <Check size={10} className="absolute top-1 right-1" />}
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Quantity</h3>
                    <div className="flex items-center border border-velmora-accent/30 w-fit px-4 py-3 gap-8">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-velmora-accent transition-colors">
                            <Minus size={16} />
                        </button>
                        <span className="text-sm font-bold min-w-[12px] text-center">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="hover:text-velmora-accent transition-colors">
                            <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <button 
                onClick={handleAddToCart}
                className="w-full bg-velmora-accent text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-velmora-dark transition-colors duration-500 mb-12 shadow-lg"
            >
                Add to Cart — ${(data.price * quantity).toFixed(2)}
            </button>

            <div className="flex flex-col">
                <Accordion title="Description" defaultOpen={true}>
                    {data.description}
                </Accordion>
                <Accordion title="Materials & Care">
                    <p className="mb-2"><span className="font-bold">Materials:</span> {data.materials}</p>
                    <p><span className="font-bold">Care:</span> {data.care_instructions}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                    Complimentary worldwide shipping on orders over $100. Delivered in our signature Velmora keepsake box. We accept returns within 30 days of purchase.
                </Accordion>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <section className="mt-32 border-t border-velmora-accent/10 pt-24">
            <h2 className="text-2xl font-serif tracking-widest uppercase text-center mb-16">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
