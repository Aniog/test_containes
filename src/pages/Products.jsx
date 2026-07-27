import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const categories = [
  {
    name: "Electronics & Components",
    desc: "PCBs, cables, adapters, chargers, consumer electronics, wearables, and smart home devices.",
    examples: ["Bluetooth speakers", "Power banks", "LED drivers", "Custom cables"],
    imgId: "products-electronics",
  },
  {
    name: "Machinery & Industrial Parts",
    desc: "Metal fabrication, CNC parts, industrial tools, hardware, valves, and mechanical components.",
    examples: ["CNC machined parts", "Sheet metal brackets", "Industrial valves", "Fasteners"],
    imgId: "products-machinery",
  },
  {
    name: "Textiles & Apparel",
    desc: "Ready-made garments, bags, fabrics, footwear, and fashion accessories from vetted factories.",
    examples: ["T-shirts", "Tote bags", "Activewear", "Caps and beanies"],
    imgId: "products-textiles",
  },
  {
    name: "Packaging & Promotional Items",
    desc: "Retail packaging, gift boxes, displays, branded merchandise, and promotional products.",
    examples: ["Folding cartons", "Rigid boxes", "Tote bags", "Drinkware"],
    imgId: "products-packaging",
  },
  {
    name: "Home & Furniture",
    desc: "Furniture, lighting, kitchenware, home decor, and household goods.",
    examples: ["Table lamps", "Storage organizers", "Kitchen tools", "Decorative mirrors"],
    imgId: "products-furniture",
  },
  {
    name: "Beauty & Personal Care",
    desc: "Cosmetics packaging, skincare products, personal care tools, and grooming accessories.",
    examples: ["Skincare bottles", "Cosmetic brushes", "Hair accessories", "Travel kits"],
    imgId: "products-beauty",
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p id="products-page-subtitle" className="text-sm font-semibold uppercase tracking-wide text-accent">Products We Source</p>
            <h1 id="products-page-title" className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Industries & Categories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We source across a broad range of product categories. If you do not see yours, contact us — we likely cover it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.name} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[${category.imgId}-desc] [${category.imgId}-title] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span id={`${category.imgId}-title`} className="sr-only">{category.name}</span>
                  <span id={`${category.imgId}-desc`} className="sr-only">{category.desc}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-primary">{category.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{category.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span key={example} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-site flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Not sure if we cover your product?</h2>
            <p className="mt-2 text-primary-foreground/80">Send us your specs and we will let you know within one business day.</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
