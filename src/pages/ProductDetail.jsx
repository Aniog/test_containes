import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Plus, Minus, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { SEED_PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/home/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    const found = SEED_PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedColor(found.colors[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, color: selectedColor, quantity });
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Images */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-1 aspect-[3/4] bg-stone-50 overflow-hidden relative">
              <img 
                data-strk-img-id="pdp-main-image"
                data-strk-img={`[pdp-title] gold jewelry editorial lifestyle close-up cinematic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-32">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-shrink-0 w-24 md:w-full aspect-[3/4] bg-stone-50 border border-transparent hover:border-accent transition-colors cursor-pointer">
                  <img 
                    data-strk-img-id={`pdp-thumb-image-${i}`}
                    data-strk-img={`[pdp-title] detail view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center space-x-2 text-accent mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">4.9 (42 Reviews)</span>
              </div>
              <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif uppercase tracking-widest leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-primary">{formatPrice(product.price)}</p>
            </div>

            <p className="text-muted leading-relaxed text-sm md:text-base">
              {product.description}
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Finish: {selectedColor}</p>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-6 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all",
                        selectedColor === color 
                          ? "bg-primary text-white border-primary" 
                          : "bg-white text-muted border-stone-200 hover:border-stone-400"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Quantity</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-stone-200">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-stone-50"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-stone-50"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-accent text-white py-5 uppercase tracking-widest text-sm font-bold hover:brightness-110 transition-all shadow-lg"
            >
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-100 pt-6">
              {[
                { id: 'description', title: 'Details & Story', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: "Handcrafted in 18k gold vermeil. To maintain brilliance, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use." },
                { id: 'shipping', title: 'Shipping & Returns', content: "Enjoy free worldwide shipping on all orders. Returns are accepted within 30 days for unworn pieces in original packaging." }
              ].map((item) => (
                <div key={item.id} className="border-b border-stone-100">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeAccordion === item.id && "rotate-180")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === item.id ? "max-h-40 pb-6" : "max-h-0"
                  )}>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 opacity-60">
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[8px] uppercase tracking-widest leading-tight">Secure <br/> Payments</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-5 h-5" />
                <span className="text-[8px] uppercase tracking-widest leading-tight">Fast Free <br/> Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RefreshCw className="w-5 h-5" />
                <span className="text-[8px] uppercase tracking-widest leading-tight">30-Day <br/> Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-stone-100">
          <h2 className="text-3xl font-serif italic mb-12 text-center">Complete the Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
