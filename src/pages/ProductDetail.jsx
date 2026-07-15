import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus, Heart } from 'lucide-react';
import { products } from '@/components/home/Bestsellers';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  useEffect(() => {
    if (product) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);

  if (!product) return <div className="pt-40 text-center">Loading...</div>;

  const accordions = [
    { id: 'description', title: 'Description', content: product.description + ". Hand-finished jewelry made for everyday luxury." },
    { id: 'materials', title: 'Materials & Care', content: "18K Gold Plated brass with high-grade AAA crystals. Store in a dry place and avoid contact with moisture and perfumes." },
    { id: 'shipping', title: 'Shipping & Returns', content: "Free shipping on all orders. 30-day returns for unworn pieces in original packaging." },
  ];

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar">
            <div className="w-20 md:w-24 aspect-[2/3] shrink-0 bg-zinc-100 cursor-pointer border border-transparent hover:border-accent">
              <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[pdp-title] jewelry`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                  alt={`${product.name} thumb 1`}
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 md:w-24 aspect-[2/3] shrink-0 bg-zinc-100 cursor-pointer border border-transparent hover:border-accent">
              <img
                  data-strk-img-id={product.hoverImgId}
                  data-strk-img={`[pdp-title] jewelry model`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                  alt={`${product.name} thumb 2`}
                  className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex-1 aspect-[2/3] bg-zinc-100">
             <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-title] jewelry gold close up`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <nav className="text-[10px] uppercase tracking-widestest text-zinc-400 mb-8">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span className="text-primary">{product.name}</span>
          </nav>

          <h1 id="pdp-title" className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest uppercase mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 border-l pl-4 border-zinc-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">(24 Reviews)</span>
            </div>
          </div>

          <p className="text-zinc-600 font-light leading-relaxed mb-10 max-w-lg">
            {accordions[0].content}
          </p>

          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-4">Tone</h4>
            <div className="flex gap-4">
              {['Gold', 'Silver'].map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={cn(
                    'px-8 py-3 text-[10px] uppercase tracking-widest transition-all border',
                    selectedVariant === variant ? 'border-primary bg-primary text-white' : 'border-zinc-200 text-zinc-500 hover:border-primary hover:text-primary'
                  )}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6 border px-4 py-3 min-w-[120px] justify-between">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-zinc-400 hover:text-primary"><Minus size={18} /></button>
                <span className="text-sm border-none bg-transparent w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-zinc-400 hover:text-primary"><Plus size={18} /></button>
              </div>
              <button 
                onClick={() => addToCart(product, selectedVariant)}
                className="btn-primary flex-1 !py-4"
              >
                Add to Bag
              </button>
              <button className="p-4 border border-zinc-200 hover:border-primary transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="border-t border-zinc-200">
            {accordions.map((item) => (
              <div key={item.id} className="border-b border-zinc-100">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                  className="w-full py-5 flex justify-between items-center text-left"
                >
                  <span className="text-xs uppercase tracking-widest font-medium">{item.title}</span>
                  {activeAccordion === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeAccordion === item.id ? "max-h-40 pb-5" : "max-h-0"
                )}>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32">
        <h2 className="text-3xl font-serif text-center mb-16">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).filter(p => p.id !== product.id).map(p => (
                <div key={p.id} className="group">
                    <Link to={`/product/${p.id}`} className="block relative aspect-[2/3] overflow-hidden bg-zinc-100">
                         <img
                            data-strk-img-id={`related-${p.id}`}
                            data-strk-img={`[related-title-${p.id}] jewelry`}
                            data-strk-img-ratio="2x3"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </Link>
                    <div className="mt-4 text-center">
                        <Link to={`/product/${p.id}`} id={`related-title-${p.id}`} className="text-xs font-serif tracking-widest uppercase mb-1 block hover:text-accent">{p.name}</Link>
                        <p className="text-zinc-500 text-xs">${p.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
