import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/config';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Minus, Plus, Star, Heart, Share2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) return (
    <div className="pt-32 pb-24 text-center min-h-screen">
      <h2 className="text-4xl font-serif mb-8">Piece not found.</h2>
      <Link to="/shop" className="btn-outline">Back to Shop</Link>
    </div>
  );

  const accordions = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description + ". Our demi-fine jewelry is designed to be lived in. Each piece is crafted with meticulous attention to detail, ensuring a premium feel and lasting shine."
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: "Base Metal: Premium Brass. Plating: 18K Yellow Gold or Rhodium. All pieces are nickel-free and hypoallergenic. To maintain shine, avoid direct contact with perfumes, lotions, and water. Store in the provided pouch."
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: "Enjoy complimentary worldwide shipping on all orders over $100. Orders are processed within 48 hours. We offer a 30-day return window for all unused jewelry in its original packaging."
    }
  ];

  const handleAdd = () => {
    addToCart(product, quantity, selectedVariant);
    toast.success(`${product.name} added to bag`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-charcoal/40 mb-12">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-charcoal transition-colors">Jewelry</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-parchment overflow-hidden rounded-sm">
              <img
                alt={product.name}
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[detail-name] close up jewelry gold luxury editorial soft lighting`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-parchment rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`thumb-img-${product.id}-${i}`}
                    data-strk-img={`jewelry gold luxury small detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 id="detail-name" className="text-3xl md:text-4xl font-serif tracking-velmora uppercase leading-tight">
                  {product.name}
                </h1>
                <div className="flex space-x-4">
                   <button className="text-charcoal/40 hover:text-charcoal transition-colors"><Heart className="w-5 h-5"/></button>
                   <button className="text-charcoal/40 hover:text-charcoal transition-colors"><Share2 className="w-5 h-5"/></button>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <p className="text-2xl font-serif text-charcoal/80">${product.price}</p>
                <div className="flex items-center space-x-2">
                   <div className="flex text-velmora-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                   </div>
                   <span className="text-[10px] uppercase tracking-widest text-charcoal/40">(48 Reviews)</span>
                </div>
              </div>
              
              <p className="text-charcoal/60 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 border-t border-velmora-divider pt-8">
              {/* Variant Selector */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Finish: {selectedVariant}</span>
                <div className="flex space-x-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-6 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300",
                        selectedVariant === variant 
                          ? "border-charcoal bg-charcoal text-white" 
                          : "border-velmora-divider hover:border-charcoal"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Quantity</span>
                <div className="flex items-center border border-velmora-divider w-32 py-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 flex justify-center py-2 hover:bg-gray-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 flex justify-center py-2 hover:bg-gray-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAdd}
                className="w-full btn-primary py-5 text-base"
              >
                Add to Bag
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-charcoal/40 pt-2">
                 <Info className="w-3 h-3" />
                 <span>Crafted in small batches. Limited availability.</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-divider pt-4">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-divider">
                  <button 
                    onClick={() => setActiveTab(activeTab === acc.id ? null : acc.id)}
                    className="w-full py-4 flex justify-between items-center text-xs uppercase tracking-velmora font-semibold text-left"
                  >
                    {acc.title}
                    <ChevronRight className={cn("w-4 h-4 transition-transform", activeTab === acc.id ? "rotate-90" : "")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeTab === acc.id ? "max-h-40 pb-6" : "max-h-0"
                  )}>
                    <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
           <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="group cursor-pointer">
                   <Link to={`/product/${p.id}`}>
                    <div className="aspect-[3/4] bg-parchment overflow-hidden rounded-sm mb-4 border border-velmora-divider/20">
                      <img
                        alt={p.name}
                        data-strk-img-id={`rel-img-${p.id}`}
                        data-strk-img={`[rel-title-${p.id}] clean luxury gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 id={`rel-title-${p.id}`} className="text-[10px] uppercase tracking-velmora font-medium mb-1 group-hover:text-velmora-gold">{p.name}</h3>
                    <p className="text-sm font-serif text-charcoal/60">${p.price}</p>
                   </Link>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
