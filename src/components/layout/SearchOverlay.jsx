import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useUI } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/cn";
import StockImage from "@/components/ui/StockImage";

const QUICK_LINKS = [
  { label: "Earrings",  to: "/shop?category=earrings"  },
  { label: "Necklaces", to: "/shop?category=necklaces" },
  { label: "Huggies",   to: "/shop?category=huggies"   },
  { label: "Gifts",     to: "/shop?category=gifts"     },
];

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useUI();
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) {
      setQ("");
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return PRODUCTS.filter((p) =>
      [p.name, p.tagline, p.category, ...(p.categories || [])]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    ).slice(0, 6);
  }, [q]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    setSearchOpen(false);
    navigate(`/shop?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div
      aria-hidden={!searchOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-500",
        searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute inset-0 bg-cream/95 backdrop-blur-md" onClick={() => setSearchOpen(false)} />

      <div className={cn(
        "relative h-full flex flex-col transition-transform duration-500 ease-editorial",
        searchOpen ? "translate-y-0" : "-translate-y-4"
      )}>
        <header className="flex items-center justify-end px-5 md:px-10 h-16 md:h-20">
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="p-2 text-ink hover:text-gold-dark"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 md:px-10 pb-16">
          <div className="mx-auto max-w-3xl">
            <p className="vm-eyebrow text-ink-muted">Search</p>
            <form onSubmit={onSubmit} className="mt-4 flex items-center gap-4 border-b border-ink/30 pb-3">
              <Search className="w-5 h-5 text-ink-muted" strokeWidth={1.4} />
              <input
                ref={inputRef}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Earrings, necklaces, the Flora…"
                className="flex-1 bg-transparent outline-none vm-serif text-3xl md:text-5xl text-ink placeholder:text-ink-muted/60"
              />
            </form>

            {!q && (
              <div className="mt-10">
                <p className="vm-eyebrow text-ink-muted mb-4">Popular</p>
                <ul className="flex flex-wrap gap-2">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setSearchOpen(false)}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-ink/20 text-ink hover:border-ink hover:text-ink transition-colors text-xs tracking-[0.18em] uppercase"
                      >
                        {l.label} <ArrowUpRight className="w-3 h-3" strokeWidth={1.4} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {q && results.length === 0 && (
              <p className="mt-10 text-ink-muted text-sm">
                No pieces matched "{q}". Try another word.
              </p>
            )}

            {results.length > 0 && (
              <ul className="mt-10 divide-y divide-ink/10">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-5 py-5 group"
                    >
                      <div className="w-20 h-24 bg-cream-200 flex-shrink-0 vm-img-zoom">
                        <StockImage
                          alt={p.name}
                          imgId={`search-${p.id}`}
                          query={p.images?.[0]?.query || p.name}
                          ratio="4x5"
                          width="240"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="vm-product-name text-ink group-hover:text-gold-dark transition-colors">{p.name}</p>
                        <p className="text-sm text-ink-muted mt-1">{p.tagline}</p>
                      </div>
                      <p className="text-sm text-ink">{formatPrice(p.price)}</p>
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
