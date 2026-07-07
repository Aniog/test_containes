import React, { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Filter, X, ChevronDown } from "lucide-react"
import ProductCard from "@/components/ui/ProductCard"
import { products, categories, priceRanges, sortOptions } from "@/data/products"
import { cn } from "@/lib/utils"

const categoryLabels = {
  all: "All Pieces",
  earrings: "Earrings",
  necklaces: "Necklaces",
  huggies: "Huggies",
  sets: "Gifts & Sets",
}

const useFilteredProducts = (cat, price, sort) => {
  return useMemo(() => {
    const range = priceRanges.find((p) => p.id === price) || priceRanges[0]
    let list = products.filter((p) => {
      const catMatch = cat === "all" || p.category === cat
      const priceMatch = p.price >= range.min && p.price <= range.max
      return catMatch && priceMatch
    })
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price)
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [cat, price, sort])
}

const FilterGroup = ({ title, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-sans uppercase tracking-[0.18em] text-[12px] text-ink">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={cn(
            "text-ink/60 transition-transform duration-300",
            open ? "rotate-180" : ""
          )}
        />
      </button>
      {open ? <div className="mt-4 space-y-2.5">{children}</div> : null}
    </div>
  )
}

const FilterRadio = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <span
      className={cn(
        "h-4 w-4 rounded-full border flex items-center justify-center transition-colors duration-300",
        checked ? "border-ink" : "border-hairline group-hover:border-ink/40"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full transition-all duration-300",
          checked ? "bg-ink scale-100" : "scale-0"
        )}
      />
    </span>
    <span className="text-[14px] font-sans text-ink/85 group-hover:text-ink">
      {label}
    </span>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
  </label>
)

const Shop = () => {
  const [params, setParams] = useSearchParams()
  const cat = params.get("cat") || "all"
  const [price, setPrice] = useState("all")
  const [sort, setSort] = useState("featured")
  const [filterOpen, setFilterOpen] = useState(false)

  const list = useFilteredProducts(cat, price, sort)

  const setCategory = (c) => {
    const next = new URLSearchParams(params)
    if (c === "all") next.delete("cat")
    else next.set("cat", c)
    setParams(next, { replace: true })
  }

  // lock scroll when mobile filter open
  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [filterOpen])

  return (
    <main className="bg-ivory">
      {/* Page hero */}
      <section className="bg-ivory-warm border-b border-hairline">
        <div className="container-wrap pt-32 lg:pt-40 pb-14 lg:pb-20">
          <span className="eyebrow">The Collection</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight text-ink max-w-3xl">
            {categoryLabels[cat] || "All Pieces"}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-muted leading-relaxed">
            {list.length} {list.length === 1 ? "piece" : "pieces"} — each one
            hand-finished and made to be lived in.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn("pill", cat === c && "pill-active")}
              >
                {c === "all" ? "All" : categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="container-wrap py-6 flex items-center justify-between border-b border-hairline">
        <button
          type="button"
          onClick={() => setFilterOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.18em] text-ink"
        >
          <Filter size={14} strokeWidth={1.5} />
          Filter
        </button>
        <span className="hidden lg:block text-[12px] font-sans uppercase tracking-[0.18em] text-muted">
          Showing {list.length} of {products.length}
        </span>
        <label className="flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.18em] text-ink">
          Sort
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border-0 outline-none pr-5 text-ink uppercase tracking-[0.18em] cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              strokeWidth={1.5}
              className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-ink/60"
            />
          </span>
        </label>
      </section>

      {/* Body */}
      <section className="container-wrap py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-serif text-xl text-ink mb-2">Filter</h2>
              <p className="text-[12px] text-muted mb-4">
                Refine by category, price or material.
              </p>
              <FilterGroup title="Category">
                {categories.map((c) => (
                  <FilterRadio
                    key={c}
                    name="cat"
                    value={c}
                    label={categoryLabels[c]}
                    checked={cat === c}
                    onChange={() => setCategory(c)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                {priceRanges.map((p) => (
                  <FilterRadio
                    key={p.id}
                    name="price"
                    value={p.id}
                    label={p.label}
                    checked={price === p.id}
                    onChange={() => setPrice(p.id)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Material" defaultOpen={false}>
                <FilterRadio name="mat" value="all" label="All materials" checked readOnly />
                <FilterRadio name="mat" value="gold" label="18K Gold Plated" checked readOnly />
                <FilterRadio name="mat" value="crystal" label="Crystal" checked readOnly />
                <FilterRadio name="mat" value="filigree" label="Filigree" checked readOnly />
              </FilterGroup>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            {list.length === 0 ? (
              <div className="text-center py-24">
                <h3 className="font-serif text-2xl text-ink">No pieces found</h3>
                <p className="mt-2 text-muted text-[14px]">
                  Try a different filter combination.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-6">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[55] lg:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setFilterOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-ivory shadow-lift transition-transform duration-500 flex flex-col",
            filterOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <header className="px-5 py-4 flex items-center justify-between border-b border-hairline">
            <h2 className="font-serif text-xl text-ink">Filter</h2>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
              className="h-9 w-9 flex items-center justify-center text-ink hover:text-gold-deep"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </header>
          <div className="flex-1 overflow-y-auto px-5">
            <FilterGroup title="Category">
              {categories.map((c) => (
                <FilterRadio
                  key={c}
                  name="cat"
                  value={c}
                  label={categoryLabels[c]}
                  checked={cat === c}
                  onChange={() => setCategory(c)}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Price">
              {priceRanges.map((p) => (
                <FilterRadio
                  key={p.id}
                  name="price"
                  value={p.id}
                  label={p.label}
                  checked={price === p.id}
                  onChange={() => setPrice(p.id)}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Material" defaultOpen={false}>
              <FilterRadio name="mat" value="all" label="All materials" checked readOnly />
              <FilterRadio name="mat" value="gold" label="18K Gold Plated" checked readOnly />
            </FilterGroup>
          </div>
          <footer className="px-5 py-4 border-t border-hairline">
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="btn-primary w-full"
            >
              Show {list.length} {list.length === 1 ? "piece" : "pieces"}
            </button>
          </footer>
        </aside>
      </div>
    </main>
  )
}

export default Shop
