import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Star, Minus, Plus, ChevronRight } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ProductCard from "@/components/shared/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId, activeImage]);

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone?.[0] || "gold");
      setQuantity(1);
      setActiveImage(0);
      setAdded(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-brand-charcoal">Product Not Found</h1>
        <p className="mt-4 text-brand-taupe">
          The piece you’re looking for isn’t available.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAdd = () => {
    addToCart(product, quantity, selectedTone);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const thumbnails = Array.from({ length: product.images }, (_, i) => i);

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mb-8 flex items-center gap-2 text-xs text-brand-taupe">
          <Link to="/" className="hover:text-brand-charcoal">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-charcoal">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex flex-row gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {thumbnails.map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "h-20 w-20 flex-shrink-0 overflow-hidden border-2 bg-brand-cream transition-colors",
                    activeImage === i
                      ? "border-brand-charcoal"
                      : "border-transparent hover:border-brand-charcoal/30"
                  )}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-detail-title] [product-detail-tagline] ${i === 0 ? "product" : i === 1 ? "worn" : "detail"} gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-brand-cream">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-detail-title] [product-detail-tagline] gold jewelry ${activeImage === 0 ? "product" : activeImage === 1 ? "worn editorial" : "detail macro"}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-brand-gold">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm text-brand-charcoal">
                {product.rating}
              </span>
              <span className="text-sm text-brand-taupe">
                ({product.reviewCount} reviews)
              </span>
            </div>
            <h1
              id="product-detail-title"
              className="mt-3 font-serif text-4xl uppercase tracking-[0.15em] text-brand-charcoal lg:text-5xl"
            >
              {product.name}
            </h1>
            <p
              id="product-detail-tagline"
              className="mt-2 text-sm text-brand-taupe"
            >
              {product.tagline}
            </p>
            <p className="mt-5 text-2xl font-medium text-brand-charcoal">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/80">
              {product.description}
            </p>

            {product.tone.length > 1 && (
              <div className="mt-8">
                <span className="text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
                  Metal Tone
                </span>
                <div className="mt-3 flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "h-11 px-6 text-xs font-medium uppercase tracking-widest transition-all",
                        selectedTone === tone
                          ? "bg-brand-charcoal text-brand-ivory"
                          : "border border-brand-charcoal/20 bg-transparent text-brand-charcoal hover:border-brand-charcoal"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-brand-charcoal/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-brand-charcoal hover:bg-brand-cream"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-brand-charcoal hover:bg-brand-cream"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button onClick={handleAdd} className="mt-8 w-full">
              {added ? "Added to Cart" : "Add to Cart"}
            </Button>

            <div className="mt-10">
              <Accordion type="single" collapsible defaultValue="description">
                <AccordionItem value="description">
                  <AccordionTrigger value="description">
                    Description
                  </AccordionTrigger>
                  <AccordionContent value="description">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger value="materials">
                    Materials & Care
                  </AccordionTrigger>
                  <AccordionContent value="materials">
                    <p className="mb-3">
                      <strong>Materials:</strong> {product.materials}
                    </p>
                    <p>
                      <strong>Care:</strong> {product.care}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger value="shipping">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent value="shipping">
                    {product.shipping}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <section ref={ref} className="bg-brand-cream px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <h2
            className={cn(
              "mb-10 text-center font-serif text-3xl text-brand-charcoal md:text-4xl",
              isVisible && "animate-fadeUp"
            )}
          >
            You May Also Like
          </h2>
          <div
            className={cn(
              "grid grid-cols-2 gap-4 md:grid-cols-4",
              isVisible && "animate-fadeUp"
            )}
            style={{ animationDelay: isVisible ? "0.15s" : "0s" }}
          >
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
