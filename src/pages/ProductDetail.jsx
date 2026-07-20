import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Accordion = ({ title, children, isOpen, setIsOpen }) => {
  return (
    <div className="border-b border-zinc-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center uppercase-spaced text-xs"
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="mt-6 text-sm text-zinc-600 font-light leading-relaxed animate-fade-in-down">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0); // 0: Description, 1: Materials, 2: Shipping

  if (!product) {
    return (
      <div className="pt-40 text-center py-24">
        <h1 className="text-3xl font-serif">Piece Not Found</h1>
        <Link to="/shop" className="mt-6 inline-block uppercase-spaced border-b border-primary pb-1">Back to Collection</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const tones = ['Gold', 'Silver'];
  const mockImages = [
    { id: 1, type: 'flatlay', query: 'gold jewelry flat lay' },
    { id: 2, type: 'model', query: 'gold jewelry model close up' },
    { id: 3, type: 'detail', query: 'gold jewelry detail craftsmanship' },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} ${product.title} added to cart`);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto no-scrollbar">
              {mockImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] flex-shrink-0 bg-secondary border transition-soft",
                    activeImage === idx ? "border-primary" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${img.id}`}
                    data-strk-img={`[product-${product.id}-title] ${img.query}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-secondary overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-${product.id}-title] ${mockImages[activeImage].query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                className="w-full h-full object-cover animate-fade-in"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.title}
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="uppercase-spaced text-[10px] text-zinc-400">{product.category}</p>
              <h1 id={`product-${product.id}-title`} className="text-3xl md:text-5xl font-serif uppercase tracking-widest">{product.title}</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-light text-zinc-900">${product.price}</span>
                <div className="flex items-center gap-1 text-primary">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs text-zinc-500 font-light">{product.rating} (12 reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-600 font-light leading-relaxed">
              {product.description} A piece that captures the essence of quiet luxury, meant to be layered or worn as a solitary statement.
            </p>

            {/* Tone Selector */}
            <div className="space-y-4">
              <span className="uppercase-spaced text-[10px] text-zinc-500">Tone: {selectedTone}</span>
              <div className="flex gap-4">
                {tones.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "flex-1 py-3 border text-[10px] uppercase-spaced transition-soft",
                      selectedTone === tone ? "border-primary bg-primary text-white" : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <span className="uppercase-spaced text-[10px] text-zinc-500">Quantity</span>
              <div className="inline-flex items-center border border-zinc-200 px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2"><Minus size={16} /></button>
                <span className="w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2"><Plus size={16} /></button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-5 uppercase-spaced text-xs hover:bg-zinc-800 transition-soft active:scale-[0.98]"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="pt-8 border-t border-zinc-200">
              <Accordion title="Description" isOpen={openAccordion === 0} setIsOpen={() => setOpenAccordion(0)}>
                <p>The {product.title} epitomizes intentional design. Crafted with a focused eye for detail, this piece is made to withstand the test of time, both in quality and style. It features a refined finish that catches the light with ogni movimento.</p>
              </Accordion>
              <Accordion title="Materials & Care" isOpen={openAccordion === 1} setIsOpen={() => setOpenAccordion(1)}>
                <p>Material: {product.material}. Our plating is extra thick to ensure longevity. To maintain its luster, avoid contact with heavy perfumes or pools. Clean with a soft, lint-free cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns" isOpen={openAccordion === 2} setIsOpen={() => setOpenAccordion(2)}>
                <p>Complimentary worldwide shipping on all orders. Returns and exchanges are accepted within 30 days of delivery. All jewelry must be returned in its original, unworn condition with Velmora packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
            <p className="uppercase-spaced text-[10px] text-zinc-500 mt-2">Curated Pairings</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
