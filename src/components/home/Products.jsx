import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const products = [
  { name: "Electronics & Components", imgId: "prod-electronics", descId: "Electronics sourcing from China including PCBs, cables, chargers, and consumer gadgets." },
  { name: "Machinery & Industrial Parts", imgId: "prod-machinery", descId: "Industrial equipment, metal parts, tools, and hardware components." },
  { name: "Textiles & Apparel", imgId: "prod-textiles", descId: "Garments, bags, fabrics, and fashion accessories from vetted factories." },
  { name: "Packaging & Promotional Items", imgId: "prod-packaging", descId: "Custom packaging, displays, gift items, and branded merchandise." },
  { name: "Home & Furniture", imgId: "prod-furniture", descId: "Furniture, lighting, kitchenware, and home goods." },
  { name: "Beauty & Personal Care", imgId: "prod-beauty", descId: "Cosmetics, skincare packaging, and personal care products." },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p id="products-subtitle" className="text-sm font-semibold uppercase tracking-wide text-accent">
              Products We Source
            </p>
            <h2 id="products-title" className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Industries We Cover
            </h2>
            <p className="mt-4 text-muted-foreground">
              We source a wide range of products across consumer, industrial, and promotional categories.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit gap-2">
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.imgId}-desc] [${product.imgId}-title] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span id={`${product.imgId}-title`} className="sr-only">{product.name}</span>
                <span id={`${product.imgId}-desc`} className="sr-only">{product.descId}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.descId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
