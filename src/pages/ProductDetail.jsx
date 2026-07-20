import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/products';
import { useCart } from '../lib/CartContext';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { toast } from 'sonner';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMetal, setSelectedMetal] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    const p = products.find(item => item.id === parseInt(id));
    if (p) {
      setProduct(p);
      setSelectedImage(0);
      setQuantity(1);
    }
  }, [id]);

  if (!product) return <div className="pt-32 pb-24 text-center px-6 uppercase-widest text-xs">Finding the piece...</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`);
    setIsCartOpen(true);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials + ". " + product.care },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $150. 30-day returns on all unused items. Each piece comes in our signature sustainable packaging.' }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-zinc-100 overflow-hidden transition-all border",
                    selectedImage === idx ? "border-zinc-900" : "border-transparent"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-zinc-100 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500" 
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <header className="mb-8">
              <p className="text-[10px] uppercase-widest tracking-[0.2em] text-zinc-400 mb-4">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xl font-light text-zinc-900">${product.price}</span>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-[10px] uppercase-widest text-zinc-400 font-medium">12 Reviews</span>
              </div>
              <p className="text-zinc-600 font-light leading-relaxed">
                {product.description}
              </p>
            </header>

            {/* Selection */}
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-[10px] uppercase-widest tracking-widest font-semibold mb-4 text-zinc-400">Finish: {selectedMetal}</h3>
                <div className="flex space-x-3">
                  {['Gold', 'Silver'].map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase-widest tracking-widest transition-all",
                        selectedMetal === metal 
                          ? "bg-zinc-900 text-white" 
                          : "border border-zinc-200 hover:border-zinc-900"
                      )}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-end space-x-6">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase-widest tracking-widest font-semibold text-zinc-400">Quantity</h3>
                  <div className="flex items-center space-x-6 border border-zinc-200 px-4 py-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-60"><Minus size={14} /></button>
                    <span className="text-xs font-medium w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-60"><Plus size={14} /></button>
                  </div>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow btn-premium py-4"
                >
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-zinc-100">
              {accordions.map((acc, idx) => (
                <div key={idx} className="border-b border-zinc-100">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                    className="w-full py-5 flex items-center justify-between group"
                  >
                    <span className="uppercase-widest text-[10px] font-semibold tracking-widest group-hover:opacity-60 transition-opacity">
                      {acc.title}
                    </span>
                    {activeAccordion === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {activeAccordion === idx && (
                    <div className="pb-8 text-sm text-zinc-500 font-light leading-relaxed animate-in slide-in-from-top-2 duration-300">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif italic mb-2 tracking-tight">You may also like</h2>
            <p className="text-[10px] uppercase-widest tracking-[0.2em] text-zinc-400">Complete the Look</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
