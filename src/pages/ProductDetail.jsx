import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '../data/products.js';
import ProductCard from '../components/ui/ProductCard.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, ChevronUp, Star, Minus, Plus, Heart } from 'lucide-react';
import { cn } from '../lib/utils.js';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('Description');
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  const RelatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const Accordion = ({ title, content }) => (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setActiveAccordion(activeAccordion === title ? null : title)}
        className="w-full py-6 flex justify-between items-center group"
      >
        <span className="font-serif uppercase tracking-widest text-sm">{title}</span>
        {activeAccordion === title ? <Minus size={16} /> : <Plus size={16} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        activeAccordion === title ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="text-gray-500 text-sm leading-relaxed font-sans">{content}</p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[3/4] bg-[#faf9f6] overflow-hidden">
            <img
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-name] jewelry gold luxury close-up`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="aspect-[3/4] bg-[#faf9f6] cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  data-strk-img-id={`pdp-thumb-${idx}`}
                  data-strk-img={`[pdp-name] jewelry details detail-${idx}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <nav className="flex gap-2 text-[10px] items-center text-gray-400 font-sans uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-black">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-black">Shop</Link>
              <span>/</span>
              <span className="text-black">{product.name}</span>
            </nav>
            <h1 id="pdp-name" className="text-4xl md:text-5xl font-serif uppercase tracking-wider mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-2xl font-sans font-medium">${product.price}</span>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-sans text-gray-400 uppercase tracking-widest leading-none">24 Reviews</span>
              </div>
            </div>
            <p className="text-gray-500 font-sans leading-relaxed text-lg mb-8">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Tone Selector */}
            <div>
              <span className="block text-xs uppercase tracking-widest mb-4 font-sans text-gray-400">Selected Tone: {selectedTone}</span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-3 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300",
                      selectedTone === tone ? "bg-black text-white border-black" : "bg-transparent text-gray-400 border-gray-200 hover:border-gray-400 hover:text-black"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex items-center border border-gray-200 py-4 px-6 gap-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-60"><Minus size={16} /></button>
                  <span className="font-sans text-sm w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-60"><Plus size={16} /></button>
                </div>
                <button
                  onClick={() => addToCart({ ...product, price: product.price, quantity })}
                  className="flex-grow bg-black text-white font-sans uppercase tracking-widest text-xs py-5 hover:bg-black/90 transition-colors"
                >
                  Add to Cart
                </button>
                <button className="border border-gray-200 px-5 flex items-center justify-center hover:bg-gray-50 transition-colors group">
                  <Heart size={20} strokeWidth={1.5} className="group-hover:fill-black transition-all" />
                </button>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-8 border-t border-gray-100">
            <Accordion
              title="Description"
              content="Inspired by architectural forms and delicate natural patterns, this piece is designed to be worn solo for a minimalist statement or layered for an eclectic look. Each Velmora piece is thoughtfully handcrafted to ensure the highest quality."
            />
            <Accordion
              title="Materials & Care"
              content="Crafted in 18K Gold Plated recycled brass. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in wear."
            />
            <Accordion
              title="Shipping & Returns"
              content="Complimentary worldwide shipping on all orders. We offer a 30-day return policy for unused items in their original packaging. Gift boxing available at checkout."
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {RelatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
