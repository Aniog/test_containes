import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, useCart } from '@/lib/store';
import { Star, ChevronRight, Minus, Plus, Heart, Share2, Ruler } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const containerRef = useRef(null);
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found.</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const tabs = [
    { name: 'Description', content: product.description },
    { name: 'Materials & Care', content: 'Our jewelry is crafted using recycled 18K gold-plated brass and archival-quality settings. To maintain luster, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.' },
    { name: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $75. 30-day returns accepted on unworn jewelry in original packaging. Earrings are final sale for hygiene reasons.' }
  ];

  return (
    <main ref={containerRef} className="pt-32 pb-24 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-primary transition-colors">Collection</Link>
          <ChevronRight size={10} />
          <span className="text-primary font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  className={cn(
                    "w-20 h-24 flex-shrink-0 border transition-all duration-300 bg-secondary/10",
                    activeImage === i ? "border-primary" : "border-transparent"
                  )}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
              {/* Fake thumbnails for demo */}
              {[1, 2].map(i => (
                <button key={i + 10} className="w-20 h-24 flex-shrink-0 bg-secondary/10 opacity-50 border border-transparent">
                  <img src={product.images[0]} className="w-full h-full object-cover grayscale" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-secondary/10 overflow-hidden relative group">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-sm">
                  <Heart size={18} className="text-primary" strokeWidth={1.5} />
                </button>
                <button className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-sm">
                  <Share2 size={18} className="text-primary" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-medium block">{product.category}</span>
              <h1 className="font-serif text-3xl md:text-5xl tracking-wide uppercase leading-tight">{product.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium">${product.price}</p>
                <div className="flex items-center space-x-1">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted">24 Reviews</span>
                </div>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed border-b border-border pb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-[10px] uppercase tracking-widest font-medium">Core Tone: {selectedVariant}</h4>
                <button className="text-[10px] uppercase tracking-widest text-muted flex items-center space-x-2 hover:text-primary transition-colors">
                  <Ruler size={14} />
                  <span>Size Guide</span>
                </button>
              </div>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedVariant(tone)}
                    className={cn(
                      "flex-1 py-3 text-[10px] uppercase tracking-extrawide border transition-all duration-300",
                      selectedVariant === tone ? "bg-primary text-white border-primary shadow-lg" : "border-border hover:border-primary text-muted hover:text-primary"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="flex space-x-4">
              <div className="flex items-center border border-border">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="px-4 py-4 hover:text-accent transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-sans">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-4 hover:text-accent transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => addToCart({ ...product, variant: selectedVariant }, quantity)}
                className="flex-1 bg-primary text-white py-4 text-sm uppercase tracking-extrawide hover:bg-accent transition-all duration-300 shadow-xl"
              >
                Add to Bag
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border pt-4">
              {tabs.map((tab) => (
                <div key={tab.name} className="border-b border-border py-4">
                  <button 
                    onClick={() => setActiveTab(activeTab === tab.name ? null : tab.name)}
                    className="w-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium group"
                  >
                    <span className="group-hover:text-accent transition-colors">{tab.name}</span>
                    <Plus size={14} className={cn("transition-transform duration-300", activeTab === tab.name ? "rotate-45" : "")} />
                  </button>
                  {activeTab === tab.name && (
                    <div className="py-4 text-xs text-muted leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {tab.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 border-t border-border pt-24">
           <div className="text-center mb-16">
            <h2 className="font-serif text-3xl tracking-wide uppercase">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
