import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, Heart, Minus, Plus, Share2, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/collection/ProductCard.jsx';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

const allProducts = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, description: "Our Vivid Aura ear cuff features a spray of delicate crystals catch the light from every angle. No piercing required for this stunning statement piece.", category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", price: 68, description: "A garden of crystals Bloom around your neck. This necklace combines multiple crystal shapes to mimic the organic flow of nature.", category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", price: 38, description: "The perfect chunky dome huggies for everyday effortless style. Light as air, bold in appearance.", category: "Huggies", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", price: 54, description: "Intricately textured filigree that mimics the delicate patterns of vintage lace. A modern heirloom.", category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", price: 95, description: "The ultimate gift set. Features our signature necklace paired with matching drop earrings, presented in a velvet lined box.", category: "Sets", imgId: "prod-5" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Gold");
  const [activeTab, setActiveTab] = useState("Description");
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to your bag.`);
  };

  const images = [
    { id: 1, type: "product" },
    { id: 2, type: "lifestyle" },
    { id: 3, type: "detail" },
    { id: 4, type: "packaging" },
  ];

  return (
    <div ref={containerRef} className="pt-24 min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-primary transition-colors">Jewelry</Link>
        <ChevronRight size={12} />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "flex-shrink-0 w-20 aspect-[3/4] bg-gray-50 border transition-all duration-300",
                  activeImage === idx ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img
                  data-strk-img-id={`thumb-${product.id}-${img.id}`}
                  data-strk-img={`[prod-title] ${img.type} jewelry gold`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="160"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[3/4] bg-gray-50 overflow-hidden relative group">
            <img
              data-strk-img-id={`main-img-${product.id}`}
              data-strk-img={`[prod-title] ${images[activeImage].type} jewelry gold accessory editorial model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
              alt={product.name}
              className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
              key={activeImage}
            />
            <button className="absolute top-6 right-6 p-3 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-foreground">
              <Heart size={20} className="hover:fill-red-500 hover:text-red-500 transition-all" />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-right-4 duration-1000">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2 block">{product.category}</span>
                <h1 id="prod-title" className="text-3xl md:text-5xl font-serif tracking-[0.05em] uppercase font-medium">{product.name}</h1>
              </div>
              <button className="p-2 hover:text-primary transition-colors"><Share2 size={20} /></button>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-primary text-primary" />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">48 Reviews</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 font-light font-serif leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest font-bold">Finish: {selectedFinish}</span>
              <div className="flex gap-3">
                {["Gold", "Silver"].map(fin => (
                  <button
                    key={fin}
                    onClick={() => setSelectedFinish(fin)}
                    className={cn(
                      "flex-grow py-3 px-6 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                      selectedFinish === fin ? "border-primary bg-primary/5 text-primary" : "border-gray-100 hover:border-gray-300"
                    )}
                  >
                    {fin} Finish
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest font-bold">Quantity</span>
              <div className="flex items-center border border-gray-100 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 text-center text-sm font-bold focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-black text-white py-5 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
          >
            <ShoppingBag size={18} />
            Add to Bag — ${product.price * quantity}
          </button>

          {/* Accordions */}
          <div className="flex flex-col border-t border-gray-100">
            {[
              { title: "Description", content: "Meticulously designed for everyday wear. Our jewelry is made to be lived in, layered, and loved for a lifetime." },
              { title: "Materials & Care", content: "Base Metal: High-grade brass. Finish: 18K Gold Plated or Rhodium. For long-lasting shine, avoid moisture and store in our protective pouch." },
              { title: "Shipping & Returns", content: "Free shipping on orders over $50. $10 flat rate for international deliveries. Returns accepted within 30 days of purchase." }
            ].map((tab) => (
              <div key={tab.title} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveTab(activeTab === tab.title ? "" : tab.title)}
                  className="w-full py-6 flex items-center justify-between text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors"
                >
                  {tab.title}
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeTab === tab.title && "rotate-180")} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  activeTab === tab.title ? "max-h-40 pb-6" : "max-h-0"
                )}>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{tab.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl font-serif mb-4">Complete the Look</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
