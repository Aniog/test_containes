import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "@/lib/data";
import { ChevronDown, ChevronRight, Star, Minus, Plus, Share2, Heart } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-bold font-sans py-2"
      >
        {title}
        <ChevronDown size={14} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
      )}>
        <p className="text-sm text-muted-foreground leading-relaxed font-sans">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("main");
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [id, activeImage]);

  if (!product) return <div>Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 lg:pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12 animate-in fade-in duration-700" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-primary font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
        {/* Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4">
            <button 
              onClick={() => setActiveImage("main")}
              className={cn(
                "w-20 aspect-[4/5] bg-secondary overflow-hidden border transition-colors",
                activeImage === "main" ? "border-accent" : "border-transparent"
              )}
            >
              <img
                data-strk-img-id={`${product.id}-thumb-1`}
                data-strk-img={product.images.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover"
                alt="Main"
              />
            </button>
            <button 
              onClick={() => setActiveImage("hover")}
              className={cn(
                "w-20 aspect-[4/5] bg-secondary overflow-hidden border transition-colors",
                activeImage === "hover" ? "border-accent" : "border-transparent"
              )}
            >
              <img
                data-strk-img-id={`${product.id}-thumb-2`}
                data-strk-img={product.hoverImage.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover"
                alt="Detail"
              />
            </button>
          </div>
          
          {/* Big Image */}
          <div className="flex-1 aspect-[4/5] bg-secondary overflow-hidden group relative">
            <img
              data-strk-img-id={`${product.id}-hero-${activeImage}`}
              data-strk-img={activeImage === "main" ? product.images.query : product.hoverImage.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={product.name}
            />
            <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="bg-white/80 p-2.5 rounded-full shadow-sm hover:bg-white transition-colors">
                    <Heart size={18} strokeWidth={1.5} />
                </button>
                <button className="bg-white/80 p-2.5 rounded-full shadow-sm hover:bg-white transition-colors">
                    <Share2 size={18} strokeWidth={1.5} />
                </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-10 py-4">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-serif tracking-[0.1em] text-primary">{product.fullName}</h1>
            <div className="flex items-center gap-6">
                <p className="text-2xl font-sans font-medium">${product.price}</p>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-accent text-accent" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">(12 Reviews)</span>
                </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed font-sans text-sm">
            {product.description}
          </p>

          <div className="space-y-6">
             <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest font-bold">Select Tone: {selectedVariant}</p>
                <div className="flex gap-4">
                    {["Gold", "Silver"].map((v) => (
                        <button 
                            key={v}
                            onClick={() => setSelectedVariant(v)}
                            className={cn(
                                "flex-1 py-3 text-[10px] uppercase tracking-widest transition-all duration-300 border-2",
                                selectedVariant === v ? "border-primary bg-primary text-white" : "border-gray-100 text-muted-foreground hover:border-accent"
                            )}
                        >
                            {v} Tone
                        </button>
                    ))}
                </div>
             </div>

             <div className="flex gap-4 items-center">
                <div className="flex items-center border border-gray-100 px-4 py-3 min-w-[120px] justify-between">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1"><Minus size={16} /></button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-1"><Plus size={16} /></button>
                </div>
                <button 
                    onClick={() => {
                        for(let i=0; i<quantity; i++) addToCart(product, selectedVariant);
                    }}
                    className="flex-1 bg-accent text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-all duration-300"
                >
                    Add to Bag
                </button>
             </div>
          </div>

          <div className="pt-10 space-y-2">
            <Accordion title="Description" content={product.description} />
            <Accordion title="Materials & Care" content={product.materials + ". " + product.care} />
            <Accordion title="Shipping & Returns" content="Free worldwide shipping on orders over $100. Hassle-free 30-day returns on all unused items in their original packaging." />
          </div>
        </div>
      </div>

      {/* Suggested */}
      <div className="pt-24 border-t border-gray-50">
        <h3 className="text-2xl font-serif italic mb-12">You may also like</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
                <div key={p.id} className="group flex flex-col gap-4">
                    <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden">
                        <img
                          data-strk-img-id={`rel-${p.id}`}
                          data-strk-img={p.images.query}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={p.name}
                        />
                    </Link>
                    <div className="text-center space-y-1">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold">{p.name}</h4>
                        <p className="text-xs text-muted-foreground">${p.price}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
