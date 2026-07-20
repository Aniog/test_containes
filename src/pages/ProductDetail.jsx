import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Plus, Minus, ChevronRight, ChevronDown } from "lucide-react";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { cn } from "../lib/utils";
import ProductCard from "../components/home/ProductCard.jsx";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const Accordion = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-border">
    <button
      onClick={onToggle}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className="text-xs uppercase tracking-widest font-bold group-hover:text-accent transition-colors">
        {title}
      </span>
      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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

const ProductDetail = () => {
  const containerRef = useRef(null);
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [openAccordion, setOpenAccordion] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  });

  if (!product) return <div className="h-screen flex items-center justify-center font-serif text-2xl uppercase tracking-[0.2em]">Loading Piece...</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "flex-shrink-0 w-20 aspect-[3/4] bg-slate-100 overflow-hidden border-2 transition-all",
                      activeImage === i ? "border-accent" : "border-transparent"
                    )}
                  >
                    <img
                      data-strk-img-id={`product-thumb-${product.id}-${i}`}
                      data-strk-img={`[pd-name] luxury gold jewelry detail ${i}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                      alt={`${product.name} thumb ${i}`}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </button>
                ))}
              </div>
              {/* Main Image */}
              <div className="flex-grow aspect-[3/4] bg-slate-100 overflow-hidden shadow-sm">
                <img
                  data-strk-img-id={`product-main-${product.id}`}
                  data-strk-img={`[pd-name] luxury gold jewelry close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                  alt={product.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                {product.category} · {product.subCategory}
              </span>
              <h1 id="pd-name" className="text-4xl md:text-5xl font-serif uppercase tracking-widest leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-medium">${product.price}</span>
                <div className="flex items-center text-accent">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-[10px] text-muted-foreground ml-2 tracking-widest uppercase">(12 Reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold">Tone: {variant}</span>
              <div className="flex space-x-3">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2 border transition-all text-xs uppercase tracking-widest",
                      variant === v ? "bg-primary text-white border-primary" : "border-border hover:border-accent"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                 <div className="flex items-center border border-border">
                    <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-3 hover:bg-slate-50"><Minus size={16} /></button>
                    <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(q => q+1)} className="p-3 hover:bg-slate-50"><Plus size={16} /></button>
                 </div>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="premium-button w-full py-5 text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-[0.98] transition-all"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
              >
                {product.description} Perfection in simplicity, designed to elevate your daily ensemble.
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
              >
                {product.details} We use 18K gold plating over high-quality brass or sterling silver. To maintain its luster, avoid contact with perfume, lotions, and water. Store in its original pouch when not in use.
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
              >
                Enjoy free worldwide shipping on orders over $100. For orders under $100, a flat rate of $10 applies. We offer a 30-day return policy for unused items in their original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-24 border-t border-border mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
