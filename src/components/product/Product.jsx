import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/api/seedData';
import { useCart } from '@/components/CartContext';
import { Button } from '@/components/ui/button';
import { Star, Plus, Minus, ChevronRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('Gold');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setActiveTab('description');
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {}
  }, [id, activeTab]);

  if (!product) {
    return <div className="py-32 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product, quantity, { tone });
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
    
  if (relatedProducts.length < 4) {
    const more = products.filter(p => p.id !== product.id && !relatedProducts.includes(p));
    relatedProducts.push(...more.slice(0, 4 - relatedProducts.length));
  }

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6 text-xs uppercase tracking-widest text-muted-foreground flex gap-2 items-center">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-primary">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary">{product.name}</span>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex gap-4">
            {/* Thumbnails (desktop only) */}
            <div className="hidden md:flex flex-col gap-4 w-20 flex-shrink-0">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-[3/4] bg-secondary cursor-pointer relative overflow-hidden">
                  <img 
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={product.strkQueries[i % 2]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i+1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-secondary relative overflow-hidden">
              <img 
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={product.strkQueries[0]}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Mobile Thumbnails */}
            <div className="flex md:hidden gap-4 overflow-x-auto snap-x mt-4 w-full p-1 absolute left-0 right-0 top-full invisible">
               {/* Just simpler UI for now in mobile */}
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 md:py-10">
            <h1 id={`pdp-name-${product.id}`} className="text-3xl md:text-5xl font-serif text-primary uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex gap-4 items-center mb-6">
              <p className="text-xl text-primary/80">${product.price}</p>
              <div className="flex items-center gap-1 text-accent border-l border-border pl-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest mb-3 block">Metal / Tone</span>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setTone('Gold')}
                    className={`px-8 py-3 text-sm uppercase tracking-wider border transition-colors ${tone === 'Gold' ? 'border-primary text-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}
                  >
                    18k Gold
                  </button>
                  <button 
                    onClick={() => setTone('Silver')}
                    className={`px-8 py-3 text-sm uppercase tracking-wider border transition-colors ${tone === 'Silver' ? 'border-primary text-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}
                  >
                    Silver
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest mb-3 block">Quantity</span>
                <div className="flex items-center border border-border w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} size="lg" className="w-full mb-8">
              Add to Bag &mdash; ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-2 border-y border-border py-6 mb-8 text-center text-xs uppercase tracking-wider text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 border-x border-border">
                <ShieldCheck className="w-5 h-5" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions (Manual implementation) */}
            <div className="space-y-4">
              {/* Desciption Tab */}
              <div className="border border-border">
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center bg-secondary/50 uppercase tracking-widest text-sm"
                  onClick={() => setActiveTab(activeTab === 'description' ? '' : 'description')}
                >
                  <span className="font-medium text-primary">Details & Care</span>
                  {activeTab === 'description' ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
                {activeTab === 'description' && (
                  <div className="px-6 py-4 text-muted-foreground text-sm space-y-2">
                    <ul className="list-disc pl-4 space-y-1">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <p className="mt-4 pt-4 border-t border-border">Avoid direct contact with harsh chemicals like perfume, hairspray, and deodorant. Store in original pouch when not in use.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-secondary/30 py-24 border-t border-border mt-12">
        <div className="container mx-auto px-6">
          <h2 id="rel-title" className="text-3xl font-serif text-primary text-center mb-16">You May Also Like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <div key={rel.id} className="group relative flex flex-col">
                <Link to={`/product/${rel.id}`} className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden block">
                  <img 
                    data-strk-img-id={`rel-main-${rel.id}`}
                    data-strk-img={rel.strkQueries[0]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rel.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col text-center items-center">
                  <Link to={`/product/${rel.id}`}>
                    <h3 id={`rel-name-${rel.id}`} className="font-serif text-base tracking-wider uppercase mb-1 text-primary">{rel.name}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm">${rel.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
