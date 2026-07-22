import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StockImage, { productImageQuery } from "@/components/StockImage";
import Stars from "@/components/Stars";
import Accordion from "@/components/product/Accordion";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";
import { formatPrice, getProduct, relatedProducts } from "@/data/products";

const GALLERY_VIEWS = ["primary", "detail", "lifestyle", "hover"];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem } = useCart();

  const [tone, setTone] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setTone("Gold");
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  const related = useMemo(
    () => (product ? relatedProducts(product) : []),
    [product]
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-32 text-center md:px-8">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <p className="mt-4 text-sm text-taupe">
          This piece may have sold out or been moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold px-10 py-4 text-xs tracking-[0.3em] uppercase text-ivory transition-colors hover:bg-gold-deep"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {/* Hidden text nodes for the stock-image system */}
      <span id={`prod-${product.id}-name`} className="sr-only">
        {product.name} — {product.category}
      </span>
      <span id={`prod-${product.id}-desc`} className="sr-only">
        {product.short}
      </span>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 py-6 text-[11px] tracking-[0.18em] uppercase text-taupe">
        <Link to="/" className="transition-colors hover:text-gold">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="transition-colors hover:text-gold">
          Shop
        </Link>
        <ChevronRight size={12} />
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="grid gap-10 pb-20 md:grid-cols-2 md:gap-14 lg:gap-20 md:pb-28">
        {/* Gallery */}
        <Reveal>
          <div className="relative overflow-hidden bg-sand aspect-[4/5]">
            {product.badge && (
              <span className="absolute left-5 top-5 z-10 bg-ivory/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-espresso">
                {product.badge}
              </span>
            )}
            <StockImage
              key={activeImage}
              imgId={product.imgIds.gallery[activeImage]}
              query={productImageQuery(product, GALLERY_VIEWS[activeImage])}
              ratio="3x4"
              width={1000}
              alt={product.name}
              loading="eager"
              className="h-full w-full object-cover animate-fade-in"
            />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.imgIds.gallery.map((imgId, i) => (
              <button
                key={imgId}
                onClick={() => setActiveImage(i)}
                className={`relative aspect-square overflow-hidden bg-sand transition-all duration-300 ${
                  activeImage === i
                    ? "ring-1 ring-gold ring-offset-2 ring-offset-ivory"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <StockImage
                  imgId={`thumb-${imgId}`}
                  query={productImageQuery(product, GALLERY_VIEWS[i])}
                  ratio="1x1"
                  width={220}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={120} className="flex flex-col">
          <p className="text-xs tracking-[0.35em] uppercase text-gold">
            {product.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium uppercase leading-tight tracking-[0.08em] text-espresso md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} />
            <span className="text-xs tracking-wide text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 border-t border-hairline pt-6 text-[15px] leading-relaxed text-cocoa">
            {product.short}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-espresso">
              Finish — <span className="text-taupe">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`border px-7 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                    tone === t
                      ? "border-gold bg-gold text-ivory"
                      : "border-espresso/25 text-cocoa hover:border-gold hover:text-gold"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex gap-4">
            <div className="flex items-center border border-espresso/25">
              <button
                className="px-4 py-3.5 text-cocoa transition-colors hover:text-gold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-10 text-center text-sm font-medium text-espresso">
                {quantity}
              </span>
              <button
                className="px-4 py-3.5 text-cocoa transition-colors hover:text-gold"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              onClick={() => addItem(product.id, tone, quantity)}
              className="flex-1 bg-gold py-4 text-xs font-semibold tracking-[0.3em] uppercase text-ivory transition-colors duration-300 hover:bg-gold-deep"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Mini trust points */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-hairline py-5">
            {[
              { icon: Truck, label: "Free shipping over $75" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: ShieldCheck, label: "2-year warranty" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon size={17} className="text-gold" strokeWidth={1.5} />
                <span className="text-[10px] leading-snug tracking-[0.12em] uppercase text-cocoa">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-2 border-t border-hairline">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">
              Orders ship within 1–2 business days from our atelier. Free
              worldwide shipping on orders over $75; a flat $6 otherwise. Not
              in love? Return or exchange unworn pieces within 30 days for a
              full refund — no questions, no restocking fees.
            </Accordion>
          </div>
        </Reveal>
      </div>

      {/* Related products */}
      <section className="border-t border-hairline py-16 md:py-24">
        <Reveal className="mb-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
            Complete the Look
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-espresso md:text-4xl">
            You May Also Like
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 md:gap-x-6">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
