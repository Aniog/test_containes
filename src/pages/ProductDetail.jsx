import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { getProductById, getRelatedProducts, PRODUCTS } from "@/data/catalog";
import StarRating from "@/components/ui/StarRating";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ProductCard from "@/components/product/ProductCard";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const SECTIONS = [
  { id: "description", title: "Description" },
  { id: "materials", title: "Materials & Care" },
  { id: "shipping", title: "Shipping & Returns" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = useMemo(() => getRelatedProducts(id, 4), [id]);

  const [variantId, setVariantId] = useState(
    product?.variants?.[0]?.id ?? "gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState("description");
  const [adding, setAdding] = useState(false);

  const { addItem } = useCart();

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setVariantId(product.variants[0]?.id ?? "gold");
      setQuantity(1);
      setActiveImage(0);
      setOpenSection("description");
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [id, product]);

  if (!product) {
    return (
      <div className="container-velmora py-32 text-center">
        <h1 className="font-serif text-4xl">Piece not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The piece you're looking for may have moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center border border-ink px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];

  const handleAdd = () => {
    setAdding(true);
    setTimeout(() => {
      addItem(product.id, variant.id, quantity);
      setAdding(false);
    }, 200);
  };

  return (
    <div className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-velmora">
        <nav className="text-[11px] uppercase tracking-widest2 text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-foreground"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-velmora mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-12 md:gap-16">
        {/* Gallery */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* Thumbnails (desktop) */}
            <div className="order-2 hidden md:order-1 md:col-span-2 md:flex md:flex-col md:gap-3">
              {product.images.map((Img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square w-full overflow-hidden border bg-muted transition-colors",
                    activeImage === i ? "border-ink" : "border-border hover:border-ink/50"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <Img className="h-full w-full" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="order-1 md:order-2 md:col-span-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                {product.images.map((Img, i) => (
                  <Img
                    key={i}
                    className={cn(
                      "absolute inset-0 h-full w-full transition-opacity duration-500",
                      i === activeImage ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-cream/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ink">
                    {product.badge}
                  </span>
                )}

                {/* Mobile prev/next */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-3 md:hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((i) => (i - 1 + product.images.length) % product.images.length)
                    }
                    className="grid h-10 w-10 place-items-center rounded-full bg-cream/90 text-ink"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage((i) => (i + 1) % product.images.length)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-cream/90 text-ink"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5 md:hidden">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === activeImage ? "w-6 bg-cream" : "w-1.5 bg-cream/50"
                      )}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <h1 className="font-serif text-4xl md:text-5xl text-balance">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-lg text-foreground">
              {formatPrice(product.price)}
            </p>
            <span className="h-3 w-px bg-border" />
            <StarRating
              value={product.rating}
              showCount
              count={product.reviews}
              size={12}
            />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="mt-8">
              <p className="eyebrow mb-3">
                Tone: <span className="text-foreground">{variant.name}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariantId(v.id)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest2 border transition-colors",
                      variantId === v.id
                        ? "border-ink bg-ink text-cream"
                        : "border-border text-ink hover:border-ink"
                    )}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-8">
            <p className="eyebrow mb-3">Quantity</p>
            <div className="inline-flex items-center border border-border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="grid h-11 w-11 place-items-center text-ink transition-colors hover:bg-muted"
                aria-label="Decrease quantity"
              >
                <span className="text-lg leading-none">−</span>
              </button>
              <span className="min-w-[44px] text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="grid h-11 w-11 place-items-center text-ink transition-colors hover:bg-muted"
                aria-label="Increase quantity"
              >
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <PrimaryButton
            fullWidth
            size="lg"
            onClick={handleAdd}
            disabled={adding}
            className="mt-6"
          >
            {adding ? (
              <>
                <Check size={14} strokeWidth={2} /> Added
              </>
            ) : (
              <>Add to Cart — {formatPrice(product.price * quantity)}</>
            )}
          </PrimaryButton>

          {/* Mini trust */}
          <ul className="mt-6 grid grid-cols-2 gap-y-2 text-[11px] uppercase tracking-widest2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check size={12} strokeWidth={1.5} className="text-accent" />
              Free shipping over $75
            </li>
            <li className="flex items-center gap-2">
              <Check size={12} strokeWidth={1.5} className="text-accent" />
              30-day returns
            </li>
            <li className="flex items-center gap-2">
              <Check size={12} strokeWidth={1.5} className="text-accent" />
              Hypoallergenic
            </li>
            <li className="flex items-center gap-2">
              <Check size={12} strokeWidth={1.5} className="text-accent" />
              Gift-ready packaging
            </li>
          </ul>

          {/* Accordions */}
          <div className="mt-10 border-t border-border">
            {SECTIONS.map((section) => {
              const open = openSection === section.id;
              return (
                <div key={section.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenSection(open ? null : section.id)}
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
                      {section.title}
                    </span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={cn(
                        "transition-transform duration-300",
                        open ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-500 ease-out",
                      open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                        {section.id === "description" && product.description}
                        {section.id === "materials" && product.materials}
                        {section.id === "shipping" && product.shipping}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* You may also like */}
      <section className="container-velmora mt-24 md:mt-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Pair it with</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              You may also <em className="not-italic text-accent">love</em>
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex text-[11px] font-medium uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-accent"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
