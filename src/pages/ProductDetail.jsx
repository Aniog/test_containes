import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronRight, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const products = [
  { id: 1, name: "Vivid Aura Jewels", description: "This meticulously crafted ear cuff features a delicate gold band accented with a shimmering crystal. Designed to sit comfortably on the cartilage, it adds a touch of effortless sparkle to any look. No piercing required.", price: 42, category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", description: "A statement piece inspired by the beauty of nature. This necklace features an intricate floral design set with multicolor crystals that catch the light from every angle. Perfect for special occasions or elevating your everyday style.", price: 68, category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", description: "These chunky dome huggies are a modern classic. Crafted from high-quality 18K gold plated brass, their smooth, reflective surface adds a sophisticated touch to your jewelry stack. Lightweight for all-day wear.", price: 38, category: "Earrings", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", description: "Exquisite drop earrings featuring a textured filigree pattern that mimics the delicate look of lace. These lightweight gold earrings offer a vintage-inspired aesthetic with a contemporary twist.", price: 54, category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", description: "The perfect gift for yourself or a loved one. This coordinated set includes our signature filigree earrings and a matching pendant necklace, elegantly presented in a Velmora signature gift box.", price: 95, category: "Sets", imgId: "prod-5" },
];

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-stone">
      <button 
        className="w-full py-6 flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="uppercase tracking-widest text-[11px] font-bold group-hover:text-brand-gold transition-colors">{title}</span>
        <ChevronDown className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} size={16} strokeWidth={1.2} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0")}>
        <div className="text-sm text-stone-500 leading-relaxed font-serif italic">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [id]);

  useEffect(() => {
    // When activeImg changes, we need to scan again to update the main image
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeImg]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: qty });
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="pt-8 pb-24 px-6 lg:px-20 animate-fade-in" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-stone-400 mb-12">
        <Link to="/" className="hover:text-brand-black">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-brand-black">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-brand-black font-semibold uppercase tracking-widest">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: Gallery */}
        <div className="lg:w-3/5 flex gap-4">
          <div className="hidden md:flex flex-col gap-4">
            {[0, 1, 2, 3].map((i) => (
              <button 
                key={i} 
                className={cn("w-20 aspect-[3/4] bg-stone-100 border transition-colors", activeImg === i ? "border-brand-black" : "border-transparent")}
                onClick={() => setActiveImg(i)}
              >
                <img 
                  data-strk-img-id={`thumb-${product.id}-${i}`}
                  data-strk-img={`[prod-title] jewelry view ${i} gold aesthetic close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                  alt={`View ${i}`}
                />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden relative">
             <img 
                key={activeImg}
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[prod-title] jewelry view ${activeImg} gold luxury high end`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover animate-fade-in"
                alt={product.name}
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                <Heart size={18} strokeWidth={1} />
              </button>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-2/5 flex flex-col">
          <header className="mb-8">
            <h1 id="prod-title" className="text-3xl lg:text-4xl font-serif tracking-widest uppercase mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-serif text-stone-600">${product.price}</span>
              <div className="flex items-center gap-1 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                <span className="text-[10px] text-stone-400 ml-1 uppercase tracking-widest">(24 Reviews)</span>
              </div>
            </div>
            <p className="text-stone-500 leading-relaxed text-sm italic font-serif">
              {product.description}
            </p>
          </header>

          <div className="flex flex-col gap-10 mb-12">
            <div>
              <h3 className="uppercase tracking-widest text-[10px] font-bold mb-4">Tone</h3>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((t) => (
                  <button 
                    key={t}
                    onClick={() => setVariant(t)}
                    className={cn(
                      "px-8 py-2 text-[10px] uppercase tracking-widest transition-all",
                      variant === t ? "bg-brand-black text-white" : "border border-brand-stone text-stone-400 hover:border-brand-black hover:text-brand-black"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="uppercase tracking-widest text-[10px] font-bold mb-2">Quantity</h3>
              <div className="flex items-center gap-8">
                <div className="flex items-center border border-brand-stone px-4 py-3">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="hover:text-brand-gold"><Minus size={16} strokeWidth={1.2}/></button>
                  <span className="w-12 text-center text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="hover:text-brand-gold"><Plus size={16} strokeWidth={1.2}/></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-brand-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={18} strokeWidth={1.2} /> Add to Bag
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Accordion title="Description">
              Meticulously designed in our studio, this piece embodies the Velmora aesthetic of quiet luxury. Each crystal is hand-set to ensure maximum brilliance and longevity.
            </Accordion>
            <Accordion title="Materials & Care">
              18K Gold Plated or Sterling Silver options. To maintain the shine, avoid contact with perfumes, lotions, and water. Store in your Velmora pouch when not in use.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. See our full policy for more details.
            </Accordion>
          </div>

          <button className="flex items-center gap-2 mt-8 text-[10px] uppercase tracking-widest text-stone-400 hover:text-brand-black transition-colors">
            <Share2 size={14} /> Share this piece
          </button>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32">
        <h2 className="text-2xl font-serif text-center mb-16 uppercase tracking-widest">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(p => p.id !== product.id).slice(0, 4).map((rel) => (
            <div key={rel.id} className="group flex flex-col items-center text-center">
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-6 w-full">
                <Link to={`/product/${rel.id}`}>
                  <img 
                    data-strk-img-id={`rel-${rel.id}`}
                    data-strk-img={`[rel-name-${rel.id}] gold jewelry editorial close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={rel.name}
                  />
                </Link>
              </div>
              <h3 id={`rel-name-${rel.id}`} className="uppercase tracking-widest text-[10px] font-bold mb-1 opacity-70">{rel.name}</h3>
              <p className="font-serif text-sm">${rel.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;