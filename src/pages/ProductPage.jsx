import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronLeft, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/ProductGallery";
import Accordion from "../components/Accordion";
import RelatedProducts from "../components/RelatedProducts";

const accordionItems = [
  {
    title: "Description",
    content:
      "Each Velmora piece is crafted with 18K thick gold plating over hypoallergenic brass. Our jewelry is designed for everyday wear — resistant to tarnish and gentle on sensitive skin. Every piece arrives in our signature recycled gift box.",
  },
  {
    title: "Materials & Care",
    content:
      "18K gold plated over brass | Hypoallergenic nickel-free posts | Avoid contact with water, perfume, and lotions | Store in the provided pouch | Clean gently with a soft dry cloth.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Free worldwide shipping on orders over $75. Orders ship within 1-3 business days from our New York studio. 30-day return window for unworn items in original packaging. Full refund to original payment method.",
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("Gold");
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm text-primary underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const variants = ["Gold", "Silver"];

  return (
    <main className="pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-16">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.08em] text-foreground/40 transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-3 w-3" />
          Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="flex flex-col md:sticky md:top-28 md:self-start">
            {/* Category */}
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-foreground/40">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 font-serif text-2xl font-medium text-foreground">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-foreground/40">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 font-sans text-sm leading-relaxed text-foreground/60">
              {product.description}
            </p>

            {/* Divider */}
            <div className="my-6 border-t border-border" />

            {/* Variant */}
            <div>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-foreground/60">
                Finish: <span className="text-foreground">{variant}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`border px-6 py-2.5 font-sans text-xs uppercase tracking-[0.08em] transition-all ${
                      variant === v
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-transparent text-foreground/60 hover:border-foreground/50"
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.08em] text-foreground/60">
                Quantity
              </p>
              <div className="flex items-center gap-4 border border-border px-4 py-2.5 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="font-sans text-sm text-foreground/50 hover:text-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="min-w-[2rem] text-center font-sans text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="font-sans text-sm text-foreground/50 hover:text-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary mt-8 w-full transition-all ${
                added ? "bg-foreground" : ""
              }`}
            >
              {added ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4" />
                  Added to Cart
                </span>
              ) : (
                `Add to Cart — $${(product.price * quantity).toFixed(0)}`
              )}
            </button>

            {/* Payment trust */}
            <p className="mt-3 text-center font-sans text-[11px] text-foreground/30">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </main>
  );
}