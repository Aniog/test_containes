import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronRight, Heart } from "lucide-react";
import { toast } from "sonner";
import { getProductById, getRelatedProducts } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordions from "@/components/product/ProductAccordions";
import RelatedProducts from "@/components/product/RelatedProducts";

const tones = [
  { id: "gold", label: "Gold", swatch: "linear-gradient(135deg,#D4B98A,#9A6F3D)" },
  { id: "silver", label: "Silver", swatch: "linear-gradient(135deg,#E6E6E6,#9A9A9A)" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, openCart } = useCart();

  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);

  if (!product) {
    return (
      <div className="container-content py-32 text-center">
        <p className="font-serif text-3xl mb-4">Piece not found</p>
        <Link to="/shop" className="btn-secondary inline-flex">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product.id, { tone, quantity: qty });
    toast.success(`${product.name} added to your bag.`);
    openCart();
  };

  const handleBuyNow = () => {
    addToCart(product.id, { tone, quantity: qty });
    navigate("/checkout");
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-hairline">
        <div className="container-wide py-4 flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-espresso transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <span className="text-espresso truncate">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="py-10 md:py-16 bg-ivory">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />

          {/* Right: info */}
          <div className="md:sticky md:top-28 md:self-start">
            {product.badge && (
              <p className="font-sans text-[10px] uppercase tracking-widest2 text-gold mb-3">
                {product.badge}
              </p>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest2"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="mt-3 text-sm md:text-base text-taupe font-light"
            >
              {product.shortDescription}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-hairline"
                    )}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-2xl md:text-3xl tabular-nums">
              {formatPrice(product.price)}
            </p>

            <div className="my-8 h-px bg-hairline" />

            {/* Tone selector */}
            <div>
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-taupe mb-3">
                Tone · <span className="text-espresso">{tones.find((t) => t.id === tone)?.label}</span>
              </p>
              <div className="flex items-center gap-3">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={cn(
                      "inline-flex items-center gap-2.5 pl-1.5 pr-5 py-1.5 border transition-all duration-300",
                      tone === t.id
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-hairline text-espresso hover:border-espresso"
                    )}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-white/30"
                      style={{ background: t.swatch }}
                      aria-hidden
                    />
                    <span className="font-sans text-[11px] uppercase tracking-widest2">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-taupe mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary w-full"
              >
                Add to Bag · {formatPrice(product.price * qty)}
              </button>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="btn-secondary w-full"
                >
                  Buy it Now
                </button>
                <button
                  type="button"
                  onClick={() => setFav((f) => !f)}
                  aria-label="Add to wishlist"
                  className={cn(
                    "w-14 flex items-center justify-center border transition-colors duration-300",
                    fav
                      ? "bg-espresso text-ivory border-espresso"
                      : "border-hairline text-espresso hover:border-espresso"
                  )}
                >
                  <Heart
                    className={cn("w-4 h-4", fav && "fill-current")}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>

            {/* Reassurance */}
            <ul className="mt-8 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest2 text-taupe">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Free worldwide shipping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Hypoallergenic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                Velvet gift packaging
              </li>
            </ul>
          </div>
        </div>

        {/* Accordions below — full width */}
        <div className="container-wide mt-16 md:mt-24 max-w-content">
          <ProductAccordions product={product} />
        </div>
      </section>

      <RelatedProducts currentId={product.id} />
    </>
  );
}
