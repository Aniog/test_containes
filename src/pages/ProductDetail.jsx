import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Heart, ChevronLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/shop/StarRating";
import { ProductCard } from "@/components/shop/ProductCard";
import { StrkImage } from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === productId);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("primary");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setSelectedTone(product.tone?.[0] || "gold");
    setQuantity(1);
    setActiveImage("primary");
    setAdded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId, activeImage]);

  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container-velmora py-32 text-center">
        <p className="font-serif text-2xl">Product not found.</p>
        <Button className="mt-6" asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const titleId = `product-detail-title-${product.id}`;
  const categoryId = `product-detail-category-${product.id}`;
  const imageIds = [
    { key: "primary", id: product.imageIds.primary },
    { key: "hover", id: product.imageIds.hover },
  ];

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on orders over $75. Orders ship within 1–2 business days. Enjoy 30-day hassle-free returns on unworn pieces in original packaging.",
    },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef}>
      <div className="container-velmora py-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-fg"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      <section className="container-velmora pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
              {imageIds.map((img) => (
                <div
                  key={img.key}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeImage === img.key ? "opacity-100" : "opacity-0"
                  )}
                >
                  <StrkImage
                    id={img.id}
                    query={`[${titleId}] [${categoryId}] gold jewelry detail`}
                    ratio="4x5"
                    width={900}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {imageIds.map((img) => (
                <button
                  key={img.key}
                  type="button"
                  onClick={() => setActiveImage(img.key)}
                  className={cn(
                    "relative h-20 w-20 overflow-hidden border-2 bg-velmora-cream",
                    activeImage === img.key
                      ? "border-velmora-accent"
                      : "border-transparent"
                  )}
                >
                  <StrkImage
                    id={`${img.id}-thumb`}
                    query={`[${titleId}] gold jewelry`}
                    ratio="1x1"
                    width={160}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col lg:pt-8">
            <p
              id={categoryId}
              className="text-[10px] uppercase tracking-[0.2em] text-velmora-muted"
            >
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-2 font-serif text-3xl uppercase tracking-[0.14em] md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-4">
              <p className="text-xl font-medium text-velmora-fg">${product.price}</p>
              <StarRating
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-velmora-muted">
              {product.description}
            </p>

            {product.tone.length > 1 && (
              <div className="mt-8">
                <span className="text-xs uppercase tracking-widest text-velmora-muted">
                  Finish
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-colors",
                        selectedTone === tone
                          ? "border-velmora-accent bg-velmora-accent text-white"
                          : "border-velmora-border text-velmora-fg hover:border-velmora-accent hover:text-velmora-accent"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-velmora-muted">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-sm hover:bg-velmora-cream"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-sm hover:bg-velmora-cream"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                className="flex-1"
                onClick={handleAddToCart}
              >
                {added ? "Added to Cart" : "Add to Cart"}
              </Button>
              <Button variant="outline" className="px-4">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="container-velmora py-16 md:py-24">
        <h2 className="mb-10 text-center font-serif text-2xl tracking-wide md:text-3xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
