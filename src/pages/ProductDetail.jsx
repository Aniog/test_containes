import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border/40">
      <button 
        className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
      setQuantity(1);
    }
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) return <div className="pt-32 px-6 text-center">Product not found</div>;

  const relevantProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedVariant);
    }
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row gap-16">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 flex-1">
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
            {[0, 1].map((idx) => (
              <button 
                key={idx}
                className={cn(
                  "shrink-0 w-20 aspect-[4/5] bg-muted relative overflow-hidden transition-opacity",
                  activeImage === idx ? "ring-1 ring-black" : "opacity-60 hover:opacity-100"
                )}
                onClick={() => setActiveImage(idx)}
              >
                <div 
                  className="w-full h-full"
                  data-strk-bg-id={`pdp-thumb-${product.id}-${idx}`}
                  data-strk-bg={`[pdp-name] jewelry ${product.category} ${idx === 0 ? 'main' : 'lifestyle'}`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="200"
                  style={{ 
                    backgroundSize: 'cover', 
                  }}
                />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[4/5] bg-muted relative overflow-hidden">
             <div 
                className="w-full h-full transition-all duration-700"
                data-strk-bg-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-bg={`[pdp-name] jewelry ${product.category} closeup luxury gold`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="1200"
                style={{ 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                }}
              />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl uppercase tracking-widest leading-tight">{product.name}</h1>
              <Heart className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-primary font-medium">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-3 h-3", i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted")} />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed italic">{product.description}</p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-4">Tone</h4>
            <div className="flex gap-3">
              {product.variants.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={cn(
                    "px-6 py-2 text-xs uppercase tracking-widest border transition-all",
                    selectedVariant === v ? "bg-black text-white border-black" : "border-border hover:border-black"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-4">Quantity</h4>
            <div className="flex items-center border border-border w-max">
              <button 
                className="p-3 hover:bg-muted transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm">{quantity}</span>
              <button 
                className="p-3 hover:bg-muted transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-5 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>

          <div className="mt-4">
            <Accordion title="Description">
              <p>Everything about this piece is designed to be timeless. Whether worn alone or layered, it brings a touch of quiet luxury to your everyday rotation.</p>
              <ul className="mt-4 list-disc pl-4 flex flex-col gap-2 italic">
                <li>Material: {product.material}</li>
                <li>Hand-finished detailing</li>
                <li>Sustainable sourcing</li>
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>Our jewelry is crafted using high-quality 18K gold plating. To maintain its beauty:</p>
              <ul className="mt-4 list-disc pl-4 flex flex-col gap-2">
                <li>Keep away from moisture and humidity</li>
                <li>Store in a cool, dry place</li>
                <li>Avoid contact with perfumes and cosmetics</li>
              </ul>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Free worldwide shipping on orders over $150. Returns accepted within 30 days of delivery for unworn pieces.</p>
            </Accordion>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-serif">You May Also Like</h2>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">Shop All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relevantProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
