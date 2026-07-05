import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { useProducts } from '@/lib/hooks';
import { useCartStore } from '@/lib/store';
import { Plus, Minus, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { products, loading } = useProducts();
  const addItem = useCartStore(state => state.addItem);
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [material, setMaterial] = useState('gold');

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages([], containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, products, id]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8 animate-pulse text-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8 text-center font-serif text-xl">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    useCartStore.getState().openCart();
  };

  return (
    <div ref={containerRef} className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 mb-8 text-xs tracking-widest uppercase text-muted-foreground flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden">
              <img
                alt={product.name}
                data-strk-img={product.image_prompt}
                data-strk-img-id={`detail-img-main-${product.id}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-[4/5] bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                   <img
                    alt={`${product.name} detail ${i}`}
                    data-strk-img={`${product.image_prompt} secondary angle`}
                    data-strk-img-id={`detail-img-sub-${product.id}-${i}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-1 text-primary mb-3">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-xs text-muted-foreground ml-2">(12 reviews)</span>
              </div>
              <h1 id={`detail-title-${product.id}`} className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-4 text-foreground leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-light tracking-wider text-muted-foreground mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="prose prose-sm text-foreground/80 max-w-none font-light leading-relaxed mb-8">
                <p id={`detail-desc-${product.id}`}>{product.description}</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest font-medium mb-3">Material</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setMaterial('gold')}
                    className={cn(
                      "px-6 py-2 text-sm tracking-wider uppercase border transition-colors",
                      material === 'gold' 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border text-muted-foreground hover:border-foreground"
                    )}
                  >
                    18k Gold Vermeil
                  </button>
                  <button 
                    onClick={() => setMaterial('silver')}
                    className={cn(
                      "px-6 py-2 text-sm tracking-wider uppercase border transition-colors",
                      material === 'silver' 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border text-muted-foreground hover:border-foreground"
                    )}
                  >
                    Sterling Silver
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest font-medium mb-3">Quantity</p>
                <div className="inline-flex items-center border border-border">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-4 px-8 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mb-12"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: 'Our pieces are handcrafted in recycled sterling silver and heavily plated in 18k solid gold. To protect the plating, remove your jewelry when washing your hands, swimming, exercising, cleaning and before applying any kind of personal body products. Maintain your jewelry’s shine by avoiding contact with agents such as soap, perfume, lotion, makeup, hair & cleaning products.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders. Express shipping available at checkout. We accept returns in unworn condition with original packaging within 30 days of receipt.' }
              ].map(tab => (
                <div key={tab.id} className="border-b border-border">
                  <button 
                    onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                    className="w-full py-4 flex justify-between items-center bg-transparent group"
                  >
                    <span className="font-serif tracking-widest uppercase text-left group-hover:text-primary transition-colors">{tab.title}</span>
                    <Plus className={cn(
                      "w-4 h-4 text-muted-foreground transition-transform duration-300",
                      activeTab === tab.id && "rotate-45"
                    )} />
                  </button>
                  <AnimatePresence>
                    {activeTab === tab.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 text-sm text-muted-foreground font-light leading-relaxed">
                          {tab.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 pt-20 border-t border-border bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-center mb-12">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(rel => (
                <div key={rel.id} className="group cursor-pointer">
                  <Link to={`/product/${rel.id}`} onClick={() => window.scrollTo(0,0)} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                    <img
                      alt={rel.name}
                      data-strk-img={rel.image_prompt}
                      data-strk-img-id={`rel-img-${rel.id}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <div className="text-center">
                    <h3 id={`rel-title-${rel.id}`} className="font-serif uppercase tracking-widest text-xs md:text-sm mb-1 line-clamp-1">{rel.name}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">${rel.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}