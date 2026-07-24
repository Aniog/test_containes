import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import useCartStore from '../store/cartStore';
import { CATALOG } from './ShopPage';

export default function ProductPage() {
  const { id } = useParams();
  const product = CATALOG.find(p => p.id === id) || CATALOG[0];
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState(['description']);
  
  const addItem = useCartStore(state => state.addItem);

  const images = [
    `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop`,
    `https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop`,
    `https://images.unsplash.com/photo-1599643477874-5c866f4369e1?q=80&w=1200&auto=format&fit=crop`
  ];

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant: selectedVariant,
      quantity,
      image: images[0]
    });
  };

  return (
    <div className="pt-24 min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Images Array */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-[60vh] md:h-[80vh]">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar pb-2 md:pb-0 w-full md:w-24 flex-shrink-0">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImageIndex(i)}
                className={cn(
                  "relative aspect-[3/4] w-20 md:w-full flex-shrink-0 border transition-all",
                  activeImageIndex === i ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <img src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 bg-secondary relative overflow-hidden aspect-[3/4] md:aspect-auto">
            <img 
              src={images[activeImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col pt-4">
          <div className="mb-2 flex items-center gap-2 text-accent">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">(24 Reviews)</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-widest leading-tight mb-4">
            {product.name}
          </h1>
          <p className="font-serif text-2xl mb-8">${product.price}</p>
          
          <p className="text-muted-foreground font-light mb-8 max-w-md text-sm md:text-base leading-relaxed">
            Elevate your everyday look with this stunning demi-fine piece. Crafted with meticulous attention to detail, designed to capture the light and turn heads.
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3 text-sm">
              <span className="tracking-widest uppercase font-semibold">Finish: <span className="font-normal text-muted-foreground ml-1 capitalize">{selectedVariant}</span></span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedVariant('gold')}
                className={cn(
                  "w-12 h-12 rounded-full border-2 p-1 transition-all",
                  selectedVariant === 'gold' ? "border-accent" : "border-transparent hover:border-border"
                )}
                aria-label="Gold Finish"
              >
                <div className="w-full h-full rounded-full bg-[#d4af37] shadow-inner flex items-center justify-center text-white">
                  {selectedVariant === 'gold' && <Check className="w-4 h-4" />}
                </div>
              </button>
              <button 
                onClick={() => setSelectedVariant('silver')}
                className={cn(
                  "w-12 h-12 rounded-full border-2 p-1 transition-all",
                  selectedVariant === 'silver' ? "border-accent" : "border-transparent hover:border-border"
                )}
                aria-label="Silver Finish"
              >
                <div className="w-full h-full rounded-full bg-[#e3e4e5] shadow-inner flex items-center justify-center text-primary">
                  {selectedVariant === 'silver' && <Check className="w-4 h-4" />}
                </div>
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full py-4 bg-primary text-primary-foreground font-semibold tracking-[0.2em] uppercase text-xs hover:bg-primary/90 transition-colors mb-4"
          >
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="flex gap-6 mt-6 pt-6 border-t border-border/50 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            <div className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free Shipping</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 30-Day Returns</div>
          </div>

          {/* Accordions */}
          <div className="mt-12 bg-background border-t border-border">
            {[
              { id: 'description', title: 'Description', content: 'Our demi-fine jewelry is designed to bridge the gap between costume and solid gold. This piece is thick-plated in 18k gold over a solid sterling silver base, ensuring long-lasting wear without tarnishing easily.' },
              { id: 'materials', title: 'Materials & Care', content: '18K Gold Vermeil (2.5 microns thick over Sterling Silver). Hypoallergenic and nickel-free. To maintain the shine, remove before swimming or showering, and avoid contact with perfumes and lotions.' },
              { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders. Expedited options available at checkout. We accept returns within 30 days of delivery for a full refund, provided the item is in its original condition.' },
            ].map(acc => (
              <div key={acc.id} className="border-b border-border">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors"
                  onClick={() => toggleAccordion(acc.id)}
                >
                  <span className="font-serif uppercase tracking-widest">{acc.title}</span>
                  {openAccordions.includes(acc.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openAccordions.includes(acc.id) ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* You may also like */}
      <section className="mt-32 border-t border-border pt-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-16 tracking-widest uppercase">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12">
          {CATALOG.slice(1, 5).map((recommended) => (
             <div key={recommended.id} className="group flex flex-col cursor-pointer">
               <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                 <img 
                   src={`https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop`} 
                   alt={recommended.name}
                   className="w-full h-full object-cover transition-opacity duration-500"
                 />
                 <img 
                   src={`https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=400&auto=format&fit=crop`} 
                   alt={`${recommended.name} worn`}
                   className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <Link to={`/product/${recommended.id}`} className="block w-full py-3 bg-white/90 backdrop-blur-sm text-center text-primary uppercase text-[10px] font-bold tracking-widest hover:bg-primary hover:text-white transition-colors">
                     View Product
                   </Link>
                 </div>
               </div>
               <div className="flex flex-col flex-1 text-center items-center">
                 <Link to={`/product/${recommended.id}`} className="font-serif uppercase tracking-widest text-sm mb-2 hover:text-accent transition-colors line-clamp-2">
                   {recommended.name}
                 </Link>
                 <span className="mt-auto font-serif text-muted-foreground">${recommended.price}</span>
               </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
}