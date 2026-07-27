import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"

const products = [
  {
    title: "Machinery & Industrial Parts",
    description: "Custom metal parts, molds, casting, CNC machining, and industrial equipment.",
    imgId: "products-machinery-img",
    titleId: "products-machinery-title",
  },
  {
    title: "Electronics & Components",
    description: "Consumer electronics, PCBA, cables, batteries, chargers, and accessories.",
    imgId: "products-electronics-img",
    titleId: "products-electronics-title",
  },
  {
    title: "Packaging & Print",
    description: "Custom boxes, bags, labels, retail packaging, and promotional print items.",
    imgId: "products-packaging-img",
    titleId: "products-packaging-title",
  },
  {
    title: "Textiles & Apparel",
    description: "Garments, bags, fabrics, footwear, and fashion accessories.",
    imgId: "products-textiles-img",
    titleId: "products-textiles-title",
  },
  {
    title: "Home & Hardware",
    description: "Furniture, kitchenware, tools, lighting, and building materials.",
    imgId: "products-home-img",
    titleId: "products-home-title",
  },
  {
    title: "Cosmetics & Personal Care",
    description: "Skincare packaging, brushes, beauty tools, and raw material sourcing.",
    imgId: "products-cosmetics-img",
    titleId: "products-cosmetics-title",
  },
]

export default function ProductsSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="section bg-slate-50">
      <div className="container-main">
        <SectionHeader
          badge="Products We Source"
          title="Wide range of product categories"
          description="We work across industries. If it is manufactured in China, we can help you source it reliably."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/products">Explore All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
