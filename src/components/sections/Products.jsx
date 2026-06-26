import { ArrowRight } from "lucide-react"
import { products } from "@/data/content"
import { SectionHeading } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export default function Products() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="A folding machine for every workshop"
          description="From compact metal folders to heavy-duty double folding machines, our range covers the full spectrum of sheet metal fabrication needs."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-ink"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {product.tagline}
                </p>
                <p
                  id={product.descId}
                  className="mt-3 text-sm leading-relaxed text-muted"
                >
                  {product.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-100 pt-5">
                  {product.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted/80">
                        {spec.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="dark" size="lg" onClick={() => scrollTo("#contact")}>
            Get a custom recommendation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
