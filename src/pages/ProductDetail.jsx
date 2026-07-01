import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShoppingBag, ChevronDown, ChevronUp, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { seedProducts } from './Home';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    const foundProduct = seedProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) return <div className="py-40 text-center uppercase tracking-widest">Loading piece...</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, tone: selectedTone }, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);

  const accordions = [
    { 
        id: 'description', 
        title: 'Description', 
        content: `A testament to refined elegance, the ${product.name} features ${product.description.toLowerCase()}. Perfect for both solo wear and layering, this piece brings a touch of quiet luxury to your jewelry collection.`
    },
    { 
        id: 'materials', 
        title: 'Materials & Care', 
        content: "Our pieces are crafted with 18K thick gold plating over recycled 925 Sterling Silver or high-quality brass. To maintain its luster, avoid contact with perfume, lotions, and water. Store in the provided Velmora pouch when not in use."
    },
    { 
        id: 'shipping', 
        title: 'Shipping & Returns', 
        content: "Enjoy free worldwide carbon-neutral shipping on orders over $100. We offer a 30-day return window for all unused jewelry in its original packaging. Please note that for hygiene reasons, earrings cannot be returned unless faulty."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-velmora-cream">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-12 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-velmora-charcoal/40">
           <Link to="/" className="hover:text-velmora-charcoal">Home</Link>
           <span>/</span>
           <Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link>
           <span>/</span>
           <span>{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 lg:w-24 aspect-[4/5] bg-velmora-sand cursor-pointer overflow-hidden border border-velmora-charcoal/5">
                   <img 
                      data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                      data-strk-img={`[pdp-name] angle ${i} gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                      alt={`View ${i}`}
                   />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-velmora-sand overflow-hidden relative border border-velmora-charcoal/5">
               <img 
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-name] high detail editorial jewelry photography gold close up`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={product.name}
               />
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-[40%] space-y-8 sticky top-32 h-fit">
            <div className="space-y-4">
              <h1 id="pdp-name" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest">{product.name}</h1>
              <div className="flex items-center space-x-6">
                 <span className="text-xl leading-none text-velmora-charcoal/80">${product.price}</span>
                 <div className="flex items-center space-x-2">
                    <div className="flex items-center text-velmora-accent">
                       {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40">(12 Reviews)</span>
                 </div>
              </div>
              <p className="text-sm font-light leading-relaxed text-velmora-charcoal/70">
                {product.description}. A centerpiece of our current collection, designed for everyday distinction.
              </p>
            </div>

            <div className="hairline"></div>

            {/* Tone Selector */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-medium">Select Finish</span>
              <div className="flex gap-4">
                {['gold', 'silver'].map((tone) => (
                  <button 
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      selectedTone === tone 
                        ? "border-velmora-charcoal bg-velmora-charcoal text-velmora-cream" 
                        : "border-velmora-charcoal/20 text-velmora-charcoal/60 hover:border-velmora-charcoal/40"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-medium">Quantity</span>
                    <div className="flex items-center border border-velmora-charcoal/10">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-velmora-sand/50"><Truck size={12} className="rotate-90 hidden" /><span className="px-2">-</span></button>
                        <span className="w-8 text-center text-xs">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-velmora-sand/50"><span className="px-2">+</span></button>
                    </div>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary w-full flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-xs py-5"
                >
                  <ShoppingBag size={18} strokeWidth={1} />
                  <span>Add to Bag</span>
                </button>
            </div>

            {/* PDP Accordions */}
            <div className="pt-6 border-t border-velmora-charcoal/5 space-y-0">
               {accordions.map((acc) => (
                  <div key={acc.id} className="border-b border-velmora-charcoal/5">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{acc.title}</span>
                      {activeAccordion === acc.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <div className={cn(
                        "overflow-hidden transition-all duration-500",
                        activeAccordion === acc.id ? "max-h-96 pb-6" : "max-h-0"
                    )}>
                        <p className="text-xs text-velmora-charcoal/60 leading-relaxed font-light">
                            {acc.content}
                        </p>
                    </div>
                  </div>
               ))}
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center space-y-2">
                    <Truck size={16} strokeWidth={1} className="text-velmora-accent" />
                    <span className="text-[8px] uppercase tracking-widest opacity-60">Fast Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                    <RefreshCw size={16} strokeWidth={1} className="text-velmora-accent" />
                    <span className="text-[8px] uppercase tracking-widest opacity-60">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                    <ShieldCheck size={16} strokeWidth={1} className="text-velmora-accent" />
                    <span className="text-[8px] uppercase tracking-widest opacity-60">Secure Payment</span>
                </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-velmora-charcoal/5">
            <h2 className="text-2xl md:text-3xl font-serif mb-12 uppercase tracking-widest text-center">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
