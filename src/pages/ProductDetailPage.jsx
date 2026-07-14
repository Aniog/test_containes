import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Minus, Plus, Truck, RefreshCw, Shield, Heart } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ImageFrame from "@/components/ui/ImageFrame";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/product/ProductCard";
import { toast } from "sonner";

const TONES = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem, openCart } = useCart();
  const [active, setActive] = useState(0);
  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  useEffect(() => {
    if (product) {
      setActive(0);
      setTone(product.tone || "gold");
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [slug, product]);

  if (!product) {
    return (
      <main className="container-editorial py-32 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Piece not found</h1>
        <Link to="/shop" className="btn-secondary mt-6">
          Back to shop
        </Link>
      </main>
    );
  }

  const related = getRelatedProducts(product, 4);

  const onAdd = () => {
    addItem({ ...product, tone }, { quantity });
    toast.success(`${product.name} added to your bag`);
  };

  const onBuyNow = () => {
    addItem({ ...product, tone }, { quantity });
    openCart();
  };

  const gallery = product.gallery || [];
  const productNameId = `pdp-${product.id}-name`;
  const productTagId = `pdp-${product.id}-tagline`;

  return (
    <main className="bg-cream pb-32">
      {/* Breadcrumb */}
      <div className="container-editorial pt-8">
        <nav className="flex items-center gap-1 font-sans text-[12px] uppercase tracking-product text-mocha">
          <Link to="/" className="hover:text-charcoal">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-charcoal">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <section className="container-editorial pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-2 hidden flex-col gap-3 md:flex">
                {gallery.map((g, i) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "block w-full overflow-hidden border transition-colors",
                      i === active
                        ? "border-charcoal"
                        : "border-transparent hover:border-mist"
                    )}
                  >
                    <ImageFrame
                      id={`${g.id}-thumb`}
                      query={`[${productNameId}]`}
                      ratio="3x4"
                      width={140}
                      alt={product.name}
                      className="!bg-espresso"
                    />
                  </button>
                ))}
              </div>
              <div className="col-span-12 md:col-span-10">
                <ImageFrame
                  id={gallery[active]?.id || `pdp-${product.id}-main`}
                  query={`[${productNameId}]`}
                  ratio="3x4"
                  width={1000}
                  tone="warm"
                  alt={product.name}
                />
              </div>
            </div>
            <div className="mt-3 flex gap-3 md:hidden">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    "h-16 w-16 flex-shrink-0 overflow-hidden border",
                    i === active ? "border-charcoal" : "border-transparent"
                  )}
                >
                  <ImageFrame
                    id={`${g.id}-mthumb`}
                    query={`[${productNameId}]`}
                    ratio="3x4"
                    width={140}
                    alt={product.name}
                    className="!bg-espresso"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5">
            {product.badge && (
              <p className="eyebrow text-gold-deep">{product.badge}</p>
            )}
            <h1
              id={productNameId}
              className="mt-3 font-serif text-4xl font-light uppercase tracking-product leading-[1.1] text-charcoal md:text-5xl"
            >
              {product.name}
            </h1>
            <p
              id={productTagId}
              className="mt-2 font-serif text-lg italic text-mocha"
            >
              {product.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <StarRating
                value={product.rating}
                showValue
                reviewCount={product.reviews}
              />
            </div>
            <p className="mt-6 font-serif text-3xl text-charcoal">
              {formatPrice(product.price)}
            </p>
            <p className="mt-3 max-w-md font-sans text-[15px] leading-relaxed text-mocha">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="eyebrow mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[12px] font-medium uppercase tracking-product transition-colors",
                      tone === t.id
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-mist text-charcoal hover:border-charcoal"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-3 w-3 rounded-full",
                        t.id === "gold" ? "bg-gold" : "bg-mist"
                      )}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-3">Quantity</p>
              <div className="inline-flex items-center border border-mist">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="inline-flex h-11 w-11 items-center justify-center text-charcoal transition-colors hover:bg-bone"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="inline-flex h-11 w-12 items-center justify-center font-sans text-[14px] text-charcoal">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="inline-flex h-11 w-11 items-center justify-center text-charcoal transition-colors hover:bg-bone"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button type="button" onClick={onAdd} className="btn-primary w-full">
                Add to bag · {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                onClick={onBuyNow}
                className="btn-secondary w-full"
              >
                Buy it now
              </button>
              <button
                type="button"
                className="btn-ghost mx-auto mt-2"
              >
                <Heart size={14} strokeWidth={1.5} />
                Save to wishlist
              </button>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-mist pt-6 sm:grid-cols-3">
              <li className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-product text-mocha">
                <Truck size={14} strokeWidth={1.5} className="text-gold-deep" />
                Free shipping
              </li>
              <li className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-product text-mocha">
                <RefreshCw size={14} strokeWidth={1.5} className="text-gold-deep" />
                30-day returns
              </li>
              <li className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-product text-mocha">
                <Shield size={14} strokeWidth={1.5} className="text-gold-deep" />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-mist border-t border-mist">
              <Accordion
                id="description"
                open={openSection === "description"}
                onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
                title="Description"
              >
                <p className="font-sans text-[14px] leading-relaxed text-mocha">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-1.5 font-sans text-[14px] text-charcoal">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion
                id="care"
                open={openSection === "care"}
                onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
                title="Materials & Care"
              >
                <ul className="space-y-1.5 font-sans text-[14px] text-charcoal">
                  {product.care.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion
                id="shipping"
                open={openSection === "shipping"}
                onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
                title="Shipping & Returns"
              >
                <ul className="space-y-1.5 font-sans text-[14px] text-charcoal">
                  {product.shipping.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* You may also like */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">
              Pieces with the same quiet pull.
            </h2>
          </div>
          <Link to="/shop" className="btn-ghost hidden md:inline-flex">
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Accordion({ id, title, open, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[12px] font-medium uppercase tracking-product text-charcoal">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn(
            "text-mocha transition-transform duration-200",
            open ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-editorial",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
