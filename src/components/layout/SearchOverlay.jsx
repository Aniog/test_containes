import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ALL_PRODUCTS, PLACEHOLDER_IMG, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
  }, [query, open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const results = q
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.includes(q)
      )
    : ALL_PRODUCTS.slice(0, 4);

  const go = (id) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-x-0 top-0 bg-cream shadow-[0_30px_80px_-30px_rgba(34,25,16,0.5)] transition-transform duration-500 ease-out",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              {q ? "Results" : "Popular right now"}
            </p>
            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="p-2 text-espresso transition-transform hover:rotate-90"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3 border-b-2 border-espresso/80 pb-3">
            <Search size={22} className="shrink-0 text-taupe" strokeWidth={1.5} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              className="w-full bg-transparent font-display text-2xl text-espresso placeholder:text-taupe/70 focus:outline-none md:text-3xl"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {results.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(p.id)}
                className="group text-left"
              >
                <div className="aspect-square overflow-hidden bg-sand">
                  <img
                    src={PLACEHOLDER_IMG}
                    alt={p.name}
                    loading="lazy"
                    data-strk-img-id={`search-${p.id}`}
                    data-strk-img={`[search-name-${p.id}] gold jewelry product photography`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p
                  id={`search-name-${p.id}`}
                  className="mt-2.5 font-display text-sm font-medium uppercase tracking-[0.12em] text-espresso group-hover:text-gold"
                >
                  {p.name}
                </p>
                <p className="text-xs text-mocha">{formatPrice(p.price)}</p>
              </button>
            ))}
            {results.length === 0 && (
              <p className="col-span-full py-6 text-center text-sm text-taupe">
                Nothing found for “{query}” — try “huggies” or “necklace”.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              navigate("/shop");
            }}
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:text-gold-deep"
          >
            Browse the full collection
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
