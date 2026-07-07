import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCartStore } from "../store/cartStore";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Minus, Plus } from "lucide-react";

// Mock data (would fetch from API in real app)
const products = [
  { id: "1", name: "Vivid Aura Jewels", price: 42, type: "earrings", description: "Elegant gold ear cuffs featuring a delicate crystal accent. These statement pieces grip the ear without requiring a piercing, adding an effortless edge to your everyday look.", materials: "18k gold plated sterling silver, cubic zirconia", dimensions: "12mm diameter" },
  { id: "2", name: "Majestic Flora Nectar", price: 68, type: "necklace", description: "A stunning multicolor floral crystal necklace that captures the essence of spring. Delicately suspended on a fine gold chain, it's the perfect centerpiece for any neckline.", materials: "18k gold plated brass, Austrian crystals", dimensions: "16\" chain with 2\" extender" },
  { id: "3", name: "Golden Sphere Huggies", price: 38, type: "huggies", description: "Chunky gold dome huggie earrings that offer maximum impact with minimal effort. Their hollow construction makes them surprisingly lightweight for all-day wear.", materials: "18k gold plated brass", dimensions: "14mm diameter, 6mm thick" },
  { id: "4", name: "Amber Lace Earrings", price: 54, type: "earrings", description: "Textured gold filigree drop earrings reminiscent of vintage lace. These intricate beauties catch the light from every angle, bringing warm radiance to your face.", materials: "18k gold plated sterling silver", dimensions: "32mm drop length" },
  { id: "5", name: "Royal Heirloom Set", price: 95, type: "set", description: "A beautifully curated gift set featuring our best-selling pendant necklace and matching stud earrings. Arrives in our signature velvet box, ready for gifting.", materials: "18k gold plated brass, cubic zirconia", dimensions: "Necklace: 18\", Studs: 5mm" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');

  useEffect(() => {
    // Simulate API fetch
    const foundProduct = products.find(p => p.id === id) || products[0];
    setProduct(foundProduct);
  }, [id]);

  useEffect(() => {
    if (product) {
       return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, selectedVariant]); // reload if variant changes to update images

  if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant: selectedVariant,
    });
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0">
               {[1, 2, 3].map((idx) => (
                 <button key={idx} className="w-20 md:w-full aspect-[4/5] bg-secondary/30 relative border border-transparent hover:border-border transition-colors">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={`[product-title] detail view ${idx} ${selectedVariant} tone elegant`}
                      data-strk-img-id={`prod-thumb-${product.id}-${idx}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="150"
                      alt={`${product.name} thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                    />
                 </button>
               ))}
             </div>
             {/* Main Image */}
             <div className="flex-1 aspect-[4/5] bg-secondary/30 relative">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={`[product-title] main view ${selectedVariant} tone elegant lighting studio`}
                  data-strk-img-id={`prod-main-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 md:max-w-md">
            <h1 id="product-title" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest leading-tight mb-4">{product.name}</h1>
            <p className="text-xl font-medium mb-6">${product.price}</p>
            
            <div className="flex items-center gap-1 mb-8 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
              <span className="text-sm font-sans tracking-widest text-muted-foreground ml-2">(42 reviews)</span>
            </div>

            <p className="text-muted-foreground font-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest uppercase mb-3 block">Color: <span className="text-muted-foreground">{selectedVariant === 'gold' ? '18K Gold' : 'Sterling Silver'}</span></span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`w-8 h-8 rounded-full border-2 focus:outline-none focus-visible:ring-2 ring-primary transition-all ${selectedVariant === 'gold' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Gold"
                >
                  <span className={`block w-full h-full rounded-full bg-[#E5C77A]`} />
                </button>
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`w-8 h-8 rounded-full border-2 focus:outline-none focus-visible:ring-2 ring-primary transition-all ${selectedVariant === 'silver' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Silver"
                >
                  <span className={`block w-full h-full rounded-full bg-[#E3E4E5]`} />
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-12 h-14">
              <div className="flex items-center border border-border px-4 max-w-[120px]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-primary transition-colors disabled:opacity-50" disabled={quantity <= 1}>
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase tracking-[0.2em] font-medium h-full"
              >
                Add To Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm font-medium tracking-widest uppercase hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-sm font-medium tracking-widest uppercase hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed space-y-2">
                  <p><strong>Material:</strong> {product.materials}</p>
                  <p><strong>Dimensions:</strong> {product.dimensions}</p>
                  <p className="mt-4">To preserve the integrity of your pieces, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-medium tracking-widest uppercase hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  Free standard shipping on all orders. Expedited options available at checkout. Returns are accepted within 30 days of delivery for unworn items in their original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 pt-20 border-t border-border">
          <h2 id="related-title" className="text-2xl md:text-3xl font-serif text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group block">
                <div className="relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={`[related-name-${item.id}] elegant gold jewelry dark background`}
                    data-strk-img-id={`related-img-${item.id}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="300"
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 id={`related-name-${item.id}`} className="font-serif uppercase tracking-widest text-xs md:text-sm mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}