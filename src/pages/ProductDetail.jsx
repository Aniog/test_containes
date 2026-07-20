import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/common/ProductCard";
import { 
  Star, 
  Minus, 
  Plus, 
  ChevronRight,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  ShieldCheck
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState("gold");
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 block text-primary underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-12">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-black">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`relative flex-shrink-0 w-20 md:w-full aspect-[3/4] bg-secondary border transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img
                    src={img.url}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`gallery-thumb-${product.id}-${i}`}
                    data-strk-img={`[prod-title] ${i === 0 ? "jewelry product" : "jewelry detail"}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
            <div className="flex-grow aspect-[3/4] bg-secondary relative overflow-hidden">
               <img
                src={product.images[selectedImage].url}
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`gallery-main-${product.id}`}
                data-strk-img={`[prod-title] gold jewelry ${selectedImage === 0 ? "front" : "detail"}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 stroke-[1.5px]" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">
                  (24 Reviews)
                </span>
              </div>
              <h1 
                id="prod-title"
                className="text-4xl md:text-5xl font-serif uppercase tracking-wider mb-4 leading-tight"
              >
                {product.name}
              </h1>
              <p className="text-2xl font-light">${product.price}</p>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              {product.description}
            </p>

            <Separator className="mb-10 bg-border/50" />

            {/* Config options */}
            <div className="space-y-10 mb-10">
              {/* Tone Selector */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">
                  Metal Tone: <span className="text-muted-foreground font-light ml-1">{selectedTone === "gold" ? "18K Gold Plated" : "Sterling Silver"}</span>
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedTone("gold")}
                    className={`px-6 py-3 text-[10px] uppercase tracking-widest transition-all border ${
                      selectedTone === "gold" ? "border-primary bg-primary text-white" : "border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    Gold
                  </button>
                  <button
                    onClick={() => setSelectedTone("silver")}
                    className={`px-6 py-3 text-[10px] uppercase tracking-widest transition-all border ${
                      selectedTone === "silver" ? "border-primary bg-primary text-white" : "border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    Silver
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">
                  Quantity
                </span>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 px-5 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm px-6 w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 px-5 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <Button 
                onClick={() => addToCart(product, quantity)}
                className="accent-button w-full h-16 py-0 uppercase tracking-[0.3em] font-medium"
              >
                Add to Bag
              </Button>
              <div className="flex justify-center">
                <button className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-black flex items-center gap-2 transition-colors">
                  <Share2 className="w-3 h-3" />
                  Share this product
                </button>
              </div>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-border mb-12">
              <div className="flex flex-col items-center text-center gap-3">
                <Truck className="w-5 h-5 text-primary stroke-[1px]" />
                <span className="text-[9px] uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <RotateCcw className="w-5 h-5 text-primary stroke-[1px]" />
                <span className="text-[9px] uppercase tracking-widest">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary stroke-[1px]" />
                <span className="text-[9px] uppercase tracking-widest">2-Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details" className="border-b border-border">
                <AccordionTrigger className="font-serif uppercase tracking-widest text-xs hover:no-underline py-6">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                  {product.details}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-b border-border">
                <AccordionTrigger className="font-serif uppercase tracking-widest text-xs hover:no-underline py-6">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Base Metal: Sustainable recycled brass</li>
                    <li>Plating: 18K Gold Vermeil (2.5 microns thick)</li>
                    <li>Gemstones: Responsibly sourced AAA cubic zirconia</li>
                    <li>Care: Avoid contact with perfume, lotions, and water. Wipe with a dry microfiber cloth after use.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b border-border">
                <AccordionTrigger className="font-serif uppercase tracking-widest text-xs hover:no-underline py-6">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                  <p className="mb-4">Complimentary express shipping on all orders over $75.</p>
                  <p>Standard delivery: 3-5 business days.</p>
                  <p className="mt-4 font-normal text-black">Easy 30-Day Returns:</p>
                  <p>Returns must be in original, unworn condition with all packaging included.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-border">
            <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
