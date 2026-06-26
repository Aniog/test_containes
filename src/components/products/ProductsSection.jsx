import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight, Ruler, Gauge, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "./productData"
import strkImgConfig from "@/strk-img-config.json"

const iconMap = {
  "Double Folding Machine": Gauge,
  "Double Folder": Settings,
  "Sheet Metal Folder": Ruler,
  "Metal Folder": Settings,
  "Metal Folder Machine": Gauge,
  "Sheet Metal Folding Machine": Ruler,
}

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="products"
      ref={containerRef}
      className="bg-slate-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Our Product Line
          </span>
          <h2
            id="products-title"
            className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-50"
          >
            Machines Engineered for Every Folding Need
          </h2>
          <p
            id="products-subtitle"
            className="mt-4 text-slate-400 text-lg"
          >
            From compact bench folders to automated CNC folding systems, each
            ARTITECT machine is built for accuracy, durability, and easy
            operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.name] || Settings
            const titleId = `product-title-${product.id}`
            const taglineId = `product-tagline-${product.id}`

            return (
              <article
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-colors"
              >
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    data-strk-img-id={`product-img-${product.id}-7d3e9a`}
                    data-strk-img={`[${taglineId}] [${titleId}] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    id={titleId}
                    className="text-xl font-bold text-slate-50"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={taglineId}
                    className="mt-2 text-sm text-slate-400 leading-relaxed"
                  >
                    {product.tagline}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-md bg-slate-950 p-3 border border-slate-800">
                      <p className="text-slate-500 text-xs uppercase tracking-wider">
                        Capacity
                      </p>
                      <p className="text-slate-200 font-medium mt-1">
                        {product.capacity}
                      </p>
                    </div>
                    <div className="rounded-md bg-slate-950 p-3 border border-slate-800">
                      <p className="text-slate-500 text-xs uppercase tracking-wider">
                        Length
                      </p>
                      <p className="text-slate-200 font-medium mt-1">
                        {product.length}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="mt-6 w-full"
                    asChild
                  >
                    <a href="#contact">
                      Inquire <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
