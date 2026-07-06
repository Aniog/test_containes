import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { findProductById, formatPrice, getRelatedProducts } from "@/data/products";
import { ProductImage } from "@/components/ui/ProductImage";
import { ProductCard } from "@/components/ui/ProductCard";
import { StarRating } from "@/components/ui/StarRating";
import { Accordion } from "@/components/ui/Accordion";
import { useCart } from "@/contexts/CartContext";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

const variants = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useImageLoader();

  const product = useMemo(() => findProductById(productId), [productId]);

  const [selectedVariant, setSelectedVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center md:px-6 lg:px-8">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-espresso px-8 py-3 text-xs uppercase tracking-widest text-cream"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const accordionItems = [
    { title: "Description", content: product.details || product.description },
    { title: "Materials & Care", content: product.care },
    { title: "Shipping & Returns", content: product.shipping },
  ];

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-warm-gray transition-colors hover:text-gold"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-linen">
              <ProductImage
                product={product}
                ratio={product.imageRatio}
                width={900}
                suffix={activeImage === 1 ? "card-hover" : "card-main"}
                hover={activeImage === 1}
                className="h-full w-full"
              />
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-cream/90 p-2 text-espresso transition-colors hover:bg-gold"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
            </div>

            <div className="flex flex-row gap-3 md:flex-col">
              {[0, 1, 2].map((idx) => {
                const isHover = idx === 1;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "h-20 w-20 overflow-hidden border bg-linen transition-colors md:h-24 md:w-24",
                      activeImage === idx
                        ? "border-espresso"
                        : "border-transparent hover:border-hairline"
                    )}
                  >
                    <ProductImage
                      product={product}
                      ratio={product.imageRatio}
                      width={200}
                      hover={isHover}
                      suffix={isHover ? "card-hover" : "card-main"}
                      className="h-full w-full"
                      alt={`${product.name} view ${idx + 1}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col lg:pt-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-serif text-3xl uppercase tracking-widest md:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-warm-gray">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-warm-gray">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-warm-gray">
                Finish
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v.id)}
                    className={cn(
                      "rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all",
                      selectedVariant === v.id
                        ? "border-espresso bg-espresso text-cream"
                        : "border-hairline text-espresso hover:border-espresso"
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-warm-gray">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-warm-gray hover:text-espresso"
                >
                  −
                </button>
                <span className="min-w-[3rem] px-2 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-warm-gray hover:text-espresso"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full bg-espresso py-4 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-espresso"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-widest text-warm-gray">
              <div className="flex flex-col items-center gap-2 border border-hairline py-3">
                <Truck size={16} className="text-gold" />
                <span>Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 border border-hairline py-3">
                <RefreshCw size={16} className="text-gold" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-2 border border-hairline py-3">
                <ShieldCheck size={16} className="text-gold" />
                <span>Hypoallergenic</span>
              </div>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-cream py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
