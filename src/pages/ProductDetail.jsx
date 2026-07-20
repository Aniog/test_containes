import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { SEED_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Safe to import even if empty

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = SEED_PRODUCTS.find(p => p.id === id) || SEED_PRODUCTS[0];
  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  // Reset state when product changes
  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setOpenAccordion("description");
    window.scrollTo(0, 0);
  }, [product.id]);

  useEffect(() => {
    try {
      if (strkImgConfig) {
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    } catch (e) {
      console.log('Skipping image load');
    }
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs uppercase tracking-widest text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora-dark">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
          <span>/</span>
          <span className="text-velmora-dark truncate">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-32">
          
          {/* Image Gallery */}
          <div className="md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/5] relative bg-gray-100 md:col-span-2">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} main view`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={product.pdpImgMain}
                  data-strk-img={`[pdp-title] jewelry editorial shot`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
              </div>
              <div className="aspect-[4/5] relative bg-gray-100 hidden md:block">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail view 1`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={product.pdpImg1}
                  data-strk-img={`[pdp-title] close up detail`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
              </div>
              <div className="aspect-[4/5] relative bg-gray-100 hidden md:block">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail view 2`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={product.pdpImg2}
                  data-strk-img={`[pdp-title] worn on model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-2/5">
            <div className="sticky top-32">
              <div className="mb-8">
                <h1 id="pdp-title" className="font-serif text-3xl lg:text-4xl uppercase tracking-widest mb-4 leading-tight">{product.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xl">${product.price}</span>
                  <div className="flex gap-1 text-velmora-gold text-sm">
                    {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <span className="text-sm text-velmora-muted border-b border-velmora-muted hover:text-velmora-dark hover:border-velmora-dark cursor-pointer transition-colors">(12 Reviews)</span>
                </div>
                <p className="text-velmora-muted leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="mb-8">
                  <span className="block text-xs uppercase tracking-widest mb-3">Tone: {selectedVariant}</span>
                  <div className="flex gap-3">
                    {product.variants.map(variant => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedVariant === variant ? 'border-velmora-dark p-1' : 'border-transparent p-0 hover:border-gray-300'
                        }`}
                        aria-label={`Select ${variant} tone`}
                      >
                        <div className={`w-full h-full rounded-full ${
                          variant === 'Gold' ? 'bg-[#D4AF37]' : 'bg-[#E5E5E5]'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <div className="flex items-center border border-velmora-border w-1/3">
                  <button 
                    className="w-10 h-full flex items-center justify-center text-velmora-muted hover:text-velmora-dark transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    className="w-10 h-full flex items-center justify-center text-velmora-muted hover:text-velmora-dark transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-velmora-dark text-white hover:bg-velmora-gold transition-colors py-4 uppercase tracking-widest text-sm"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-velmora-border">
                {[
                  { id: "description", title: "Description", content: product.description },
                  { id: "materials", title: "Materials & Care", content: "Crafted from 18K gold plated brass. To maintain the luster, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use." },
                  { id: "shipping", title: "Shipping & Returns", content: "Free worldwide shipping on all orders over $100. We accept returns within 30 days of delivery in unworn condition with original packaging." }
                ].map(section => (
                  <div key={section.id} className="border-b border-velmora-border">
                    <button 
                      className="w-full py-5 flex justify-between items-center text-left text-sm uppercase tracking-widest"
                      onClick={() => toggleAccordion(section.id)}
                    >
                      {section.title}
                      {openAccordion === section.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === section.id ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-velmora-muted leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="pt-16 border-t border-velmora-border">
          <h2 id="related-title" className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-center mb-12">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
