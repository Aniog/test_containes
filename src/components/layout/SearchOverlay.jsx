import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, formatPrice } from "@/data/products";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [open, query]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.short.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={containerRef}
        className={`absolute inset-x-0 top-0 bg-ivory shadow-2xl transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
              Search Velmora
            </p>
            <button
              onClick={onClose}
              aria-label="Close search"
              className="p-2 text-ink/60 transition-colors hover:text-ink"
            >
              <X size={22} />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3 border-b-2 border-ink pb-3">
            <Search size={22} className="text-gold-deep" />
            <input
              autoFocus={open}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'huggies' or 'gift set'…"
              className="w-full bg-transparent font-serif text-2xl text-ink placeholder:text-ink/30 outline-none md:text-3xl"
              aria-label="Search products"
            />
          </div>

          <div className="mt-6 max-h-[50vh] overflow-y-auto">
            {results.length === 0 ? (
              <p className="py-10 text-center text-sm text-bronze">
                Nothing found for "{query}" — try "earrings" or "necklace".
              </p>
            ) : (
              <ul className="divide-y divide-line">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 py-4"
                    >
                      <span className="block h-16 w-14 shrink-0 overflow-hidden border border-line bg-sand">
                        <img
                          data-strk-img-id={`search-${p.id}`}
                          data-strk-img={`[shop-${p.id}-name] [shop-sub]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src={PLACEHOLDER_SRC}
                          alt={p.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="block font-serif text-sm font-semibold uppercase tracking-[0.15em] text-ink group-hover:text-gold-deep">
                          {p.name}
                        </span>
                        <span className="mt-1 block text-[11px] uppercase tracking-wider text-taupe">
                          {p.category}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-ink">
                        {formatPrice(p.price)}
                      </span>
                      <ArrowRight
                        size={15}
                        className="text-taupe transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-deep"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
