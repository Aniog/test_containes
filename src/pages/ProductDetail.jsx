import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { Star, ChevronRight, ChevronDown, Plus, Minus, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedFinish, setSelectedFinish] = useState('gold');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) return <div>Product not found</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.materials },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns on unworn items. Hypoallergenic and nickel-free.' }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 mb-12">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Left: Images */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
             {product.images.map((img, idx) => (
                <div key={idx} className="aspect-[3/4] bg-muted overflow-hidden">
                   <img
                     data-strk-img-id={`detail-img-${product.id}-${idx}`}
                     data-strk-img={`[detail-name] [detail-category] details view ${idx}`}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="800"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={product.name}
                     className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                   />
                </div>
             ))}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
               <p id="detail-category" className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">{product.category}</p>
               <h1 id="detail-name" className="text-4xl md:text-5xl font-light italic tracking-tight">{product.name}</h1>
               <div className="flex items-center justify-between">
                 <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
                 <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3", i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-gray-200")} />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">({product.reviews} reviews)</span>
                 </div>
               </div>
            </div>

            <p className="text-gray-600 font-light leading-relaxed">{product.description}</p>

            {/* Finish Selector */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400">Finish: <span className="text-foreground capitalize">{selectedFinish}</span></p>
              <div className="flex space-x-4">
                <button
                   onClick={() => setSelectedFinish('gold')}
                   className={cn(
                     "px-6 py-2 text-[10px] uppercase tracking-widest font-medium border transition-all",
                     selectedFinish === 'gold' ? "border-foreground bg-foreground text-white" : "border-gray-200 text-gray-400"
                   )}
                >
                  18K Gold
                </button>
                <button
                   onClick={() => setSelectedFinish('silver')}
                   className={cn(
                     "px-6 py-2 text-[10px] uppercase tracking-widest font-medium border transition-all",
                     selectedFinish === 'silver' ? "border-foreground bg-foreground text-white" : "border-gray-200 text-gray-400"
                   )}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="flex items-center border border-gray-200 px-4 py-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-gray-400 hover:text-foreground">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-gray-400 hover:text-foreground">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-[#1A1A1A] text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all duration-500"
                >
                  Add to Bag
                </button>
                <button className="p-4 border border-gray-200 hover:border-gray-400 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-8 border-t border-gray-100">
               {accordions.map((item) => (
                 <div key={item.id} className="border-b border-gray-100 italic">
                    <button
                      onClick={() => setActiveTab(activeTab === item.id ? '' : item.id)}
                      className="w-full py-4 flex justify-between items-center group font-serif"
                    >
                      <span className="uppercase tracking-widest text-xs font-medium group-hover:text-accent transition-colors">{item.title}</span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeTab === item.id && "rotate-180")} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      activeTab === item.id ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    )}>
                       <p className="text-xs text-gray-500 leading-relaxed font-light">{item.content}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-gray-100">
           <div className="space-y-4 mb-16 text-center">
             <h2 className="text-3xl font-light italic">Complete the Look</h2>
             <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium font-sans">Pairs perfectly with your choice</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
