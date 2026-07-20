import { Search, X } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/storefront.js";
import { useStorefront } from "../../hooks/useStorefront.jsx";

const SearchDrawer = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useStorefront();

  const results = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return products.slice(0, 4);
    }

    return products.filter((product) => {
      const haystack = `${product.name} ${product.category} ${product.type} ${product.material}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery]);

  return (
    <div
      className={`fixed inset-0 z-[70] transition ${
        isSearchOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isSearchOpen}
    >
      <div
        className={`absolute inset-0 bg-stone-950/40 transition-opacity duration-300 ${
          isSearchOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeSearch}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-xl bg-stone-50 shadow-2xl transition-transform duration-300 ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-stone-200 px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Search</p>
              <h2 className="editorial-heading text-3xl">Find your next layer</h2>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:text-amber-700"
              aria-label="Close search"
              onClick={closeSearch}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <label className="mt-5 flex items-center gap-3 rounded-full border border-stone-300 bg-stone-50 px-4 py-3">
            <Search className="h-4 w-4 text-stone-500" />
            <input
              className="w-full bg-transparent text-sm text-stone-950 outline-none placeholder:text-stone-400"
              placeholder="Search earrings, necklaces, huggies..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="space-y-6 overflow-y-auto px-6 py-6">
          <div>
            <p className="eyebrow">Popular</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Gold Tone", "Gift Sets", "Huggies", "Crystal Necklace"].map((term) => (
                <button
                  key={term}
                  type="button"
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-amber-600 hover:text-amber-700"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {results.length === 0 ? (
              <p className="text-sm text-stone-600">No pieces matched your search.</p>
            ) : (
              results.map((product) => (
                <Link
                  key={product.slug}
                  className="block rounded-3xl border border-stone-200 bg-stone-100 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                  to={`/product/${product.slug}`}
                  onClick={closeSearch}
                >
                  <p className="product-name text-sm">{product.name}</p>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm text-stone-600">
                    <span>{product.category}</span>
                    <span className="font-medium text-stone-950">${product.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-500">{product.shortDescription}</p>
                </Link>
              ))
            )}
          </div>

          <Link className="button-secondary w-full" to="/shop" onClick={closeSearch}>
            View the full collection
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SearchDrawer;
