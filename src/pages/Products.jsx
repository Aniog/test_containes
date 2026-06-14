import * as React from "react"
import { useMemo, useState } from "react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProductCard } from "@/components/products/ProductCard"
import { products, categoryList } from "@/data/products"
import { cn } from "@/lib/utils"

export default function Products() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    if (active === "All") return products
    return products.filter((p) => p.category === active)
  }, [active])

  return (
    <main className="bg-ink">
      <section className="bg-slate-950 border-b border-line">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Machines"
            title="Five ARTITECT models, one family of folding."
            subtitle="From benchtop double folders to long-bed production folders — every machine shares our CNC control platform, frame engineering and 10-year warranty."
          />
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categoryList.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "px-4 h-9 rounded-full border text-sm transition-colors",
                active === c
                  ? "border-copper-500 text-copper-400 bg-copper-500/5"
                  : "border-line text-text-muted hover:text-text hover:border-text-dim"
              )}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-xs text-text-dim tracking-eyebrow uppercase">
            {filtered.length} machine{filtered.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
