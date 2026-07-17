import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/lib/CartContext';
import { Plus, Minus, Star, ChevronDown, ChevronUp, Share2, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import ProductCard from '@/components/ui/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const { data: response, error } = await client.from('Product').select('*').eq('id', id).single();
        if (error) throw error;
        
        const prodData = response.data;
        setProduct(response);
        setSelectedVariant(prodData.variants?.[0] || 'Gold');
        
        // Fetch related products from same category
        const { data: relResponse } = await client
            .from('Product')
            .select('*')
            .eq('category', prodData.category)
            .neq('id', id)
            .limit(4);
        
        setRelated(relResponse?.list || []);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-32"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  if (!product) return <div className="min-h-screen flex flex-col items-center justify-center pt-32"><p className="mb-8">Product not found.</p><Link to="/shop" className="underline uppercase tracking-widest text-xs font-bold">Back to shop</Link></div>;

  const fields = product.data;
  const images = fields.images || [];

  const handleAdd = () => {
    addToCart(product, selectedVariant);
    toast.success(`${fields.name} added to bag`);
  };

  const Accordion = ({ id, title, children }) => (
    <div className="border-t border-gray-100">
        <button 
            onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
            className="w-full py-6 flex justify-between items-center group"
        >
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-800 group-hover:text-primary transition-colors">
                {title}
            </span>
            {openAccordion === id ? <Minus size={14} className="text-gray-400" /> : <Plus size={14} className="text-gray-400" />}
        </button>
        {openAccordion === id && (
            <div className="pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="text-sm font-light leading-relaxed text-muted-foreground">
                    {children}
                </div>
            </div>
        )}
    </div>
  );

  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
            {/* Gallery */}
            <div className="flex-1 flex flex-col-reverse md:flex-row gap-6">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 lg:w-24">
                    {images.map((img, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveImage(i)}
                            className={cn(
                                "flex-shrink-0 aspect-[4/5] bg-gray-50 overflow-hidden border transition-all md:w-full",
                                activeImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            <img src={img} alt={`${fields.name} ${i}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
                {/* Main Image */}
                <div className="flex-1 aspect-[4/5] bg-[#FAF9F6] overflow-hidden">
                    <img 
                        src={images[activeImage]} 
                        alt={fields.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col">
                <div className="mb-2 flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.4em] text-primary uppercase font-bold">{fields.category}</span>
                    <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-primary transition-colors"><Share2 size={18} strokeWidth={1.5} /></button>
                        <button className="text-gray-400 hover:text-pink-500 transition-colors"><Heart size={18} strokeWidth={1.5} /></button>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-serif font-light mb-6 tracking-widest uppercase leading-tight">
                    {fields.name}
                </h1>

                <div className="flex items-center gap-6 mb-8">
                    <span className="text-2xl font-light tracking-tight">${fields.price?.toFixed(2)}</span>
                    <div className="w-[1px] h-4 bg-gray-200" />
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} className={cn("fill-current", i < (fields.stars || 5) ? "text-primary" : "text-gray-200")} />
                            ))}
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-gray-400">12 Reviews</span>
                    </div>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed mb-10 text-sm">
                    {fields.description}
                </p>

                {/* Variant Selector */}
                <div className="mb-10">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-800 block mb-6">Tone: {selectedVariant}</span>
                    <div className="flex gap-4">
                        {fields.variants?.map((v) => (
                            <button 
                                key={v}
                                onClick={() => setSelectedVariant(v)}
                                className={cn(
                                    "px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-bold border transition-all",
                                    selectedVariant === v ? "border-gray-800 bg-gray-800 text-white" : "border-gray-200 hover:border-gray-400 text-gray-500"
                                )}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add Actions */}
                <div className="flex flex-col gap-4 mb-12">
                    <button 
                        onClick={handleAdd}
                        className="w-full bg-primary text-white py-5 text-sm tracking-[0.2em] font-medium uppercase hover:bg-opacity-90 transition-all shadow-lg shadow-primary/10"
                    >
                        Add to bag — ${fields.price?.toFixed(2)}
                    </button>
                </div>

                {/* Trust mini bar */}
                <div className="flex justify-between items-center py-6 border-y border-gray-100 text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-10">
                    <span className="flex items-center gap-2">Free Shipping</span>
                    <span>•</span>
                    <span className="flex items-center gap-2">Nickel-Free</span>
                    <span>•</span>
                    <span className="flex items-center gap-2">Sustainable</span>
                </div>

                {/* Accordions */}
                <div className="flex flex-col">
                    <Accordion id="description" title="Description">
                        <p>{fields.description}</p>
                        <ul className="mt-4 list-disc pl-4 space-y-2">
                            <li>Hand-finished demi-fine jewelry</li>
                            <li>Tarnish-resistant coatings</li>
                            <li>Responsibly sourced materials</li>
                        </ul>
                    </Accordion>
                    <Accordion id="materials" title="Materials & Care">
                        <p>{fields.material || 'Crafted with premium materials and layered with high-carat gold plating.'}</p>
                        <p className="mt-4">Keep your jewelry away from moisture, perfumes, and lotions. Store in the provided pouch when not in use.</p>
                    </Accordion>
                    <Accordion id="shipping" title="Shipping & Returns">
                        <p>{fields.shipping || 'Complimentary worldwide shipping on all orders over $50.'}</p>
                        <p className="mt-4">30-day easy returns policy. Items must be in original condition with all packaging.</p>
                    </Accordion>
                </div>
            </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
            <div className="animate-in fade-in duration-700">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-[10px] tracking-[0.4em] text-primary uppercase font-bold mb-4">The Selection</h2>
                    <h3 className="text-2xl md:text-4xl font-serif font-light">You May Also Like</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {related.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
