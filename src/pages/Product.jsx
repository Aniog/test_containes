import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, Star, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();
  const [material, setMaterial] = useState(product?.material || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState("description");

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-sm text-[var(--color-ink-secondary)]">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4 inline-flex">Back to shop</Link>
      </div>
    );
  }

  const images = product.images[material] || product.images.gold;

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-[var(--color-ink-muted)]">
        <Link to="/" className="hover:text-[var(--color-ink)]">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[var(--color-ink)]">Shop</Link>
        <span>/</span>
        <span className="text-[var(--color-ink)]">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-sm bg-[var(--color-surface-alt)]">
            <img src={images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-3">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border",
                  activeImage === idx ? "border-[var(--color-ink)]" : "border-transparent"
                )}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Velmora</p>
          <h1 className="mt-2 font-serif text-3xl">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--color-ink-secondary)]">
            <span className="flex items-center gap-1 text-[var(--color-accent)]">
              <Star className="h-4 w-4 fill-current" />
              {product.rating}
            </span>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <p className="mt-3 text-2xl font-medium">${product.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{product.description}</p>

          <div className="mt-6">
            <p className="eyebrow">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["gold", "silver"].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setMaterial(tone)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors",
                    material === tone
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink)]"
                  )}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Quantity</p>
            <div className="mt-2 inline-flex items-center rounded-full border border-[var(--color-border)]">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-9 w-9 items-center justify-center">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[2.5rem] text-center text-sm font-medium">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} className="flex h-9 w-9 items-center justify-center">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              addItem(product, material);
              openDrawer();
            }}
            className="btn-primary mt-6 w-full"
          >
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="mt-8 divide-y divide-[var(--color-border-soft)]">
            {[
              { key: "description", label: "Description", body: product.description },
              { key: "materials", label: "Materials & Care", body: product.care },
              { key: "shipping", label: "Shipping & Returns", body: "Free worldwide shipping on orders over $75. 30-day returns on unworn items in original packaging." },
            ].map((section) => (
              <div key={section.key} className="py-3">
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center justify-between text-left text-sm font-semibold"
                >
                  <span>{section.label}</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openSection === section.key ? "rotate-180" : "")} />
                </button>
                {openSection === section.key && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{section.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
