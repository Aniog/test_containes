import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductBySlug, fetchBestsellers } from '../api/products';
import { formatPrice, cn } from '../lib/utils';
import { Star, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold group-hover:text-accent transition-colors">{title}</span>
        <ChevronDown size={14} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm text-zinc-500 font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('18K Gold');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
        const bestsellers = await fetchBestsellers();
        setRelated(bestsellers.filter(p => p.id !== data.id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
    setQuantity(1);
  }, [slug]);

  if (loading) return <div className="pt-32 min-h-screen animate-pulse bg-white px-12" />;
  if (!product) return <div className="pt-32 text-center py-20 font-serif">Product not found.</div>;

  const { data } = product;

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="grid grid-cols-1 gap-4">
             <div className="aspect-[3/4] bg-zinc-50 overflow-hidden relative">
               <img
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[pd-main-title] jewelry model lifestyle close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={data.name}
                className="w-full h-full object-cover"
              />
             </div>
             <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="aspect-[3/4] bg-zinc-50">
                    <img
                      data-strk-img-id={`detail-img-${product.id}-${i}`}
                      data-strk-img={`[pd-main-title] jewelry detail zoom macro`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={`${data.name} detail ${i}`}
                      className="w-full h-full object-cover opacity-80"
                    />
                 </div>
               ))}
             </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <nav className="text-[10px] uppercase tracking-widest text-muted mb-8 space-x-2">
              <Link to="/shop" className="hover:text-primary transition-colors">Catalog</Link>
              <span>/</span>
              <Link to={`/shop?category=${data.category}`} className="hover:text-primary transition-colors">{data.category}</Link>
              <span>/</span>
              <span className="text-zinc-400">{data.name}</span>
            </nav>

            <h1 id="pd-main-title" className="text-3xl md:text-4xl font-serif uppercase tracking-[0.1em] mb-4">{data.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-light">{formatPrice(data.price)}</span>
              <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted">(12 Reviews)</span>
              </div>
            </div>

            <p className="text-zinc-600 font-light leading-relaxed mb-10 pb-10 border-b border-zinc-100 italic font-serif text-lg">
              {data.description}
            </p>

            <div className="space-y-8 mb-12">
              {/* Variant Selector */}
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Finish: {selectedFinish}</span>
                <div className="flex gap-3">
                  {['18K Gold', 'Sterling Silver'].map(finish => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={cn(
                        "px-6 py-2.5 text-[10px] uppercase tracking-widest border transition-all duration-300 rounded-[1px]",
                        selectedFinish === finish 
                          ? "border-primary bg-primary text-white" 
                          : "border-zinc-200 text-zinc-400 hover:border-primary hover:text-primary"
                      )}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Quantity</span>
                <div className="flex items-center border border-zinc-200 w-fit">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-zinc-50">
                    <Minus size={14} />
                  </button>
                  <span className="px-6 text-sm tabular-nums">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-zinc-50">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-primary text-white py-5 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-zinc-800 transition-all rounded-[1px] shadow-sm mb-12"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mb-12 border-t border-zinc-100">
              <AccordionItem title="Description">
                <p>Meticulously crafted with a focus on form and finish. This signature piece features premium materials designed for daily wear. Hypoallergenic and nickel-free, ensuring comfort for even the most sensitive skin.</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Base Metal: Sustainable Brass</li>
                  <li>Plating: 18K Gold Vermeil (2.5 microns)</li>
                  <li>Store in a cool, dry place when not in use.</li>
                  <li>Clean with a soft, lint-free cloth provided.</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>Free worldwide shipping on orders over $100. Delivered within 3-5 business days. 30-day effortless returns on all unworn items in original packaging.</p>
              </AccordionItem>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-4 bg-zinc-50 rounded-[1px]">
                 <Truck size={18} className="text-accent mb-2" strokeWidth={1.5} />
                 <span className="text-[8px] uppercase tracking-widest text-center leading-tight">Fast<br/>Shipping</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-zinc-50 rounded-[1px]">
                 <RotateCcw size={18} className="text-accent mb-2" strokeWidth={1.5} />
                 <span className="text-[8px] uppercase tracking-widest text-center leading-tight">30-Day<br/>Returns</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-zinc-50 rounded-[1px]">
                 <ShieldCheck size={18} className="text-accent mb-2" strokeWidth={1.5} />
                 <span className="text-[8px] uppercase tracking-widest text-center leading-tight">Lifetime<br/>Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex flex-col items-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Complete the set</span>
            <h2 className="text-3xl font-serif">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {related.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
