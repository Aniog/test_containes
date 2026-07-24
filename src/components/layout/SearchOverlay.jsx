import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCTS } from "@/data/products";
import StockImage from "@/components/ui/StockImage";

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return PRODUCTS.filter((p) =>
      [p.name, p.tagline, p.description, p.category]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    ).slice(0, 6);
  }, [q]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-all duration-500",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
      role="dialog"
      aria-label="Search"
    >
      <div
        className={cn(
          "absolute inset-0 bg-onyx-900/70 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "relative bg-cream-100 border-b border-onyx-800/10 transition-transform duration-500 ease-out",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container-wide py-6 sm:py-8">
          <div className="flex items-center gap-3 border-b border-onyx-800/20 pb-4">
            <Search size={20} strokeWidth={1.4} className="text-onyx-800" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Search jewelry, collections…"
              className="flex-1 bg-transparent outline-none font-display text-[22px] sm:text-[28px] text-onyx-800 placeholder:text-mocha-400"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="p-2 text-onyx-800"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>

          {q.trim() && (
            <div className="mt-6 max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-[14px] text-mocha-500 py-6">
                  No matches for "{q}". Try "earrings", "huggies", or "set".
                </p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/product/${p.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 group p-2 -m-2 hover:bg-cream-200 transition-colors"
                      >
                        <div className="w-16 shrink-0">
                          <StockImage
                            query={p.img1}
                            ratio="1x1"
                            width={200}
                            imgId={`search-${p.id}`}
                            alt={p.name}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="product-name truncate">{p.name}</h3>
                          <p className="font-display italic text-[14px] text-mocha-500 mt-0.5 truncate">
                            {p.tagline}
                          </p>
                        </div>
                        <span className="text-[14px] tabular-nums text-onyx-800">
                          {formatPrice(p.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {!q.trim() && (
            <div className="mt-6 flex flex-wrap gap-2">
              {["Earrings", "Huggies", "Necklaces", "Gifts"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQ(s)}
                  className="chip hover:border-onyx-800/40"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
