import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Star, Minus, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "../components/cart/CartContext";

// Extended Mock Data
const PRODUCTS = [
  { 
    id: "1", 
    name: "Vivid Aura Jewels", 
    price: 42.00, 
    category: "earrings", 
    material: "gold", 
    imgId: "prod-1-vivid",
    description: "The Vivid Aura Jewels are designed to catch the light and the eye. Featuring delicate crystal accents set in 18k gold vermeil, these ear cuffs add an unexpected edge to your everyday stack without the need for additional piercings.",
    images: ["prod-1-vivid", "prod-1-vivid-alt1", "prod-1-vivid-alt2"],
    rating: 4.8,
    reviews: 24,
    materials: "18k Gold Plated on 925 Sterling Silver. Hypoallergenic and nickel-free.",
    shipping: "Free standard shipping on all orders. Returns accepted within 30 days of delivery."
  },
  // Add fallback for others if needed, using the first product's details for simplicity
];

const RELATED = [
  { id: "3", name: "Golden Sphere Huggies", price: 38.00, imgId: "prod-3-sphere" },
  { id: "4", name: "Amber Lace Earrings", price: 54.00, imgId: "prod-4-amber" },
  { id: "6", name: "Silver Moonlight Drops", price: 48.00, imgId: "prod-6-drops" },
  { id: "12", name: "Double Hoop Earrings", price: 46.00, imgId: "prod-12-hoop" },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(PRODUCTS[0]); // Default to first for mock
  const [selectedVariant, setSelectedVariant] = useState(product?.material || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // In a real app, fetch product by ID
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) setProduct(found);
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {
          console.log("ImageHelper init failed");
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product, activeImage]);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant: selectedVariant,
    });
  };

  return (
    <div ref={containerRef} className="pt-24 min-h-screen bg-background pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs tracking-widest uppercase text-muted-foreground mb-8 font-sans">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 shrink-0">
              {product.images.map((imgId, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] md:w-full flex-shrink-0 w-20 bg-secondary border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-border'}`}
                >
                  <img
                    data-strk-img-id={`thumb-img-${idx}`}
                    data-strk-img={`[product-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="object-cover w-full h-full text-[10px]"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-secondary relative">
              <img
                data-strk-img-id={`main-img`}
                data-strk-img={`[product-title] [product-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="object-cover w-full h-full text-[10px]"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 pt-4 md:pt-10 max-w-lg">
            <h1 id="product-title" className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-foreground mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-primary">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                {product.rating % 1 !== 0 && <Star size={14} fill="currentColor" className="opacity-50" />}
                <span className="ml-2 text-muted-foreground text-xs font-sans tracking-wide">({product.reviews})</span>
              </div>
            </div>

            <p id="product-desc" className="text-muted-foreground font-sans font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8 border-t border-border pt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-foreground font-medium">Metal Finish</span>
                <span className="text-xs capitalize text-muted-foreground font-sans">{selectedVariant}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedVariant("gold")}
                  className={`w-1/2 py-3 text-xs uppercase tracking-widest font-sans border transition-all ${selectedVariant === "gold" ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground text-muted-foreground'}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#d4af37] mr-2 align-middle"></span>
                  18k Gold
                </button>
                <button 
                  onClick={() => setSelectedVariant("silver")}
                  className={`w-1/2 py-3 text-xs uppercase tracking-widest font-sans border transition-all ${selectedVariant === "silver" ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground text-muted-foreground'}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#c0c0c0] mr-2 align-middle"></span>
                  Silver
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border">
                <button
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-sans">{quantity}</span>
                <button
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none text-sm tracking-widest uppercase transition-colors"
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full font-sans">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-primary">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-primary">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.materials}
                  <br /><br />
                  To maintain the finish of your jewelry, avoid prolonged exposure to water, perfumes, and lotions. Store in a cool, dry place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-primary">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.shipping}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-border pt-16 mt-16">
          <h2 id="related-title" className="font-serif text-3xl mb-10 text-center text-foreground uppercase tracking-wider">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {RELATED.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                  <img
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[related-title-${item.id}] [related-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 text-[10px]"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="text-center">
                  <h3 id={`related-title-${item.id}`} className="font-serif uppercase text-sm tracking-wide mb-1 text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
