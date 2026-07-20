import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useImageLoader } from "@/hooks/useImageLoader";
import StarRating from "@/components/StarRating";
import Price from "@/components/Price";
import ProductCard from "@/components/ProductCard";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(id), [id]);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useImageLoader([id, variant]);

  useEffect(() => {
    if (!product) {
      navigate("/shop", { replace: true });
      return;
    }
    document.title = `${product.name} | Velmora Fine Jewelry`;
    setVariant("gold");
    setQuantity(1);
    setActiveImage(0);
  }, [product, navigate]);

  if (!product) return null;

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const productTitleId = `pdp-title-${product.id}`;
  const productDescId = `pdp-desc-${product.id}`;

  const mainImgId = (() => {
    switch (product.id) {
      case "vivid-aura-jewels": return "pdp-main-vivid-aura-jewels";
      case "majestic-flora-nectar": return "pdp-main-majestic-flora-nectar";
      case "golden-sphere-huggies": return "pdp-main-golden-sphere-huggies";
      case "amber-lace-earrings": return "pdp-main-amber-lace-earrings";
      case "royal-heirloom-set": return "pdp-main-royal-heirloom-set";
      default: return `pdp-main-${product.id}`;
    }
  })();

  const handleAdd = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div ref={containerRef} className="bg-[#fbfaf9]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 lg:pb-24">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-500 hover:text-amber-700"
        >
          <ChevronLeft size={14} /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <img
                alt={product.name}
                src={PLACEHOLDER}
                data-strk-img-id={mainImgId}
                data-strk-img={`[${productDescId}] [${productTitleId}] velmora fine jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-stone-100 ring-offset-2 transition-all ${
                    activeImage === idx ? "ring-1 ring-stone-900" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    src={PLACEHOLDER}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[${productDescId}] [${productTitleId}] velmora fine jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col lg:py-8">
            <StarRating
              rating={product.rating}
              reviewCount={product.reviewCount}
              size={14}
            />
            <h1
              id={productTitleId}
              className="mt-4 font-serif text-3xl font-light uppercase tracking-[0.18em] text-stone-900 md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={productDescId} className="sr-only">
              {product.category} {product.material.join(" ")} demi-fine jewelry
            </p>
            <Price price={product.price} className="mt-4 text-2xl" />

            <p className="mt-6 leading-relaxed text-stone-600">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`h-11 min-w-[96px] rounded-none border px-5 text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                      variant === v
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-200 bg-white text-stone-900 hover:border-stone-400"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-stone-200 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-stone-500 hover:text-stone-900"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-medium text-stone-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-stone-500 hover:text-stone-900"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAdd}
              className="mt-10 h-12 w-full text-xs uppercase tracking-[0.2em]"
            >
              Add to Cart — ${product.price * quantity}
            </Button>

            <div className="mt-6 text-center text-xs text-stone-500">
              Free shipping over $50 · 30-day returns
            </div>

            <Accordion type="single" collapsible className="mt-12">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>{product.materialsCare}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shippingReturns}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="mb-10 text-center font-serif text-2xl font-light text-stone-900 md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
