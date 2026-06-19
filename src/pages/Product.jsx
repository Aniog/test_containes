import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Truck, RefreshCw, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductCard from "@/components/product/ProductCard";
import JewelryImage from "@/components/ui/JewelryImage";
import { getProductById, getRelatedProducts, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const VARIANT_TONES = [
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
];

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setVariant(product.tone || "gold");
      setQty(1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [id, product]);

  if (!product) {
    return (
      <>
        <Navbar transparent={false} />
        <CartDrawer />
        <main className="container-page pt-40 pb-32 text-center">
          <p className="eyebrow">Not Found</p>
          <h1 className="mt-3 font-serif text-5xl text-ink">This piece is no longer available.</h1>
          <Link to="/shop" className="mt-8 inline-block btn-outline-light">
            Browse the Collection
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleAdd = () => {
    addItem(product.id, qty, variant);
  };

  const related = getRelatedProducts(product.id, 4);

  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />

      <main className="bg-cream pt-24 md:pt-32">
        {/* breadcrumb */}
        <div className="container-page pt-4">
          <nav className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <section className="container-page py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
            {/* Gallery */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                {/* thumbnails — desktop vertical */}
                <div className="hidden md:flex md:col-span-2 flex-col gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "aspect-square overflow-hidden bg-cream-warm border transition-all duration-300",
                        activeImage === i ? "border-ink" : "border-line hover:border-mushroom"
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <JewelryImage id={img} className="w-full h-full" />
                    </button>
                  ))}
                </div>
                {/* main image */}
                <div className="md:col-span-10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-warm">
                    <JewelryImage
                      id={product.images[activeImage]}
                      className="w-full h-full transition-opacity duration-500"
                    />
                  </div>
                  {/* mobile thumbnails */}
                  <div className="md:hidden mt-3 flex gap-2">
                    {product.images.map((img, i) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveImage(i)}
                        className={cn(
                          "w-16 h-16 overflow-hidden bg-cream-warm border transition-all",
                          activeImage === i ? "border-ink" : "border-line"
                        )}
                        aria-label={`View image ${i + 1}`}
                      >
                        <JewelryImage id={img} className="w-full h-full" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-5 md:pl-2">
              <p className="eyebrow">Velmora · {labelize(product.category)}</p>
              <h1 className="mt-3 font-serif font-light text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] uppercase tracking-wider2 text-balance">
                {product.name}
              </h1>
              <p className="mt-2 font-serif text-lg md:text-xl italic text-mushroom-dark">
                {product.tagline}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <Stars rating={product.rating} />
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-3xl text-ink">{formatPrice(product.price)}</span>
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                  Free shipping
                </span>
              </div>

              <p className="mt-6 font-sans text-base text-mushroom-dark leading-relaxed">
                {product.description}
              </p>

              {/* Variant */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
                    Finish
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                    {labelize(variant)}
                  </span>
                </div>
                <div className="flex gap-3">
                  {VARIANT_TONES.map((v) => (
                    <button
                      key={v.value}
                      type="button"
                      onClick={() => setVariant(v.value)}
                      className={cn(
                        "px-6 py-2.5 rounded-full border font-sans text-[11px] uppercase tracking-widest2 transition-all duration-500 ease-editorial",
                        variant === v.value
                          ? "bg-ink text-ivory border-ink"
                          : "bg-transparent text-ink border-line hover:border-ink"
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink block mb-3">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-ink hover:bg-cream-warm"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.4} />
                  </button>
                  <span className="w-10 text-center font-sans text-sm text-ink">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-ink hover:bg-cream-warm"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.4} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="mt-8 w-full btn-gold"
              >
                Add to Cart · {formatPrice(product.price * qty)}
              </button>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Perk icon={Truck} label="Free Shipping" sub="Worldwide" />
                <Perk icon={RefreshCw} label="30-Day Returns" sub="Easy & free" />
                <Perk icon={Shield} label="Hypoallergenic" sub="Sensitive-skin safe" />
              </ul>
            </div>
          </div>
        </section>

        {/* Accordions */}
        <section className="container-page pb-12 md:pb-20">
          <div className="border-t border-line">
            <Accordion
              title="Description"
              open={openSection === "description"}
              onToggle={() =>
                setOpenSection(openSection === "description" ? null : "description")
              }
            >
              <p className="font-sans text-base text-mushroom-dark leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {product.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 font-sans text-sm text-ink"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>

            <Accordion
              title="Materials & Care"
              open={openSection === "materials"}
              onToggle={() =>
                setOpenSection(openSection === "materials" ? null : "materials")
              }
            >
              <p className="font-sans text-base text-mushroom-dark leading-relaxed">
                {product.materials}
              </p>
              <h4 className="mt-6 mb-3 font-sans text-[11px] uppercase tracking-widest2 text-ink">
                Care
              </h4>
              <ul className="space-y-2.5">
                {product.care.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 font-sans text-sm text-ink"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </Accordion>

            <Accordion
              title="Shipping & Returns"
              open={openSection === "shipping"}
              onToggle={() =>
                setOpenSection(openSection === "shipping" ? null : "shipping")
              }
            >
              <h4 className="mb-3 font-sans text-[11px] uppercase tracking-widest2 text-ink">
                Shipping
              </h4>
              <p className="font-sans text-base text-mushroom-dark leading-relaxed">
                {product.shipping}
              </p>
              <h4 className="mt-6 mb-3 font-sans text-[11px] uppercase tracking-widest2 text-ink">
                Returns
              </h4>
              <p className="font-sans text-base text-mushroom-dark leading-relaxed">
                {product.returns}
              </p>
            </Accordion>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="container-page pb-24 md:pb-32 border-t border-line pt-16 md:pt-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow">You may also like</p>
                <h2 className="mt-3 font-serif font-light text-3xl md:text-4xl text-ink leading-[1.05]">
                  Pairs Beautifully With
                </h2>
              </div>
              <Link to="/shop" className="link-underline text-ink hidden md:inline-block">
                Shop All
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

function Perk({ icon: Icon, label, sub }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3 border border-line">
      <Icon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.4} />
      <div>
        <div className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          {label}
        </div>
        <div className="font-sans text-[11px] text-mushroom mt-0.5">{sub}</div>
      </div>
    </li>
  );
}

function Accordion({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink transition-transform duration-500 ease-editorial",
            open ? "rotate-180" : ""
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.round(rating) ? "fill-gold text-gold" : "text-line"}`}
          strokeWidth={1.2}
        />
      ))}
    </div>
  );
}

function labelize(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
