import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';
import { Star, ChevronDown, ChevronRight, Minus, Plus, Heart, Share2 } from 'lucide-react';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id == id);
  const mainImgId = product ? "p-detail-main-" + product.id : "";
  const mainImgQuery = "[p-detail-title] [p-detail-desc] jewelry";
  
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.data.variants?.[0] || 'Gold Tone');
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) return (
    <div className="h-screen flex items-center justify-center font-serif text-2xl italic">
      Collection not found...
    </div>
  );

  const fields = product.data;
  const relatedProducts = products.filter(p => p.id != id && p.data.category === fields.category).slice(0, 4);

  const accordionItems = [
    { 
      id: 'description', 
      title: 'Description', 
      content: fields.description || "A statement of modern luxury, this piece embodies the Velmora aesthetic with its refined silhouette and premium finish. Designed to be worn daily, it transitions seamlessly from daytime elegance to evening sophistication."
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: fields.material || "Crafted with 18K Gold Plated Brass. To maintain the life of your jewelry, avoid contact with perfumes, lotions, and water. Store in a cool, dry place."
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: "Free standard shipping on all orders. Returns are accepted within 30 days of purchase in original condition. Gift packaging included with every order."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-12">
        <Link to="/" className="hover:text-[#C5A059]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-[#C5A059]">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#1A1A1A]">{fields.category}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide md:w-20 lg:w-24 shrink-0">
            {[1, 2, 3].map((_, idx) => {
              const thumbImgId = "p-detail-thumb-" + id + "-" + idx;
              return (
                <div key={idx} className="aspect-[2/3] w-20 md:w-full bg-gray-100 flex-shrink-0 cursor-pointer border border-transparent hover:border-[#C5A059] transition-colors">
                  <img
                    data-strk-img-id={thumbImgId}
                    data-strk-img={mainImgQuery}
                    data-strk-img-ratio="2x3"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${fields.name} - thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 aspect-[2/3] bg-gray-100 overflow-hidden">
             <img
              data-strk-img-id={mainImgId}
              data-strk-img={mainImgQuery}
              data-strk-img-ratio="2x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={fields.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 id="p-detail-title" className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] mb-6 leading-tight">
              {fields.name}
            </h1>
            <div className="flex items-center justify-between mb-8">
              <p className="text-2xl font-light">{formatPrice(fields.price)}</p>
              <div className="flex items-center space-x-2">
                <div className="flex text-[#C5A059]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light border-l border-gray-200 pl-3">24 Reviews</span>
              </div>
            </div>
            <p id="p-detail-desc" className="text-gray-500 font-light leading-relaxed text-sm mb-10 pb-10 border-b border-[#E5E5E5]">
              {accordionItems[0].content}
            </p>
          </div>

          <div className="space-y-10">
            {/* Variant Selector */}
            {fields.variants && fields.variants.length > 0 && (
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] mb-4 text-gray-500">Tone: <span className="text-[#1A1A1A]">{selectedVariant}</span></span>
                <div className="flex space-x-3">
                  {fields.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-widest border transition-all duration-300",
                        selectedVariant === variant ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-[#E5E5E5] text-gray-500 hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="flex flex-col space-y-4">
               <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">Quantity</span>
              <div className="flex space-x-4">
                <div className="flex h-12 items-center border border-[#E5E5E5] px-2">
                  <button className="p-2 hover:text-[#C5A059]" onClick={() => quantity > 1 && setQuantity(quantity - 1)}><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm">{quantity}</span>
                  <button className="p-2 hover:text-[#C5A059]" onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></button>
                </div>
                <button
                  onClick={() => addToCart(product, selectedVariant, quantity)}
                  className="flex-1 bg-[#1A1A1A] text-[#F9F7F2] h-12 uppercase tracking-[0.3em] text-[10px] hover:bg-[#C5A059] transition-all duration-500 shadow-xl"
                >
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Utils */}
            <div className="flex space-x-8 pt-4">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors">
                <Heart className="w-4 h-4" />
                <span>Add to wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share Piece</span>
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-20 border-t border-[#E5E5E5]">
            {accordionItems.map((item) => (
              <div key={item.id} className="border-b border-[#E5E5E5]">
                <button
                  onClick={() => setActiveTab(activeTab === item.id ? '' : item.id)}
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <span className="font-serif text-lg uppercase tracking-widest">{item.title}</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", activeTab === item.id ? "rotate-180" : "")} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  activeTab === item.id ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"
                )}>
                  <p className="text-sm font-light text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-40">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl italic">A Perfect Pair</h2>
            <div className="w-12 h-px bg-[#C5A059] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
