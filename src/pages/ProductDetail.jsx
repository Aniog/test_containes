import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/home/ProductCard';
import { Star, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif">Product Not Found</h2>
        <Link to="/collections" className="text-accent underline">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-none w-20 aspect-[3/4] overflow-hidden border ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-60'}`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`${img.query} thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-secondary relative">
              <img
                data-strk-img-id="pdp-main-image"
                data-strk-img="[pdp-desc] [pdp-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <header className="mb-8">
              <span className="text-[10px] uppercase-extra text-accent mb-4 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase-extra tracking-widest leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-serif">${product.price}.00</p>
                <div className="flex items-center gap-1">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-[10px] uppercase-widest opacity-40 ml-2">(12 Reviews)</span>
                </div>
              </div>
            </header>

            <p className="text-base opacity-60 leading-relaxed mb-10 pb-8 border-b border-border">
              {product.description}
            </p>

            <div className="mb-10">
              <span className="text-[10px] uppercase-extra mb-4 block">Finish: {variant}</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-8 py-3 text-xs uppercase-widest border transition-all ${variant === v ? 'bg-primary text-white border-primary' : 'border-border opacity-60 hover:opacity-100'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center border border-border px-4 py-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-accent transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-accent transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white text-[11px] uppercase-extra py-4 flex items-center justify-center gap-3 hover:bg-accent transition-all group"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Bag
              </button>
            </div>

            <div className="space-y-2">
              <ProductAccordion 
                title="Description" 
                content={product.description} 
              />
              <ProductAccordion 
                title="Materials & Care" 
                content={product.details + "\n\nTo maintain the brilliance of your jewelry, avoid contact with perfumes, lotions, and water. Wipe gently with a soft cloth after wearing."} 
              />
              <ProductAccordion 
                title="Shipping & Returns" 
                content="Standard Shipping: 3-5 business days. Free on all orders.\n\nReturns: We offer a 30-day return policy for all items in their original condition and packaging." 
              />
            </div>
          </div>
        </div>

        {/* You may also like */}
        <section className="pt-24 border-t border-border">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] uppercase-extra text-accent mb-4 block">Personal Curation</span>
            <h2 className="text-4xl font-serif">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
