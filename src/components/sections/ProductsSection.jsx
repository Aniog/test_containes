import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import SectionHeader from "@/components/sections/SectionHeader"
import { products } from "@/data/content"

export default function ProductsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Categories we know how to source well"
          description="We work across a range of product categories, with established supplier networks in each."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <Card key={p.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 id={p.titleId} className="mt-3 text-base font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p id={p.descId} className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] hover:underline"
          >
            Explore all product categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
