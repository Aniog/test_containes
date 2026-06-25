import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { ChevronDown, ChevronUp, Plus, Minus, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#E5E0D8]">
      <button 
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-sans text-xs tracking-widest uppercase font-medium text-[#2D2A26]">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-[#8B857D]" /> : <ChevronDown className="w-4 h-4 text-[#8B857D]" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 font-sans text-sm text-[#8B857D] font-light leading-relaxed ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const product = PRODUCTS.find((p) => p.id === id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== id && p.category === product?.category).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState("gold");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#FAF9F5]">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="text-[#A68D47] border-b border-[#A68D47]">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, { tone: selectedTone });
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 lg:pt-32 pb-20" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 font-sans-sans text-xs tracking-widest uppercase text-[#8B857D] hover:text-[#2D2A26] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0 hide-scrollbar">
               {[1, 2, 3].map((num) => (
                 <div key={num} className="w-20 md:w-full aspect-[3/4] bg-[#E5E0D8] cursor-pointer border border-transparent hover:border-[#A68D47] transition-colors opacity-70 hover:opacity-100 flex-shrink-0">
                   <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={`${product.name} thumbnail ${num}`}
                      data-strk-img-id={`prod-${product.imgId}-thumb-${num}`}
                      data-strk-img={`[product-title] angle ${num}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                    />
                 </div>
               ))}
            </div>

            {/* Main Image */}
            <div className="w-full aspect-[3/4] bg-[#E5E0D8] relative">
               <img
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  alt={product.name}
                  data-strk-img-id={`prod-${product.imgId}-main`}
                  data-strk-img={`[product-title] high quality jewelry rendering`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col max-w-md">
            
            {/* Title & Price */}
            <div className="mb-8">
              <h1 id="product-title" className="font-serif text-3xl md:text-4xl text-[#2D2A26] tracking-widest uppercase mb-4">
                {product.name}
              </h1>
              <div className="text-2xl text-[#2D2A26] tracking-wide mb-4">
                ${product.price}
              </div>
              
              {/* Reviews */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#A68D47]">
                   {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-sans text-xs text-[#8B857D]">({product.reviews} reviews)</span>
              </div>
              
              <p className="font-sans font-light text-sm text-[#8B857D] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="mb-10 space-y-6">
              
              {/* Tone */}
              <div>
                <span className="block font-sans text-xs tracking-widest uppercase mb-3 text-[#2D2A26] font-medium">
                  Tone: {selectedTone}
                </span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedTone("gold")}
                    className={`px-6 py-3 border font-sans text-xs tracking-wider uppercase transition-colors ${
                      selectedTone === "gold" 
                        ? "border-[#2D2A26] bg-[#2D2A26] text-[#FAF9F5]" 
                        : "border-[#E5E0D8] text-[#8B857D] hover:border-[#2D2A26]"
                    }`}
                  >
                    18k Gold
                  </button>
                  <button 
                    onClick={() => setSelectedTone("silver")}
                    className={`px-6 py-3 border font-sans text-xs tracking-wider uppercase transition-colors ${
                      selectedTone === "silver" 
                        ? "border-[#2D2A26] bg-[#2D2A26] text-[#FAF9F5]" 
                        : "border-[#E5E0D8] text-[#8B857D] hover:border-[#2D2A26]"
                    }`}
                  >
                    Silver
                  </button>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 items-end">
                <div className="w-1/3">
                  <span className="block font-sans text-xs tracking-widest uppercase mb-3 text-[#2D2A26] font-medium">
                    Quantity
                  </span>
                  <div className="flex items-center justify-between border border-[#E5E0D8] h-12 px-4 rounded-sm bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#8B857D] hover:text-[#2D2A26]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-sans font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-[#8B857D] hover:text-[#2D2A26]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#A68D47] text-white hover:bg-[#Cbb26A] h-12 font-sans text-xs tracking-widest uppercase font-medium transition-colors rounded-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-b border-[#E5E0D8]">
              <Accordion title="Description" defaultOpen={true}>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care Instructions:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free standard shipping on all worldwide orders over $100.</p>
                <p>We accept returns in their original condition within 30 days of receipt.</p>
              </Accordion>
            </div>
            
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#E5E0D8]">
            <h2 className="font-serif text-3xl text-[#2D2A26] tracking-widest uppercase mb-12 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                 <div key={p.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-[#E5E0D8] mb-4 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={p.name}
                      data-strk-img-id={`rel-${p.imgId}`}
                      data-strk-img={`[rel-item-${p.id}-name] jewelry isolated`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <Link to={`/product/${p.id}`} className="block text-center mt-4">
                    <h3 id={`rel-item-${p.id}-name`} className="font-serif text-base tracking-wide mb-1 text-[#2D2A26]">{p.name}</h3>
                    <p className="font-sans text-[#8B857D] text-sm">${p.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
