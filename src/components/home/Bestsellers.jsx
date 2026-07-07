import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function Bestsellers() {
  // Show all 5 seed products as bestsellers
  const items = products

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            align="left"
            eyebrow="Bestsellers"
            title="Loved by the quiet collectors"
            subtitle="Our most worn, most gifted, most photographed pieces — the ones our community reaches for again and again."
          />
          <Link
            to="/shop"
            className="btn-outline self-start md:self-auto"
          >
            <span>View All</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
