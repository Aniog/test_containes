import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-velmora-charcoal/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-[10px] uppercase tracking-widest-extra font-medium text-left"
      >
        <span>{title}</span>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-sm text-velmora-charcoal/60 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-velmora-charcoal/40 mb-12">
          <span>Shop</span>
          <ChevronRight size={10} />
          <span>{product.category}</span>
          <ChevronRight size={10} />
          <span className="text-velmora-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Gallery */}
          <div className="space-y-4">
             <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
                <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`${product.image} [pdp-title-${product.id}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={product.name}
                />
             </div>
             <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-velmora-sand cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                      data-strk-img={`${product.image} detail close up`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`Thumbnail ${i}`}
                    />
                  </div>
                ))}
             </div>
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div className="space-y-4">
               <h1 id={`pdp-title-${product.id}`} className="text-4xl md:text-5xl font-serif uppercase tracking-widest-extra leading-tight">
                 {product.name}
               </h1>
               <div className="flex justify-between items-center">
                  <p className="text-xl font-medium">${product.price}</p>
                  <div className="flex items-center space-x-2">
                     <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" className="text-velmora-gold" />)}
                     </div>
                     <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40">24 Reviews</span>
                  </div>
               </div>
            </div>

            <p className="text-sm text-velmora-charcoal/70 leading-relaxed max-w-lg">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8">
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60">Tone</h4>
                  <div className="flex space-x-4">
                     {['gold', 'silver'].map((tone) => (
                       <button
                         key={tone}
                         onClick={() => setSelectedTone(tone)}
                         className={cn(
                           "px-8 py-2 border text-[10px] uppercase tracking-widest transition-all",
                           selectedTone === tone ? "border-velmora-charcoal bg-velmora-charcoal text-white" : "border-velmora-charcoal/10 hover:border-velmora-charcoal"
                         )}
                       >
                         {tone}
                       </button>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60">Quantity</h4>
                  <div className="flex items-center border border-velmora-charcoal/10 w-fit">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-velmora-sand transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="px-6 text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-velmora-sand transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
               </div>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full" variant="default">
              Add to Bag
            </Button>

            {/* Accordions */}
            <div className="pt-10 border-t border-velmora-charcoal/5">
               <Accordion title="Description">
                 {product.description} Elegant and versatile, this piece is designed for the modern woman who appreciates quiet luxury.
               </Accordion>
               <Accordion title="Materials & Care">
                 <p className="mb-4"><strong>Materials:</strong> {product.materials}</p>
                 <p><strong>Care:</strong> {product.care}</p>
               </Accordion>
               <Accordion title="Shipping & Returns">
                 <p className="mb-4">Free standard shipping on all worldwide orders. Usually ships within 2-3 business days.</p>
                 <p>Returns accepted within 30 days of purchase. Pieces must be in original, unworn condition with tags attached.</p>
               </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 border-t border-velmora-charcoal/5 pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <h2 className="text-3xl font-serif lowercase italic mb-12 text-center">you may also like</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
