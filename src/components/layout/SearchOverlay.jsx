import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, X } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { StrkImg } from "@/components/ui/strk-img";
import { useStrkImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useStrkImages([open, query]);

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        `${p.name} ${p.tagline} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  useEffect(() => {
    if (open) {
      setQuery("");
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      const onKey = (e) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Search"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-cream transition-all duration-500 ease-luxe overflow-y-auto",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="mx-auto max-w-3xl px-6 pt-24 md:pt-32 pb-16">
        <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="absolute right-6 top-6 p-2 text-espresso transition-colors hover:text-bronze"
        >
          <X className="h-6 w-6" strokeWidth={1.25} />
        </button>

        <p className="text-[11px] uppercase tracking-luxe text-bronze">Search Velmora</p>
        <div className="mt-4 flex items-center gap-4 border-b border-espresso/30 pb-4">
          <Search className="h-6 w-6 shrink-0 text-cocoa" strokeWidth={1.25} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Huggies, necklaces, gifts…"
            aria-label="Search products"
            className="w-full bg-transparent font-serif text-3xl md:text-4xl font-light text-espresso placeholder:text-cocoa/50 focus:outline-none"
          />
        </div>

        {query.trim() === "" ? (
          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-luxe text-cocoa">Popular right now</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Huggies", "Ear cuff", "Gift set", "Necklace", "Filigree"].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="border border-line px-4 py-2 text-xs tracking-widest text-espresso transition-colors hover:border-bronze hover:text-bronze"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="mt-10 font-serif text-2xl font-light text-cocoa">
            Nothing found for “{query}” — try “huggies” or “gift”.
          </p>
        ) : (
          <ul className="mt-10 divide-y divide-line">
            {results.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="group flex items-center gap-5 py-4"
                >
                  <span className="block h-20 w-16 shrink-0 overflow-hidden bg-shell">
                    <StrkImg
                      imgId={`search-${p.id}`}
                      query={`[card-${p.id}-name] [card-${p.id}-tagline]`}
                      ratio="3x4"
                      width="200"
                      alt={p.name}
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-base font-medium uppercase tracking-name text-espresso group-hover:text-bronze transition-colors">
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-cocoa">{p.tagline}</span>
                  </span>
                  <span className="text-sm font-medium text-espresso">{formatPrice(p.price)}</span>
                  <ArrowRight className="h-4 w-4 text-cocoa transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bronze" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
