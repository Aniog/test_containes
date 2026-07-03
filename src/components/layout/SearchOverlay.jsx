import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useRef } from "react";
import strkImgConfig from "../../strk-img-config.json";
import { PRODUCTS, formatPrice, CATEGORIES } from "../../data/products.js";
import { cn } from "../../lib/cn.js";

const SUGGESTIONS = ["Huggies", "Gold earrings", "Layering necklaces", "Gifts under $50"];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [open, results.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink-950/85 backdrop-blur-md transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "relative mx-auto flex h-full max-w-3xl flex-col px-6 transition-all duration-500",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        )}
        ref={containerRef}
      >
        <div className="flex items-center justify-between pt-8">
          <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
            Search
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-ink-200 hover:text-gold-300"
            aria-label="Close search"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-8 flex items-center gap-3 border-b border-ink-700 pb-4">
          <Search size={20} strokeWidth={1.5} className="text-gold-300" />
          <input
            autoFocus={open}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jewelry, collections, or occasions…"
            className="flex-1 bg-transparent font-serif text-[24px] font-light text-ink-100 placeholder-ink-500 focus:outline-none"
          />
        </div>
        {query.trim() === "" ? (
          <div className="mt-8">
            <p className="font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
              Popular searches
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="rounded-full border border-ink-700 px-4 py-2 font-sans text-[12px] text-ink-200 transition-colors hover:border-gold-500 hover:text-gold-300"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-10 font-sans text-[10px] uppercase tracking-widest2 text-ink-300">
              Browse categories
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/shop?category=${c.slug}`}
                  onClick={onClose}
                  className="rounded-sm border border-ink-800 px-4 py-3 font-sans text-[13px] text-ink-200 transition-colors hover:border-gold-500 hover:text-gold-300"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="mt-12 font-serif text-[22px] font-light text-ink-300">
            No matches for “{query}”.
          </p>
        ) : (
          <ul className="mt-8 space-y-1">
            {results.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 border-b border-ink-800 py-4 transition-colors hover:border-gold-500"
                >
                  <span className="relative h-16 w-14 flex-shrink-0 overflow-hidden bg-ink-900">
                    <img
                      data-strk-img-id={p.imgIds.primary}
                      data-strk-img={`[${p.id}-name] [search-overlay-tag]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span id="search-overlay-tag" className="hidden">
                      Velmora demi-fine
                    </span>
                  </span>
                  <div className="flex-1">
                    <p className="font-serif text-[16px] font-medium uppercase tracking-wider2 text-ink-100">
                      {p.name}
                    </p>
                    <p className="font-sans text-[12px] text-ink-400">
                      {p.category}
                    </p>
                  </div>
                  <span className="font-sans text-[13px] text-gold-300">
                    {formatPrice(p.price)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
