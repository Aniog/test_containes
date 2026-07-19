import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';
import { Star, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('gold');

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) return <div className="pt-32 px-12 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to bag`);
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: "Crafted in 18K Gold Plated Sterling Silver with hand-set crystals. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in a cool, dry place." },
    { title: 'Shipping & Returns', content: "Free shipping on orders over $50. 30-day money-back guarantee. Easy returns and exchanges." },
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div className="grid grid-cols-1 gap-6">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
               <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] [pdp-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-alt1-${product.id}`}
                    data-strk-img={`[pdp-title] alternative view`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
               </div>
               <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-alt2-${product.id}`}
                    data-strk-img={`wearing [pdp-title] on model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
               </div>
            </div>
          </div>

          <div className="lg:max-w-md">
            <div className="mb-8">
              <h1 id="pdp-title" className="text-3xl font-serif uppercase tracking-widest-xl mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-light text-muted-foreground">${product.price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(24 REVIEWS)</span>
                </div>
              </div>
              <p id="pdp-desc" className="text-muted-foreground leading-relaxed font-light">{product.description}</p>
            </div>

            <div className="space-y-8 mb-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-semibold">Finish</label>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedFinish('gold')}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      selectedFinish === 'gold' ? "bg-primary border-primary text-white" : "border-border/10 hover:border-primary"
                    )}
                  >
                    18K Gold
                  </button>
                  <button
                    onClick={() => setSelectedFinish('silver')}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all",
                      selectedFinish === 'silver' ? "bg-primary border-primary text-white" : "border-border/10 hover:border-primary"
                    )}
                  >
                    Silver
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-semibold">Quantity</label>
                <div className="flex items-center border border-border/10 w-32 justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-muted"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted"><Plus className="w-3 h-3" /></button>
                </div>
              </div>

              <Button onClick={handleAddToCart} className="w-full" size="lg">Add to Bag</Button>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="border-t border-border/10 pt-24">
            <h2 className="text-2xl font-serif text-center mb-16 uppercase tracking-widest">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;
