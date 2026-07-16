import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { Minus, Plus, Star, ChevronDown, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import { ImageHelper } from '../lib/image-helper';
import strkImgConfig from '../strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return <div>Product not found</div>;

  const Accordion = ({ id, title, content }) => (
    <div className="border-b border-border">
      <button 
        onClick={() => setActiveAccordion(activeAccordion === id ? null : id)}
        className="w-full flex justify-between items-center py-6 font-serif uppercase tracking-widest text-xs"
      >
        {title}
        {activeAccordion === id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === id ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{content}</p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto shadow-sm">
      <div className="flex flex-col lg:flex-row gap-16 mb-32">
        
        {/* Left: Gallery */}
        <div className="lg:w-3/5 flex flex-col md:flex-row gap-6">
          <div className="hidden md:flex flex-col gap-4 w-24">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-muted cursor-pointer overflow-hidden border border-transparent hover:border-accent transition-colors">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  data-strk-img-id={`pdp-thumb-${i}`}
                  data-strk-img={`[product-title] jewelry view ${i}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  alt={`Thumbnail ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              data-strk-img-id="pdp-main"
              data-strk-img={`[product-title] gold jewelry on model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              alt={product.name} 
              className="w-full h-full object-cover animate-in fade-in duration-1000"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-2/5 space-y-8">
          <div>
            <nav className="flex gap-2 font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-primary">{product.category}</span>
            </nav>
            <h1 id="product-title" className="font-serif text-4xl md:text-5xl uppercase tracking-widest leading-tight mb-4">
              {product.name}
            </h1>
            <div className="flex justify-between items-center">
              <span className="font-sans text-2xl">${product.price}</span>
              <div className="flex items-center gap-2 text-accent">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="font-sans text-xs text-muted-foreground">(24 reviews)</span>
              </div>
            </div>
          </div>

          <p className="font-sans text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-6">
            <div>
              <span className="font-serif uppercase tracking-widest text-xs block mb-4">Finish: {selectedVariant}</span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-8 py-3 font-sans text-xs border transition-all ${
                      selectedVariant === v ? 'border-primary outline outline-1 outline-primary' : 'border-border text-muted-foreground hover:border-primary'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="font-serif uppercase tracking-widest text-xs block mb-4">Quantity</span>
              <div className="flex items-center border border-border w-max">
                <button 
                  className="p-4 hover:text-accent transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans">{quantity}</span>
                <button 
                  className="p-4 hover:text-accent transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => addToCart({ ...product, quantity, details: `${selectedVariant} Tone` })}
            className="w-full bg-primary text-white py-6 font-serif uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all hover:scale-[1.02]"
          >
            Add to Bag
          </button>

          <div className="pt-8 space-y-0">
            <Accordion 
              id="description" 
              title="Details & Dimensions" 
              content={product.details} 
            />
            <Accordion 
              id="care" 
              title="Materials & Care" 
              content="Our demi-fine jewelry is crafted with a base of recycled brass or sterling silver, finished with a generous layer of 18K gold. To maintain its luster, avoid contact with perfumes, lotions, and chlorine. Store in your Velmora pouch when not in use." 
            />
            <Accordion 
              id="shipping" 
              title="Shipping & Returns" 
              content="Complimentary worldwide shipping on orders over $75. 30-day returns on all unworn jewelry. Pieces must be returned in original packaging with tags intact." 
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <div>
        <h2 className="font-serif text-3xl mb-12 tracking-tight">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
