import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../lib/data';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronDown, Share2, Heart, Truck, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    toast.success(`${product.name} added to cart`);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-muted overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] [pdp-cat] main view luxury jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors">
                <Heart size={20} className="text-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    data-strk-img-id={`pdp-alt-${product.id}-${i}`}
                    data-strk-img={`[pdp-title] detail view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p id="pdp-cat" className="text-xs uppercase tracking-[0.3em] text-accent font-medium">{product.category}</p>
              <h1 id="pdp-title" className="font-serif text-4xl md:text-5xl uppercase tracking-widest">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <p className="text-2xl font-light">${product.price}</p>
                <div className="flex items-center space-x-1 text-accent border-l border-border pl-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest ml-1">(24 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold">Select Tone: {selectedVariant}</span>
              <div className="flex space-x-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                      selectedVariant === variant
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-white text-foreground border-border hover:border-accent"
                    )}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-border h-14 w-full sm:w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-muted transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-muted transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                 onClick={handleAddToCart}
                 className="flex-1 bg-primary text-primary-foreground h-14 uppercase tracking-[0.2em] font-bold hover:bg-black transition-all hover:tracking-[0.25em]"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-12">
              {[
                { title: 'Materials & Care', content: 'Our pieces are handcrafted in 18K Gold Plated Brass, designed with longevity and sensitive skin in mind. To maintain its luster, avoid contact with water, heavy creams, and perfumes.' },
                { title: 'Shipping & Returns', content: 'Enjoy complimentary worldwide shipping on all orders over $75. We accept returns and exchanges on all items within 30 days of delivery, provided they are in their original condition and packaging.' },
                { title: 'Sustainability', content: 'We prioritize ethical sourcing and small-batch production to minimize waste. Our packaging is 100% recyclable and FSC certified.' }
              ].map((item, index) => (
                <div key={index} className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
                  >
                    {item.title}
                    <ChevronDown className={cn("transition-transform duration-300", activeAccordion === index && "rotate-180")} size={16} />
                  </button>
                  <div className={cn(
                    "transition-all duration-500 ease-in-out text-sm text-muted-foreground font-light leading-relaxed",
                    activeAccordion === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4">
               <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Truck size={16} />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <RotateCcw size={16} />
                    <span>Easy Returns</span>
                  </div>
               </div>
               <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent">
                 <Share2 size={16} />
                 <span>Share</span>
               </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="font-serif text-3xl mb-12 italic text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group space-y-4">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-title-${p.id}] luxury jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 id={`related-title-${p.id}`} className="font-serif text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="text-sm font-light">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
