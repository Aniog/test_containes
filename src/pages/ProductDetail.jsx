import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useStore } from "@/store/useStore";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STRK_PLACEHOLDER } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addToCart = useStore((state) => state.addToCart);
  
  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || "Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0]);
      setQuantity(1);
      setActiveImage(0);
      window.scrollTo(0, 0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif mb-4">Product not found</h2>
        <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedTone);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="text-xs tracking-widest uppercase text-muted-foreground mb-8 font-serif">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-[600px] md:h-[800px]">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-auto md:w-24 flex-shrink-0 hide-scrollbar">
            {product.images?.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(idx)}
                className={`w-20 md:w-full aspect-square border ${
                  activeImage === idx ? "border-foreground" : "border-transparent"
                } relative overflow-hidden`}
              >
                <img
                  src={STRK_PLACEHOLDER}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-muted relative overflow-hidden">
            {product.images?.[activeImage] && (
              <img
                key={activeImage} // Force re-render for transition
                src={STRK_PLACEHOLDER}
                data-strk-img-id={product.images[activeImage].id}
                data-strk-img={product.images[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 id={`prod-title-${product.id}`} className="font-serif text-3xl lg:text-4xl uppercase tracking-widest md:tracking-[0.1em] mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center text-gold">
                <Star className="fill-current w-4 h-4" />
                <span className="text-sm font-medium text-foreground ml-2">{product.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
              </div>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest font-serif mb-4 flex justify-between">
              <span>Metal Color</span>
              <span className="text-muted-foreground">{selectedTone}</span>
            </h3>
            <div className="flex gap-4">
              {product.tone.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTone(t)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedTone === t ? "border-foreground" : "border-transparent"
                  } flex items-center justify-center p-0.5`}
                  title={t}
                >
                  <span 
                    className={`w-full h-full rounded-full ${
                      t === "Gold" ? "bg-[#d4af37]" : 
                      t === "Silver" ? "bg-[#c0c0c0]" : "bg-[#b76e79]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-10">
            <div className="flex items-center border border-border h-14">
              <button
                className="w-12 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium font-serif">
                {quantity}
              </span>
              <button
                className="w-12 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="flex-1 h-14 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-sm rounded-none font-serif"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="font-serif uppercase tracking-widest text-sm hover:no-underline hover:text-gold transition-colors">
                Description
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-2 pb-6">
                <p>{product.description}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Style: Modern Demi-Fine</li>
                  <li>Weight: Lightweight for everyday wear</li>
                  <li>Hypoallergenic & Nickel-Free</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials">
              <AccordionTrigger className="font-serif uppercase tracking-widest text-sm hover:no-underline hover:text-gold transition-colors">
                Materials & Care
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-2 pb-6">
                <p className="mb-4"><strong>Material:</strong> {product.material}</p>
                <p>To extend the life of your jewelry, avoid swimming, sweating, and high humidity. Store in the provided pouch when not in use. Clean gently with a soft cloth.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="font-serif uppercase tracking-widest text-sm hover:no-underline hover:text-gold transition-colors">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-2 pb-6">
                <p className="mb-2"><strong>Free standard shipping on all orders.</strong></p>
                <p>We accept returns within 30 days of the delivery date. Items must be unworn and in original packaging.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-serif mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="aspect-square bg-muted relative mb-4 overflow-hidden">
                  {rp.images?.[0] && (
                    <img
                      src={STRK_PLACEHOLDER}
                      data-strk-img-id={rp.images[0].id}
                      data-strk-img={rp.images[0].query}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 id={`rel-title-${rp.id}`} className="font-serif text-sm uppercase tracking-widest mb-1">{rp.name}</h3>
                    <p className="text-sm font-light text-muted-foreground">${rp.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;