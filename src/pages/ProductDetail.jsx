import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, Star, ChevronDown, Heart, Share2 } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedFinish, setSelectedFinish] = useState('Gold');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: "Our pieces are handcrafted in 18K Gold Vermeil or Sterling Silver. To maintain the shine, avoid contact with perfumes, lotions, and chlorine. Store in the provided Velmora pouch when not in use." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Free worldwide shipping on orders over $100. Returns accepted within 30 days of delivery for unworn items in original packaging." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widestest text-gray-400 mb-12">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="lg:w-3/5">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="order-2 md:order-1 flex md:flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <button key={i} className="w-20 md:w-24 aspect-[3/4] bg-brand-sand border border-transparent hover:border-brand-gold transition-colors overflow-hidden">
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                      data-strk-img={`detail view ${i} [pdp-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23F5F2EA'/%3E%3C/svg%3E"
                      className="w-full h-full object-cover"
                      alt={`${product.name} view ${i}`}
                    />
                  </button>
                ))}
              </div>
              {/* Main Image */}
              <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-brand-sand overflow-hidden relative">
                <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`editorial shot [pdp-name] [pdp-category]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23F5F2EA'/%3E%3C/svg%3E"
                  className="w-full h-full object-cover"
                  alt={product.name}
                />
                <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                    <Heart size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-2/5 space-y-10">
            <div className="space-y-4">
              <p id="pdp-category" className="text-[10px] uppercase tracking-widestest text-brand-gold">{product.category}</p>
              <h1 id="pdp-name" className="text-4xl md:text-5xl font-serif leading-tight">{product.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-serif text-brand-charcoal">${product.price}</p>
                <div className="flex items-center space-x-1 text-xs text-brand-gold">
                    <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-gray-400 font-serif italic">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 font-serif text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Finish Selector */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widestest font-bold">Select Finish: <span className="font-normal text-gray-500">{selectedFinish}</span></p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(finish => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest transition-all",
                      selectedFinish === finish 
                        ? "bg-brand-charcoal text-white" 
                        : "border border-gray-200 text-gray-400 hover:border-brand-charcoal hover:text-brand-charcoal"
                    )}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6">
                    <div className="flex items-center border border-gray-200 h-14">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-12 h-full flex items-center justify-center hover:bg-brand-sand transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="w-12 text-center text-sm">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-12 h-full flex items-center justify-center hover:bg-brand-sand transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => addToCart({ ...product, quantity })}
                        className="flex-grow h-14 bg-brand-charcoal text-white text-[10px] uppercase tracking-widestest hover:bg-brand-gold transition-all duration-500"
                    >
                        Add to Bag
                    </button>
                    <button className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-brand-sand transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Accordions */}
            <div className="pt-10 border-t space-y-4">
                {accordions.map((item) => (
                    <div key={item.id} className="border-b last:border-0 pb-4">
                        <button 
                            onClick={() => setActiveTab(activeTab === item.id ? '' : item.id)}
                            className="w-full flex justify-between items-center py-4 text-[10px] uppercase tracking-widestest font-bold text-left"
                        >
                            {item.title}
                            <ChevronDown size={14} className={cn("transition-transform duration-300", activeTab === item.id && "rotate-180")} />
                        </button>
                        <div className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            activeTab === item.id ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"
                        )}>
                            <p className="text-sm text-gray-500 font-serif leading-relaxed italic">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-32 pt-24 border-t">
            <h2 className="text-3xl font-serif mb-12 text-center italic">Complete the Look</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {products.filter(p => p.id !== product.id).slice(0, 4).map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`} className="group space-y-4">
                        <div className="aspect-[3/4] bg-brand-sand overflow-hidden relative">
                            <img
                                data-strk-img-id={`related-${item.id}`}
                                data-strk-img={`related jewelry [rel-name-${item.id}]`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="400"
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <h3 id={`rel-name-${item.id}`} className="text-[10px] uppercase tracking-widestest group-hover:text-brand-gold transition-colors">{item.name}</h3>
                            <p className="text-xs text-gray-400 font-serif italic">${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
