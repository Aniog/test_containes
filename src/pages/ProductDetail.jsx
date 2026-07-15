import { useMemo, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { StrkImage } from "@/components/ui/StrkImage";
import { StarRating } from "@/components/product/StarRating";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId],
  );
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || "gold",
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef(null);
  const relatedRef = useRef(null);
  useImageLoader(galleryRef, [productId, activeImage]);
  useImageLoader(relatedRef, [productId]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-32 text-center md:px-8">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-velmora-gold underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const { addItem } = useCart();
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    { title: "Shipping & Returns", content: product.shipping },
  ];

  const imageQueries = [
    `[product-detail-name] [product-detail-category] gold jewelry ${product.category}`,
    `[product-detail-name] [product-detail-category] detail shot gold jewelry ${product.category}`,
  ];

  return (
    <div className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-velmora-taupe hover:text-velmora-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div ref={galleryRef} className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/40">
              <StrkImage
                id={`product-detail-main-${product.id}-${activeImage}`}
                query={imageQueries[activeImage]}
                ratio="4x3"
                width={900}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() =>
                  setActiveImage((i) => (i === 0 ? product.images.length - 1 : i - 1))
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-sm hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveImage((i) => (i === product.images.length - 1 ? 0 : i + 1))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-sm hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-3">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative h-20 w-20 overflow-hidden border-2 transition-colors",
                    activeImage === idx
                      ? "border-velmora-gold"
                      : "border-transparent hover:border-velmora-sand",
                  )}
                >
                  <StrkImage
                    id={`product-detail-thumb-${product.id}-${idx}`}
                    query={imageQueries[idx]}
                    ratio="1x1"
                    width={200}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <StarRating rating={product.rating} count={product.reviewCount} />
            <h1
              id="product-detail-name"
              className="mt-4 font-serif text-3xl uppercase tracking-[0.12em] md:text-4xl"
            >
              {product.name}
            </h1>
            <p id="product-detail-category" className="sr-only">
              {product.category}
            </p>
            <p className="mt-3 text-2xl font-light text-velmora-charcoal">
              ${product.price}
            </p>
            <p className="mt-6 leading-relaxed text-velmora-charcoal/80">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-velmora-taupe">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "rounded-full border px-6 py-2 text-sm font-medium capitalize transition-all",
                      selectedVariant === variant
                        ? "border-velmora-ink bg-velmora-ink text-white"
                        : "border-velmora-sand bg-white text-velmora-ink hover:border-velmora-gold",
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-velmora-taupe">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-sand bg-white">
                <button
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                variant="accent"
                size="lg"
                className="flex-1"
                onClick={() => addItem(product, selectedVariant, quantity)}
              >
                <ShoppingBag className="mr-2 w-4 h-4" />
                Add to Cart — ${product.price * quantity}
              </Button>
              <button className="flex items-center justify-center rounded-sm border border-velmora-sand px-4 hover:bg-velmora-sand transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        <div ref={relatedRef} className="mt-24 border-t border-velmora-sand pt-16">
          <h2 id="related-title" className="text-center font-serif text-2xl tracking-wide md:text-3xl">
            You May Also Like
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                contextId="related-title"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
