import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { getProductImageUrl } from "@/lib/strkImages";
import { cn } from "@/lib/utils";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-espresso/60 backdrop-blur-sm transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "w-full border-b border-line bg-cream shadow-soft transition-transform duration-500 ease-luxe",
          open ? "translate-y-0" : "-translate-y-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
          <div className="flex items-center gap-3 border-b border-espresso/20 pb-3">
            <Search size={20} className="text-gold-deep" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, necklaces, huggies..."
              className="w-full bg-transparent font-body text-lg text-espresso placeholder:text-cocoa/40 focus:outline-none"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-espresso transition-colors hover:bg-sand"
            >
              <X size={20} />
            </button>
          </div>

          <div className="max-h-[55vh] overflow-y-auto pt-4">
            {results.length === 0 ? (
              <p className="py-8 text-center font-body text-sm text-cocoa/60">
                No pieces found for “{query}”.
              </p>
            ) : (
              <ul className="flex flex-col">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 px-2 py-3 transition-colors hover:bg-sand"
                    >
                      <span className="h-14 w-12 shrink-0 overflow-hidden bg-sand">
                        <img
                          src={getProductImageUrl(p.id)}
                          alt={p.name}
                          className="block h-full w-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="block font-display text-base uppercase tracking-widest2 text-espresso">
                          {p.name}
                        </span>
                        <span className="block font-body text-[11px] uppercase tracking-widest2 text-gold-deep">
                          {p.category}
                        </span>
                      </span>
                      <span className="font-body text-sm font-semibold text-cocoa">
                        {formatPrice(p.price)}
                      </span>
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
