import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { seedProducts } from '../lib/products';
import { useCart } from '../lib/CartContext';
import ProductCard from '../components/products/ProductCard';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const product = seedProducts.find(p => p.id === parseInt(id)) || seedProducts[0];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const tabs = [
    { title: "Description", content: "Meticulously crafted to capture the essence of effortless elegance. This signature piece features our proprietary 18K gold plating over sustainable recycled brass, finished with a high-shine polish that captures the light from every angle." },
    { title: "Materials & Care", content: "18K Gold Plated Recycled Brass. To maintain the luster of your Velmora piece, avoid contact with perfumes, lotions, and water. Clean gently with a soft, lint-free cloth after each wear." },
    { title: "Shipping & Returns", content: "Free worldwide shipping on all orders over $50. We offer a 30-day return policy for unused items in their original packaging. Gift boxing available at checkout." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
          {/* Left: Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
              {[0, 1, 2].map(idx => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={cn(
                    "min-w-20 aspect-square bg-stone-100 border transition-all",
                    activeImageIdx === idx ? "border-gold" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={product.imgId + "-thumb-" + idx}
                    data-strk-img={`gold jewelry ${product.name} portrait macro detail ${idx}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="order-1 md:order-2 flex-grow aspect-[4/5] bg-stone-100 relative overflow-hidden group">
              <img
                data-strk-img-id={product.imgId + "-main-" + activeImageIdx}
                data-strk-img={`gold jewelry ${product.name} editorial model styled detail ${activeImageIdx === 0 ? 'portrait' : 'macro'}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-32">
              <div className="mb-8">
                <div className="flex items-center gap-1 text-gold mb-4 scale-90 origin-left">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest ml-2">(12 Reviews)</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4 leading-tight">{product.name}</h1>
                <p className="text-xl md:text-2xl font-light text-stone-600 mb-6">${product.price}</p>
                <p className="text-stone-500 font-light leading-relaxed mb-8">
                  A timeless piece designed for the modern woman. Sophisticated, refined, and crafted to last a lifetime.
                </p>
              </div>

              {/* Variant Selector */}
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-4">Select Tone</span>
                <div className="flex gap-4">
                  {['gold', 'silver'].map(tone => (
                    <button
                      key={tone}
                      onClick={() => setSelectedColor(tone)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all",
                        selectedColor === tone ? "border-primary bg-primary text-white" : "border-stone-200 text-stone-500 hover:border-primary"
                      )}
                    >
                      {tone} tone
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-4">Quantity</span>
                <div className="flex items-center w-max border border-stone-200">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-stone-50 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm font-light">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-stone-50 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className="btn-premium w-full !py-6 bg-primary text-white border-primary hover:bg-gold hover:border-gold"
                >
                  Add to Bag — ${product.price * quantity}
                </button>
                <button className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-primary transition-colors py-2">
                  <Share2 size={14} />
                  Share this piece
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-stone-100">
                {tabs.map((tab, idx) => (
                  <div key={idx} className="border-b border-stone-100">
                    <button 
                      onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                      className="w-full flex justify-between items-center py-6 text-left"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em]">{tab.title}</span>
                      {activeTab === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <div className={cn(
                      "px-0 transition-all duration-300 overflow-hidden",
                      activeTab === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="text-stone-500 font-light text-sm leading-relaxed">
                        {tab.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t pt-24 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] text-muted mb-4">For the perfect pair</h2>
            <h3 className="text-3xl font-serif">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
