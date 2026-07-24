import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/products';
import { useCart } from '@/lib/CartContext';
import { Star, Minus, Plus, ChevronRight, ChevronDown, Heart } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('Description');

  useEffect(() => {
    const p = products.find(p => p.id === parseInt(id));
    if (p) setProduct(p);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="pt-40 text-center font-serif italic py-32">Our treasures are being polished...</div>;

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `Material: ${product.materials}. Each piece is individually crafted. To maintain its brilliance, avoid contact with perfume, water, and sweat. Store in its original pouch when not in use.` },
    { title: 'Shipping & Returns', content: 'Free standard shipping on all international orders. 30-day returns on unworn pieces. Earrings are non-returnable due to hygiene reasons.' }
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-gray-400 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="hidden md:flex flex-col gap-4 order-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 aspect-[3/4] bg-muted overflow-hidden cursor-pointer border border-transparent hover:border-accent transition-all">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] jewelry closeup detail angle ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden order-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`${product.imgId}-pdp-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] professional editorial photography`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
               <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold">{product.category}</span>
               <h1 id={product.titleId} className="text-3xl md:text-4xl font-serif tracking-[0.1em] uppercase text-primary font-medium">
                 {product.name}
               </h1>
               <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-medium tracking-tight">${product.price}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#C5A059" color="#C5A059" />)}
                    <span className="text-[10px] text-gray-400 ml-2 uppercase tracking-widest">(24 Reviews)</span>
                  </div>
               </div>
            </div>

            <p id={product.descId} className="text-gray-600 font-light leading-loose italic underline-offset-8 decoration-accent/20 decoration-1 underline">
              {product.description}
            </p>

            <div className="hairline-divider" />

            {/* Selection */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold mb-4 block text-gray-400">Finish</span>
                <div className="flex gap-4">
                  {['Gold', 'Silver Tone'].map(tone => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "px-8 py-3 text-[10px] tracking-widest uppercase font-medium border transition-all duration-300",
                        selectedTone === tone ? "border-primary bg-primary text-white" : "border-gray-200 text-gray-500 hover:border-gray-400"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                <div className="flex items-center border border-gray-200 px-4 py-4 w-full sm:w-auto justify-between sm:justify-center gap-8">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-accent transition-colors"><Minus size={16} /></button>
                  <span className="w-4 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="hover:text-accent transition-colors"><Plus size={16} /></button>
                </div>
                <button
                   onClick={() => {
                     for(let i=0; i<quantity; i++) addToCart(product);
                     toast.success(`${product.name} added to bag`);
                   }}
                   className="btn-primary flex-1 py-5 text-sm w-full"
                >
                   Add to Bag
                </button>
                <button className="p-5 border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 flex flex-col border-t border-hairline">
              {accordions.map(acc => (
                <div key={acc.title} className="border-b border-hairline">
                   <button
                     onClick={() => setActiveAccordion(activeAccordion === acc.title ? '' : acc.title)}
                     className="w-full py-6 flex justify-between items-center text-left group"
                   >
                     <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-700 group-hover:text-accent transition-colors">
                       {acc.title}
                     </span>
                     <ChevronDown size={14} className={cn("transition-transform duration-300", activeAccordion === acc.title ? "rotate-180" : "")} />
                   </button>
                   {activeAccordion === acc.title && (
                     <div className="pb-8 text-sm text-gray-500 font-light leading-loose animate-in fade-in slide-in-from-top-2 duration-500">
                        {acc.content}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="pt-24 border-t border-hairline">
          <h2 className="font-serif text-3xl mb-12 tracking-tight text-center italic">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {relatedProducts.map(p => (
               <ProductCard key={p.id} product={p} />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
