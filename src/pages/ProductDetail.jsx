import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0]; // fallback to first product if not found
  const { addItem } = useCart();
  
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    setTone('gold');
    window.scrollTo(0,0);
  }, [product.id, product.image]);

  const handleAddToCart = () => {
    addItem(product, quantity, { tone });
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-widest text-stone-500 mb-8 md:mb-12 font-medium">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-stone-900">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0 hide-scrollbar scroll-smooth">
              {[product.image, product.hoverImage].map((img, idx) => (img ? (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className={cn(
                    "w-20 md:w-full aspect-[4/5] overflow-hidden bg-stone-100 flex-shrink-0 border transition-all duration-300",
                    activeImage === img ? "border-stone-900 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ) : null))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-stone-100 overflow-hidden relative">
              <img src={activeImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 md:py-8 flex flex-col">
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-widest leading-tight text-stone-900 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl md:text-2xl text-stone-900 font-serif">${product.price}</p>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < Math.floor(product.rating) ? "fill-current" : "text-stone-300")} />
                ))}
                <span className="text-xs text-stone-500 font-sans tracking-tight ml-2 mt-0.5">({product.reviews})</span>
              </div>
            </div>

            <p className="text-stone-600 font-light leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-6 mb-10">
              {/* Variant - Tone */}
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-stone-900 mb-3">Tone</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setTone('gold')}
                    className={cn(
                      "px-6 py-3 border text-xs tracking-widest font-semibold transition-all duration-300",
                      tone === 'gold' ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-600 hover:border-stone-900"
                    )}
                  >
                    18K GOLD
                  </button>
                  <button 
                    onClick={() => setTone('silver')}
                    className={cn(
                      "px-6 py-3 border text-xs tracking-widest font-semibold transition-all duration-300",
                      tone === 'silver' ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-600 hover:border-stone-900"
                    )}
                  >
                    SILVER
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-stone-900 mb-3">Quantity</p>
                <div className="inline-flex items-center border border-stone-200 h-12">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm tabular-nums font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 mb-12 shadow-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-200 divide-y divide-stone-200">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: product.materials + ". Avoid contact with water, perfumes, and lotions. Store in the provided pouch." },
                { id: 'shipping', title: 'Shipping & Returns', content: "Free worldwide shipping on orders over $150. Easy 30-day returns." },
              ].map((acc) => (
                <div key={acc.id} className="py-4">
                  <button 
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex items-center justify-between group"
                  >
                    <span className="text-sm uppercase tracking-widest font-semibold text-stone-900 group-hover:text-primary transition-colors">{acc.title}</span>
                    {activeAccordion === acc.id ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    activeAccordion === acc.id ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="border-t border-stone-200 pt-16 md:pt-24 mt-0">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl text-stone-900">You May Also Like</h2>
            <Link to="/collection" className="text-xs tracking-widest uppercase font-semibold text-stone-900 hover:text-primary transition-colors border-b border-stone-900 pb-1">
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(rp => (
               <div key={rp.id} className="group flex flex-col">
                 <Link to={`/product/${rp.id}`} className="relative aspect-[4/5] overflow-hidden mb-4 bg-stone-100">
                   <img src={rp.image} alt={rp.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                   <img src={rp.hoverImage || rp.image} alt={rp.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100" />
                   <button 
                     onClick={(e) => { e.preventDefault(); addItem(rp, 1, { tone: 'gold' }); }}
                     className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 py-3 text-xs uppercase tracking-widest font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white"
                   >
                     Quick Add
                   </button>
                 </Link>
                 <div className="flex-1 flex flex-col text-center">
                   <Link to={`/product/${rp.id}`}>
                     <h3 className="font-serif tracking-widest uppercase text-sm mb-1 text-stone-900 hover:text-primary transition-colors">{rp.name}</h3>
                   </Link>
                   <p className="text-stone-500 text-sm mt-1">${rp.price}</p>
                 </div>
               </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
