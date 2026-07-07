import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronLeft } from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import VariantSelector from "@/components/product/VariantSelector";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

const VARIANT_OPTIONS = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.tone || "gold");
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-24 bg-ivory min-h-screen text-center">
        <p className="font-serif text-3xl">Piece not found</p>
        <Link
          to="/shop"
          className="mt-6 inline-block text-[12px] uppercase tracking-editorial border-b border-ink pb-1"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const onAdd = () => {
    setAdding(true);
    addItem(product, variant, quantity);
    setTimeout(() => setAdding(false), 800);
  };

  return (
    <div className="pt-20 md:pt-24 bg-ivory min-h-screen">
      <div className="max-w-container mx-auto px-5 md:px-10 py-6 md:py-10">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-editorial text-muted hover:text-ink transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-6">
          {/* Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-editorial text-champagne-deep">
                {product.category}
              </span>
              {product.badge && (
                <>
                  <span className="w-1 h-1 rounded-full bg-hairline" />
                  <span className="text-[11px] uppercase tracking-editorial text-ink">
                    {product.badge}
                  </span>
                </>
              )}
            </div>

            <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
            <p className="mt-2 text-base text-muted">{product.tagline}</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating)
                        ? "fill-champagne text-champagne"
                        : "text-hairline",
                    )}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-2xl font-serif">{formatPrice(product.price)}</p>

            <p className="mt-6 text-sm md:text-base text-ink/80 leading-relaxed max-w-prose">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] uppercase tracking-editorial text-ink">
                  Finish
                </span>
                <span className="text-[11px] uppercase tracking-editorial text-muted">
                  {VARIANT_OPTIONS.find((v) => v.id === variant)?.label}
                </span>
              </div>
              <VariantSelector
                options={VARIANT_OPTIONS}
                value={variant}
                onChange={setVariant}
              />
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-[12px] uppercase tracking-editorial text-ink block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-hairline">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 grid place-items-center hover:bg-sand transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 grid place-items-center hover:bg-sand transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={onAdd}
              disabled={adding}
              className={cn(
                "mt-8 w-full bg-ink text-ivory text-[12px] uppercase tracking-editorial py-4 transition-colors",
                adding ? "bg-champagne" : "hover:bg-champagne",
              )}
            >
              {adding ? "Added to bag" : "Add to bag"}
            </button>

            <ul className="mt-6 space-y-2 text-[12px] text-muted">
              <li>· Free worldwide shipping over $75</li>
              <li>· 30-day returns on unworn pieces</li>
              <li>· Hypoallergenic, nickel-free</li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: "Description",
                    content: (
                      <ul className="space-y-2">
                        {product.details.map((d) => (
                          <li key={d}>· {d}</li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    title: "Materials & Care",
                    content: product.materials,
                  },
                  {
                    title: "Shipping & Returns",
                    content: product.shipping,
                  },
                ]}
                defaultOpen={0}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 md:mt-32 border-t border-hairline pt-16 md:pt-20">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                You may also love
              </h2>
              <Link
                to="/shop"
                className="hidden sm:inline-flex text-[12px] uppercase tracking-editorial text-ink hover:text-champagne transition-colors"
              >
                Shop all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
