import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../lib/data";
import { useCart } from "../lib/CartContext";
import ProductCard from "../components/ProductCard";
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";
import { useStrkImages } from "../lib/useStrkImages";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const { addToCart } = useCart();
  const containerRef = useStrkImages();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return (
    <div className="pt-40 pb-24 text-center">
      <h2 className="font-serif text-3xl">Product Not Found</h2>
      <Link to="/shop" className="mt-6 inline-block border-b border-brand-ebony pb-1 uppercase tracking-widest text-xs font-bold">Back to Shop</Link>
    </div>
  );

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Gallery */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="hidden md:flex flex-col gap-4 w-20">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-[3/4] bg-gray-50 overflow-hidden cursor-pointer">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name] [pdp-cat] detail view ${i === 1 ? 'macro' : 'lifestyle'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumb ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-gray-50 overflow-hidden">
               <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name] [pdp-cat] luxury gold jewelry editorial model`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <p id="pdp-cat" className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">
              {product.category} • {product.subCategory}
            </p>
            <h1 id="pdp-name" className="font-serif text-4xl md:text-5xl uppercase tracking-[0.2em] text-brand-ebony mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <span className="text-2xl font-medium text-brand-ebony">
                ${product.price.toFixed(2)}
              </span>
              <div className="h-4 w-[1px] bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="flex gap-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className={cn("w-3 h-3 fill-current", s > Math.round(product.rating) && "fill-none")} />)}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {product.reviews} Reviews
                </span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-10 mb-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Select Finish</h4>
                <div className="flex gap-4">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={cn(
                        "px-8 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                        selectedVariant === v 
                          ? "bg-brand-ebony text-white border-brand-ebony shadow-lg" 
                          : "bg-white text-muted-foreground border-gray-200 hover:border-brand-gold hover:text-brand-ebony"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Quantity</h4>
                <div className="flex items-center border border-gray-200 w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-8 py-3 text-sm font-medium w-16 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                for(let i=0; i<quantity; i++) addToCart(product, selectedVariant);
              }}
              className="w-full bg-brand-ebony text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-brand-gold transition-luxury shadow-xl mb-12"
            >
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="border-t border-gray-100 flex flex-col">
              {[
                { id: "description", title: "Description", content: product.description },
                { id: "materials", title: "Materials & Care", content: product.materials + " " + product.care },
                { id: "shipping", title: "Shipping & Returns", content: "Free worldwide shipping on orders over $100. 30-day returns on all unused jewelry. Hygiene seals must be intact for earrings." }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors">{acc.title}</span>
                    {openAccordion === acc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-500",
                    openAccordion === acc.id ? "max-h-40 pb-6" : "max-h-0"
                  )}>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-serif text-brand-ebony mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
